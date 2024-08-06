### Requerimientos Funcionales

1. **Administración de Clientes:**
   - **Registrar Nuevos Clientes:** La asistente puede ingresar la información de los clientes, que incluye nombre, apellido, CUI, teléfono, correo, edad, género y fecha de ingreso.
   - **Actualizar Información del Cliente:** La asistente puede modificar los datos de los clientes cuando sea necesario.
   - **Buscar Clientes:** La asistente puede buscar clientes utilizando el CUI o el código de expediente.

2. **Manejo de Citas:**
   - **Programar Citas:** La asistente puede agendar citas para los clientes, validando las horas y fechas permitidas.
   - **Reprogramar Citas:** La asistente puede cambiar la fecha y hora de citas ya programadas.
   - **Consultar Registros de Clientes (con sus Citas):** La asistente y el abogado pueden ver la información de los clientes y sus citas, con opciones de filtrado disponibles.

3. **Gestión de Expedientes:**
   - **Subir Expedientes:** El abogado puede cargar documentos en formato PDF o Word como expedientes, generando automáticamente un código de expediente.
   - **Visualizar Expedientes:** El abogado puede ver documentos PDF directamente en la plataforma y descargar documentos Word.

4. **Estado de los Casos:**
   - **Registrar Progreso del Caso:** El abogado puede actualizar y registrar el estado de cada caso.
   - **Consultar Estado del Caso:** La asistente puede mostrar el estado actual de cada caso a los clientes.

### Requerimientos No Funcionales

1. **Seguridad:**
   - **Control de Acceso:** Implementar un sistema de autenticación para asegurar que solo los usuarios autorizados (asistente y abogado) puedan acceder al sistema y a sus funcionalidades específicas.
   - **Protección de Datos:** Garantizar que la información de los clientes y casos esté protegida contra accesos no autorizados, pérdida o alteraciones.

2. **Rendimiento:**
   - **Velocidad de Respuesta:** El sistema debe mostrar los resultados de búsquedas y consultas de manera rápida (idealmente en menos de 2 segundos).
   - **Capacidad de Escalado:** El sistema debe ser capaz de manejar un número creciente de registros sin pérdida significativa de rendimiento.

3. **Usabilidad:**
   - **Interfaz Fácil de Usar:** Proveer una interfaz de usuario intuitiva para la asistente y el abogado.
   - **Validación de Datos:** Implementar validaciones para asegurar que la información ingresada en el sistema sea correcta y completa.

4. **Mantenibilidad:**
   - **Documentación Completa:** Proveer documentación detallada del sistema y del código para facilitar el mantenimiento y futuras actualizaciones.
   - **Arquitectura Modular:** Diseñar el sistema de manera modular para facilitar la adición de nuevas funciones y la modificación de las existentes.

5. **Disponibilidad:**
   - **Alta Disponibilidad:** Asegurar un alto tiempo de funcionamiento del sistema (por ejemplo, 99.9%) para minimizar interrupciones y asegurar la disponibilidad durante las horas de operación del bufete.

6. **Compatibilidad:**
   - **Soporte para Navegadores Web:** El sistema debe funcionar correctamente en los navegadores web más comunes.
   - **Accesibilidad en Diversos Dispositivos:** El sistema debe ser accesible desde diferentes dispositivos, incluyendo computadoras y tabletas.
