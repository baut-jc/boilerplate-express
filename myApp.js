let express = require('express');
let app = express();
require('dotenv').config()

app.get("/", (require, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/public", express.static(__dirname + "/public"))

// **5) serve JSON on a specific route
// app.get("/json", (require, res) => {
//   res.json({
//     message: "Hello json"
//   })
// })

// **6) Use the env. file to configure the app
app.get ("/json", function (require, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json(
      { "message": "HELLO JSON"}
    )
  } else {
    res.json(
      { "message": "Hello json"}
    )
  }
})

// **7)Implement a Root-Level Request Logger MiddleWare
  //app.use(<mware-function>) --> will exectue functions for all request.
  //app.post(<mware-function) --> will execute function for POST request ONLY.
  // (GET, DELETE, PUT, ....) for anologous methods exist for all the HTTP verbs.

  // every request shoulf return a STRING to the console "method path - ip"
  //GET /json - ::ffff:127.0.0.1




 module.exports = app;
//  http://localhost:3000/