function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        };
    };
    answer.sort(function(a,b){return a-b});
    
    if (answer.length === 0){
        answer.push(-1);
    };                   
    return answer;
}

// 매개 변수 arr의 length 값 만큼 for 반복문 사용하여 arr[i]를 divisor로 나누고 나머지가 0이 되는 요소들을 answer 변수에 push();하여 넣어준다.
// sort메소드를 이용하여 순서대로 정렬해주고 
// sort(function(a,b){return a-b}) 오름차순 공식, sort(function(a,b){return b-a}) 내림차순 공식
// answer.length 값이 0일때는 answer에 -1을 push();, divisor로 나누어 떨어지는 요소가 하나도 없으면 -1을 리턴
