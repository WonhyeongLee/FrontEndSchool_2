// 플랫폼에 익숙해저야 한다. 프록래머스 or 구름EDU
// 속도 : c++ 난이도 : python
// 코드 스니펫(트리, 검색, 순열, 조합, 최단경로(다익스트라 등) 및
// cheat sheet 와 a4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두기!

// 자료구조와 알고리즘 
// 자료구조 : 데이터를 담는 구조
// 알고리즘 : 문제를 해결하는 방법
// 빅오 표기법 : O(1), O(n), O(N**2), O(N**3)
//             시간복잡도, 공간복잡도(메모리),

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

//shift() - O(n) : 인덱스를 바꾸기 때문에

// 몸풀기 2문제
// 1번. 1부터 10000까ㅓ지 8이라는 숫자가 총 몇번 나오는가 ?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야한다.

// 빈배열생성
// Array(10);
// let x = Array(10)
// [...Array(100)].map((_, i)=> i + 1)
Array(100).fill(1).map((value, index)=>value+index);
Array(100).fill(1).map((value, index)=>value+index)+'';
(Array(100).fill(1).map((value, index)=>value+index)
+'').split('8');
(Array(100).fill(1).map((value, index)=>value+index)
+'').split('8').length - 1;

///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 2번 정답
let q2 = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < q2.length; i++) {
    console.log(s[i]);
}

for (let i = 0; i < q2.length; i++) {
    console.log(q2[i+1] - q2[i]);
}

//다른 언어, but js에서는 -1안해줘도 error가 안남
for (let i = 0; i < q2.length - 1; i++) {
    console.log(q2[i+1] - q2[i]);
}

// 1번부터 시작해서 마지막까지
for (let i = 1; i < q2.length; i++) {
    console.log(q2[i] - q2[i-1]);
}

let arr = []
for (let i = 1; i < q2.length; i++) {
    arr.push(q2[i] - q2[i-1]);
}

let index = arr.indexOf(Math.min(...arr))
console.log(q2[index], q2[index+1])

// const zip = a => a.map((v, i) => [v, i]);

// const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
const zip = (a, b) => a.map((v, i)=>[v, b[i]]);


zip([100, 200, 300], [10, 20, 30])
zip([100, 200, 300], [10, 20, 30, 40, 50, 60])
zip([100, 200, 300, 400, 500, 600], [10, 20, 30])

zip([100, 200, 300, 400, 500, 600], 'hello')


[1, 3, 4, 8, 13, 17, 20]
[1, 3, 4, 8, 13, 17] // s.slice(0, s.length-1)
[3, 4, 8, 13, 17, 20] // s.slice(1)
let pairs = zip(q2.slice(0, q2.length-1), q2.slice(1))

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1
        // sort는 음수를 리턴하면 a를 왼쪽 b를 오른쪽으로 보냄
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1
        // sort는 양수를 리턴하면 a를 오른쪽 b를 왼쪽으로 보냄
    }
    return 0;
}

pairs.sort(비교)
pairs.sort(비교)[0]

//////// 쉬운 풀이 /////////

let s  = [1, 3, 4, 8, 13, 17, 20];

// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
// let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)

// 1. 스택
class Stack {
    constructor(){
        this.arr = []
    }

    push(data){
        this.arr.push(data)
    }
    pop(index){
        if (index > this.arr.length-1){
            return this.arr.pop() 
        }
        let result = this.arr.splice(index,1)
        return result
    }
    display(){

        return this.arr;
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)
stack.pop(2)
console.log(stack);

// [10,20,30,40].pop(2)  // 40 

