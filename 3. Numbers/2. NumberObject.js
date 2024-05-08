const floor = Math.floor(0.9) //rounds down to the nearest integer
const round = Math.round(0.9) //rounds to nearest integer
const ceil = Math.ceil(0.4) //rounds upto the nearest integer

// Number.Epilson returns the smallest interval between 2 representable numbers
const numberEquals = (x, y)=>{
    return Math.abs(x, y) // -5 and 5 have the same absolute value
}
//This works by checking whether the difference between the 2 numbers are smaller than Number.Epilson.
// The diffrence between 0.1 + 0.2 and 0.3 will be smaller than Number.Epilson
const result = numberEquals(10 + 10, -10)


console.log(result)