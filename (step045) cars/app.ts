function create_cars(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    }
    options.forEach(option => {
        let [key, value] = option.split(":")
        car [key.trim()] = value.trim()
    })
    return car; 
}
let my_car = create_cars("Toyota", "Corolla", "Color: Black", "Sunroof: true")

console.log(my_car);








