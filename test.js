var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log("driver name is " + this.driver);
  };
};

var myCar = new Car(90, "Damian");
var myCar2 = new Car(34, "Damian2");
var myCar3 = new Car(58, "Damian3");
var myCar4 = new Car(10, "Damian4");
