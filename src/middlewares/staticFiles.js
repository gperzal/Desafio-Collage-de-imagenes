import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function setupStaticFiles(app) {
    // Middleware para archivos estáticos
    app.use(express.static(path.join(__dirname, '..', '../views')));
    app.use(express.static(path.join(__dirname, '..', '../public')));

    // Middleware para establecer el Content-Type en utf-8
    app.use((req, res, next) => {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        next();
    });
}