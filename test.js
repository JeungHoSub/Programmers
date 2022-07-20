// [6기 알고리즘 테스트]

/* [1번 문제 전화번호]

전화번호 양식
"010-7710-9019" -> 1077019019로 바뀜
다시 똑같은 양식으로 바꾸는 알고리즘 만들기

*/

// [생각해보기] 0번쨰에 0을 추가하는건 마지막에 해도된다. 
// 2번째, 7번쨰에 - 추가
// split으로 문자 배열로 만들어준뒤에 -를 추가해준다.
// 추가해준 상태에서 0을 더한다음 출력

function solution(phone) {
    let result = [];
    let num = 0;

    result = phone.split("");
    result.splice(2, 0, "-");
    result.splice(7, 0, "-");

    num = 0 + result.join("");

    return num;
}

// 7기 [2번문제 자연수 뒤집어 더하기]

/*

문제설명

자연수 12345면 뒤집어서 더하는 문자열 리턴
"5+4+3+2+1=15"

*/

//생각해보기 : 12345를 일단 문자열로 바꾸고(string)다음 split을 한뒤에 
// 내림차순으로 바꿈 -> 바꾼 다음에 for문으로 배열[i]값을 차례대로 내놓는데
// answer += answer[i] + 
// 마지막 retunr answer에 "=answer"

function solution(n) {
    let sum="";
    let num= 0;

    let str = String(n).split('').reverse().Map(i => parseInt(i))

    for(let i=0; i<str.length; i++) {
        num += Number(str[i])
        sum += str[i] + '+'
    }
    let result = sum.slice(0,-1)
    return sum + '=' + num
}

//https://www.youtube.com/watch?v=ILtLcFG9OqQ

