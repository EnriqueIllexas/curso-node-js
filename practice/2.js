const fs = require("node:fs")

const mostrarTexto = fs.readFileSync("archivo.txt", "utf-8")

console.log(mostrarTexto);