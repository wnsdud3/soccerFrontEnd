function jsReturnFunc() {
    var nameTag = document.querySelector("#name");
    var p7Tag = document.querySelector("#p7");
    return function() {
        p7Tag.innerHTML = nameTag.value;
    }();
}


//결론 : 함수는 매개변수는 함수도 받을 수 있고 그 함수를 콜백함수라 부른다
function callFuncTenTimes(otherFunc) {
    // alert("sfafs")
    // num=10;
    // otherFunc = calleeFunc;
    //console.log(num); 
    for(var i = 0; i < 10; i++) {
        // calleeFunc(i);, 머리속으로 생각해야 하는것
        // jsFunc6(i);
        otherFunc(i);
    } 
}

function jsFunc6(num) {
    console.log(num+1)+"번쨰 함수 호출 완료"
}
//calleeFunc는 콜백함수라고 함.매개변수로 넘겨지는 함수를 콜백함수라고 함


function calleeFunc(num) {
    var p6Tag = document.querySelector("#p6");
    p6Tag.innerHTML 
    =p6Tag.innerHTML + (num+1) + "번째 함수 호출 완료 <br>"
}
function jsFunc6(num) {
console.log((num+1)+"번째 함수 호출완료");
}
    callFuncTenTimes(calleeFunc);
    // 함수 매개변수와 리턴 복습
function calculatePlus (num1, num2, operator) {
    var result = num1 + num2;
    switch(operator) {
        case '+' : result = num1+num2;break
        case '-' : result = num1+num2;break
        case '*' : result = num1+num2;break
        case '/' : result = num1+num2;break
    }
    return result;
}



function resultJsFunc5() {
    // alert("sfsfsf");
    console.log(jsFunc5());
    var p5Tag = document.querySelector("#p5");
    p5Tag.innerHTML = p5Tag.innerHTML + jsFunc5()+ "<br>"
}
function jsFunc5() {
    return Math.floor(Math.random()*10+1);
    
}




function resultJsFunc4() {
    jsFunc4(23, 11, 13);
    jsFunc4(24, 4, 25);
}
function jsFunc4(num1, num2, num3) {
    //num1 =23, num2 =11, num3 = 13
    var result = num1 + num2 + num3;
    
    var p4Tag = document.querySelector("#p4");
    p4Tag.innerHTML = p4Tag.innerHTML + result + "<br>";
}


//익명함수
        
var jsFunc2 = function() {
    //alert("test");
    var p2Tag = document.querySelector("#p2");
    p2Tag.innerHTML = "jsFunc2() 함수 실행완료!";
}
// 선언적 함수
var JsFunc1 = function() {
    var p1Tag = document.querySelector("#p1")
    p1Tag.innerHTML = "JsFunc1() 함수 실행완료";
}
// function JsFunc1() {
//     var h1Tag = document.querySelector("h1");
//     h1Tag.innerHTML = "선언적 펑션"
// }
//JsFunc1();