//////////////////////////////////////////////// SHORT-CIRCUIT EVALUATION ////////////////////////////////////////////////

/************************** || (ИЛИ) *************************
Оператор || выполняет следующие действия:
Вычисляет операнды слева направо.
Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
Если все операнды являются ложными (false), возвращает последний из них.
Значение возвращается в исходном виде, без преобразования.
Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.
Например:
*/
alert(1 || 0); // 1 (1 - истинное значение)
alert(true || 'какая-то строка'); // true
alert(null || 1); // 1 (первое истинное значение)
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)


/* 
Получение первого истинного значения из списка переменных или выражений.
Например, у нас есть переменные firstName, lastName и nickName, все они необязательные (т.е. они могут быть неопределенными или иметь ложные значения).
Давайте воспользуемся оператором ИЛИ ||, чтобы выбрать ту переменную, в которой есть данные, и показать её (или «Аноним», если ни в одной переменной данных нет):
*/
let firstName = "";
let lastName = "";
let nickName = "Суперкодер";
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер
// Если бы все переменные были ложными, в качестве результата мы бы наблюдали "Аноним".


/* 
Сокращённое вычисление.
Ещё одной отличительной особенностью оператора ИЛИ || является так называемое «сокращённое вычисление».
Это означает, что ИЛИ || обрабатывает свои операнды до тех пор, пока не будет достигнуто первое истинностное значение, и затем это значение сразу же возвращается, даже не затрагивая другие операнды.
Важность этой особенности становится очевидной, если операнд – это не просто значение, а выражение с сопутствующим эффектом, как, например, присваивание переменной или вызов функции.
В приведенном ниже примере срабатывает только второй alert:
*/
true || alert("никогда не сработает");
false || alert("сработает");
/*
В первой строке оператор ИЛИ || останавливает выполнение сразу после того, как сталкивается с истинным значением (true), поэтому сообщение не показывается.
Иногда люди используют эту возможность для выполнения инструкций только в том случае, если условие в левой части является ложным.
*/



/************************** ||= (Логическое присваивание ИЛИ) ************************
Оператор логического присваивания ИЛИ ||= записывается как обычный ИЛИ || с добавлением символа присваивания =. 
Такая запись не случайна, так как результат выполнения данного оператора напрямую зависит от действий уже известного нам ||.
Оператор ||= принимает два операнда и выполняет следующие действия:

Вычисляет операнды слева направо.
Конвертирует a в логическое значение.
Если a ложно, присваивает a значение b.
a ||= b;
Концепция оператора ||= заключается в «сокращённом вычислении», принцип работы которого мы разобрали ранее.

Мы уже знаем, что ИЛИ || возвращает первое истинное значение, поэтому, если a является таковым, вычисление до правой части выражения не дойдёт.
Вот пример с очевидным использованием оператора ||=:
*/
let johnHasCar = false;
johnHasCar ||= "У Джона нет машины!"; // то же самое, что false || (johnHasCar = "...")
alert(johnHasCar); // "У Джона нет машины!"

let manufacturer = ""; // оператор ||= преобразует пустую строку "" к логическому значению false
manufacturer ||= "Неизвестный производитель"; // то же самое, что false || (manufacturer = "...")
alert(manufacturer); // "Неизвестный производитель"

/* 
Оператор логического присваивания ИЛИ ||= – это «синтаксический сахар», добавленный в язык в качестве более короткого варианта записи if-выражений с присваиванием.
Мы можем переписать приведённые выше примеры с использованием обычного if:
*/
let johnHasCar = false;
if (johnHasCar == false) {
    johnHasCar = "У Джона нет машины!";
}
alert(johnHasCar); // "У Джона нет машины!"

let manufacturer = "";
if (manufacturer == false) {
    manufacturer = "Неизвестный производитель";
}
alert(manufacturer); // "Неизвестный производитель"



/************************** && (И) *************************
И «&&» находит первое ложное значение при нескольких подряд операторах И
Оператор && выполняет следующие действия:
Вычисляет операнды слева направо.
Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
Если все операнды были истинными, возвращается последний.
Другими словами, И возвращает первое ложное значение или последнее, если ничего не найдено.
Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.
Примеры:
*/
// Если первый операнд истинный,
// И возвращает второй:
alert(1 && 0); // 0
alert(1 && 5); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert(null && 5); // null
alert(0 && "какая-то строка"); // 0

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 3


/* 
Приоритет оператора && больше, чем у ||
Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.
Таким образом, код a && b || c && d по существу такой же, как если бы выражения && были в круглых скобках: (a && b) || (c && d).
*/



/************************** &&= (Логическое присваивание И) ***********************
Принцип действия &&= практически такой же, как и у оператора логического присваивания ИЛИ ||=. 
Единственное отличие заключается в том, что &&= присвоит a значение b только в том случае, если a истинно.
Пример использования:
*/
let greeting = "Привет"; // строка непустая, поэтому будет преобразована к логическому значению true оператором &&=
greeting &&= greeting + ", пользователь!"; // то же самое, что true && (greeting = greeting + "...")
alert(greeting) // "Привет, пользователь!"

/*
На практике, в отличие от ||=, оператор &&= используется достаточно редко – обычно, в комбинации с более сложными языковыми конструкциями, о которых мы будем говорить позже. 
Подобрать контекст для применения данного оператора – довольно непростая задача.
*/



/************************** ! (НЕ) **********************
Оператор принимает один аргумент и выполняет следующие действия:
Сначала приводит аргумент к логическому типу true/false.
Затем возвращает противоположное значение.
Например:
*/
alert( !true ); // false
alert( !0 ); // true
//В частности, двойное НЕ !! используют для преобразования значений к логическому типу:
alert( !!"непустая строка" ); // true
alert( !!null ); // false

/*
То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, а второе НЕ снова инвертирует его. В конце мы имеем простое преобразование значения в логическое.
Есть немного более подробный способ сделать то же самое – встроенная функция Boolean:
*/
alert( Boolean("непустая строка") ); // true
alert( Boolean(null) ); // false

//Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.