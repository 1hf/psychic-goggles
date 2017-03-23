var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Test barcode API');
})

app.get('/:asset/by/:param/:value', function(req, res) {
	//console.log(req.params);
	//var barc_test = '{"text": "12345", "format":"EAN-13", "cancelled": false}';
	var barcTest = {};
	//barcTest.deviceNumber = req.params.value;

	var retData = {};

	if (req.params.param == 'barcode') {
		for (var i = 0; i < deviceSensors.length; i++) {
			if (deviceSensors[i].DeviceSensorID == req.params.value) {
				barcTest = deviceSensors[i];
				//console.log(deviceSensors[i]);
				res.status(200).json(barcTest);
			}
		}
	}

	if (req.params.param == 'hospitalId') {

		for (var i = 0; i < hospitalAssets.length; i++) {
			if (hospitalAssets[i].hospitalId == req.params.value) {
				retData = hospitalAssets[i];
				//console.log(deviceSensors[i]);
				res.status(200).json(retData);
			}
		}
	}

})

app.listen(3017, function() {
	console.log('Example app listening on port 3017!');
})

var deviceSensors = require("./deviceSensors.json");

var hospitalAssets = [{

	hospitalId: "test-1",
	assets: [{
		deviceNumber: 3660,
		serialNumber: 141515,
		installDate: "2017-02-23T18:25:43.511Z"
	}, {
		deviceNumber: 3660,
		serialNumber: 141515,
		installDate: "2016-12-23T18:25:43.511Z"
	}]
},
{

	hospitalId: "u",
	assets: [{
		deviceNumber: 3660,
		serialNumber: 141515,
		installDate: "2017-02-23T18:25:43.511Z"
	}, {
		deviceNumber: 3660,
		serialNumber: 141515,
		installDate: "2016-12-23T18:25:43.511Z"
	}]
},
{

	hospitalId: "test-hospital9",
	assets: [{
		deviceNumber: 3660,
		serialNumber: 141515,
		installDate: "2017-02-23T18:25:43.511Z"
	}, {
		deviceNumber: 3660,
		serialNumber: 141515,
		installDate: "2016-12-23T18:25:43.511Z"
	}]
}];