http = require('http')
server = http.createServer((request, response) =>{
    response.writeHead(200, {"Content-type": "text/html"})

    
    if(request.url == '/get'){
        response.write('You reached the GET page')
        if(request.method == 'GET'){
            response.write('<h1>GET to Node.js!</h1>')
        }    
    }else if(request.url == '/post'){
        response.write('You reached the POST page')
        if(request.method == 'POST'){
            response.write('<h1>POST to Node.js!</h1>')
        }    
    }else if(request.url == '/put'){
        response.write('You reached the PUT page')
        if(request.method == 'PUT'){
            response.write('<h1>PUT to Node.js!</h1>')
        }
    
    }else if(request.url == '/delete'){
        response.write('You reached the DELETE page')
        if(request.method == 'DELETE'){
            response.write('<h1>DELETE to Node.js!</h1>')
        }    
    }else{
        response.write('None Found')
    }

    response.end()
})
server.listen(3000, ()=>console.log("http://localhost:3000"))ó