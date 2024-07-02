// function make_album1(artistname:string , albumtitle: string) {
//     return{artistname, albumtitle}
// }
// let album1 = make_album1(`Ali zafar`,`Psl song`);
// let album2 = make_album1(`Atif aslam`,`Ipl song`);
// let album3 = make_album1(`Asimazhar`,`Cpl song`);
// console.log(album1)
// console.log(album2)
// console.log(album3)
//  It includes tracks number
function make_album2(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = make_album2("Ali zafar", "Psl song", 20);
var album5 = make_album2("Atif aslam", "Ipl song", 30);
var album6 = make_album2("Asimazhar", "Cpl song");
console.log(album4);
console.log(album5);
console.log(album6);
