/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

 class Earpiececase{
    constructor(
        name,
        color,
        volume,
        price,
        weight,
        colorE,
        noisecancelling,
        eartips
    )
    {
        this.name = name;
        this.color = color;
        this.volume = volume;
        this.price = price;
        this.weight = weight;
        this.earpieces = {
            colorE: colorE,
            noisecancelling: noisecancelling,
            eartips: eartips
        };
    }
        newName(newname) {
            this.name = newname
        }

        newcolorE(newcolor) {
            this.colorE = newcolor
        }
}

 const sony = new Earpiececase(
    "sony wf 1000 xm4",
    "black",
    30,
    250,
    100,
    "black",
    true,
    "memory foam eartips"

)

const sony2 = new Earpiececase(
    "sony wf 1000 xm3",
    "grey",
    80,
    200,
    300,
    "grey",
    true,
    "rubber eartips"
)

console.log("xm4:", sony)
console.log("xm4:", sony.color)
console.log("xm3:",  sony2)
console.log("xm3:", sony2.name)
console.log("change name", sony2.newName("xm3"))
console.log("xm3 new name:", sony2.name)