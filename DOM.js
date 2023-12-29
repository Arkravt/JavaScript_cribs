///////////////////////////////////////////////// DOM /////////////////////////////////////////////////
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




///////////////////////////////////////////////// ПРОДВИНУТЫЙ DOM /////////////////////////////////////////////////
/////////////////////////// Выбор элементов ///////////////////////////
document.documentElement; // выбирает весь HTML документ
document.head; // Выбирает только head
document.body; // Выбирает только body

document.querySelector('.header'); // Выбор элемента по классу
document.querySelectorAll('.section'); // Выбор элементов по классу 

document.getElementById('section--1'); // Выбор элемента по id
document.getElementsByTagName('button'); // Выбор элемента по имени тега

document.getElementsByClassName('btn'); // Выбор элемента по классу


/////////////////////////// Создание и вставка элементов ///////////////////////////
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


/////////////////////////// Удаление элементов ///////////////////////////
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
   message.remove(); // Удалили созданный элемент 
   // message.parentElement.removeChild(message); // hРаньше элемент удаляли таким способом
});


/////////////////////////// Стили ///////////////////////////
message.style.backgroundColor = '#076785'; // Изменяет цвет фона (in line стили)
message.style.width = '120%'; // Изменяет ширину элемента (in line стили)
console.log(message.style.backgroundColor); // считывает значения стилей (только in line стилей)

getComputedStyle(message).color; // Получает те стили которые установленные в файле css или по умолчанию (не in line стили). Возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать. Так же можно получить свойство которые в файле не определено, но оно существует и имеет значение по умолчанию.

document.documentElement.style.setProperty('--color-first', 'yellow'); // Метод setProperty() позволяет установить стиль при помощи JavaScript. Может быть применён как к DOM-элементу, так и конкретному CSS правилу.В первом случае специфичность будет как и у атрибута style, т.к. стили будут записаны инлайн. Во втором случае специфичность не изменится.Метод setProperty(). Может принимать три параметра: propertyName -  Обязательная строка с названием CSS-свойства. Должна совпадать с названием свойства, например max-width. value - Строка с новым значением свойства. Если параметр не указан, то будет передана пустая строка. priority - При помощи этого параметра можно установить новому значению самый высокий приоритет !important. Для этого передайте сюда строку "important"


/////////////////////////// Атрибуты ///////////////////////////
const logo = document.querySelector('.nav__logo');
logo.alt; // получает значение атрибута alt (только если атрибут cтандартнрый)
logo.src; // получает значение атрибута src (только если атрибут cтандартнрый)
logo.className;


///////////////////////////// Нестандартный атрибут ///////////////////////////
logo.getAttribute('developer'); // получает значение не стандартного атрибута developer
logo.setAttribute('copyright', 'Masters Of Code'); // слздает нестандартный атрибут "copyright" со значением "Masters Of Code"


/////////////////////////// Data attributes ///////////////////////////
logo.dataset.versionNumber;
// data-* атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML, без хаков вроде нестандартных атрибутов, лишних DOM-свойств или Node.setUserData(). Синтаксис прост — любой атрибут, чьё имя начинается с data-, является data-* атрибутом. Предположим у нас имеется статья и мы хотим сохранить дополнительную информацию без визуального представления. Для этого можно использовать data-атрибуты


/////////////////////////// Classes ///////////////////////////
logo.classList.add('a', 'b'); // Добавляет классы. В данном случае два класса "a" и "b"
logo.classList.remove('a', 'b'); // Удаляет классы. В данном случае два класса "a" и "b"
logo.classList.toggle('a'); // Переключает классы, с одного класса на другой
logo.classList.contains('c'); // Проверяет на содержание класса.

// // Не использовать
logo.className = 'a'; // Меняет название класса

