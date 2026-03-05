define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "ContactsExpansionPanel",
				"values": {
					"expanded": false
				}
			},
			{
				"operation": "insert",
				"name": "NumberInput_anunhps",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCNumeroCuenta_a91unl1",
					"control": "$PDS_UsrCNumeroCuenta_a91unl1",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_0kfbsoi",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 12,\"rowSpan\": 1}"
							},
							{
								"columnName": "Body",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 2}"
							}
						],
						"schemaName": "Activity",
						"schemaType": "Email",
						"isDefault": true
					},
					"filters": "$TimelineTile_Email_0kfbsoi_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_v9zedk5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": null,
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 6,\"rowSpan\": 1}"
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 6,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Activity",
						"schemaType": "Activity",
						"isDefault": true
					},
					"filters": "$TimelineTile_Activity_v9zedk5_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call_dva95yw",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Contact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							},
							{
								"columnName": "StartDate",
								"columnLayout": "{\"column\": 5,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							},
							{
								"columnName": "EndDate",
								"columnLayout": "{\"column\": 9,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							},
							{
								"columnName": "Duration",
								"columnLayout": "{\"column\": 13,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Call",
						"schemaType": null,
						"isDefault": true
					},
					"filters": "$TimelineTile_Call_dva95yw_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_qm4pj8b",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "RegisteredOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Priority",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": "{\"column\": 10,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Symptoms",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Case",
						"schemaType": null,
						"isDefault": true
					},
					"filters": "$TimelineTile_Case_qm4pj8b_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_aacts4s",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 12,\"rowSpan\": 1}"
							},
							{
								"columnName": "Body",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 2}"
							}
						],
						"schemaName": "Activity",
						"schemaType": "Email",
						"isDefault": true
					},
					"filters": "$TimelineTile_Email_aacts4s_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_9zxyp6r",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": null,
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 6,\"rowSpan\": 1}"
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 6,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Activity",
						"schemaType": "Activity",
						"isDefault": true
					},
					"filters": "$TimelineTile_Activity_9zxyp6r_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_AIInsight_4hswhiu",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": null,
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Name",
								"columnLayout": null
							},
							{
								"columnName": "Description",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 1}"
							}
						],
						"schemaName": "AIInsight",
						"schemaType": null,
						"isDefault": true
					},
					"filters": "$TimelineTile_AIInsight_4hswhiu_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call_3cidn0r",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Contact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							},
							{
								"columnName": "StartDate",
								"columnLayout": "{\"column\": 5,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							},
							{
								"columnName": "EndDate",
								"columnLayout": "{\"column\": 9,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							},
							{
								"columnName": "Duration",
								"columnLayout": "{\"column\": 13,\"row\": 1,\"colSpan\": 4,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Call",
						"schemaType": null,
						"isDefault": true
					},
					"filters": "$TimelineTile_Call_3cidn0r_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_g4nz943",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "RegisteredOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Priority",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": "{\"column\": 10,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Symptoms",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Case",
						"schemaType": null,
						"isDefault": true
					},
					"filters": "$TimelineTile_Case_g4nz943_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_z40qqo3",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"classes": [],
					"fitContent": true,
					"direction": "row"
				},
				"parentName": "Timeline",
				"propertyName": "customFilters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_kuvbjj8",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_kuvbjj8_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_dcftgke",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_kuvbjj8",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrCNumeroCuenta_a91unl1": {
						"modelConfig": {
							"path": "PDS.UsrCNumeroCuenta"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"TimelineTile_Email_0kfbsoiDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_v9zedk5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Call_dva95ywDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_Case_qm4pj8bDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case"
						}
					},
					"TimelineTile_Email_aacts4sDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_9zxyp6rDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_AIInsight_4hswhiuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AIInsight"
						}
					},
					"TimelineTile_Call_3cidn0rDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_Case_g4nz943DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});