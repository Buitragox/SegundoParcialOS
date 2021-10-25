# Servidor Web Hilos y algoritmos de Scheduler- Segundo Parcial Sistemas Operativos

Trabajo hecho por: Sebastian Arango y Jhoan Buitrago

### Cambios al proyecto original

* Se modifico el servidor en el cual ya no trabaje con procesos si no con hilos.

### Ejecutar el servidor web

Se debe cambiar el directorio en msg.h al directorio absoluto donde tenga el proyecto, posteriormente se compilan los archivos.

Con la instrucción make se compilan todos los archivos necesarios y con make clean se eliminan.
Una vez compilado ejecutamos wserver con los siguientes argumentos:

- ./wserver -d DIRECTORIO -p PUERTO

Recomandos usar como directorio ./website y puerto 8080.  

El script de python testRequest.py permite enviar n peticiones al servidor web una vez este funcionando. Se ejecuta con los siguientes argumentos:

- python3 testRequest.py CANTIDAD_DE_PROCESOS PUERTO

###Punto 2 XV6

* En el archivo proc.c estan documentados los 3 scheduler:
	-round robin
	-priority
	-FCFS
* Se realizaron modificaciones al codigo para el funcionamiento de scheduler priority ademas de crear 3 archivos nuevos los cuales son: ps.c nice.c dpro.c

* Se modificaron algunos archivos para el funcionamiento del FCFS

###Punto 3 SCHED_DEADLINE

* Documento pdf que contiene una breve explicación sobre el algoritmo y sus usos como tambien 
una pequeña implementación en c en el que demuestra su funcionamiento.
