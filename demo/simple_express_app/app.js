express = require('express')
http = require('http')
fs = require('fs')

app = express()
dir = './public/'
port = process.env.PORT | 3000

app.get('/', (req, res) => {
    render(res, 'index.html')
})
app.get('/about', (req, res) => {
    render(res, 'about.html')
})
app.get('/contact', (req, res) => {
    render(res, 'contact.html')
})

app.listen(port, ()=>{
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