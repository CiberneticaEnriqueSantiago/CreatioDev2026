define("KnowledgeBase_EditPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ArticleStatusProgressBar",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "KnowledgeBase",
					"visible": true
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"ParentArticleId": {
					"modelConfig": {
						"path": "KnowledgeBaseDS.ParentArticle"
					}
				}
			}
		}]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[{
			request: "crt.HandleViewModelInitRequest",
			handler: async (request, next) => {
				try {
					const context = request?.$context;
					if (!context) {
						return next?.handle(request);
					}
					const EXCLUDED_COLUMNS = [
						"CreatedOn",
						"CreatedBy",
						"ModifiedOn",
						"ModifiedBy",
						"Keywords",
						"ViewsCount",
						"Code",
						"Version"
					];
					const defaults = context.modelInitConfigs?.[0]?.defaultValues || [];
					const resolveParentArticleId = async () => {
						const id = await context.ParentArticleId;
						if (id) {
							return id;
						}
						for (const dv of defaults) {
							if (dv?.attributeName === "ParentArticle") {
								return dv.value;
							}
						}
						return null;
					};

					const parentArticleId = await resolveParentArticleId();
					if (!parentArticleId) {
						return next?.handle(request);
					}
					const dataSchema = context.dataSchemas?.["KnowledgeBaseDS"];
					const defaultNames = new Set(
						(defaults || [])
							.map(d => d?.attributeName)
							.filter(Boolean)
					);
					for (const col of EXCLUDED_COLUMNS) {
						defaultNames.add(col);
					}
					const attributesToLoad = (dataSchema?.attributes || [])
						.map(a => a?.path)
						.filter(p => p && !defaultNames.has(p));

					if (!attributesToLoad.length) {
						return next?.handle(request);
					}

					const kbModel = await sdk?.Model?.create?.("KnowledgeBase");
					if (!kbModel) {
						return next?.handle(request);
					}

					const filters = new sdk.FilterGroup();
					filters.addSchemaColumnFilterWithParameter(
						sdk.ComparisonType.Equal,
						"Id",
						parentArticleId
					);

					const loaded = await kbModel.load({
						attributes: attributesToLoad,
						parameters: [{
							type: sdk.ModelParameterType.Filter,
							value: filters
						}]
					});

					const kb = Array.isArray(loaded) ? loaded[0] : null;
					if (kb && typeof kb === "object") {
						for (const [key, value] of Object.entries(kb)) {
							const normalized = (value && typeof value === "object" && ("value" in value)) ? value.value : value;
							if (!defaults.some(dv => dv?.attributeName === key)) {
								defaults.push({ attributeName: key, value: normalized });
							}
						}
					}
				} catch (_e) {
					// Fail-safe
				} finally {
					return next?.handle(request);
				}
			}
		}]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});