#! /usr/bin/env node
import inquirer from "inquirer";
class institute{
    name:string;
    student:any=[];
    addStudent(studentObj:student){
        this.student.push(studentObj);
    }
    constructor(name:string){
        this.name = name;
    }
}
class student{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Course{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Teacher{
    name:string;
    course:any[]=[];
    addCourse(courseObj:Course){
        this.course.push(courseObj)
    }
    constructor(name:string){
        this.name = name;
    }
}
let i1 = new institute("Lead University ");
let studentobj1 = new student("Alisha");
let c1 =new Course("Cs");
let t1 = new Teacher("Alisha")
i1.addStudent(studentobj1)
console.log(i1)
t1.addCourse(c1);
console.log(t1);