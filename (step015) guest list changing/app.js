"use strict";
let guest_list = [`ayesha`, `hina`, `sawera`, `simra`];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear  ${guest_list[i]}\n\nYou are invited for a dinner tomorrow at my home.\n\nThank you.\n`);
}
let not_coming = `hina`;
let new_guest = `sobia`;
guest_list[1] = new_guest;
for (let i = 1; i < guest_list.length; i++) {
    console.log(`Dear  ${guest_list[i]}\n\nYou are invited for a dinner tomorrow at my home.\n\nThank you.\n`);
}
console.log(`miss ${not_coming}, is not coming for dinner tomorrow.`);
