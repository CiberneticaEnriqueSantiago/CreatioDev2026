namespace Terrasoft.Configuration
{
	using System;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Web.Common;

	[DataContract]
	public class CreateRoleRequest
	{
		[DataMember]
		public string Name { get; set; }

		[DataMember]
		public string Description { get; set; }
	}

	[ServiceContract]
	[AspNetCompatibilityRequirements(
		RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class UsrRoleManagementService : BaseService
	{

		[OperationContract]
		[WebInvoke(Method = "POST",
			RequestFormat = WebMessageFormat.Json,
			ResponseFormat = WebMessageFormat.Json,
			BodyStyle = WebMessageBodyStyle.Bare,
			UriTemplate = "CreateRole")]
		public object CreateRole(CreateRoleRequest request)
		{
			var schema = UserConnection.EntitySchemaManager
				.GetInstanceByName("VwSysAdminUnit");

			var role = schema.CreateEntity(UserConnection);

			role.SetDefColumnValues();
			role.SetColumnValue("Name", request.Name);
			role.SetColumnValue("Description", request.Description);
			role.SetColumnValue("SysAdminUnitTypeValue", 6); // Functional Role

			role.Save();

			return new
			{
				success = true,
				roleId = role.PrimaryColumnValue
			};
		}
	}
}