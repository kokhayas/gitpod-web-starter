// document.write("<h3>script.jsの練習</h3>")
// document.write("Hello world1!")
// document.write("Hello world2!")
// document.write(3+9)
// let price=135
// price = price / 2
// document.write(price)
// let age = 21;
// if (age < 18) {
//   document.write("選挙権はありません");
// } else if (age >= 18 && age < 25) {
//   document.write("投票に行けます");
// } else {
//   document.write("議員に立候補できます")
// }
// // let x = 4
// // document.write(typeof(x))
// document.write("")
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// document.write(`<p>1から10までの和は${sum}です.</p>`);

// function fsum(from, to) {
//   let result = 0;
//   for (let i=from; i<=to; i++){
//     result += i;
//   }
//   return result
// }

// document.write(`<p>1から20までの和は${fsum(1, 20)}です。</p>`);

// function repeat(str, count) {
//   let result = ""
//   for (let i=0; i<count; i++){
//     result += str
//   }
//   return result
// }
// document.write(`<p>${repeat('*', 5)}</p>`)
// console.log('hello world')
// for (let i=0; i<5; i++) {
//   console.log(i)
// }

// let student1 = {
//   name: 'kokhayas',
//   age: 20,
// };
// document.write(`Hello. I am ${student1.name}. I'm ${student1.age} years old.`)

// const student2 = {
//   name: 'koki',
//   scores: {
//     math: 80,
//     english: 20,
//   },
// };
// document.write(`student2のenglishの点数は${student2.scores.english}です`);

// function introduce(person) {
//   document.write(`I am ${person.name}.I am ${person.age} years old`);
// }
// introduce(student1);
// introduce({name: 'anderson', age: 49});

// const taro = {
//   name: '太郎',
//   age: 4,
// }
// taro.name = '花子'
// document.write(`${taro.name}`)

// const sakura = {
//   name: 'Sakura',
//   scores: {
//     math: 90,
//     science: 80,
//   },
// };
// document.write(`${sakura.scores.math}`)
// let sakuraScores = sakura.scores;
// sakuraScores.math = 100;
// sakuraScores = {
//   math: 80,
//   science: 90,
// };
// document.write(`${sakura.scores.math}`)

// const myFriends = ['Taro', 'Hanako', 'Becky'];
// document.write(myFriends[2]);
// document.write(myFriends.length);
// for (const myFriend of myFriends) {
//   document.writeln(myFriend);
// }

// const students = [
//   { name: 'Ichiro', age: 20 },
//   { name: 'Jiro', age: 19 },
//   { name: 'Saburo', age: 18 },
// ];

// function findAge(name, students) {
//   for (const student of students) {
//     if (student.name == name){
//       return student.age
//     }
//   }
// }
// document.write(`${findAge('Jiro', students)}`);

// let element = document.getElementById("greeting");
// element.textContent = "hello dom";
// element.style.color = "green"
// element.style.backgroundColor = "blue"

// function clicked() {
//   alert("button is clicked!");
// }

// let greetButton = document.getElementById("greet-button");
// greetButton.onclick = clicked;

// result = document.getElementById("omikuji_result");
// function omikuji_clicked() {
//   let number = Math.random();
//   let data = ""
//   if (number < 0.2) {
//     // data = "大吉".fontcolor("red");
//     result.textContent = "大吉";
//     result.style.Color = "red";
//     }
//   else if (number < 0.5) {
//     data = "吉".fontcolor("black")
//     result.textContent = "吉";
//     result.style.Color = "black";
//   }
//   else {
//     // data = "凶".fontcolor("blue")
//     result.textContent = "凶";
//     result.style.Color = "blue";
//   }
// }
// let omikujiButton = document.getElementById("omikuji-button");
// omikujiButton.onclick = omikuji_clicked;


// // let count_element = document.getElementById(counter)
// // function count_up() {
// //   count_element.textContent = Number(count_element.textContent) + 1
// //   document.write(count_element.textContent)
// // }

// // let intervalId; //タイマー番号をグローバル変数として宣言
 
// // //startボタンを押すと5秒間隔でalert()が実行
// // function startInterval(){
// // 	intervalID = setInterval(count_up, 1000);
// // }
 
// // //stopボタンを押すとタイマーを停止
// // function stopInterval(){
// // 	clearInterval(intervalID);
// // }
// // let counting_result_button = documenet.getElementById("counting_button")
// // let counting_result = document.getElementById("counting");
// // let time=0;
// // function tick() {
// //   time = time + 1;
// //   counting_result.textContent = time;
// // }
// // function onclick() {
// //   senInterval(tick, 1000);
// // }
// // counting_result_button.onclick = onclick;

// let result = document.getElementById("result");
// let button = document.getElementById("button");

// let time = 0;

// function tick() {
//   time = time + 1;
//   result.textContent = time;
// }

// function onclick() {
//   setInterval(tick, 1000);
// }

// button.onclick = onclick;

// let _left_number = document.getElementById('left_numbner');
// let _right_number = document.getElementById('right_numnber');
// let _added_number = document.getElementById('added_number');
// let _calculate_button = document.getElementById('calculate_button');

// function calculate_clicked() {
//   _added_number.textContent = parseInt(_left_number.value, 10) + parseInt(_right_number.value, 10);
// }

// _calculate_button.onclick = calculate_clicked;


// let left = document.getElementById("left");
// let right = document.getElementById("right");
// let result = document.getElementById("result");
// let calculate = document.getElementById("calculate");

// function clicked() {
//   result.textContent = parseInt(left.value, 10) + parseInt(right.value, 10);
// }

// calculate.onclick = clicked;
// console.log('hello world');
// document.write('こんにちわ');

let _start_button = document['getElementById']('start_button');
let _stop_button = document.getElementById('stop_button');
let _result = document.getElementById('result');
let _ball = document.getElementById('ball');
let intervalId;
let time = 0;
let deltaT = 0.1;
let x=0;
let y=0;
let u = 5;
let v = 0;
let gravity = -9.8;


function f_count_up() {
  time += 1
  _result.textContent = time;

  x += u*deltaT;
  v -= gravity * deltaT
  y += v * deltaT
  _ball.style.left = 100 + x + "px";
  _ball.style.top = 50 + y + "px";
}

function f_start() {
  intervalId = setInterval(f_count_up, 10);
  console.log(intervalId)
}

function f_stop() {
  v = -v
  // clearInterval(intervalId);
}

_start_button.onclick = f_start;
_stop_button.onclick = f_stop;





