function show_magiacians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ['David cooperfield', 'Criss angel', 'David Blaine', 'Penn & Teller'];
var great_magicians = make_great(magician_name);
show_magiacians(great_magicians);
