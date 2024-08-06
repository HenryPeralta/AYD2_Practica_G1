### Requerimientos Funcionales

| ID        | Nombre                   | Descripción                                                                                                                                  | Proceso Asociado               |
|-----------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| RF - 001  | Registrar Nuevos Clientes| La asistente puede ingresar la información de los clientes, que incluye nombre, apellido, CUI, teléfono, correo, edad, género y fecha de ingreso. | Administración de Clientes     |
| RF - 002  | Actualizar Información del Cliente | La asistente puede modificar los datos de los clientes cuando sea necesario.                                                                  | Administración de Clientes     |
| RF - 003  | Buscar Clientes          | La asistente puede buscar clientes utilizando el CUI o el código de expediente.                                                              | Administración de Clientes     |
| RF - 004  | Programar Citas          | La asistente puede agendar citas para los clientes, validando las horas y fechas permitidas.                                                  | Manejo de Citas                |
| RF - 005  | Reprogramar Citas        | La asistente puede cambiar la fecha y hora de citas ya programadas.                                                                           | Manejo de Citas                |
| RF - 006  | Consultar Registros de Clientes (con sus Citas) | La asistente y el abogado pueden ver la información de los clientes y sus citas, con opciones de filtrado disponibles.                        | Manejo de Citas                |
| RF - 007  | Subir Expedientes        | El abogado puede cargar documentos en formato PDF o Word como expedientes, generando automáticamente un código de expediente.                 | Gestión de Expedientes         |
| RF - 008  | Visualizar Expedientes   | El abogado puede ver documentos PDF directamente en la plataforma y descargar documentos Word.                                                | Gestión de Expedientes         |
| RF - 009  | Registrar Progreso del Caso | El abogado puede actualizar y registrar el estado de cada caso.                                                                               | Estado de los Casos            |
| RF - 010  | Consultar Estado del Caso | La asistente puede mostrar el estado actual de cada caso a los clientes.                                                                      | Estado de los Casos            |

### Requerimientos No Funcionales

| ID        | Nombre                   | Descripción                                                                                                                                  | Proceso Asociado               |
|-----------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| RNF - 001 | Control de Acceso        | Implementar un sistema de autenticación para asegurar que solo los usuarios autorizados (asistente y abogado) puedan acceder al sistema y a sus funcionalidades específicas. | Seguridad                      |
| RNF - 002 | Protección de Datos      | Garantizar que la información de los clientes y casos esté protegida contra accesos no autorizados, pérdida o alteraciones.                  | Seguridad                      |
| RNF - 003 | Velocidad de Respuesta   | El sistema debe mostrar los resultados de búsquedas y consultas de manera rápida (idealmente en menos de 2 segundos).                        | Rendimiento                    |
| RNF - 004 | Capacidad de Escalado    | El sistema debe ser capaz de manejar un número creciente de registros sin pérdida significativa de rendimiento.                              | Rendimiento                    |
| RNF - 005 | Interfaz Fácil de Usar   | Proveer una interfaz de usuario intuitiva para la asistente y el abogado.                                                                    | Usabilidad                     |
| RNF - 006 | Validación de Datos      | Implementar validaciones para asegurar que la información ingresada en el sistema sea correcta y completa.                                   | Usabilidad                     |
| RNF - 007 | Documentación Completa   | Proveer documentación detallada del sistema y del código para facilitar el mantenimiento y futuras actualizaciones.                          | Mantenibilidad                 |
| RNF - 008 | Arquitectura Modular     | Diseñar el sistema de manera modular para facilitar la adición de nuevas funciones y la modificación de las existentes.                      | Mantenibilidad                 |
| RNF - 009 | Alta Disponibilidad      | Asegurar un alto tiempo de funcionamiento del sistema (por ejemplo, 99.9%) para minimizar interrupciones y asegurar la disponibilidad durante las horas de operación del bufete. | Disponibilidad                 |
| RNF - 010 | Soporte para Navegadores Web | El sistema debe funcionar correctamente en los navegadores web más comunes.                                                                  | Compatibilidad                 |
| RNF - 011 | Accesibilidad en Diversos Dispositivos | El sistema debe ser accesible desde diferentes dispositivos, incluyendo computadoras y tabletas.                                              | Compatibilidad                 |
