
let cachedUIDGenerator = undefined;
let cachedSafeUid = undefined;

function initCache(){
    if(cachedUIDGenerator === undefined){
        cachedUIDGenerator = require("./lib/uidGenerator").createUidGenerator(200, 32);
        let  sfuid = require("./lib/safe-uuid");
        sfuid.init(cachedUIDGenerator);
        cachedSafeUid = sfuid.safe_uuid;
    }
}

module.exports = {
    get generateUid(){
        initCache();
        return cachedUIDGenerator.generateUid;
    },
     safe_uuid: function(){
         initCache();
         return cachedSafeUid();
    }
};

module.exports.OwM = require("./lib/OwM");
module.exports.beesHealer = require("./lib/beesHealer");
module.exports.Queue = require("./lib/Queue");
module.exports.combos = require("./lib/Combos");
module.exports.TaskCounter = require("./lib/TaskCounter");
module.exports.SwarmPacker = require("./lib/SwarmPacker");
module.exports.path = require("./lib/path");
module.exports.createPskConsole = function () {
    return require('./lib/pskconsole');
};

module.exports.pingPongFork = require('./lib/pingpongFork');


module.exports.ensureIsBuffer = function (data) {
    if ($$.Buffer.isBuffer(data)) {
        return data;
    }
    let buffer;
    if (ArrayBuffer.isView(data)) {
        buffer = $$.Buffer.from(data.buffer)
    } else {
        buffer = $$.Buffer.from(data);
    }
    return buffer;
}
