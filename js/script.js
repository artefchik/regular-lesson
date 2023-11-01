function task1(url) {
    // const reg = /^(https?:\/\/)?([\da-z\.-]+)\.([az\.]{2,6})([\/\w \.-]*)*\/?$/;
    const reg = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return reg.test(url);
}

function task2() {
    const variableName = prompt('Введите название переменной');
    const reg = /^[a-zA-z_$][0-9a-zA-z_$]*$/g;
    reg.test(variableName) ? console.log('название переменной корректно') : console.log('название переменной НЕ  корректно');
}

function task3(string) {
    const reg = /^[a-zA-ZА-Яа-я0-9]+$/g;
    const result = reg.test(string) ? 'строка существует ' : 'строка  НЕ существует ';
    return result;
}

function task4(string) {
    const reg = /^([a-zA-z])([a-zA-Z]{10,})$/g
    const result = reg.test(string) ? 'строка существует' : 'строка  НЕ существует';
    return result;
}
// console.log(task4('ufrhufrjfughu9'));
