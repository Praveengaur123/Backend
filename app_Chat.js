 const http=require('http');
 const fs=require('fs');

/*function rqListener(req,res){
}*/

 const server =http.createServer((req,res)=>{
    
    if(req.url==='/') {
        fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);   
            }
            res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()

        })
        
    }
    if(req.url==="/message" && req.method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1]
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302
            res.setHeader('Location','/')
            
            return res.end()
            })

            
        })
    }
//understanding the request
//console.log(req.url,req.method,req.headers);
//console.log('Praveen Gaur')
/*res.setHeader('content-type','text/html')
res.write('<html>')
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Hello from my node.js Server!</h1></body>')
res.write('</html>')
res.end();*/

//else if(req.url==='/about') res.end('Welcome to about us page');
//else if(req.url==='/node') res.end('Welcome to my Node.js project');
 });
 server.listen(4000)