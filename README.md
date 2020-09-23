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
https://github.com/D4v0r/ARSW-Cinema-Book-System-ll
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

### Parte I

+ Consultar todos los cinemas:
    
    ![](https://media.discordapp.net/attachments/749330138407370856/753047581055254631/unknown.png?width=1442&height=445)


+ Consultar un cinema:

    ![](https://media.discordapp.net/attachments/749330138407370856/753048271374647381/unknown.png?width=1443&height=615)
    
    
+ Consultar las funciones de un cinema en un día especifico:

    ![](https://media.discordapp.net/attachments/749330138407370856/753049228003246080/unknown.png?width=1443&height=557)
    
    
+ Consultar una determinada funcion en un cinema:
    
    ![](https://media.discordapp.net/attachments/749330138407370856/753059140275798166/carbon_3.png?width=1443&height=552)

    ![](https://media.discordapp.net/attachments/749330138407370856/753049736621064272/unknown.png?width=1443&height=387)



### Parte II

+ Creación de nuevas funciones

    ![](https://media.discordapp.net/attachments/749330138407370856/753055545090375780/unknown.png?width=1443&height=321)
    
    ![](https://media.discordapp.net/attachments/749330138407370856/753056075196006420/unknown.png?width=1443&height=377)
    
    
+ Actualización o creación de nuevas funciones:
    
    ![](https://media.discordapp.net/attachments/749330138407370856/753056628219314257/unknown.png?width=1443&height=257)

    ![](https://media.discordapp.net/attachments/749330138407370856/753057015038869554/unknown.png?width=1443&height=571)


### Parte III

Leer el docuemento [AQUÍ](https://github.com/D4v0r/ARSW-Cinema-Book-System-ll/blob/master/ANALISIS_CONCURRENCIA.txt).


## LICENCIA 
Este proyecto está licenciado bajo la GNU General Public License v3.0, para más información ver la [LICENCIA](https://github.com/D4v0r/ARSW-Cinema-Book-System-ll/blob/master/LICENSE.txt).
