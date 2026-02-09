namespace Terrasoft.Core.Process
{

	using global::Common.Logging;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrProcessPruebaLoggingMethodsWrapper

	/// <exclude/>
	public class UsrProcessPruebaLoggingMethodsWrapper : ProcessModel
	{

		public UsrProcessPruebaLoggingMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var logger = LogManager.GetLogger("CfxLogger");
			
			// log an info message
			logger.Info("This is my test info message");
			 
			// log an error
			logger.Error("Something bad happened!");
			 
			// log a warning
			logger.Warn("Something sort of bad happened.");
			return true;
		}

		#endregion

	}

	#endregion

}

