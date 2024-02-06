import { Component } from '@angular/core';
import { Person } from './Class/Person';
@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.css',
})
export class Example1Component {
  person = new Person();
  initPerson(ls: string, a: string, s: string) {
    try {
      let age = parseInt(a);
      let salary = parseFloat(s);
      if (age >= 0 && salary >= 0) {
        this.person.LastName = ls;
        this.person.Age = age;
        this.person.Salary = salary;
      } else
        throw new Error('Помилка Зарплатня або вік повинні бути додатніми');
    } catch {
      alert('Помилка у вхідних даних');
    }
  }
}
