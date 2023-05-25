abstract class Children {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  abstract find(rollNo: number): Children;
}

class Student extends Children {
  rollNo: number;

  constructor(name: string, rollNo: number) {
    super(name); // must call super()
    this.rollNo = rollNo;
  }

  find(rollNo: number): Children {
    /* 
      *
      *
      perfom db query to find 
      a student of the specific rollNo
      let the student be Luigi with roll no 101
      *
      *
      */
    let roll: number = 101;
    let name: string = "Luigi";
    return new Student(name, roll);
  }
}

let emp: Children = new Student("John", 100);
emp.display();

let emp2: Children = emp.find(101);
emp2.display();
