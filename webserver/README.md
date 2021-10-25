# Servidor Web - Primer Parcial Sistemas Operativos

Trabajo hecho por: Sebastian Arango y Jhoan Buitrago

### Cambios al proyecto original

* Se agregó una carpeta con los archivos necesarios para el funcionamiento de sqlite3.

* Se agrego msg.c y msg.h que manejan las funcionalidades del paso de mensajes y manejo de los requests HTTP.

* Se le hicieron multiples cambios a wserver.c para agregar las nuevas funcionalidades requeridas.

* Se agregó testRequest.py que permite enviar multiples peticiones al servidor.

* Se cambió el makefile para la compilación de sqlite3 y msg.c

### Ejecutar el servidor web

Se debe cambiar el directorio en msg.h al directorio absoluto donde tenga el proyecto, posteriormente se compilan los archivos.

Con la instrucción make se compilan todos los archivos necesarios y con make clean se eliminan.
Una vez compilado ejecutamos wserver con los siguientes argumentos:

- ./wserver -d DIRECTORIO -p PUERTO

Recomandos usar como directorio ./website y puerto 8080.  

El script de python testRequest.py permite enviar n peticiones al servidor web una vez este funcionando. Se ejecuta con los siguientes argumentos:

- python3 testRequest.py CANTIDAD_DE_PROCESOS PUERTO

