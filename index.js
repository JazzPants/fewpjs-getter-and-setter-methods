// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

////

    set diameter(diameter) {
        this.radius = diameter/2
    } //to actually set the property as a value
    //reverse engineer, say if we are given diameter in a new instance, make sure radius is half of that
    //diameter is a pseudo-property which we can now modify using the set method
    //we can now use Circle.diameter = ____, and then radius is automatically calculated!
    get diameter() {
        return this.diameter = this.radius * 2
    } //perform a function on radius but not actually set the property as a number that is assigned
    
////

    set circumference(newCircumference) {
        this.radius = newCircumference/(Math.PI*2)
    }

    get circumference() {
       return this.circumference = this.diameter * Math.PI
    }

////

    set area(area) {
        this.radius = Math.sqrt(area/Math.PI) 
    }

    get area() {
        return this.area = Math.PI * (this.radius)**2
    }



}




let circle1 = new Circle(6);