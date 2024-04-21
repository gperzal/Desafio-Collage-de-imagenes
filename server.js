import express from 'express';
import fileUpload from 'express-fileupload';
import imageRouter from './src/routes/imageRoutes.js';
import setupStaticFiles from './src/middlewares/staticFiles.js';
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
setupStaticFiles(app);

// Configuración de fileUpload con límites y manejo de errores
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    abortOnLimit: true,
    responseOnLimit: 'El tamaño del archivo sobrepasa el límite permitido de 5MB'
}));



// Rutas
app.use(imageRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
