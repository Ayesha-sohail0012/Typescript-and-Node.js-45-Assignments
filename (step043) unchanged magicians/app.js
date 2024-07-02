function show_magiacians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ['David cooperfield', 'Criss angel', 'David Blaine', 'Penn & Teller'];
var copy_magicians_names = magician_name.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("original array\n");
show_magiacians(magician_name);
console.log("copied array\n");
show_magiacians(copy_great_magicians);
