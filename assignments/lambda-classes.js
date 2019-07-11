// CODE here for your Lambda Classes

class Person {
  constructor (attributes) {
    //object
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
    //prototype
    speak () {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
  }

class instuctor extends Person {
  constructor (teacher) {
  //inheritance  
  super(teacher);
  this.specialty = teacher.specialty;
  this.favLanguage = teacher.favLanguage;
  this.catchPhrase = teacher.catchPhrase;
  }
  //prototype
  demo (subject) {
    return `Today we are learning about ${this.subject}.`;
    };
  grade (student, subject) {
    return `${this.name} receives a perfect score on ${this.subject}.`;
    };
} 

class student extends Person {
  constructor (Students) {
  //inheritance
  super(Students);
  this.previousBackground = Students.previousBackground;
  this.className = Students.className;
  this.favSubjects = Students.favSubjects;
  }
  //prototype 
  listsSubjects () {
    return `${this.favSubjects}.`;
    };
  PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${this.subject}.`;
    };
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
    };
} 

class projectManager extends instuctor {
  constructor (pms) {
  //inheritance
  super(pms);
  this.gradClassName = pms.gradClassName;
  this.favInstructor = pms.favInstructor;
  }
  //prototype
  standUp (channel) {
    return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
    };
  debugCode (object, subject) {
    return `${this.name} debugs ${this.object}'s code on ${this.subject}.`;
    };
} 

const bob = new student({
  name: 'Bob',
  age: 22,
  location: 'Uah',
  previousBackground: "Worked at walmart",
  className: "CS132",
  favSubjects: ['HTML5', 'CSS3'],
});

const emily = new student({
  name: 'Emily',
  age: 30,
  location: 'Massachussetts',
  previousBackground: "Stay at home mom",
  className: "CS3",
  favSubjects: ['HTML5', 'CSS3', "Ruby"],
});
// prototypes for student speak, listsSubjects, PRAssignment, sprintChallenge
const greg = new instuctor({
  name: 'Greg',
  age: 30,
  location: 'Massachussetts',
  specialty:  "React",
  favLanguage: "JavaScript",
  catchPhrase: "Don't forget the homies",
});
const amber = new instuctor({
  name: 'Amber',
  age: 45,
  location: 'New York',
  specialty:  "Angular",
  favLanguage: "React",
  catchPhrase: "Don't forget the extra credit",
});
 // prototypes for instructor "speak, demo, grade"

const jordan = new projectManager({
  name: 'Jordan',
  age: 15,
  location: 'California',
  specialty:  "Bootsrap",
  favLanguage: "Python",
  catchPhrase: "Up, up, and away!",
  gradClassName: "CS12",
  favInstructor: "Robert",
});
const kasey = new projectManager({
  name: 'Kasey',
  age: 27,
  location: 'Texas',
  specialty:  "LESS",
  favLanguage: "Php",
  catchPhrase: "Jinkies!",
  gradClassName: "WEBPT3",
  favInstructor: "Jimmy",
});
// prototypes for project managers speak, demo, grade, standup, debugCode

// students
console.log(bob.favSubjects);
console.log(emily.previousBackground);
console.log(bob.speak());
// instructors
console.log(greg.age);
console.log(amber.specialty);
console.log(amber.grade());
// project manager
console.log(jordan.catchPhrase);
console.log(kasey.favInstructor);
console.log(jordan.debugCode());