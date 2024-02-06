export class Person {
  private lastname: string = '';
  private status: string = '';
  private age: number = 0;
  private salary: number = 0;
  public get LastName(): string {
    return this.lastname;
  }
  public set LastName(ls: string) {
    if (this.lastname == '') this.lastname = ls;
  }
  public get Status(): string {
    return this.status;
  }
  public set Salary(s: number) {
    if (s > 0) this.salary = s;
  }
  public get Age(): number {
    return this.age;
  }
  public set Age(a: number) {
    if (a > 0) {
      this.age = a;
      if (this.age < 7) this.status = 'Малюк';
      else if (this.age < 17) this.status = 'Школяр';
      else if (this.age < 22) this.status = 'Студент';
      else this.status = 'Людина, що працює';
    }
  }
}
