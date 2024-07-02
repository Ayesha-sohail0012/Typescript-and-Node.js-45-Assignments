let size: string[] = ['medium', 'large'];

let defaultmessage = 'I Love Typescript'
let mediumshirt = (`Size of shirt is : ${size[0]}, ${defaultmessage}`)
let largeshirt =  (`Size of shirt is : ${size[1]}, ${defaultmessage}`)


let smallshirt = ('size of shirt is small and I love teaching')

let extralargeshirt = ('size of shirt is large and I love painting')

function make_tshirt(){
    let simplefunction = (mediumshirt)
    console.log(simplefunction)
    return simplefunction
}


let responce =  make_tshirt()
console.log(responce)