namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    using global::Common.Logging;

    [EntityEventListener(SchemaName = "UsrMateriales")]
    public class UsrMaterialesEventsListener : BaseEntityEventListener
    {
        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);
            var entity = (Entity)sender;
            var userConnection = entity.UserConnection;
            var logger = LogManager.GetLogger("EventListenerMateriales");

            logger.Info("--- Inicio Evento OnUpdating UsrMateriales ---");

            // 1. Verificar cambios usando el nombre detectado en el log
            var changedColumns = entity.GetChangedColumnValues();
            
            // Buscamos "UsrUsuarioAprobadorId" que es como Creatio lo reporta en memoria
            bool hasChanged = changedColumns.Any(c => 
                c.Name.Equals("UsrUsuarioAprobadorId", StringComparison.OrdinalIgnoreCase));

            if (!hasChanged)
            {
                logger.Warn("El campo UsrUsuarioAprobadorId NO ha sido modificado.");
                return;
            }

            // 2. Obtener valores
            // Nota: Para GetTypedColumnValue usamos el nombre de la propiedad "UsrUsuarioAprobador"
            Guid newAprobadorId = entity.GetTypedColumnValue<Guid>("UsrUsuarioAprobador");
            
            var dbEntity = entity.Schema.CreateEntity(userConnection);
            if (dbEntity.FetchFromDB(entity.PrimaryColumnValue))
            {
                Guid oldAprobadorId = dbEntity.GetTypedColumnValue<Guid>("UsrUsuarioAprobador");

                logger.InfoFormat("Cambio detectado - Viejo: {0} | Nuevo: {1}", oldAprobadorId, newAprobadorId);

                if (oldAprobadorId != newAprobadorId)
                {
                    var parameters = new Dictionary<string, string>
                    {
                        { "MaterialId", entity.PrimaryColumnValue.ToString() },
                        { "OldAprobadorId", oldAprobadorId.ToString() },
                        { "NewAprobadorId", newAprobadorId.ToString() }
                    };

                    try 
                    {
                        userConnection.ProcessEngine.ProcessExecutor
                            .Execute("UsrActualizarAprobacion", parameters);
                        
                        logger.Info("Proceso 'UsrActualizarAprobacion' ejecutado con éxito.");
                    }
                    catch (Exception ex)
                    {
                        logger.Error("ERROR al ejecutar proceso: " + ex.Message);
                    }
                }
            }
            else
            {
                logger.Error("Error: No se pudo leer el valor anterior de la base de datos.");
            }

            logger.Info("--- Fin Evento OnUpdating ---");
        }
    }
}