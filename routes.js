
const fs = require('fs');
  
const requestHandler=(req,res)=>{

  if(req.url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if(req.url === "/message" && req.method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
  //res.setHeader('content-type','text/html')
  /*res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my node.js Server!</h1></body>')
  res.write('</html>')
  res.end();*/
}
module.exports={
  handler:requestHandler,
  someText:'some text is here '
};
exports.handler=requestHandler;
module.exports.someText=""
