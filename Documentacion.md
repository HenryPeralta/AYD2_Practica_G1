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


### Casos de Uso de Alto Nivel

#### 1. Administración de Clientes

| Nombre del Caso de Uso             | Descripción                                                                 | Actor Primario | Actores Secundarios |
|------------------------------------|-----------------------------------------------------------------------------|----------------|---------------------|
| Registrar Nuevos Clientes          | La asistente puede ingresar la información de los clientes.                 | Asistente      | N/A                 |
| Actualizar Información del Cliente | La asistente puede modificar los datos del cliente.                         | Asistente      | N/A                 |
| Buscar Clientes                    | La asistente puede buscar clientes utilizando el CUI o el código de expediente. | Asistente      | N/A                 |
| Consultar Registros de Clientes    | La asistente y el abogado pueden ver la información de los clientes y sus citas. | Asistente, Abogado | N/A             |

#### 2. Manejo de Citas

| Nombre del Caso de Uso             | Descripción                                                                 | Actor Primario | Actores Secundarios |
|------------------------------------|-----------------------------------------------------------------------------|----------------|---------------------|
| Programar Citas                    | La asistente puede agendar citas para los clientes.                         | Asistente      | N/A                 |
| Reprogramar Citas                  | La asistente puede cambiar la fecha y hora de citas ya programadas.         | Asistente      | N/A                 |

#### 3. Gestión de Expedientes

| Nombre del Caso de Uso             | Descripción                                                                 | Actor Primario | Actores Secundarios |
|------------------------------------|-----------------------------------------------------------------------------|----------------|---------------------|
| Subir Expedientes                  | El abogado puede cargar documentos en formato PDF o Word como expedientes.  | Abogado        | N/A                 |
| Visualizar Expedientes             | El abogado puede ver documentos PDF directamente en la plataforma y descargar documentos Word. | Abogado | N/A |

#### 4. Estado de los Casos

| Nombre del Caso de Uso             | Descripción                                                                 | Actor Primario | Actores Secundarios |
|------------------------------------|-----------------------------------------------------------------------------|----------------|---------------------|
| Registrar Progreso del Caso        | El abogado puede actualizar y registrar el estado de cada caso.             | Abogado        | N/A                 |
| Consultar Estado del Caso          | La asistente puede mostrar el estado actual de cada caso a los clientes.    | Asistente      | N/A                 |

### Casos de Uso Expandidos

#### 1. Administración de Clientes

**Registrar Nuevos Clientes**

| **Nombre del Caso de Uso** | Registrar Nuevos Clientes                      |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente puede ingresar la información de los clientes. |
| **Actor Primario**         | Asistente                                      |
| **Flujo de Eventos**       | 1. La asistente selecciona la opción de registrar nuevo cliente. <br> 2. El sistema muestra un formulario para ingresar los datos del cliente. <br> 3. La asistente completa el formulario con la información del cliente (Nombre, Apellido, CUI, Teléfono, Correo, Edad, Género, Fecha de ingreso). <br> 4. El sistema guarda la información en la base de datos. <br> 5. El sistema confirma que el cliente ha sido registrado exitosamente. |
| **Flujo Alternativo**      | 3a. Si la asistente deja campos obligatorios vacíos, el sistema muestra un mensaje de error y solicita que se completen todos los campos. |

**Actualizar Información del Cliente**

| **Nombre del Caso de Uso** | Actualizar Información del Cliente             |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente puede modificar los datos del cliente. |
| **Actor Primario**         | Asistente                                      |
| **Flujo de Eventos**       | 1. La asistente busca el cliente a modificar. <br> 2. El sistema muestra los datos actuales del cliente. <br> 3. La asistente actualiza los datos necesarios. <br> 4. El sistema guarda los cambios. <br> 5. El sistema confirma que los datos del cliente han sido actualizados. |
| **Flujo Alternativo**      | 1a. Si el cliente no se encuentra en el sistema, se muestra un mensaje de error. |

**Buscar Clientes**

| **Nombre del Caso de Uso** | Buscar Clientes                                |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente puede buscar clientes utilizando el CUI o el código de expediente. |
| **Actor Primario**         | Asistente                                      |
| **Flujo de Eventos**       | 1. La asistente ingresa el CUI o el código de expediente del cliente. <br> 2. El sistema busca y muestra la información del cliente. |
| **Flujo Alternativo**      | 2a. Si no se encuentra ningún cliente con el CUI o código ingresado, el sistema muestra un mensaje de error. |

**Consultar Registros de Clientes (con sus Citas)**

| **Nombre del Caso de Uso** | Consultar Registros de Clientes (con sus Citas) |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente y el abogado pueden ver la información de los clientes y sus citas. |
| **Actor Primario**         | Asistente, Abogado                             |
| **Flujo de Eventos**       | 1. El usuario selecciona la opción para ver registros de clientes. <br> 2. El sistema muestra una lista de todos los clientes y sus citas. <br> 3. El usuario puede filtrar y ordenar la lista según diferentes criterios. |
| **Flujo Alternativo**      | 2a. Si no hay clientes registrados, el sistema muestra un mensaje indicando que no hay datos disponibles. |

#### 2. Manejo de Citas

**Programar Citas**

| **Nombre del Caso de Uso** | Programar Citas                                |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente puede agendar citas para los clientes. |
| **Actor Primario**         | Asistente                                      |
| **Flujo de Eventos**       | 1. La asistente selecciona la opción para agendar una cita. <br> 2. El sistema muestra un formulario para ingresar la información de la cita (CUI del cliente, Fecha, Hora). <br> 3. La asistente completa el formulario. <br> 4. El sistema valida que la fecha y hora están disponibles. <br> 5. El sistema guarda la cita. <br> 6. El sistema confirma que la cita ha sido agendada exitosamente. |
| **Flujo Alternativo**      | 4a. Si la fecha y hora no están disponibles, el sistema muestra un mensaje de error y solicita una nueva fecha y hora. |

**Reprogramar Citas**

| **Nombre del Caso de Uso** | Reprogramar Citas                              |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente puede cambiar la fecha y hora de citas ya programadas. |
| **Actor Primario**         | Asistente                                      |
| **Flujo de Eventos**       | 1. La asistente busca la cita a reprogramar. <br> 2. El sistema muestra los detalles de la cita actual. <br> 3. La asistente actualiza la fecha y hora de la cita. <br> 4. El sistema valida la nueva fecha y hora. <br> 5. El sistema guarda los cambios. <br> 6. El sistema confirma que la cita ha sido reprogramada. |
| **Flujo Alternativo**      | 1a. Si no se encuentra la cita, el sistema muestra un mensaje de error. <br> 4a. Si la nueva fecha y hora no están disponibles, el sistema muestra un mensaje de error y solicita una nueva fecha y hora. |

#### 3. Gestión de Expedientes

**Subir Expedientes**

| **Nombre del Caso de Uso** | Subir Expedientes                             |
|----------------------------|------------------------------------------------|
| **Descripción**            | El abogado puede cargar documentos en formato PDF o Word como expedientes. |
| **Actor Primario**         | Abogado                                        |
| **Flujo de Eventos**       | 1. El abogado selecciona la opción para subir un expediente. <br> 2. El sistema muestra un formulario para cargar el documento. <br> 3. El abogado selecciona el archivo a subir (PDF o Word). <br> 4. El sistema valida el formato del archivo. <br> 5. El sistema guarda el expediente y genera un código de expediente. <br> 6. El sistema confirma que el expediente ha sido subido exitosamente y proporciona el código al abogado. |
| **Flujo Alternativo**      | 4a. Si el formato del archivo no es válido, el sistema muestra un mensaje de error y solicita un archivo en el formato correcto. |

**Visualizar Expedientes**

| **Nombre del Caso de Uso** | Visualizar Expedientes                        |
|----------------------------|------------------------------------------------|
| **Descripción**            | El abogado puede ver documentos PDF directamente en la plataforma y descargar documentos Word. |
| **Actor Primario**         | Abogado                                        |
| **Flujo de Eventos**       | 1. El abogado selecciona la opción para ver expedientes. <br> 2. El sistema muestra una lista de todos los expedientes. <br> 3. El abogado selecciona un expediente. <br> 4. El sistema muestra el contenido del archivo PDF o permite la descarga del archivo Word. |
| **Flujo Alternativo**      | 2a. Si no hay expedientes registrados, el sistema muestra un mensaje indicando que no hay datos disponibles. |

#### 4. Estado de los Casos

**Registrar Progreso del Caso**

| **Nombre del Caso de Uso** | Registrar Progreso del Caso                   |
|----------------------------|------------------------------------------------|
| **Descripción**            | El abogado puede actualizar y registrar el estado de cada caso. |
| **Actor Primario**         | Abogado                                        |
| **Flujo de Eventos**       | 1. El abogado selecciona un caso. <br> 2. El sistema muestra los detalles actuales del caso. <br> 3. El abogado actualiza el estado del caso. <br> 4. El sistema guarda los cambios. <br> 5. El sistema confirma que el estado del caso ha sido actualizado. |
| **Flujo Alternativo**      | 1a. Si el caso no se encuentra en el sistema, se muestra un mensaje de error. |

**Consultar Estado del Caso**

| **Nombre del Caso de Uso** | Consultar Estado del Caso                     |
|----------------------------|------------------------------------------------|
| **Descripción**            | La asistente puede mostrar el estado actual de cada caso a los clientes. |
| **Actor Primario**         | Asistente                                      |
| **Flujo de Eventos**       | 1. La asistente busca el caso por el código de expediente. <br> 2. El sistema muestra el estado actual del caso. |
| **Flujo Alternativo**      | 1a. Si el caso no se encuentra en el sistema, se muestra un mensaje de error. |

