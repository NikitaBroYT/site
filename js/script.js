// function main() {
//         alert('1')



// var n = prompt ("Введите ваше имя:")
// alert ("Здравствуйте, "+n )
// анимация фона
// function myMove() {
//     var elem = document.getElementById("animate");
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// swal("Good job!", "You clicked the button!", "success"
// var pass = "";
// while (pass != "admin") {
//         pass = prompt("Пароль?)")
//         document.write("Наш Человек)")
// }



// ___________________________________________________________
// function go() {
//     a = document.getElementById("input").value;
//     document.getElementById("result").value = a;

//     b = document.getElementById("input2").value;
//     document.getElementById("result2").value = b;
// }


// ___________________________________________________________
// // столбик цифр
// function stolbik() {
//         var x = 0
//         while (x <= 1000) {
//                 document.write(x + '<br>');
//                 x++;
//         }
// }

// stolbik()
// ___________________________________________________________ столбик на 1000 цифр



// ___________________________________________________________
// console.log("Какая-то Чушка Нажала На Кнопку Своим Копытом")
// ___________________________________________________________ нажми на кнопку и то что напишешь выведеться в консоль


// ___________________________________________________________
// var uwu = 'UwU';
// alert(uwu[0]);
// alert(uwu[1]);
// alert(uwu[2]);
// ___________________________________________________________ вывести слово по буквам в алерте

// ___________________________________________________________
// function sayHi() {
//         alert('Привет');
//       }

//       setTimeout(sayHi, 5000);
//       ___________________________________________________________  код через 5 секунд выявиться после загрузки сайта

//       <!-- ___________________________________________________________ -->
//       <script>
//           bullet.onclick = function () {
//               let start = Date.now();

//               let timer = setInterval(function () {
//                   let timePassed = Date.now() - start;

//                   bullet.style.left = timePassed / 5 + 'px';

//                   if (timePassed > 2000) clearInterval(timer);

//               }, 20);
//           }
//       </script>
//       <!-- ___________________________________________________________ Мигание Приветственного Текста -->>




// function bebra() {
//         document.write("<h1>1</h1>");
// }
// setTimeout(bebra, 1000)
// setTimeout(bebra, 2000)
// setTimeout(bebra, 3000)
// setTimeout(bebra, 4000)
// setTimeout(bebra, 5000)
// setTimeout(bebra, 6000)
// setTimeout(bebra, 7000)
// setTimeout(bebra, 8000)
// setTimeout(bebra, 9000)
// setTimeout(bebra, 10000)

// }
// setTimeout(main, 5000);



// ___________________________________________________________
// const input = document.querySelector('input');
// const log = document.getElementById('log');

// input.onkeydown = logKey;

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }
// ___________________________________________________________  Кнопка Очистить



// ___________________________________________________________
// let loq = document.getElementById('loq');
// document.onclick = inputChange;
// function inputChange(e) {
//         loq.textContent = `Значение: (${e.clientX}, ${e.clientY})`;
// }
// ___________________________________________________________ показывает корды твоего клика



// ___________________________________________________________
// var elem = document.getElementById('elem');

// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });
// ___________________________________________________________ показывая корды следя за мышкой (без кликов)



// ___________________________________________________________
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn1');

var f = document.getElementById('forma');

function forma() {
        f.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'block';

}

function forma2() {
        f.style.display = 'none';
        btn1.style.display = 'block';
        btn2.style.display = 'block';

}
// ___________________________________________________________ кнопки закрыть и открыть прогамку


// ___________________________________________________________
var inp = document.getElementById('result');

function start() {
        window.setInterval(timer, 1000);
}

function timer() {
        inp.value = inp.value * inp.value;
}
// ___________________________________________________________ обновление страницы через время


// ___________________________________________________________
function start() {
        window.setInterval(timer2, 1000);
}

function timer2() {
        var cat = document.getElementById("text")
        if (cat.style.color == 'red') {
                cat.style.color = 'green';
        } else {
                cat.style.color = 'red';
        }
}
// ___________________________________________________________ слово меняет цвет


// ___________________________________________________________
//   function nextSize(i, way, length) {
//     if (way == 1)
//       return 30 * Math.abs(Math.sin(i / (length / Math.PI)));
//     else
//       if (way == 2)
//         return 100 * Math.abs(Math.cos(i / (length / Math.PI)));
//   }
//   function sizeCycle(text, way, d) {
//     out = "";
//     for (i = 0; i < text.length; i++) {
//        size = parseInt(nextSize(i + d, way, text.length));
//        out += "<span style='font-size: "+ size +"pt'>" +text.substring(i, i + 1)+ "</span>";
//      }
//     document.getElementById("wave").innerHTML = out;
//   }
//   function doWave(text, n) {
//     sizeCycle(text, 1, n);
//     if (n > text.length) n = 0;
//     setTimeout("doWave(\"" + text + "\", " + (n + 1) + ")", 50);
//   }
//   ___________________________________________________________ слова с анимацией волны


// ___________________________________________________________
var spinner = new Spin.Spinner(opts).spin(target);

import {Spinner} from 'spin.js';

var opts = {
  lines: 9, // The number of lines to draw
  length: 23, // The length of each line
  width: 52, // The line thickness
  radius: 39, // The radius of the inner circle
  scale: 1.7, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.3, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '46%', // Top position relative to parent
  left: '52%', // Left position relative to parent
  shadow: '0 0 9px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

var spinner = new Spinner().spin();
target.appendChild(spinner.el);
// ___________________________________________________________ крутилка появляющаяся когда че-то грузится


// ___________________________________________________________
var pr = ["Яблоко", "Каша"]
console.log(pr)
pr.splice(-1,1);


console.log(pr)
// ___________________________________________________________ список (разминка)