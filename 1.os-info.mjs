import os from 'node:os'

// la constante os consulta a node para acceder a datos a tiempo real de la computadora

console.group("╔══════════ informacion del sistema operativo ═════════╗")
console.log("                         ")
console.log("Bienvenido al sistema ILLESCAS SERVICE 🚀")
console.log("__________________________________________________")
console.log("                        ")
console.log("- Nombre del sistema operativo: ", os.platform())
console.log("- Version del sistema operativo: ", os.release())
console.log("- Arquitectura: ", os.arch())
console.log("- CPUS: ", os.cpus()) 
console.log("- memoria libre: " ,os.freemem() / 1024 / 1024 )
console.log("- memoria total: ", os.totalmem() / 1024 / 1024)
console.log("- tiempo de uso de la computadora: ", os.uptime()/  60 / 60)
console.log("/---- fin del sistema operativo ILLESCAS service ----/")

