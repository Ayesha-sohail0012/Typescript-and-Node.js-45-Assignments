var guest_list = ["ayesha", "hina", "sawera", "simra"];
var not_coming = "hina";
var new_guest = "sobia";
guest_list[1] = new_guest;
guest_list.unshift("Hamna");
guest_list.splice(guest_list.length / 2, 2, "sahil");
guest_list.push("sadia");
console.log("n\nunfortunetly we are out of space, so have space for 1 person only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry, Dear ".concat(removed_guest, ", you are not invited for dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear  ".concat(guest_list[i], "\n\nYou are all still invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
guest_list.splice(0, 2);
console.log(guest_list);
