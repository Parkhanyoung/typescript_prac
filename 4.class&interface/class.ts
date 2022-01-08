abstract class Department {
  // private id: string; // 여기서 설정할 필요없이 생성자 함수의 매개변수에서만 설정해도 된다[public을 명시해야 함]
  // public name: string;
  // private employees: string[] = []; // private: 해당 클래스 외부(상속된 클래스도 외부임)에서 접근이 불가능하다.
  protected employees: string[] = []; // protected: private과 동일하나, 상속된 클래스에서는 접근이 가능하다.
  constructor(private readonly id: string, public name: string) {
  }
  
  addEmployee(name: string) {
    this.employees.push(name);
  }
  
  abstract describe(this: Department): void;
}

const accounting = new Department('d1', 'Accounting'); // abstract 클래스는 생성자로 사용할 수 없다.
                                                       // 반드시 상속하여 다른 클래스를 만들어야 한다.
                                  // 또한 abstract 메소드는 하위 클래스 내부에서 필수적으로 구현해야 한다.

// # describe의 매개변수 this에 타입을 부여함으로써 일어나는 일
const accountingCopied1 = { describe: accounting.describe };
accountingCopied1.describe(); // Department object가 아니기에 에러 발생

// # private 키워드를 사용함으로써 일어나는 일
accounting.addEmployee('employee1'); // 클래스에 정의된 메소드를 통해 employees 프로퍼티에 접근 가능
accounting.employees[1] = 'employee1'; // employees는 private 프로퍼티이기 때문에 직접 접근 불가능


// 상속(inheritance)
class ITDepartment extends Department {
  admins: string[];
  private static instance: ITDepartment;
  static fiscalYear = 2020;
  private lastReport: string
  
  private constructor(id: string, admins: string[], private reports: string[]) {
    super(id, 'IT'); // constructor를 자식 클래스에서 명시할 경우 super()를 통해 부모의 생성자를 실행해주어야 한다.
    this.admins = admins;
    this.lastReport = reports[this.reports.length - 1];
  }
  
  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance;
    } 
    this.instance = new ITDepartment('d1', ['admin1'], ['report1']);
    return this.instance;
  }

  describe(this: Department): void {
    
  }

  getFiscalYear() {
    console.log(this.fiscalYear); // static 프로퍼티이므로 인스턴스를 가리키는 this 키워드를 통해 접근할 수 없다.
    console.log(ITDepartment.fiscalYear) // 이처럼 class를 통해 접근할 수 있다.
  }
  
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }
  
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }
  
  // 부모의 메소드를 오버라이드
  addEmployee(name: string) {
    if (name === 'park'){
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  
  static createEmployee(name: string) {
    return { name: name };
  }
}

const ITdepartment1 = new ITDepartment('d1', ['Park'], []); // 개인 생성자를 사용했으므로
                                                            // 클래스 외부에서 생성자를 직접 호출할 수 없다.
const ITdepartment2 = ITDepartment.getInstance(); // 이와 같이 지정해둔 메소드를 통해 생성자를 간접적으로 호출한다.


// getter
ITdepartment2.mostRecentReport // getter 함수 내부의 로직으로 인하여 에러가 반환된다.
ITdepartment2.addReport('something went wrong...');
console.log(ITdepartment2.mostRecentReport); // 'something went wrong'

// setter
ITdepartment2.mostRecentReport = ''; // setter 함수 내부의 로직으로 인하여 에러가 반환된다.
ITdepartment2.mostRecentReport = 'Year end report'; // successfully added


