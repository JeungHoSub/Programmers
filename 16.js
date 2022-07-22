/*

문자열 내 p와 y의 개수
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.
입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false
입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

*/

/* [기본 코드]

function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

*/

//[생각해보기] : 간단하게 문자열에 알파벳이 들어가있는데 알파벳의 갯수가 같으면 true, 아니면 false를 리턴
// 음... 일단 알파벳은 소문자 대문자를 구별하지 않으니, 모두 대문자로 바꾸거나 소문자로 바꾸거나
// let alpha = [a, b, c, d ...z] 선언
// 바꾼다음 for(let i=0;)) if 같으면() 트루, else 폴스 이정도

function solution(s){
    let change = s.toLowerCase();
    let check_p = change.split("p").length;
    let check_y = change.split("y").length;
    
    return check_p == check_y ? true : false;
}

// 소문자로 바꾸고, change를 가져와 p로 쪼개고, y로 쪼갠다.
// 쪼갠 p와 y의 갯수가 같으면 트루 아니면 폴스 아주 직관적인 코드다.