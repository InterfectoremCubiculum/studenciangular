  import { Component } from '@angular/core'; 
  import { ValidateGradePipe } from '../validate-grade.pipe';
  import { AddStudentComponent } from "../add-student/add-student.component";
  @Component({
    selector: 'app-students',
    standalone: true,
    imports: [ValidateGradePipe, AddStudentComponent],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css'
  })
  export class StudentsComponent {
    tytul_listy: string = 'Lista wszystkich studentów';
    studenci: Student[] = [
      new Student('Adam', 'Małysz', 20, [3, 5, 2, 1]),
      new Student('Janusz', 'Kowalski', 18, [4, 3, 5, 6]),
      new Student('Edward', 'Gierek', 21, [3, 4, 3, 3]),
      new Student('Basia', 'Dasia', 22, [3, 2, 3, 4]),
      new Student('Ania', 'Fajna', 19, [2, 5, 1, 2])
    ];

    toggleAge(student: Student): void {
      student.showWiek = !student.showWiek;
    }
    toggleGrade(student: Student): void {
      student.showOceny = !student.showOceny;
    }
  }
  export class Student {
    private _imie: string;
    private _nazwisko: string;
    private _wiek: number;
    private _oceny: number[];
    public showWiek: boolean = false;
    public showOceny: boolean = false;

    public constructor(imie: string, nazwisko: string, wiek: number, oceny: number[]) {
      this._imie = imie;
      this._nazwisko = nazwisko;
      this._wiek = wiek;
      this._oceny = oceny;
    }
    get imie(): string {
      return this._imie;
    }
  
    set imie(value: string) {
      this._imie = value;
    }
  
    get nazwisko(): string {
      return this._nazwisko;
    }
  
    set nazwisko(value: string) {
      this._nazwisko = value;
    }
  
    get wiek(): number {
      return this._wiek;
    }
  
    set wiek(value: number) {
      this._wiek = value;
    }
  
    get oceny(): number[] {
      return this._oceny;
    }
  
    set oceny(value: number[]) {
      this._oceny = value;
    }
    public dodajOcena(ocena: number){
      this._oceny.push(ocena);
    }
  }