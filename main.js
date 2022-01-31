// теоритическое задание
//1
// для обьявления переменной мы используем: var, let, const.
// var и let работают одинаково, просто var это более ранняя версия let, поэтому мы должны знать и старый синтаксис.
// var и let это сменные переменные, которые можно перезаписывать сколько угодно раз
// const это сталая или несменная переменная, в противном случае будет ошибка кода. 
//2
// var устаревший метод обьявления переменной, так как не видит код вне блока, например если будет if (значение) var = тест и var тест = значение, то var не увидит, что было в if, а let увидит.


// Технические требования:
// Считать с помощью модельного окна браузера данные пользователя: имя и возраст.
// Если возраст меньше 18 лет - показать на экране сообщение: You are not allowed to visit this website.
// Если возраст от 18 до 22 лет (включительно) - показать окно со следующим сообщением: Are you sure you want to continue? и кнопками Ok, Cancel. Если пользователь нажал Ok, показать на экране сообщение: Welcome, + имя пользователя. Если пользователь нажал Cancel, показать на экране сообщение: You are not allowed to visit this website.
// Если возраст больше 22 лет - показать на экране сообщение: Welcome, + имя пользователя. 

alert("введите имя и возраст");
let userName = prompt('Имя?')
let age = prompt('Возраст?')
if(age < 18) {
    alert('You are not allowed to visit this website')
}
if(age >= 22){
        alert('Welcome' + " " + userName)
}
if(age >= 18 && age <= 22)
    if (confirm("Are you sure you want to continue?")) {
        alert("Welcome " + userName)
    } else {
        alert("You are not allowed to visit this website")
 } else  {alert("Welcome " + userName)};
    

    



