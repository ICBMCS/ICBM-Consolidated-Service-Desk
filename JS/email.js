//For the purposes of this answer, your text file is called names.txt

var http = require("http");
var fs = require("fs");

window.onload = function{

http.createServer(function (req, res) {
    fs.readFile("email.txt", function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<select id='1234'");
        var namesArray = data.split("\n");
        for (var i = 0; i < namesArray.length; i++) {
            res.write("<option value='" + namesArray[i] + "'>" + namesArray[i] + "</option>");
         }
         res.write("</select>");
         res.end();
     });
}).listen(8080);

}