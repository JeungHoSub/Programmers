/* 
 2016년

 문제 설명

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT`

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

 제한 조건

- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

**입출력 예**

a  = 5 , b=24, result= “TUE” */



function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(`2016-${a}-${b}`);
    return week[date.getDay()];
}

// week = [배열 일~토]
// date = new연산자 (고유의 예약어, 고유의 연산자)
// 연산자는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다? new 연산자를 사용해야만 함수 내부의 내용을 변수에 대입할 수 있다. 

// Date 메소드의 기본 형태 -> new Date(); 현재 날짜 밎 시간
// return의 값은 week 중 하나
// getDay() 메소드는 요일을 알려줌.

function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(`2016-${a}-${b}`);
    return week[date.getDay()];