 const http=require('http');
/*function rqListener(req,res){

}*/

 const server =http.createServer((req,res)=>{
//understanding the request
console.log(req.url,req.method,req.headers);
//console.log('Praveen Gaur')
res.setHeader('content-type','text/html')
/*res.write('<html>')
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Hello from my node.js Server!</h1></body>')
res.write('</html>')
res.end();*/
if(req.url==='/home') res.end('Welcome home');
else if(req.url==='/about') res.end('Welcome to about us page');
else if(req.url==='/node') res.end('Welcome to my Node.js project');
 });
 server.listen(4000)