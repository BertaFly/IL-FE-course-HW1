// Что выведет код ниже?

alert( null || 2 || undefined );
// ---2 (оно первое тру)

// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );
// ---сначала 1, потом 2.

// Что выведет код ниже?

alert( 1 && null && 2 );
// --null (это первый фолс)

// Что выведет код ниже?

alert( alert(1) && alert(2) );
// --_сначала 1, потом undefined.

// Что выведет код ниже?

alert( null || 2 && 3 || 4 );
// 3, сначала выполнится проверка &&, так как тут выше приоритет

// Какие из этих if верны, т.е. выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'первое' ); // выведется,
if (-1 && 0) alert( 'второе' ); // не выведет, потому что фолс
if (null || -1 && 1) alert( 'третье' ); //выведет, потому что сначала сравнение -1 и 1 (тру), потом нул(фолс) и тру = тру

