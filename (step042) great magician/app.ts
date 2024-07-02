function show_magiacians(magician:string[]) {
    magician.forEach(name => console.log(name)
);
}



    function make_great(magician:string[]) {
        return magician.map(name => `The Great ${name}`)
    }

    let magician_name  = ['David cooperfield','Criss angel','David Blaine','Penn & Teller']
     

let great_magicians =  make_great(magician_name);

show_magiacians(great_magicians)

