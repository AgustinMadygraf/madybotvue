# To Do List
[x] 1. Creación automática de config.json
[ ] 2. Mejora de tiempos en la conexión
    - Implementar verificación asíncrona y en paralelo del `health-check` para `API_ENDPOINT` y `PHP_ENDPOINT`.
        - Modificar [src/JS/NetworkCheck/ApiEndpointProvider.js](src/JS/NetworkCheck/ApiEndpointProvider.js)
        - Modificar [src/JS/NetworkCheck/PhpHealthService.js](src/JS/NetworkCheck/PhpHealthService.js)
        - Modificar [src/JS/NetworkCheck/index.js](src/JS/NetworkCheck/index.js)
[ ] 3. Producción local y producción remota
    - Añadir `BASE_URL_PROD_LOCAL` y `BASE_URL_PROD_REMOTO` en `config.json`.
        - Modificar [src/config/config.json](src/config/config.json)
    - Generar carpetas `/dist_l` y `/dist_r` para las respectivas configuraciones.
        - Modificar [src/config/index.js](src/config/index.js)
        - Modificar [vue.config.js](vue.config.js)
[ ] 4. Deploy
    - Configurar despliegue en servidor Ferozo.
        - Modificar [src/JS/services/ftp-deploy.js](src/JS/services/ftp-deploy.js)
[ ] 5. TypeScript
    - Análisis inicial para migración a TypeScript.
        - Migrar [src/App.vue](src/App.vue)
        - Migrar [src/components/NetworkCheck.vue](src/components/NetworkCheck.vue)
        - Migrar [src/JS/services/LogService.js](src/JS/services/LogService.js)
        - Migrar [src/JS/NetworkCheck/ApiEndpointProvider.js](src/JS/NetworkCheck/ApiEndpointProvider.js)
        - Migrar [src/config/index.js](src/config/index.js)
        - Migrar [src/config/validateConfig.js](src/config/validateConfig.js)
    - Identificar componentes y servicios críticos para comenzar la migración.