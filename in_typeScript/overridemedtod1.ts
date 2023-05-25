class Laptop {
  getOS() {
    console.log("Operatiing System");
  }
}

class Macbook extends Laptop {
  getOS() {
    console.log("MacOS");
  }
}

class DellLaptop extends Laptop {
  getOS() {
    console.log("Windows");
  }
}

let obj1 = new Laptop();
let obj2 = new Macbook();
let obj3 = new DellLaptop();

obj1.getOS();
obj2.getOS();
obj3.getOS();
