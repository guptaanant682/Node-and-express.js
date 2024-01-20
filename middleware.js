
/////////////////////////////Ugly way without using middlewares
// const express = require("express");

// const app = express();

// app.use(express.json());
// This express.json itself returns a function, there are multiple types of data that a user can send. it may be text, HTML, XML etc. so bascically it make easy to handle that data by converting it into json format, normal query params don't uses this but body inputs won't works without this middleware.

// app.get('/health-checkup', function(req, res){
// //  do health checks here
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "infinity" && password != "pass"){
//         res.status(403).json({
//             msg: "user doesn't exist",

//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "wrong inputs",

//         });
//         return;
//     }

//     res.send("Your heart is healthy");
// })
// app.listen(3000);

// this code is wroking fine but there are some problems with this code 
// It violates the DRY(Do not repeat yourself principle)
// suppose if you want to replace a kidney then you make a /replace-kidney route and you have to write all the logic of the above code again to authenticate the user etc. That's where middlewares comes into picture to make your code more redable and efficient

// Now making the above route using middlewares

const express = require("express");

const app = express();
function userMiddleware(req, res, next){
    if(username != "infinity" && password != "pass"){
        res.status(403).json({
            msg: "user doesn't exist",

        });
    } else{
        next();
    }
};
function kidneyMiddleware(req, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs",

        });
    } else{
        next();
    }
};

app.get('/health-checkup', userMiddleware, kidneyMiddleware, function(req, res){

    res.send("Your heart is Healthy")
});

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, function(req, res){

    res.send("Your kidney is Healthy")
});

app.get('/heart-checkup', userMiddleware, kidneyMiddleware, function(req, res){

    res.send("Your heart is Healthy")
});
// now we made some middlewares and we can pass more than one callbacks functions in javascript so we can pass this middelware functions and these acts like prechecks, if anyone of the middlware fails we can't proceed. This makes our code slighlty more convenient to read and enhances the code efficiency. 

// one more way to write middleaware is using app.use
// but if we write middlwares using app.use then this middleware runs before any route written after this middleware.

app.listen(3000);

