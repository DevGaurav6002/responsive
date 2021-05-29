function Person() {
    this.name = "Harry";
    this.age = "21";
}
  Person.prototype.getInfo = function() {
    console.log(this.name , this.age);
  }
let p1 = new Person();
p1.getInfo();

function Employee() {
    this.position = "Manager";
    this.salary = "25000";
    this.getBio = function() {
        console.log("position" +this.position+ "salary" +this.salary);
    }
}
let e1 = new Employee();
// e1 = Object.create(Person);
console.log(e1);
