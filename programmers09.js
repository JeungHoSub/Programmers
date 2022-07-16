function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(0,-4).replace(/[0-9]/g,'*') + phone_number.slice(-4);
return answer;
}

// answer = 0번째부터 -까지 / replace(/[old str]/g, '[new str]')는 문자열에 있는 모든 old string을 new string으로 변환합니다.  
// / /g가 정규 표현식 , 주의할 점은 찾으려는 문자열에 따옴표를 입력하지 않아야 합니다.