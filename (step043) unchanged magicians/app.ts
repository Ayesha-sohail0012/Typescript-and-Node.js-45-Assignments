function show_magiacians(magician:string[]) {
    magician.forEach(name => console.log(name)
);
}



    function make_great(magician:string[]) {
        return magician.map(name => `The Great ${name}`)
    }

    let magician_name  = ['David cooperfield','Criss angel','David Blaine','Penn & Teller']
     

    let copy_magicians_names = magician_name.slice()


    let copy_great_magicians = make_great(copy_magicians_names)

    console.log("original array\n");
    show_magiacians(magician_name)
    console.log("copied array\n");
    show_magiacians(copy_great_magicians)
    
    
    