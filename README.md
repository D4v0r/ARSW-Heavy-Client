# Heavy Client

> Davor Javier Cortés Cardozo
>
> Arquitectura de Software (ARWS)
>
> Laboratorio 5

## Descripción

- Crear un cliente que se conecte con el API Rest generado anteriormente de manera que se pueda interactuar con él desde el navegador.
- Al oprimir el botón 'Get Functions', consultar las funciones de un determinado cine y una fecha dados por el usuario. Por ahora, si la consulta genera un error, sencillamente  no se mostrará nada.
- Al hacer una consulta exitosa, se debe mostrar un mensaje que incluya el nombre del cine, y una tabla con: el nombre de la película, el género, la hora de la función y un botón para abrir el detalle de la disponibilidad de la misma.
- Al seleccionar una de las funciones se debe mostrar el dibujo de la disponibilidad de la misma. Por ahora, el dibujo será simplemente una serie de cuadrados en pantalla que representan las sillas, y dependiendo de su disponibilidad tendrán un color distinto.

![](https://gblobscdn.gitbook.com/assets%2F-LWJN2LirJZqzEmpZ3Gn%2F-MHBxsopleYfLgqC4_4Z%2F-MHBz6cqEfdc9Fk6B_mD%2Fimage.png?alt=media&token=af6d765c-5486-4ebf-8a00-c98432f2d2fc)


## Comenzando

### Instalación

Primero se debe clonar el repositorio para ello inserte el siguiente comando en la línea de comandos:

```
https://github.com/D4v0r/ARSW-Heavy-Client
```

### Compilación y Pruebas

En la consola de comandos ingresar el siguiente comando para compilar el proyecto y ejecutar las pruebas:

```
mvn package
```

### Ejecución
Para ejecutar el servicio web en el localhost:8080 debe usar el siguiente comando:

```
mvn spring-boot:run
```

## Ejercicios

![](https://media.discordapp.net/attachments/749330138407370856/758257401869893642/unknown.png?width=1290&height=688)


- Modo administrador

![](https://cdn.discordapp.com/attachments/749330138407370856/760762297399771186/unknown.png)


## LICENCIA 
Este proyecto está licenciado bajo la GNU General Public License v3.0, para más información ver la [LICENCIA](https://github.com/D4v0r/ARSW-Heavy-Client/blob/master/LICENSE.txt).
