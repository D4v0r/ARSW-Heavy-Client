# Cinema Book System II

> Davor Javier Cortés Cardozo
>
> Arquitectura de Software (ARWS)
>
> Laboratorio 4

## Descripción

En este ejercicio se va a construír el componente CinemaRESTAPI, el cual permita gestionar la reserva de boletos de una prestigiosa compañia de cine. La idea de este API es ofrecer un medio estandarizado e 'independiente de la plataforma' para que las herramientas que se desarrollen a futuro para la compañía puedan gestionar los boletos de forma centralizada. El siguiente, es el diagrama de componentes que corresponde a las decisiones arquitectónicas planteadas al inicio del proyecto:

![](https://gblobscdn.gitbook.com/assets%2F-LWJN2LirJZqzEmpZ3Gn%2F-LZZfsHSx6kl9-RZboII%2F-LZZfv59Gpg2S5lE0otJ%2FCompDiag.png?alt=media&token=e91b2607-00e8-4c97-8388-4b8f0b5fa9c8)

Donde se definió que:
+ El componente CinemaRESTAPI debe resolver los servicios de su interfaz a través de un componente de servicios, el cual -a su vez- estará asociado con un componente que provea el esquema de persistencia. Es decir, se quiere un bajo acoplamiento entre el API, la implementación de los servicios, y el esquema de persistencia usado por los mismos.

Del anterior diagrama de componentes (de alto nivel), se desprendió el siguiente diseño detallado, cuando se decidió que el API estará implementado usando el esquema de inyección de dependencias de Spring (el cual requiere aplicar el principio de Inversión de Dependencias), la extensión SpringMVC para definir los servicios REST, y SpringBoot para la configurar la aplicación:

![](https://gblobscdn.gitbook.com/assets%2F-LWJN2LirJZqzEmpZ3Gn%2F-LZZfsHSx6kl9-RZboII%2F-LZZfymKY-PeZ3iascc3%2FClassDiagram.png?alt=media&token=c40e344b-823e-4c3a-a373-863684d2b960)

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
