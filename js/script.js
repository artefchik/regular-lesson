function task1(url) {
    // const reg = /^(https?:\/\/)?([\da-z\.-]+)\.([az\.]{2,6})([\/\w \.-]*)*\/?$/;
    const reg = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return reg.test(url);
}



