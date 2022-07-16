function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i];
    }
    return answer = sum / arr.length;
}

// 평균값을 내기 위해 합계 sum
// sum = sum + arr[i]
// sum / 배열 arr.length = 평균값
// 