const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/incapacity-form', (req, res) => {
    res.redirect('/incapacity-form.html');
});

app.get('/pregnancy', (req, res) => {
    res.redirect('/pregnancy.html');
});

app.get('/childbirth-benefit', (req, res) => {
    res.redirect('/childbirth_benefit.html');
});

app.get('/childcare', (req, res) => {
    res.redirect('/childcare.html');
});

app.listen(process.env.PORT || 3000)

/*app.post('/thank', urlencodedParser, function (req, res){
    var reply='';
    reply += "Your name is " + req.body.name + "<br>";
    reply += "Your E-mail id is " + req.body.email + "<br>"; 
    reply += "Your address is " + req.body.address + "<br>";
    reply += "Your mobile number is " + req.body.mobilno + "<br>";
    res.send(reply);
   });*/


   app.use(express.json());

    const { check, validationResult } = require('express-validator/check');
    const { sanitizeBody } = require('express-validator/filter');

    app.post('/thank', urlencodedParser, [
        sanitizeBody('formName').trim().escape(),
        sanitizeBody('fio').trim().escape(),
        sanitizeBody('blNumber').trim().escape(),
        sanitizeBody('blDate').trim().escape(),
        sanitizeBody('earlyDatesNumber').trim().escape(),
        sanitizeBody('earlyDatesDate').trim().escape(),
        sanitizeBody('date24').trim().escape(),
        sanitizeBody('number24').trim().escape(),
        sanitizeBody('birthSerDate').trim().escape(),
        sanitizeBody('birthSerSerial').trim().escape(),
        sanitizeBody('earlyDatesDate').trim().escape(),
        sanitizeBody('birthSerNum').trim().escape(),
        sanitizeBody('anotherParentNum').trim().escape(),
        sanitizeBody('anotherParentDate').trim().escape(),
    ], (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            if ( req.body.formName === "Листок нетрудоспособности") {
                var reply = {
                    "formName": req.body.formName,
                    "fio": req.body.fio,
                    "blNumber": req.body.blNumber,
                    "blDate": req.body.blDate
                }
            } else if ( req.body.formName === "Больничный по беременности и родам" ) {
                var reply = {
                    "formName": req.body.formName,
                    "fio": req.body.fio,
                    "blNumber": req.body.blNumber,
                    "blDate": req.body.blDate,
                    "earlyDatesNumber": req.body.earlyDatesNumber,
                    "earlyDatesDate": req.body.earlyDatesDate
                }
            } else if ( req.body.formName === "Единовременное пособие при рождении ребенка" ) {
                var reply = {
                    "formName": req.body.formName,
                    "fio": req.body.fio,
                    "date24": req.body.date24,
                    "number24": req.body.number24,
                    "birthSerDate": req.body.birthSerDate,
                    "birthSerSerial": req.body.birthSerSerial,
                    "birthSerNum": req.body.birthSerNum,
                    "anotherParentNum": req.body.anotherParentNum,
                    "anotherParentDate": req.body.anotherParentDate
                }
            } else if ( req.body.formName === "Ежемесячное пособие по уходу за ребенком" ) {
                var reply = {
                    "formName": req.body.formName,
                    "fio": req.body.fio,
                    "birthSerDate": req.body.birthSerDate,
                    "birthSerSerial": req.body.birthSerSerial,
                    "birthSerNum": req.body.birthSerNum,
                    "anotherParentNum": req.body.anotherParentNum,
                    "anotherParentDate": req.body.anotherParentDate
                }
            }

            const request = require('request');

            const options = {
                url: 'http://localhost:3002/thank',
                headers: {
                    "Content-type": "application/json",
                    "action": "some name",   //TODO: Запросить имя функции
                    "Test": "Y",
                    "Hook": "Y"
                },
                method: 'POST',
                json: reply
            };

            function callback(error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                if (!error && response.statusCode == 200) {
                    //const info = JSON.parse(body);
                    const info = body;
                    console.log(info);
                    res.json(info);
                }
            }

            request(options, callback);



/*
            console.log(reply)
            res.json(reply); */   // FIXME: потом вероятно надо заменить на res.send(JSON от ответа другого сервера) для отправки по AJAX //было json

        }

    });

    app.post('/getEmployees', (req, res) => {
            var reply = {
                "urlForFio": req.body.urlForFio,
            }

            const request = require('request');

            const options = {
                url: 'http://vld-portal.pskb.ad/api/search/%D0%B8',
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            };

            function callback(error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                let info = body;
                res.json(info);
                if (!error && response.statusCode == 200) {
                    //const info = JSON.parse(body);
                    const info = body;
                    //console.log("info  " + info);
                    res.json(info);

                }
            }

            request(options, callback);



/*
            console.log(reply)
            res.json(reply); */   // FIXME: потом вероятно надо заменить на res.send(JSON от ответа другого сервера) для отправки по AJAX //было json

    });



