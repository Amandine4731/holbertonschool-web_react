export interface Teacher {
    readonly firstName: string;
    readonly astName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName){
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher("Amandine", "Assenat"))

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

export class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}


const student: StudentClassInterface = new StudentClass("Ammandine", "Assenat");

console.log(student.displayName());
console.log(student.workOnHomework());