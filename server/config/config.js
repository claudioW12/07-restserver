// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del token
// ============================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  Seed de autenticación
// ============================

process.env.SEED = process.env.SEED || 'seed-dev';

// ============================
//  Base de datos
// ============================
let urlDB = (process.env.NODE_ENV === 'dev') ? 'mongodb://localhost:27017/cafe' : process.env.MONGO_URI;

process.env.URLDB = urlDB;

// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '921955170248-qb295kg5belgu0m6uj3qifg9pijk4nh0.apps.googleusercontent.com';