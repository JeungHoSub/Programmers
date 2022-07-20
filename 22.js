/* [문제 설명]

자릿수 더하기

문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수

입출력 예
N	answer
123	   6
987	  24
입출력 예 설명

입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

/*

/* [기본코드]

function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

*/

 // [어떻게 풀까?] 자연수 n을 split 메소드를 사용해 각각 쪼개고, 쪼갠 값들을 모두 더한다.

 function solution(n) {
    let answer = 0;  
    let str = n.toString();  
    let str_split = str.split('');  
    
    for(let i=0; i<str_split.length; i++) {  
        answer += parseInt(str_split[i]);   
    }
          return answer;
 }

 // str라는 변수에 자연수 n을 스트링값으로 변환
 // toString() 메소드는 숫자타입을 문자타입으로 변경.
 // str_split이라는 변수로 string.split(separator, limit) 사용
 // split은 숫자타입에서 사용x, 문자열을 일정한 구분자로 잘라서 배열로 저장
 // split을 통해 각각 나눔. ex) 123 = [1, 2, 3]


 // for문을 이용해 str_split.length만큼 i를 ++
 // parseInt(string, radix), string은 숫자로 변환할 문자열, radix는 문자열을 읽을 진법
 // parseInt를 통해 str_split의 배열수만큼 더한다.


 function solution(n){ 
    var answer = 0;
    var m=String(n); 
    
    for(var i=0; i<m.length; i++) {
        answer += parseInt(m[i]);  
    } 
    return answer;
}

