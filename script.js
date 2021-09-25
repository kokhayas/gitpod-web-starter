document.write("Hello world1!")
document.write("Hello world2!")
document.write(3+9)
let price=135
price = price / 2
document.write(price)
let age = 21;
if (age < 18) {
  document.write("選挙権はありません");
} else if (age >= 18 && age < 25) {
  document.write("投票に行けます");
} else {
  document.write("議員に立候補できます")
}
// let x = 4
// document.write(typeof(x))
document.write("")
let sum = 0
for (let i = 1; i <= 10; i++) {
  sum += i;
}
document.write(`<p>1から10までの和は${sum}です.</p>`);

function fsum(from, to) {
  let result = 0;
  for (let i=from; i<=to; i++){
    result += i;
  }
  return result
}

document.write(`<p>1から20までの和は${fsum(1, 20)}です。</p>`);

function repeat(str, count) {
  let result = ""
  for (let i=0; i<count; i++){
    result += str
  }
  return result
}
document.write(`<p>${repeat('*', 5)}</p>`)
console.log('hello world')
for (let i=0; i<5; i++) {
  console.log(i)
}

let student1 = {
  name: 'kokhayas',
  age: 20,
};
document.write(`Hello. I am ${student1.name}. I'm ${student1.age} years old.`)

const student2 = {
  name: 'koki',
  scores: {
    math: 80,
    english: 20,
  },
};
document.write(`student2のenglishの点数は${student2.scores.english}です`);

function introduce(person) {
  document.write(`I am ${person.name}.I am ${person.age} years old`);
}
introduce(student1);
introduce({name: 'anderson', age: 49});

const taro = {
  name: '太郎',
  age: 4,
}
taro.name = '花子'
document.write(`${taro.name}`)

const sakura = {
  name: 'Sakura',
  scores: {
    math: 90,
    science: 80,
  },
};
document.write(`${sakura.scores.math}`)
let sakuraScores = sakura.scores;
sakuraScores.math = 100;
sakuraScores = {
  math: 80,
  science: 90,
};
document.write(`${sakura.scores.math}`)

const myFriends = ['Taro', 'Hanako', 'Becky'];
document.write(myFriends[2]);
document.write(myFriends.length);
for (const myFriend of myFriends) {
  document.writeln(myFriend);
}

const students = [
  { name: 'Ichiro', age: 20 },
  { name: 'Jiro', age: 19 },
  { name: 'Saburo', age: 18 },
];

function findAge(name, students) {
  for (const student of students) {
    if (student.name == name){
      return student.age
    }
  }
}
document.write(`${findAge('Jiro', students)}`);