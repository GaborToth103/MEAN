http = require('http')
data = JSON.stringify({
    title:'MEAN Stack'
})

const options = {
    hostname: 'localhost',
    port:3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Content-Length': data.length
    }
}

request = http.request(options, response =>{
    response.on('data', chunk =>{
        process.stdout.write(chunk)
    })
})
request.on('error', error =>{
    console.error(error)
})

request.end()