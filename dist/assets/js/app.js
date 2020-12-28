"use strict"; // let button = document.querySelector('button');
//================== exercise #1 =====================================
// Мы повесили два "слушателя" на одну кнопку(button).
//  При нажатии срабатывает первый "addEventListener"

button.addEventListener('click', function () {
  //"addEventListener"  это макрозадача. Она встает в очередь обратного вызова
  // Promise это микрозадача. Промис встает в очередь "Jobs queue"
  Promise.resolve().then(function () {
    return console.log('Microtask 1');
  }); // Макрозадачи приоритетны перед микрозадачами.
  // После того как Промис был поставлен в очередь
  // функция выводит с помощью console сообщение "Listener 1"

  console.log('Listener 1'); // После этого наш "addEventListener" заканчивает свою работу  и удаляется из очереди обратного вызова
  // Но перед тем как перейти к другой макрозадаче, которые находятся в очереди обратного вызова должны быть
  // выполнены все микрозадачи
  // Следовательно выполняется Promise и then запускает функцию, которая в свою очередь выводит в консоль "Microtask1"
  // Теперь все микрозадачи выполнены и вторая в очереди "addEventListener" может начать работу.
}); // Второй "addEventListener" запускает функцию при клике по кнопке

button.addEventListener('click', function () {
  // Функция определяет Промис, как микрозадачу и ставит в очередь "Jobs queue"
  Promise.resolve().then(function () {
    return console.log('Microtask 2');
  }); // Функция выводит с помощью console сообщение "Listener 2"

  console.log('Listener 2'); // После этого наш "addEventListener" заканчивает свою работу  и удаляется из очереди обратного вызова
  // У нас осталась микрозадача в очереди
  // Выполняется Промис и .then запускает функцию, которая в свою очередь выводит в консоль "Microtask2"
}); // ================================ exercise 2 =======================================
// 1.Вызываем функцию с помощью button.click()
// 2.движок JS начинает работу

button.addEventListener('click', function () {
  // 3.Promise then встает в очередь на выполнение в "Jobs queue"
  Promise.resolve().then(function () {
    return console.log('Microtask 1');
  }); // 4.Console выводит сообщение "Listener 1"

  console.log('Listener 1'); // 5. Когда мы вызываем слушатели с помощью button.click() они начинают работать синхронно
  // Поэтому button.click() всё еще находится в стеке между обратными вызовами
  // Это означает что они не обрабатывают микрозадачу после каждой макрозадачи. 
  // Они будут обработаны после работы обоих addEventListener
  // Работа первого "слушателя" закончилась, но у нас остался еще один.
});
button.addEventListener('click', function () {
  // 6. Promise then встает в очередь на выполнение в "Jobs queue"
  Promise.resolve().then(function () {
    return console.log('Microtask 2');
  }); // 7. Console выводит сообщение "Listener 2"

  console.log('Listener 2'); //8. второй "слушатель" закончил работу и callback queue пуст
});
button.click(); // 9. Event Loop проверяет callback queue и видит что он пустой и позволяет микрозадачам начать выполняться в порядке своей очереди.
// 10. Console выводит сообщение "Microtask 1"
// 11. Console выводит сообщение "Microtask 2"