#! /usr/bin/env node
class institute {
    name;
    student = [];
    addStudent(studentObj) {
        this.student.push(studentObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Teacher {
    name;
    course = [];
    addCourse(courseObj) {
        this.course.push(courseObj);
    }
    constructor(name) {
        this.name = name;
    }
}
let i1 = new institute("Lead University ");
let studentobj1 = new student("Alisha");
let c1 = new Course("Cs");
let t1 = new Teacher("Alisha");
i1.addStudent(studentobj1);
console.log(i1);
t1.addCourse(c1);
console.log(t1);
export {};
