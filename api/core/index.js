var events = require('events');
var fs = require('fs');

var gladys = {};
gladys = new events.EventEmitter();

gladys.load = function load() {

    // require all Gladys dependencies
    gladys.alarm = require('./alarm/index.js');
    gladys.area = require('./area/index.js');
    gladys.box = require('./box/index.js');
    gladys.boxType = require('./boxtype/index.js');
    gladys.brain = require('./brain/index.js');
    gladys.calendar = require('./calendar/index.js');
    gladys.device = require('./device/index.js');
    gladys.deviceState = require('./devicestate/index.js');
    gladys.deviceType = require('./devicetype/index.js');
    gladys.event = require('./event/index.js');
    gladys.eventType = require('./eventtype/index.js');
    gladys.house = require('./house/index.js');
    gladys.location = require('./location/index.js');
    gladys.machine = require('./machine/index.js');
    gladys.mode = require('./mode/index.js');
    gladys.module = require('./module/index.js');
    gladys.notification = require('./notification/index.js');
    gladys.param = require('./param/index.js');
    gladys.room = require('./room/index.js');
    gladys.sentence = require('./sentence/index.js');
    gladys.scenario = require('./scenario/index.js');
    gladys.scheduler = require('./scheduler/index.js');
    gladys.script = require('./script/index.js');
    gladys.socket = require('./socket/index.js');
    gladys.task = require('./task/index.js');
    gladys.token = require('./token/index.js');
    gladys.update = require('./update/index.js');
    gladys.user = require('./user/index.js');
    gladys.utils = require('./utils/index.js');
    gladys.weather = require('./weather/index.js');

    // get Gladys version number
    try {
        var json = JSON.parse(fs.readFileSync('package.json'));
        gladys.version = json.version;
        sails.log.info('Gladys version : ' + gladys.version);
    } catch (e) {
        sails.log.warn('Cannot parse package.json');
    }
    
    // init tasks
    gladys.task.init();
    
    // gladys is ready
    gladys.emit('ready');
};

module.exports = gladys;
