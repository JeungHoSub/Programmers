1번. 행렬 음양 더하기
행렬이 두개 있습니다. 두 행렬의 절댓값을 차례대로 담은 정수 배열 arr1, arr2와 행렬의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 두 행렬의 부호는 같습니다.
실제 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
입출력 예
[[1,2],[2,3]]
[[3,4],[5,6]]
[[true,true],[true,false]]
[[4,6],[7,-9]]
[[1],[2]]
[[3],[4]]
[[false],[false]]
[[-4],[-6]]
지정 입력값
[[5,7,1],[2,3,5]]
[[5,1,6],[7,5,6]]
[[true,true,false],[false,true,false]]
[[10,8,-7],[-9,8,-11]]

function solution(arr1, arr2, signs){
	let answer=[[]];
	return answer;
}
let arr1=[[5,7,1],[2,3,5]];
let arr2=[[5,1,6],[7,5,6]];
let signs=[[true,true,false],[false,true,false]];
console.log(solution(arr1, arr2, signs))


function solution(arr1, arr2, signs){
	let answer=[arr1.length][arr2.length];

  for(let i =0; i<arr1.length; i++){
    for(let j=0; j<arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  for(let i =0; i < arr1.length; i++){
    for(let j=0; j < arr1[0].length; j++) {
      if (sign[i][j] === false) {
        answer[i][j] === -(answer[i][j]);
    }
  }
  }
	return answer;
}


let arr1=[[5,7,1],[2,3,5]];
let arr2=[[5,1,6],[7,5,6]];
let signs=[[true,true,false],[false,true,false]];
console.log(solution(arr1, arr2, signs))




2번. 자연수 뒤집어 더하기
자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.
제한 조건
N의 범위 : 100,000,000 이하의 자연수
입출력 예
12345
"5+4+3+2+1=15"
1532576
"6+7+5+2+3+5+1=29"
지정 입력값
718253
"3+5+2+8+1+7=26"

function solution(n){
	let result=""
	return result;
}
console.log(solution(718253))





3번. 같은 단어는 싫어
배열 arr와 정수 n이 주어집니다. 배열 arr의 각 원소는 문자열로 이루어져 있습니다. 이때, 배열 arr에서 중복되는 단어는 전부 제거하려고 합니다. 단, 제거된 후 남은 단어들을 반환할 때는 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["brush", "sun", "brush", "bed", "car"]이고 n이 1이면 중복을 제거한 배열인 ["sun", "bed", "car"]에서 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
입출력 예
["brush", "sun", "brush", "bed", "car"]
1
["car", "bed", "sun"]
["banana", "cat", "car", "apple", "banana", "banana"]
0
["apple","car","cat"]
지정 입력값
["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"]
2
["glass", "yogurt", "coke", "vitamin", "water"]

function solution(arr, n){
	let answer=[];
	return answer;
}
let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n=2;
console.log(solution(arr, n))