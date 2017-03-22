var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Test barcode API');
})

app.get('/:asset/by/:param/:value', function (req, res) {
  //console.log(req.params);
  //var barc_test = '{"text": "12345", "format":"EAN-13", "cancelled": false}';
  var barcTest = {}
  //barcTest.deviceNumber = req.params.value;

for(var i = 0; i < deviceSensors.length; i++)
{
  if(deviceSensors[i].DeviceSensorID == req.params.value)
  {
    barcTest = deviceSensors[i];
    //console.log(deviceSensors[i]);
    res.status(200).json(barcTest);
  }
}

})

app.listen(3017, function () {
  console.log('Example app listening on port 3017!');
})

var deviceSensors = [{"Type":"DEVICE","DeviceSensorID":9190,"NameDescription":"Rad-8®, HorizontalComes with either an LNOP® or LNCS® Patient Cable and a power cord."},
{"Type":"DEVICE","DeviceSensorID":9191,"NameDescription":"Rad-8, VerticalComes with either an LNOP or LNCS Patient Cable and a power cord."},
{"Type":"DEVICE","DeviceSensorID":9196,"NameDescription":"Rad-5® Pulse OximeterComes with a Red DCI®-DC3 Sensor and choice of patient cable, a choice of available Colors of Handheld Boots and a choice of operator's manual.  Shown in optional handheld boot and with DCSC Sensor."},
{"Type":"DEVICE","DeviceSensorID":9198,"NameDescription":"Rad-5 Pulse Oximeter with Sample PackComes with choice of LNCS or LNOP Sensor Sample Pack and LNOP Patient Cable, a choice of available Colors of Handheld Boots and a choice of operator's manual.  Shown in optional handheld boot and with DCSC Sensor."},
{"Type":"DEVICE","DeviceSensorID":9214,"NameDescription":"Rad-5 Pulse Oximeter (International Only)Comes with an LNOP DCSC Sensor, a choice of available Colors of Handheld Boots and a choice of operators manual.  Shown in optional handheld boot and with DCSC Sensor"},
{"Type":"DEVICE","DeviceSensorID":9197,"NameDescription":"Rad-5v® Pulse OximeterComes with a Red DCI-DC3 Sensor and choice of patient cable, a choice of available colors of Handheld Boots and a choice of operator's manual.  Shown in optional handheld boot and with DCSC Sensor."},
{"Type":"DEVICE","DeviceSensorID":9199,"NameDescription":"Rad-5v Pulse Oximeter (International Only)Comes with an LNOP DCSC Sensor, a choice of available Colors of Handheld Boots and a choice of operator's manual.  Shown in optional handheld boot and with DCSC Sensor."},
{"Type":"DEVICE","DeviceSensorID":9500,"NameDescription":"Radical-7® HandheldIncludes SpO2, Pulse Rate and Perfusion Index (PI) parameters as well as one Red LNOP®, Red LNCS® or rainbow® Patient Cable. Can be configured with optional rainbow parameters and features: • Total Hemoglobin (SpHb®) • Oxygen Content (SpOC) • Methemoglobin (SpMet®) • Carboxyhemoglobin (SpCO®) • Pleth Variability Index (PVI®) • Oxygen Reserve IndexTM (ORITM) This unit ships standard with a 802.11 wireless radio.  Can be loaded with Respiration Rate from Pleth (RRpTM) and Adaptive Threshold Alarms (ATA) in cleared countries only.  Check with customer service on availability.  Optional rainbow parameters and features are sold separately and can be added to this unit upon request. The Radical-7 is compatible with all Radical® Docking Stations.  Available in countries where cleared. ORI parameter requires Root® Docking Station."},
{"Type":"DEVICE","DeviceSensorID":9021,"NameDescription":"Radical Docking Station, RDSTM-1Comes with a choice of power cord and serial output connector, Analog output / nurse call connector and SatShare® cable connector."},
{"Type":"DEVICE","DeviceSensorID":9023,"NameDescription":"Radical Docking Station, RDS-3 limited communication capabilities Comes with choice of power cord and serial output connector and Analog output / nurse call connector."},
{"Type":"DEVICE","DeviceSensorID":9226,"NameDescription":"Rad-87®, HorizontalIncludes SpO2, Pulse Rate and Perfusion Index (PI) parameters.  Includes either Red LNCS, Red LNOP or rainbow RC Patient Cable.  Can be configured with optional rainbow parameters and features: • Total Hemoglobin (SpHb) • Oxygen Content (SpOC) • Methemoglobin (SpMet) • Carboxyhemoglobin (SpCO) • Pleth Variability Index (PVI) • Acoustic Respiration (RRa®) Comes with serial output connector and Analog output / Nurse Call connector.  rainbow Acoustic Monitoring® capable.  Optional rainbow parameters and features are sold separately and can be added to this unit upon request.  Available in countries where cleared."},
{"Type":"DEVICE","DeviceSensorID":9228,"NameDescription":"Rad-87, VerticalIncludes SpO2, Pulse Rate and Perfusion Index (PI) parameters.  Includes either a Red LNCS, Red LNOP or rainbow RC Patient Cable.  Can be configured with optional rainbow parameters and features: • Total Hemoglobin (SpHb) • Oxygen Content (SpOC) • Methemoglobin (SpMet) • Carboxyhemoglobin (SpCO) • Pleth Variability Index (PVI) • Acoustic Respiration (RRa) Comes with serial output connector and Analog output / Nurse Call connector.  rainbow Acoustic Monitoring capable.  Optional rainbow parameters and features are sold separately and can be added to this unit upon request.  Available in countries where cleared."},
{"Type":"DEVICE","DeviceSensorID":9664,"NameDescription":"Kit, Radius-7®Includes SpO2, Pulse Rate, Perfusion Index (PI) parameters, and Acoustic Respiration (RRa).Can be configured with optional rainbow parameters and features in cleared countries only.  Check with customer service on availability: • Total Hemoglobin (SpHb) • Oxygen Content (SpOC) • Methemoglobin (SpMet) • Carboxyhemoglobin (SpCO) • Pleth Variability Index (PVI) Bluetooth radio allows for transfer of parameter data to the Root patient monitoring and connectivity platform.  Available in countries where cleared."},
{"Type":"DEVICE","DeviceSensorID":9167,"NameDescription":"Pronto® Spot Check Pulse CO-Oximeter®Includes SpO2, Pulse Rate, Perfusion Index (PI) and SpHb parameters.  rainbow Sensor not included.  rainbow Sensor must be ordered separately."}, {"Type":"DEVICE","DeviceSensorID":9216,"NameDescription":"Rad-57® Configurable Pulse CO-Oximeter Includes SpO2, Pulse Rate and Perfusion Index (PI) parameters.  The Rad-57 can ship with or be field upgraded with: • Total Hemoglobin (SpHb) • Oxygen Content (SpOC) • Methemoglobin (SpMet) • Carboxyhemoglobin (SpCO) • Pleth Variability Index (PVI) When shipped with rainbow parameters, rainbow Sensor must be purchased separately.  rainbow Sensors not included.  9216-U is for SpO2 only Devices.  Refer to Handheld Device accessories for available colors.  Shown with rainbow Adult Reusable Sensor and in optional protective boot."},
{"Type":"rainbow Acoustic MonitoringTM Sensor and Cables (for rainbow Acoustic Monitoring Devices with RRa®)","DeviceSensorID":null,"NameDescription":""},
{"Type":"SENSOR","DeviceSensorID":3475,"NameDescription":"RAS-125c, Acoustic Respiration Cloth SensorAdult / Pediatric Adhesive Sensors (RRa) Single patient use 10 / box, non-sterile Weight > 10kg Not made with natural rubber latex"}, {"Type":"SENSOR","DeviceSensorID":3483,"NameDescription":"RAS-125c, Short Term Monitoring Acoustic Respiration Cloth SensorAdult / Pediatric Adhesive Sensors (RRa) Single patient use 10 / box, non-sterile Weight > 10kg Not made with natural rubber latex."},
{"Type":"SENSOR","DeviceSensorID":3503,"NameDescription":"RAM™ Dual Cable RC25-10For use with RAM RAS Series and rainbow or M-LNCS sensors, 10 ft.  1 / box"},
{"Type":"SENSOR","DeviceSensorID":3906,"NameDescription":"RAM Dual Cable, Red 25 LNC-10For use with RAM RAS Series and LNCS sensors, 10 ft.  1 / box"},
{"Type":"SENSOR","DeviceSensorID":3660,"NameDescription":"RAM Dual Cable RC-10For use with RAM RAS and rainbow® or M-LNCS™ sensors 1 / box"},
{"Type":"SENSOR","DeviceSensorID":3661,"NameDescription":"RAM Dual Cable LNC-10For use with RAM RAS and SpO2 LNCS® sensors 1 / box"},
{"Type":"rainbow® Adhesive Sensors (for rainbow SET™ Devices with SpHb®, SpO2, and SpMet®)","DeviceSensorID":null,"NameDescription":""},
{"Type":"SENSOR","DeviceSensorID":3792,"NameDescription":"rainbow R1 25Adult Adhesive Sensors (SpHb, SpO2, SpMet) Single patient use 10 / box, non-sterile Weight >30 kg Not made with natural rubber latex.  Requires rainbow RC patient cable"}, {"Type":"SENSOR","DeviceSensorID":3793,"NameDescription":"rainbow R1 20Pediatric / Slender Digit Adhesive Sensors (SpHb, SpO2, SpMet) Single patient use 10 / box, non-sterile Weight 10 kg – 50 kg Not made with natural rubber latex.  Requires rainbow RC patient cable"},
{"Type":"SENSOR","DeviceSensorID":2414,"NameDescription":"rainbow R1 25LAdult / Neonatal Adhesive Sensors (SpHb, SpO2, SpMet) Single patient use 10 / box, non-sterile Weight <3 kg* or >30 kg Not made with natural rubber latex.  Use replacement tape 2623.  Requires rainbow RC patient cable *SpO2 And SpMet only"},
{"Type":"SENSOR","DeviceSensorID":2415,"NameDescription":"rainbow R1 20LInfant Adhesive Sensors (SpHb, SpO2, SpMet) Single patient use 10 / box, non-sterile Weight 3 kg – 30 kg Not made with natural rubber latex.  Use replacement tape 2624.  Requires rainbow RC patient cable"}, {"Type":"","DeviceSensorID":null,"NameDescription":""},
{"Type":"rainbow® Adhesive Sensors (for rainbow SET™ Devices with SpO2, SpCO®, and SpMet®)","DeviceSensorID":null,"NameDescription":""},
{"Type":"SENSOR","DeviceSensorID":2221,"NameDescription":"rainbow R25Adult Adhesive Sensors (SpO2, SpCO, SpMet) Single patient use 10 / box, non-sterile Weight >30 kg Not made with natural rubber latex.  Requires rainbow RC patient cable"},
{"Type":"SENSOR","DeviceSensorID":2222,"NameDescription":"rainbow R20Pediatric Adhesive Sensors (SpO2, SpCO, SpMet) Single patient use 10 / box, non-sterile Weight 10 kg – 50 kg Not made with natural rubber latex.  Requires rainbow RC patient cable"},
{"Type":"SENSOR","DeviceSensorID":2219,"NameDescription":"rainbow R25-LAdult / Neonatal Adhesive Sensors (SpO2, SpCO, SpMet) Single patient use 10 / box, non-sterile Weight <3 kg* or >30 kg Not made with natural rubber latex.  Use replacement tape 2623.  Requires rainbow RC patient cable *SpO2 And SpMet only"},
{"Type":"SENSOR","DeviceSensorID":2220,"NameDescription":"rainbow R20-LInfant Adhesive Sensors (SpO2, SpCO, SpMet) Single patient use 10 / box, non-sterile Weight 3 kg – 30 kg Not made with natural rubber latex.  Use replacement tape 2624.  Requires rainbow RC patient cable"},
{"Type":"","DeviceSensorID":null,"NameDescription":""},
{"Type":"rainbow ReSposable® Sensors (for rainbow SET™ Devices with SpHb®, SpO2, and SpMet®)","DeviceSensorID":null,"NameDescription":""},
{"Type":"SENSOR","DeviceSensorID":3457,"NameDescription":"rainbow ReSposable R2-25 Sensor SystemAdult R2-25a disposable optical sensors and R2-25r reusable optical sensors (SpO2, SpHb, SpMet) 20 R2-25a / box (DOS) 1 R2-25r / box (ROS™) Non-sterile Weight > 30 kg Not made with natural rubber latex.  Requires rainbow RC patient cable"},
{"Type":"SENSOR","DeviceSensorID":3458,"NameDescription":"rainbow ReSposable R2-20 Sensor SystemPediatric R2-20a disposable optical sensors and R2-20r reusable sensors (SpO2, SpHb, SpMet) 20 R2-20a / box (DOS) 1 R2-20r / box (ROS) Non-sterile Weight 10 kg – 50 kg Not made with natural rubber latex.  Requires rainbow RC patient cable"},
{"Type":"SENSOR","DeviceSensorID":3395,"NameDescription":"rainbow ReSposable R2-25r SensorsAdult R2-25r reusable optical sensors (SpO2, SpHb, SpMet) 5 R2-25r / box (ROS) Non-sterile Weight > 30 kg Not made with natural rubber latex.  Requires R2-25a"},
{"Type":"SENSOR","DeviceSensorID":3411,"NameDescription":"rainbow ReSposable R2-20r SensorsPediatric / Slender Digit R2-20r reusable optical sensors (SpO2, SpHb, SpMet) 5 R2-20r / box (ROS) Non-sterile Weight 10 – 50 kg Not made with natural rubber latex.  Requires R2-20a"},
{"Type":"SENSOR","DeviceSensorID":2753,"NameDescription":"rainbow ReSposable R2-25a SensorsAdult R2-25a disposable optical sensors (SpO2, SpHb, SpMet) 25 R2-25a / box (DOS) Non-sterile Weight > 30 kg Not made with natural rubber latex.  Requires R2-25r"},
{"Type":"SENSOR","DeviceSensorID":2755,"NameDescription":"rainbow ReSposable R2-20a SensorsPediatric / Slender Digit R2-20a disposable optical sensors (SpO2, SpHb, SpMet) Single patient use 25 R2-20a / box (DOS) Non-sterile Weight 10 – 50 kg Not made with natural rubber latex.  Requires R2-20r"},
{"Type":"rainbow® Reusable Spot Check Sensors (for rainbow SET™ Devices with SpHb®, SpO2, SpMet®; SpHb required)","DeviceSensorID":null,"NameDescription":""},
{"Type":"SENSOR","DeviceSensorID":3418,"NameDescription":"rainbow DCI® SC 200Adult reusable sensor, 3 ft.  (SpHb, SpO2 and SpMet) Weight > 30 kg Not made with natural rubber latex.  200 Spot Checks Requires rainbow RC Patient Cable"},
{"Type":"SENSOR","DeviceSensorID":3419,"NameDescription":"rainbow DCI-P SC 200Pediatric reusable sensor, 3 ft.  (SpHb, SpO2 and SpMet) Weight 10 – 50 kg Not made with natural rubber latex.  200 Spot Checks Requires rainbow RC Patient Cable"},
{"Type":"SENSOR","DeviceSensorID":3420,"NameDescription":"rainbow DCI SC 400Adult reusable sensor, 3 ft.  (SpHb, SpO2 and SpMet) Weight > 30 kg Not made with natural rubber latex.  400 Spot Checks Requires rainbow RC Patient Cable"},
{"Type":"SENSOR","DeviceSensorID":3421,"NameDescription":"rainbow DCI-P SC 400Pediatric reusable sensor, 3 ft.  (SpHb, SpO2 and SpMet) Weight 10 – 50 kg Not made with natural rubber latex.  400 Spot Checks Requires rainbow RC Patient Cable"},
{"Type":"SENSOR","DeviceSensorID":3647,"NameDescription":"rainbow DCI SC 1000Adult reusable sensor, 3 ft.  (SpHb, SpO2 and SpMet) Weight > 30 kg Not made with natural rubber latex.  1000 Spot Checks Requires rainbow RC Patient Cable"},
{"Type":"SENSOR","DeviceSensorID":3648,"NameDescription":"rainbow DCI-P SC 1000Pediatric reusable sensor, 3 ft.  (SpHb, SpO2 and SpMet) Weight 10 – 50 kg Not made with natural rubber latex.  1000 Spot Checks Requires rainbow RC Patient Cable"},
{"Type":"SENSOR","DeviceSensorID":3797,"NameDescription":"rainbow DCI-mini SC 200infant reusable sensor.  (SpHb, SpO2 and SpMet) Weight 3 – 30 kg Not made with natural rubber latex.  200 Spot Checks Requires rainbow RC Patient Cable Not For Sale in USA For Export Only"},
{"Type":"SENSOR","DeviceSensorID":3798,"NameDescription":"rainbow DCI-mini SC 400infant reusable sensor.  (SpHb, SpO2 and SpMet) Weight 3 – 30 kg Not made with natural rubber latex.  400 Spot Checks Requires rainbow RC Patient Cable Not For Sale in USA For Export Only"},
{"Type":"SENSOR","DeviceSensorID":3799,"NameDescription":"rainbow DCI-mini SC 1000infant reusable sensor.  (SpHb, SpO2 and SpMet) Weight 3 – 30 kg Not made with natural rubber latex.  1000 Spot Checks Requires rainbow RC Patient Cable Not For Sale in USA For Export Only"}];
