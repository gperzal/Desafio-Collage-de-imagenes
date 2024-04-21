# Collage de Imágenes

Este proyecto permite a los usuarios subir imágenes para crear un collage. El backend maneja la carga de imágenes, su almacenamiento, y la eliminación de imágenes en el collage.

## Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Rutas y Funcionalidad

El servidor Express maneja varias rutas para la funcionalidad del collage de imágenes:

### 

| Ruta           | Método | Descripción                                                         |
| -------------- | ------ | ------------------------------------------------------------------- |
| `/`            | GET    | Muestra la página principal con el formulario de carga de imágenes. |
| `/imagen`      | POST   | Recibe y almacena una imagen en el servidor.                        |
| `/deleteImg/:filename` | DELETE | Elimina la imagen especificada del servidor.                    |

## Instalación

Para ejecutar localmente, necesitas tener instalado Node.js. Sigue estos pasos para la instalación:

1. Clona el repositorio:

   ```
   git clone https://github.com/gperzal/Desafio-Collage-de-imagenes.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd <tu-repo>
   ```

3. Instala las dependencias:

   ```
   npm i
   ```

4. Inicia el servidor:
   ```
   npm start
   ```

5. Abre un navegador y ve a `http://localhost:3000` para ver la aplicación en acción.
