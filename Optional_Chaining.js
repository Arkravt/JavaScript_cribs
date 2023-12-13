//////////////////////////////////////////////// Optional_Chaining (Опциональная цепочка) '?.' ///////////////////////////////////////////////
/*Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных объектов, даже если какое-либо из промежуточных свойств не существует.
Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.
Пример:*/
let user = {}; // пользователь без адреса
alert(user?.address?.street); // undefined (без ошибки)

let html = document.querySelector('.elem')?.innerHTML; // будет undefined, если элемента нет

let user = null;
alert(user?.address); // undefined
alert(user?.address.street); // undefined

/*
Обратите внимание: синтаксис ?. делает необязательным значение перед ним, но не какое-либо последующее.
Так например, в записи user?.address.street.name ?. позволяет user безопасно быть null/undefined (и в этом случае возвращает undefined), но это так только для user. 
Доступ к последующим свойствам осуществляется обычным способом. Если мы хотим, чтобы некоторые из них были необязательными, тогда нам нужно будет заменить больше . на ?..
*/


/*
Сокращённое вычисление.
Как было сказано ранее, ?. немедленно останавливает вычисление, если левая часть не существует.
Так что если после ?. есть какие-то вызовы функций или операции, то они не произойдут.
Например:
*/
let user = null;
let x = 0;
user?.sayHi(x++); // нет "user", поэтому выполнение не достигает вызова sayHi и x++
alert(x); // 0, значение не увеличилось


/*
Другие варианты применения: ?.(), ?.[].
Опциональная цепочка ?. — это не оператор, а специальная синтаксическая конструкция, которая также работает с функциями и квадратными скобками.
Например, ?.() используется для вызова функции, которая может не существовать.
В приведённом ниже коде у некоторых наших пользователей есть метод admin, а у некоторых его нет:
*/
let userAdmin = {
    admin() {
        alert("Я админ");
    }
};

let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)

/*
Здесь в обеих строках мы сначала используем точку (userAdmin.admin), чтобы получить свойство admin, потому что мы предполагаем, что объект userAdmin существует, так что читать из него безопасно.
Затем ?.() проверяет левую часть: если функция admin существует, то она запускается (это так для userAdmin). В противном случае (для userGuest) вычисление остановится без ошибок.
Синтаксис ?.[] также работает, если мы хотим использовать скобки [] для доступа к свойствам вместо точки ..
Как и в предыдущих случаях, он позволяет безопасно считывать свойство из объекта, который может не существовать.
*/
let key = "firstName";
let user1 = {
    firstName: "John"
};
let user2 = null;
alert(user1?.[key]); // John
alert(user2?.[key]); // undefined



/*
ИТОГО:
Синтаксис опциональной цепочки ?. имеет три формы:

obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.
Как мы видим, все они просты и понятны в использовании. ?. проверяет левую часть на null/undefined и позволяет продолжить вычисление, если это не так.

Цепочка ?. позволяет безопасно получать доступ к вложенным свойствам.

Тем не менее, мы должны использовать ?. осторожно, только там, где по логике кода допустимо, что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут.

*/