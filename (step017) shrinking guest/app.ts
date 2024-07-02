let guest_list: string[] = [ `ayesha`, `hina`, `sawera`, `simra`];

let not_coming: string =`hina`;
let new_guest: string = `sobia`;
guest_list[1] = new_guest;



guest_list.unshift(`Hamna`);
guest_list.splice(guest_list.length/2, 2, "sahil" );
guest_list.push("sadia");

console.log(`n\nunfortunetly we are out of space, so have space for 1 person only.\n\n`);
while(guest_list.length>2){
    let removed_guest = guest_list.pop();
    console.log(`Sorry, Dear ${removed_guest}, you are not invited for dinner tomorrow`);
}
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear  ${guest_list[i]}\n\nYou are all still invited for a dinner tomorrow.\n\nThank you.\n\n`);
}
guest_list.splice(0,2);
console.log(guest_list);
