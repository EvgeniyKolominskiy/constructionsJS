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


/*Task 8 if-else*/

