class Person{
  constructor(name,email,phone){
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  displayInfo(){
    document.getElementById("name").innerText = this.name;
    document.getElementById("phone").innerText = this.phone;
    document.getElementById("email").innerText = this.email;
  }
}

class Customer extends Person{
  constructor(name,phone,email,accountNumber)
  {
    super(name,phone,email);
    this.accountNumber = accountNumber;
  }
  displayInfo(){
    super.displayInfo();
    document.getElementById("accountNumber").innerText = this.accountNumber;
  }
  seeAccountBalance(){
    //any logic here
  }
}

let john = new Customer("John", "john@company.com", "7575757575", "161616161616161161")
john.displayInfo();

// let john = new Person("John", "john@company.com", "7575757575");
// john.displayInfo();
// let jane = new Person("Jane", "jane@company.com", "756767676");
// jane.displayInfo();