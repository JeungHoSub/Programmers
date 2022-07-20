/*

핸드폰 번호 가리기

문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.

입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	"*****8888"

*/

function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(0,-4).replace(/[0-9]/g,'*') + phone_number.slice(-4);
return answer;
}

// answer = 0번째부터 -까지 / replace(/[old str]/g, '[new str]')는 문자열에 있는 모든 old string을 new string으로 변환합니다.  
// / /g가 정규 표현식 , 주의할 점은 찾으려는 문자열에 따옴표를 입력하지 않아야 합니다.