import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const uploadImage = (req, res) => {
    if (!req.files || !req.files.target_file || !req.body.posicion) {
        return res.status(400).send('No se subió ningún archivo o falta la posición.');
    }

    const targetFile = req.files.target_file;
    const fileExtension = path.extname(targetFile.name);
    const fileName = `img-${req.body.posicion}${fileExtension}`;
    const uploadPath = path.join(__dirname, '../../public/uploads/', fileName);


    targetFile.mv(uploadPath, err => {
        if (err) return res.status(500).send(err);
        res.redirect('/collage.html');
    });
};

export const deleteImage = (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../../public/uploads/', filename);

    // Verifica si el archivo existe antes de intentar eliminarlo
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, err => {
            if (err) {
                // Envía un mensaje de error detallado para la depuración
                console.error(err);
                return res.status(500).send('Error al eliminar el archivo');
            }
            // Considera enviar una respuesta de éxito o realizar una acción que recargue el collage
            res.redirect('/collage.html');
        });
    } else {
        // Si el archivo no existe, envía una respuesta adecuada
        res.status(404).send('El archivo no existe');
    }
};

