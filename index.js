var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Test barcode API');
})

app.get('/:asset/by/:param/:value', function (req, res) {
  console.log(req.params);
  //var barc_test = '{"text": "12345", "format":"EAN-13", "cancelled": false}';
  var barcTest = {}
  barcTest.deviceNumber = req.params.value;
  barcTest.serialNumber = Math.floor((Math.random() * 1000) + 1) + 'AN';
  barcTest.lotNumber = Math.floor((Math.random() * 100) + 1) + 'ZT' + Math.floor((Math.random() * 1000) + 1);
  res.status(200).json(barcTest);
})

app.listen(3017, function () {
  console.log('Example app listening on port 3017!');
})
