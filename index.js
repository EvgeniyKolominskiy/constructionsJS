/*Работа с if-else
1.Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном
 1, 0, -3.
2.Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a,
 равном 1, 0, -3.
3.Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a,
 равном 1, 0, -3.
4.Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
 при a, равном 1, 0, -3.
5.Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
 при a, равном 1, 0, -3.
6.Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a,
 равном 1, 0, -3.
7.Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a,
 равном 'test', 'тест', 3.
8.Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
 скрипта при a, равном '1', 1, 3.*/

/*Task 1 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function equalToZero(a) {
	if (a === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(equalToZero(1));
console.log(equalToZero(0));
console.log(equalToZero(-3));

/*Task 2 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function biggerThanZero(a) {
	if (a > 0) {
		return true;
	} else {
		return false;
	}
}

console.log(biggerThanZero(1));
console.log(biggerThanZero(0));
console.log(biggerThanZero(-3));

/*Task 3 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function lessThanZero(a) {
	if (a < 0) {
		return true;
	} else {
		return false;
	}
}

console.log(lessThanZero(1));
console.log(lessThanZero(0));
console.log(lessThanZero(-3));

/*Task 4 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function biggerOrEqualToZero(a) {
	if (a >= 0) {
		return true;
	} else {
		return false;
	}
}

console.log(biggerOrEqualToZero(1));
console.log(biggerOrEqualToZero(0));
console.log(biggerOrEqualToZero(-3));

/*Task 5 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function lessOrEqualToZero(a) {
	if (a <= 0) {
		return true;
	} else {
		return false;
	}
}

console.log(lessOrEqualToZero(1));
console.log(lessOrEqualToZero(0));
console.log(lessOrEqualToZero(-3));

/*Task 6 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function notEqualToZero(a) {
	if (a === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(notEqualToZero(1));
console.log(notEqualToZero(0));
console.log(notEqualToZero(-3));

/*Task 7 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function equalToTest(a) {
	if (a === 'test') {
		return true;
	} else {
		return false;
	}
}

console.log(equalToTest('test'));
console.log(equalToTest('тест'));
console.log(equalToTest(3));

/*Task 8 if-else*/

/**
 *
 * @param a
 * @returns {boolean}
 */

function equalToOne(a) {
	if (a === '1') {
		return true;
	} else {
		return false;
	}
}

console.log(equalToOne('1'));
console.log(equalToOne(1));
console.log(equalToOne(3));

/*Работа с логическими переменными
1.Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test,равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
2 Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при
 test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
*/

/*Task 1 boolean variables*/

let test = true;

if (test === true) {
	alert(true);
} else {
	alert(false);
}

test = false;

if (test === true)
	alert(true);
else
	alert(false);

/*Task 2 boolean variables*/

if (test !== true) {
	alert(true);
} else {
	alert(false);
}

test = true;

if (test !== true)
	alert(true);
else
	alert(false);

/*Работа с && (и) и || (или)
1.Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
 скрипта при a, равном 5, 0, -3, 2.
2.Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое
 значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
3.Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе
 выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
4.Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите
 'Верно', в противном случае выведите 'Неверно'.
*/

/*Task 1 && ||*/

/**
 *
 * @param a
 * @returns {boolean}
 * @constructor
 */

function ZeroFive(a) {
	if (a > 0 && a < 5)
		return true;
	else
		return false;
}

console.log(ZeroFive(5));
console.log(ZeroFive(0));
console.log(ZeroFive(-3));
console.log(ZeroFive(2));

/*Task 2 && ||*/

/**
 *
 * @param a
 * @returns {number}
 * @constructor
 */

function ZeroTwo(a) {
	if (a === 0 || a === 2)
		return a += 7;
	else
		return a /= 10;
}

console.log(ZeroTwo(5));
console.log(ZeroTwo(0));
console.log(ZeroTwo(-3));
console.log(ZeroTwo(2));

/*Task 3 && ||*/

/**
 *
 * @param num1
 * @param num2
 * @returns {number|*}
 */

function oneThree(num1, num2) {
	if (num1 <= 1 && num2 >= 3) {
		return num1 + num2;
	} else {
		return num1 - num2;
	}
}

console.log(oneThree(1, 3));
console.log(oneThree(0, 6));
console.log(oneThree(3, 5));

/*Task 4 && ||*/

/**
 *
 * @param a
 * @param b
 * @returns {boolean}
 */

function twoEleven(a, b) {
	if ((a > 2 && a < 11) || (b >= 6 && b < 14))
		return true;
	else
		return false;
}
