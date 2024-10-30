class Student {
    #name;
    #id;
    #status;
  
    constructor(name, id) {
      this.#name = name;
      this.#id = id;
      this.#status = "Active";
    }
  
    getId() {
      return this.#id;
    }
  
    setName(name) {
      this.#name = name;
    }
  
    getName() {
      return this.#name;
    }
  
    setStatus(status) {
      const validStatuses = ["Active", "Expelled", "Finished", "Inactive"];
      if (validStatuses.includes(status)) {
        this.#status = status;
      }
    }
  
    getStatus() {
      return this.#status;
    }
  }
  
  // Testimine
  const student = new Student("Bob", 123);
  console.log(student.getId());
  student.setStatus("Finished");
  console.log(student.getStatus());
  