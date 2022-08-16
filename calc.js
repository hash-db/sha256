var crypto = require('crypto');
var fs = require('fs');
var length = 5;
function product(iterables, repeat) {
    var argv = Array.prototype.slice.call(arguments), argc = argv.length;
    if (argc === 2 && !isNaN(argv[argc - 1])) {
        var copies = [];
      for (var i = 0; i < argv[argc - 1]; i++) {
          copies.push(argv[0].slice()); // Clone
      }
      argv = copies;
    }
    return argv.reduce(function tl(accumulator, value) {
      var tmp = [];
      accumulator.forEach(function(a0) {
        value.forEach(function(a1) {
          tmp.push(a0.concat(a1));
        });
      });
      return tmp;
    }, [[]]);
  }
var name = product('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.match(/.{1}/g), length);

fs.mkdir('encrypt/' + length, (err) => {
    for (let i = 0; i < name.length; i++) {
        var hash = crypto.createHash('sha256').update(name[i].join("")).digest('hex');
        fs.writeFileSync('encrypt/' + length + "/" + name[i].join(""), hash);
        fs.writeFileSync('decrypt/' + hash, name[i].join(""));
        console.log(name[i].join("") + ":" + hash);
    }
});
