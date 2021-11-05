var myCar2 = {
  maxSpeed: 70,
  driver: "Net Ninja",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
  logDriver: function () {
    console.log("driver name is " + this.driver);
  },
};

var myCar3 = {
  maxSpeed: 90,
  driver: "Damian",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
myCar2.drive(35, 4);
myCar2.test();
myCar3.test();
myCar2.logDriver();
