const express = require('express');
const __ = require('underscore');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('../dist'));

const port = '3800';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));


app.get('/service/search', function (req, res) {
    //    var data = fs.readFileSync('testJson/TransferOrderList.json', 'utf8');

    console.log("key : "+JSON.stringify(req.query.key));

    var data = [{
        id : 1,
        name: 'Boston Central',
        serviceList: [
            'radiography',
            'ultrasound',
            'angiography',
            'ENT',
            'Neurology'
        ],
        address: 'Boston'
    },
    {
        id : 2,
        name: 'Massachusetts General Hospital',
        serviceList: [
            'radiography',
            'ENT',
            'Neurology'
        ],
        address: 'Boston'
    },
    {
        id : 3,
        name: 'Providence General Hospital',
        serviceList: [
            'radiography',
            'Neurology'
        ],
        address: 'Providence'
    }]

    var resultsSet = __.map(__.filter(data, function(hospital){
        if(hospital.serviceList.indexOf(req.query.key) !== -1){
            return hospital
        }
    }), __.clone);

    console.log("resultsSet\n"+ JSON.stringify(resultsSet));
    res.json(resultsSet);
});

