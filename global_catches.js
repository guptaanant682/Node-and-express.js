// our end user can't see the errors, that's a bad practice beacuse it exposes what logic we have written in the backend so to prevent that
// Global catches are introduced
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

// Global catches
// when a middleware takes 4 input not 3 that acts as a middleware and whenever any route gets an exception this middleware gets called
app.use(function(err, req, res, ne){
    errorCount++;
    res.json({
        msg: "Sorry something is up with the server"
    })
})
// global catches helps you give the user a better error message
// Error-Handling middleware: This is a special type of middleware function in Express that has four arguments instead of three(`(err, req, res, next)`). Express recognize it as an error-handling middleware because of these four arguments.


app.listen(3000);