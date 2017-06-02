# Ejemplo de implementación de microservicios con Docker

> La aplicación permite obtener el nombre en español del número ingresado
en un formulario.

Esta aplicación fue dividida en dos microservicios: frontend y backend.

En el frontend se encuentra la presentación del formulario y es donde se realiza
la petición al backend. Está escrito en javascript.

El backend es el que se encarga obtener el nombre del número utilizando la
biblioteca [singing-girl](https://github.com/joac/singing-girl). Esta biblioteca
no fue diseñada para trabajar en web, el microservicio backend le brinda esta
funcionalidad.


## Ventajas
Como existe un bajo acoplamiento entre los microservicios, pueden cambiar
cada uno de ellos sin que el otro se entere (siempre y cuando no se modifique la
API). Se puede reescribir el frontend para enbellecerlo sin necesidad de
modificar el backend.


## Utilización
Para utilizar este ejemplo se necesita docker y docker-compose

Para construir el cluster:

```bash
docker-compose build
```

Para inicializar el cluster:

```bash
docker-compose up
```