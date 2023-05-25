abstract class DataManager<T> {
  protected data: T[];

  constructor() {
    this.data = [];
  }

  abstract processData(data: T): void;

  addData(data: T): void {
    this.data.push(data);
    this.processData(data);
  }

  getData(): T[] {
    return this.data;
  }
}

class NumberManager extends DataManager<number> {
  processData(data: number): void {
    console.log(`Processing number: ${data}`);
  }
}

class PersonManager extends DataManager<string> {
  processData(data: string): void {
    console.log(`Processing person: ${data}`);
  }
}

const numberManager = new NumberManager();
numberManager.addData(10);
numberManager.addData(20);
console.log(numberManager.getData());
// ผลลัพธ์: [10, 20]
// และแสดงคำว่า "Processing number: 10" และ "Processing number: 20"

//   const personManager = new PersonManager();
//   personManager.addData("John");
//   personManager.addData("Jane");
//   console.log(personManager.getData());
//   // ผลลัพธ์: ["John", "Jane"]
//   // และแสดงคำว่า "Processing person: John" และ "Processing person: Jane"
