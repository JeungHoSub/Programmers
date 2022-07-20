/*

가운데 글자 가져오기

문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
입출력 예
s	return
"abcde"	"c"
"qwer"	"we"

*/

/* 기본

function solution(s) {
    var answer = '';
    return answer;
}

*/

function solution(s) {
    var answer = '';
    
    if(s.length % 2 ==0) {
        answer = s[s.length / 2 - 1] + s[s.length / 2]; } // 짝수일 경우,
    else {
        answer = s[Math.floor(s.length/2)];
    } // 홀수일 경우, 반내림 하기
    return answer;
    
// s.length 를 2로 나눈 나머지가 0일때 짝수
// 짝수의 경우 (예:4) 1+2 중앙값
// 홀수일 경우인데 Math.floor은 반내림

또다른 해설

function solution(s) {
	return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);

// 정규표현식