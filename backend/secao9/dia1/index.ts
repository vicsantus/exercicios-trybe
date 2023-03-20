class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(nm: string, bd: Date) {
    this._name = nm;
    this._birthDate = bd;
  }

  get name() {
    return this._name;
  }

  set name(nm: string) {
    if (nm.length >= 3) this._name = nm;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(bd: Date) {
    const timeDiff = Math.abs(Date.now() - new Date(bd).getTime())
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    const verifica = Date.now() > new Date(bd).getTime();
    if (verifica && age < 120) this._birthDate = bd;
  }
}

class Student extends Person {
  private _enrollment: number = 0;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(ps: Person, exg: number[], assg: number[]) {
    super(ps.name, ps.birthDate);
    this._enrollment++;
    this._examsGrades = exg;
    this._assignmentsGrades = assg;
  }

  get enrollment() {
    return this._enrollment;
  }

  addEnrollment() {
    this._enrollment++;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(exg) {
    if (exg.length > 0 && exg.length < 5) this._examsGrades = exg;
  }

  get assignmentsGrades() {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(assg: number[]) {
    this._assignmentsGrades = assg;
  }
}

const victor = new Person('Victor',
new Date(Date.parse('September 05, 1992')))

victor.birthDate = new Date(Date.parse('September 08, 2024'));
// console.log(victor.birthDate);

const studentVictor = new Student(victor, [10, 9.5, 10], [10, 10, 10]);
studentVictor.examsGrades = [10, 10, 10]
studentVictor.examsGrades = [10, 10, 9.5, 10, 10]

console.log(studentVictor.examsGrades);
