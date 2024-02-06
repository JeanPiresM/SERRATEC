const http = require("http")

http.createServer(function(req, res){
res.end('<button>teste</button>')

}).listen("3000")


