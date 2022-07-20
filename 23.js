/* [문제 설명]

정수 내림차순으로 배치하기
문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
입출력 예
n	return
118372	873211

*/

/* [기본 코드]

function solution(n) {
    var answer = 0;
    return answer;
}

*/

// [생각해보기] : 정렬알고리즘?, 값을 toString을 이용해 숫자열을 문자열로
// 바꾸고 split을 이용해 배열로 만들어서 for문을 이용해 각각의 값을 하나씩 출력해가며
// if문을 이용해 값이 크면 가장앞으로 배치되게? 어렵다.


const solution = (n) =>
    Number(n.toString().split("").sort().reverse().join(""))


// 문자열로 변환 -> 문자열을 구분자를 이용해 배열로 전환
// sort()는 기본적으로 오름차순, reverse()를 이용해 다시 역순으로 정렬 내림차순
// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

function solution(n) {
    let answer = n + "";
    let answer2 = answer.split('') 
    return Number(answer2.sort((a, b) => b - a).join(''));
}

// 정수 n에 ""를 더해서 문자열로 변환
// answer 값을 split으로 쪼갬
// answer2 값을 .sort()를 사용하여 내림차순으로 해주고 join

