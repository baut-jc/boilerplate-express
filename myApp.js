let express = require('express');
let app = express();
require('dotenv').config()
var bodyParser = require('body-parser')

app.use(function (require, res, next) {
  console.log(require.method + " " + require.path + " - " + require.ip)
  next()
})

// ** ----> Insert Challenge#11 here (middleware)

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
app.get ("/json", (require, res) => {
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

  app.get('/now', (req, res, next) => {
    req.time = getCurrentTimeString()
    next() 
  }, function(req, res) {
    res.json(
      { time: req.time}
    )
  })

// **9) Get Route Parameter Input from the Client
  app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
  })  
//requesting information --> route parameter
      // --> named segments of the URL delimited by slashes(/)
  //TASK:
    // Build an echo server 
        // GET /:word/echo
    // Respond with a JSON object
        //{echo: word}
        //req.params.word

// **10) Get Query Parameter Input from the Client
  // SYNTAX:
    // query string --> delimited by question mark
    // GET /name
  app.get("/name", function(req, res) {
    res.json( {name: req.query.first + " " + req.query.last})
  })


// **11) Use body-parser to Parse POST Requests
  //Install body parser
  //place in the middle of the code block.
      //to be added in the middle to run before running all other routes.



    



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


