
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('*-*-*-Peticion entrante-*-*-*-*' + request.url)

    if(request.url == "/hola"){
        response.write('Hola desde node')
        response.end()
    }
    else{
        response.write('No saludaste')
        response.end()
    }
    
})

server.listen(8080, () => {
    console.log('El Servidor esta escuchando en el puerto 8080')
})


/*
    
*/