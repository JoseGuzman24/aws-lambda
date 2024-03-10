# LAMBDA SERVERLESS

Este lambda cuenta con 4 endpoints
1. El primero nos ayuda a guardar las tareas en nuestra db (DynamoDB)
2. El segundo nos ayuda a obtener los cursos guardados en nuestra db (DynamoDB)
3. El tercerno uno nos ayuda con la obtencion de datos de los planetas de API SWAPI y registrarlo en nuestra db (DynamoDB)
4. El cuarto nos ayuda a obtener los planetas guardados previamente del API SWAPI.

## Tecnologías usadas

```json
{
    "backend": "TypeScript",
    "cloud": "AWS",
    "db_no_relacional": "DynamoDB",
    "unit_test": "jest",
    "config_lambda": "serverless"
}
```

## Pasos para arrancar el Lambda

### Paso 1: Clonar el repositorio con el siguiente comando:
```
$ git clone https://github.com/JoseGuzman24/aws-lambda
```

### Paso 2: Instalar los paquetes:
```
$ npm i
```

### Paso 3: Levantar el proyecto en local (por detras corre el comando: sls offline):
```
$ npm run dev
```

### Paso 4: Realizar deploy de los lambdas a AWS:
```
$ npm run deploy
```

### Paso 5 (opcional): Correr las pruebas unitarias:
```
$ npm run jest
```

### Paso 6.1: Probando nuestro endpoint de creacion de tarea (POST)
```bash

endpoint: POST - https://qq6ge65xg1.execute-api.us-east-2.amazonaws.com/tasks
```
Request (Body):
```json
{
    "title": "primera tarea",
    "description": "primera description"
}
```
### Paso 6.2: Probar nuestros endpoint de obtencion de tareas (GET)
```bash
endpoint: GET - https://s6dyfdcca6.execute-api.us-east-2.amazonaws.com/dev/tasks
```
Response:
```json
{
    [{"createdAt":{},"description":"primera description","id":"56449169-1235-4607-abbd-2f9b37d81aa4","title":"primera tarea"},{"createdAt":{},"description":"primera description","id":"7f4e3a68-a4a1-40bc-8ff4-c14c0bf7b127","title":"primera tarea"}]
}
```
### Paso 6.3: Probando nuestro endpoint de obtencion de datos de la API SWAPI y guardarlo en nuestra base de datos (POST)
```bash

endpoint: POST - https://qq6ge65xg1.execute-api.us-east-2.amazonaws.com/star-wars
```
Response:
```json
{
    "id":"b68f1a7d-c244-4837-8eec-83b44725d8ea","nombre":"Coruscant","periodo_rotacion":"24","periodo_orbital":"368","diametro":"12240","clima":"temperate","gravedad":"1 standard","terreno":"cityscape, mountains","agua_superficial":"unknown","poblacion":"1000000000000","residentes":["https://swapi.py4e.com/api/people/34/"],"peliculas":["https://swapi.py4e.com/api/films/3/"],"creado":"2014-12-10T11:54:13.921000Z","editado":"2014-12-20T20:58:18.432000Z","url":"https://swapi.py4e.com/api/planets/9/"
}
```
### Paso 6.4: Probando nuestro endpoint de obtencion de los planetas (GET)
```bash
endpoint: GET - https://qq6ge65xg1.execute-api.us-east-2.amazonaws.com/star-wars
```
Request (Body):
```json
[
    {
        "diametro": "4900",
        "nombre": "Endor",
        "agua_superficial": "8",
        "clima": "temperate",
        "residentes": [
            "https://swapi.py4e.com/api/people/30/"
        ],
        "url": "https://swapi.py4e.com/api/planets/7/",
        "poblacion": "30000000",
        "periodo_orbital": "402",
        "peliculas": [
            "https://swapi.py4e.com/api/films/3/"
        ],
        "editado": "2014-12-20T20:58:18.429000Z",
        "periodo_rotacion": "18",
        "gravedad": "0.85 standard",
        "creado": "2014-12-10T11:50:29.349000Z",
        "id": "3534b45b-87cb-4347-b116-63f3594e1625",
        "terreno": "forests, mountains, lakes"
    },
    {
        "diametro": "12240",
        "nombre": "Coruscant",
        "agua_superficial": "unknown",
        "clima": "temperate",
        "residentes": [
            "https://swapi.py4e.com/api/people/34/"
        ],
        "url": "https://swapi.py4e.com/api/planets/9/",
        "poblacion": "1000000000000",
        "periodo_orbital": "368",
        "peliculas": [
            "https://swapi.py4e.com/api/films/6/"
        ],
        "editado": "2014-12-20T20:58:18.432000Z",
        "periodo_rotacion": "24",
        "gravedad": "1 standard",
        "creado": "2014-12-10T11:54:13.921000Z",
        "id": "628c8812-a131-449a-9100-c239da34219b",
        "terreno": "cityscape, mountains"
    }
]
```
## Felicidades, lo hiciste muy bien!!

### Posibles mejoras a futuro

1. Encriptar la información del body que viene del cliente (Front, Postman) hacía el backend, así mismo guardar toda la informacion encriptada en la base de datos, podría ser utilizando cryptojs o a través de llave pública y privada

2. Encriptar todos los request y responses

3. Uso de Arquitectura Hexagonal en todo el proyecto (se podría realizar en un entorno profesional)

4. Realizar pruebas de endpoint (Puede ser con superTest)
