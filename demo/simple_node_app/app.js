http = require('http')
fs = require('fs')
dir = './public/'
port = process.env.PORT | 3000

server = http.createServer((req, res)=>{
    if(req.url == '/'){
        render(res, 'index.html')
    }else if (req.url == '/about'){
        render(res, 'about.html')
    }else if (req.url == '/contact'){
        render(res, 'contact.html')
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>404 File Not Found</h1>')
        res.end()
    }
})
server.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

render = (res, file) => {
    fs.readFile(dir + file, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write('<h1>404 File Not Found</h1>')
            res.end()
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        return res.end(data)
    })
}