define("SysSettingPage", ["SysSettingPageResources"], function( resources) {
	return {
		entitySchemaName: "VwSysSetting",
		attributes: {
			"ExpGlobalCSSJSTextValueVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: false
			},
		},
		methods: {
			onEntityInitialized: function() {
				this.callParent(arguments);
				if(this.get("Code") === "ExpGlobalCSSValue" || this.get("Code") === "ExpGlobalJSValue"){
					this.set("TextValueVisible", false);
					this.set("ExpGlobalCSSJSTextValueVisible", true);
				}
			}
		},
		diff:[
			{
				"operation": "insert",
				"name": "ExpGlobalContainer",
				"parentName": "Attributes",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"layout": {
						"column": 0,
						"row": 1,
						"colSpan": 24,
						"rowSpan": 10
					},
					"wrapClass": ["sys-settings-rights-container"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "ExpGlobalContainer",
				"propertyName": "items",
				"name": "ExpGlobalCSSJSTextValue",
				"values": {
					"bindTo": "TextValue",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.ExpGlobalCSSJSValueCaption"
						}
					},
					"contentType": Terrasoft.ContentType.LONG_TEXT,
					"visible": {
						"bindTo": "ExpGlobalCSSJSTextValueVisible"
					},
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24,
						"rowSpan": 10
					},
				}
			},
		]
	};
});