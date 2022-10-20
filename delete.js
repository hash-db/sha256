var fs = require('fs');
var path = require('path');

var reserved = ["con", "prn", "aux", "nul", "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9", "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"];

function deleteReservedFiles(dir) {
    var files = fs.readdirSync(dir);
    for (var i = 0; i < files.length; i++) {
        var name = path.join(dir, files[i]);
        if (fs.statSync(name).isDirectory()) {
            deleteReservedFiles(name);
        } else {
            if (reserved.indexOf(files[i]) != -1) {
                fs.unlinkSync(name);
            }
        }
    }
}

deleteReservedFiles(__dirname);
