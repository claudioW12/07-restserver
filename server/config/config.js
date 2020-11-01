// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://ClaudioW12:pKZVEoCHe3Z6hzwi@cluster0.bznbb.mongodb.net/test';
    //urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;