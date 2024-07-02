let sizeofshirt: string[] =['small', 'medium', 'large'];
let shirt1 = "This shirt is casual wearing"
let shirt2 = "This shirt is formal wearing"
let shirt3 = "This shirt is party wearing"

function make_tshirt(){
    let simplefunction = (`This is a ${sizeofshirt[0]} shirt, and ${shirt1}`)
    console.log(simplefunction)
    return simplefunction
}


let response = make_tshirt()
console.log(response)








