class Person {
  public name: string; // เป็น public โดยค่าเริ่มต้น
  protected age: number; // เป็น protected
  private address: string; // เป็น private

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }

  protected getAge(): number {
    return this.age;
  }

  private getAddress(): string {
    return this.address;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, age: number, address: string, department: string) {
    super(name, age, address);
    this.department = department;
  }

  public getDepartment(): string {
    return this.department;
  }

  public getAge_form_mom(): number {
    return this.age;
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    // console.log(`Address: ${this.address}`);    // เรียกใช้งาน private member จากคลาสแม่ (ไม่สามารถใช้งานได้)
    console.log(`Department: ${this.department}`);
    this.greet();
    console.log(`Age (protected method): ${this.getAge()}`);
    // console.log(`Address (private method): ${this.getAddress()}`); // เรียกใช้งาน private method จากคลาสแม่ (ไม่สามารถใช้งานได้)
  }
}

const person = new Person("John", 30, "123 Main St");
// console.log(person.name);
// person.greet();

// // console.log(person.age);       // เรียกใช้งาน protectedr membe จากภายนอกคลาส (ไม่สามารถใช้งานได้)
// // console.log(person.address);   // เรียกใช้งาน private member จากภายนอกคลาส (ไม่สามารถใช้งานได้)

const em1 = new Employee("name", 19, "add", "depart");
em1.displayInfo();

//cmd run ts-node .\acces-modifiers.ts
