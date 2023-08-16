let express = require('express');
let app = express();
require('dotenv').config()

app.use(function (require, res, next) {
  console.log(require.method + " " + require.path + " - " + require.ip)
  next()
})

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
  
  // every request should return a STRING to the console "method path - ip"
 
  //GET /json - ::ffff:127.0.0.1

  //must be placed on the top because we are adding a middleware to all routes.

// **8) Chain Middleware to create a Time server.
  function getCurrentTimeString () {
    return new Date().toString()
  }

  app.get('/now', function(req, res, next) {
    req.time = getCurrentTimeString()
    next() 
  }, function(req, res) {
    res.json(
      { time: req.time}
    )
  })



 module.exports = app;
//  http://localhost:3000/

//GIT pushing to own forked repo
  // git remote add someone https://fork.url --> #create remote called "someone"
  // #fetch the changes from that remote
    // git fetch someone
  
  // #rebase the work you want to send onto the fork's work
    // git branch for-someone my-branch --> #create branch "for-someone" at "my-branch"
    // git rebase master for-someone --onto someone/master --> #take commits from the "for-someone" branch down to your "master" branch and rebase it onto "someone" "master" branch
  
  //#then push your changes to the other remote
    // git push someone for-someone --> #push branch "for-someone" to the "someone" remote


