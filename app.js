const http = require('http');

const server = http.createServer((req, res)=>{
	
	const url = req.url;
	const method = req.method;
	
	if(url === '/'){
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Some Title</title></head>');
		res.write('<body>');
		res.write('<form action="/create-user" method="POST"><input type = "text" name = "username"><button type = "submit">Send</button></form>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}
	if(url === '/users'){
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Users Page</title></head>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>User 1</li>');
		res.write('<li>User 2</li>');
		res.write('<li>User 3</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}
	if(url === '/create-user' && method === 'POST'){
		const body = [];
		
		req.on('data', chunk => {
			body.push(chunk);
		});
		
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody.split('=')[1]);
		});
		
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
		
	}
	
});

server.listen(3000);