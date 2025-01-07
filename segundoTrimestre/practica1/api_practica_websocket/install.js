// setup.js

const fs = require('fs');
const { exec } = require('child_process');

// Archivos y configuraciones básicas
const packageJson = `{
  "name": "proyecto-base-ts",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "ts-node-dev src/index.ts"
  },
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.0.3",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "ts-node": "^10.9.1",
    "ts-node-dev": "^2.0.0",
    "@types/node": "^18.17.14",
    "@types/express": "^4.17.17",
    "@types/cors": "^2.8.13"
  }
}`;

const tsconfigJson = `{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`;


// Crear directorios
if (!fs.existsSync('src')) fs.mkdirSync('src');
if (!fs.existsSync('dist')) fs.mkdirSync('dist');

// Crear archivos
fs.writeFileSync('package.json', packageJson);
fs.writeFileSync('tsconfig.json', tsconfigJson);


// Instalar dependencias
console.log('Instalando dependencias...');
exec('npm install && npm install --save-dev typescript ts-node ts-node-dev @types/node @types/express @types/cors', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al instalar dependencias: ${error.message}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
  console.log('Proyecto configurado correctamente. Usa "npm run dev" para iniciar el servidor.');
});
