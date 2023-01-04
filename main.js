const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
	console.log(req.url);
	res.writeHead(200,{"content-type":"text/html"});
	let filename="";
	count=0;

if(req.url=="/")
{
	fs.readFile("index.html",(err,data)=>{
		res.end(data);
		count++;

	})
}


else if(req.url=="/style.css")
{
	fs.readFile("style.css",(err,data)=>{
		res.end(data);
		count++;
	})
}
else if(req.url=="/aboutus" || req.url=="/aboutus.html")
{
	fs.readFile("aboutus.html",(err,data)=>{
		res.end(data);
		count++;

	})

}

else if(req.url=="/contactus" || req.url=="/contactus.html")
{
	fs.readFile("contactus.html",(err,data)=>{
		res.end(data);
		count++;

	})

}

else
{
	fs.readFile("404.html",(err,data)=>{
		res.end(data);
		count++;
	})
}


// res.end(count);
// res.end();


});

server.listen(3000,function(err){
if(err)
console.log("Unable to start the server");
else
console.log("Server started...");


});
