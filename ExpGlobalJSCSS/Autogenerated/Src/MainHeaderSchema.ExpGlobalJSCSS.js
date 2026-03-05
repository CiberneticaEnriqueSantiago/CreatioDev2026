define("MainHeaderSchema", ["ServiceHelper"], function(ServiceHelper) {
	return {
		methods:{
			init: function(callback, scope) {
				this.callParent(arguments);
				Terrasoft.SysSettings.querySysSettingsItem("ExpGlobalCSSValue", function(cssValue) {
					let style = document.createElement('style');
					style.innerHTML = cssValue;
					document.head.appendChild(style);
				}, this);
				
				Terrasoft.SysSettings.querySysSettingsItem("ExpGlobalJSValue", function(jsValue) {
					let script = document.createElement('script');
					script.innerHTML = jsValue;
					document.body.appendChild(script);
				}, this);
			}
		}
	};
});