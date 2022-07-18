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