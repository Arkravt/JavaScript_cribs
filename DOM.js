//////////////////// DOM ////////////////////
document.querySelector('.test');
// Возвращает первый элемент документа, который соответствует указанному селектору или группе селекторов (по классу)

document.getElementById('test');
document.querySelector('#test');
// Возвращает первый элемент документа, который соответствует указанному селектору или группе селекторов (по ID). Два способо.

document.querySelector('.test').textContent;
// Свойство textContent позволяет считывать или задавать текстовое содержимое элемента

document.querySelector('.test').value;
// Свойство value позволяет считывать или задавать содержимое элемента типа <input/>

document.querySelector('.test').addEventListener('click', function () { });
// это способ зарегистрировать обработчик события. В качестве аргументов передается тип события(в данном примере'click') и функция которая сработает в момент этого события.

document.querySelector('body').style.backgorundColor = 'rgb(9, 250, 21)';
// style - это свойство которое позволяет получить доступ к стилям CSS. Через точку выбирается CSS свойство( в данном примере backgorundColor). В аргументах querySelector точка не указывается так как обращение идёт не к классу или id, а к HTML элементу.

document.querySelector('.test').classList.remove('removedClass');
// classList возвращает все классы которые есть у выбранного элемента с классом '.test'ю
// метод remove удаляет класс 'removedClass' у выбранного элемента с классом '.test' 

document.querySelector('.test').classList.contains('classTest');
// Метод contains првоеряет есть ли класс 'classTest' у элемента с классом 'test'

document.querySelector('.test').classList.toggle('testClass');
// Метод 'toggle'  удаляет 'testClass' если он есть у элемента с классом '.test' и наоборот добавляет 'testClass' если его нет у элемента с классом '.test'.

document.querySelector('.test').addEventListener('keydown', function (e) {
   if (e.key === 'Escape') {
   }
})
// с помощью 'keydown' - можно поймать событиие при нажатии кнопки. В функцию передается аргумент 'e', с помощью этого объекта можно проверять какая кнопка была нажата. 

document.querySelector('.test').innerHTML;
// Свойство интерфейса Element innerHTML устанавливает или получает HTML или XML разметку дочерних элементов.

document.querySelector('.test').insertAdjacentHTML('afterbegin', '<div></div>');
// insertAdjacentHTML() разбирает указанный текст как HTML или XML и вставляет полученные узлы (nodes) в DOM дерево в указанную позицию.
// Данная функция не переписывает имеющиеся элементы, что предотвращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с innerHTML.
// targetElement.insertAdjacentHTML(position, text);
// position - определяет позицию добавляемого элемента относительно элемента, вызвавшего метод. Должно соответствовать одному из следующих значений (чувствительно к регистру):
// 'beforebegin': до самого element (до открывающего тега).
// 'afterbegin': сразу после открывающего тега element (перед первым потомком).
// 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
// 'afterend': после element (после закрывающего тега).
// Наглядное отображение параметра position:
// <!-- beforebegin -->
// <p>
// <!-- afterbegin -->
// foo
// <!-- beforeend -->
// </p>
// <!-- afterend -->
// text - Строка, которая будет проанализирована как HTML или XML и вставлена в DOM дерево документа.
// Примечание: позиции beforebegin и afterend работают только если узел имеет родительский элемент.


////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////////

// ПРОДВИНУТЫЙ DOM

// Выбор элементов
document.documentElement; // выбирает весь HTML документ
document.head; // Выбирает только head
document.body; // Выбирает только body

document.querySelector('.header'); // Выбор элемента по классу
document.querySelectorAll('.section'); // Выбор элементов по классу 

document.getElementById('section--1'); // Выбор элемента по id
document.getElementsByTagName('button'); // Выбор элемента по имени тега

document.getElementsByClassName('btn'); // Выбор элемента по классу


// Создание и вставка элементов
// .insertAdjacentHTML()
const message = document.createElement('div'); // Создали новый элемент div
message.classList.add('cookie-message'); // Новому элементу присвоили класс 'cookie-message'
message.innerHTML = 'Мы используем на этом сайте cookie для улучшения функциональности. <button class="btn btn--close-cookie">Ок!</button>'; // Новому элементу присволили новый текст и кнопку 

const header = document.querySelector('.header'); // Выбрали элемент по классу 'header'
header.prepend(message); // Поместили новый элемент в начало блока класса header
header.append(message); // Поместили новый элемент в конец блока класса header

header.append(message.cloneNode(true)); // Поместили новый копию нового элемента в начало блока класса header
header.before(message); // Поместили новый элемент перед классом header, теперь они на одном уровне иерархии
header.after(message); // Поместили новый элемент после класса header, теперь они на одном уровне иерархии

// // Удаление элементов
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
   message.remove(); // Удалили созданный элемент 
   // message.parentElement.removeChild(message); // hРаньше элемент удаляли таким способом
});


