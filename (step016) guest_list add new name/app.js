var guest_list = ["ayesha", "hina", "sawera", "simra"];
var not_coming = "hina";
var new_guest = "sobia";
guest_list[1] = new_guest;
for (var i = 1; i < guest_list.length; i++) {
    console.log("Dear  ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow at my home.\n\nThank you.\n"));
}
console.log("miss ".concat(not_coming, ", is not coming for dinner tomorrow."));
guest_list.unshift("Hamna");
guest_list.splice(guest_list.length / 2, 2, "sahil");
guest_list.push("sadia");
for (var i = 1; i < guest_list.length; i++) {
    console.log("Dear  ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow at my home.\n\nThank you.\n"));
}
console.log("we have found a bigger dinner table so we invited more guest");
