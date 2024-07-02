var size = ['medium', 'large'];
var defaultmessage = 'I Love Typescript';
var mediumshirt = ("Size of shirt is : ".concat(size[0], ", ").concat(defaultmessage));
var largeshirt = ("Size of shirt is : ".concat(size[1], ", ").concat(defaultmessage));
var smallshirt = ('size of shirt is small and I love teaching');
var extralargeshirt = ('size of shirt is large and I love painting');
function make_tshirt() {
    var simplefunction = (mediumshirt);
    console.log(simplefunction);
    return simplefunction;
}
var responce = make_tshirt();
console.log(responce);
