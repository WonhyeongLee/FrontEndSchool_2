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

// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

const list = { 
    head: {
        value:90,
        next : {
            value : 2,
            next : {
                value : 77,
                next : {
                    value : 35,
                    next : {
                        value : 21,
                        next : null
                    }
                }
            }
        }
    }
}
// head -> [90, next] -> [2, next] -> [77, next] [35, next] [21, next] null

// step 1
// class Node {
//     constructor(){
//         this.data = data
//         this.next = null
//     }
// }

// node1 = new Node(10)
// node2 = new Node(20)
// node3 = new Node(30)

// node1.data
// node1.next = node2
// node2.next = node3
// node1.next.next.data

// //step 2. 자동으로 다음 노드가 연결되는 linked list 구현

// class Node {
//     constructor(){
//         this.data = data
//         this.next = null

//     }
// }
// // head -> ['init',next] -> tail
// class LinkedList {
//     constructor(){
//         let init = new Node('init')
//         this.head = init
//         this.tail = init
//         this.length = 0
//         this.datas = ''
//     }
//     showLength(){
//         return this.length
//     }
//     toString(){
//         // 이 방식은 삭제할 때 문제가 된다
//         return '['+ this.datas.slice(0, -2) + ']'
//     }
//     append(data){
//         let new_node = new Node(data)
//         // 마지막 값은 새로운 노드가 됨
//         this.tail.next = new_node
//         this.tail = new_node
//         this.length += 1
//         this.datas += `${data}, `
//     }
// }
// one = new LinkedList()
// one.append(1)
// one.append(2)
// one.append(3)
// one.append(10)
// one.append(20)
// one.append(30)

// 삭제보완 toString -> arr 로 구현 
// class Node {
//     constructor(){
//         this.data = data
//         this.next = null

//     }
// }
// // head -> ['init',next] -> tail
// class LinkedList {
//     constructor(){
//         let init = new Node('init')
//         this.head = init
//         this.tail = init
//         this.length = 0
//         this.datas = []
//     }
//     showLength(){
//         return this.length
//     }
//     toString(){
//         return '['+ this.datas.toString + ']'
//     }
//     append(data){
//         let new_node = new Node(data)
//         // 마지막 값은 새로운 노드가 됨
//         this.tail.next = new_node
//         this.tail = new_node
//         this.length += 1
//         this.datas.push(data)
//     }
// }
// one = new LinkedList()
// one.append(1)
// one.append(2)
// one.append(3)
// one.append(10)
// one.append(20)
// one.append(30)
// one.length()

// 순회로 구현
class Node {
    constructor(data){
        this.data = data
        this.next = null

    }
}
// head -> ['init',next] -> tail
class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
    }
    showLength(){
        return this.length
    }
    toString(){
        let currentNode = this.head
        currentNode = currentNode.next

        let datas = ''
        for(let i = 0; i < this.length; i++){
            datas += `${currentNode.data}, `
            currentNode = currentNode.next
        }
        return '[' + datas.slice(0,-2) + ']'
    }
    append(data){
        let new_node = new Node(data)
        // 마지막 값은 새로운 노드가 됨
        this.tail.next = new_node
        this.tail = new_node
        this.length += 1
    }
}
one = new LinkedList()
one.append(1)
one.append(2)
one.append(3)
one.append(10)
one.append(20)
one.append(30)
one.showLength()
one.toString()


// 노드(데이터) 삽입 하기
class Node {
    constructor(data){
        this.data = data
        this.next = null

    }
}
// head -> ['init',next] -> tail
class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
    }
    showLength(){
        return this.length
    }
    toString(){
        let currentNode = this.head
        currentNode = currentNode.next

        let datas = ''
        for(let i = 0; i < this.length; i++){
            datas += `${currentNode.data}, `
            currentNode = currentNode.next
        }
        return '[' + datas.slice(0,-2) + ']'
    }
    // data를 얻기위한 메서드, data를 넣기위한 메서드는 getter, setter 를 사용 권고합니다
    fullData() {
        return JSON.parse(this.toString())
    }
    append(data){
        let new_node = new Node(data)
        // 마지막 값은 새로운 노드가 됨
        this.tail.next = new_node
        this.tail = new_node
        this.length += 1
    }
    insert(index, data){
        let currentNode = this.head
        currentNode = currentNode.next
        for(let i = 0; i < index - 1; i++){
            currentNode = currentNode.next
        }
        let newNode = new Node(data)
        newNode.next = currentNode.next
        currentNode.next = newNode

        this.length += 1
    }
}
one = new LinkedList()
one.append(1)
one.append(2)
one.append(3)
one.append(10)
one.append(20)
one.append(30)
one.showLength()
one.toString()
console.log(one.fullData());
one. insert(3, 1000)
console.log(one.fullData());


// 더블 링크드 리스트의 기본 형태

class Node {
    constructor(data){
        this.data = data
        this.pre = null
        this.next = null

    }
}
// head -> ['init',next] -> tail
class DoubleLinkedList {
    // ... 중략 ...
    append(data){
        let new_node = new Node(data)
        // 마지막 값은 새로운 노드가 됨
        this.tail.next = new_node
        newNode.pre = this.tail
        this.tail = new_node
        this.length += 1
    }
    // ... 중략 ...
}
one = new LinkedList()
one.append(1)
one.append(2)
one.append(3)
one.append(10)
one.append(20)
one.append(30)
one.showLength()
one.toString()
console.log(one.fullData());
one. insert(3, 1000)
console.log(one.fullData());


// 정렬
//3.1 선택정렬
// //step1
// let 전 = [199, 22, 33,12, 32, 64 , 72, 222, 233];
// let 후 = []

// //step2
// let 전 = [199, 22, 33, 32, 64 , 72, 222, 233];
// let 후 = [12]

// //step3
// let 전 = [199, 33, 32, 64 , 72, 222, 233];
// let 후 = [12, 22]

// //step4
// let 전 = [199, 33, 64 , 72, 222, 233];
// let 후 = [12, 22 ,32]

// let 입력값 = [199, 22, 33,12, 32, 64 , 72, 222, 233];
// let 정렬된배열 = []
// let 길이 = 입력값.length

// for(let i = 0; i < 입력값.length; i++){
//     console.log(입력값.pop());
//     console.log(i);
// }

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []
let 길이 = 입력값.length

// 주의해야 할 사항 : pop을 하면 length가 줄어듭니다!
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())
//     console.log(i)   
// }

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값)
    입력값.splice(입력값.indexOf(최솟값), 1)
}

// while(!!입력값.toString())
// !!'' -> false 라서 길이값을 신경 안써도된다

// 3.1 삽입정렬(메서드 최소화)
// 제대로 하려면(자리 바꾸는 것까지)

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []

function selectionSort(arr){
    for (let i = 0; i< arr.length;i++){
        let min_index = i
        for(let j = i + 1; j <arr.length; j++){
            if(arr[min_index] > arr[j]){
                min_index = j
            }   
        }
        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp
        // [a,b] = [b,a] 로 할 수 있음
        // (구형브라우저에서 작동안할수있음)
    }
}

// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감, O(n**2)   )

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;
function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값){
    for(const i in 정렬된배열){
        if(삽입값 < 정렬된배열[i]){
            return i
        }
    }
    return 정렬된배열.length
}
for(let i = 0; i < 배열의길이; i++){
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값)
    정렬된배열.splice(인덱스,0,삽입값)
}

//

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let [value, ...arr2] = arr;
        arr = arr2
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));

// 3.3 병합정렬 (worst와 best 모두 O(nLogn), 어떤 정렬보다 빠름)
// 분할(이해를 돕기 위해 8개로 조정)
[5, 10, 66, 77, 54, 32, 11, 15]
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

// 정복(0번째끼리 비교!)
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]

let 입력값 = [5,10,66,77,54,32,11,15]
function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    if(입력배열의길이 <= 1){
        return 입력배열
    }
    // 배열의 길이 1 이면 1개니까 정렬할 필요가 없다
    let 중간값 = perseInt(입력배열의길이 / 2)
    let 그룹1 = 병합정렬(입력배열.slice(0,중간값))
    let 그룹2 = 병합정렬(입력배열.slice(중간값))

    return `구룹2 : ${그룹1} \n
    그룹2 : ${그룹2} \n\n`
}
console.log(병합정렬(입력값));

// step 2 
let 입력값 = [5,10,66,77,54,32,11,15]
function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    let 결과값 = []
    if(입력배열의길이 <= 1){
        return 입력배열
    }
    // 배열의 길이 1 이면 1개니까 정렬할 필요가 없다
    let 중간값 = parseInt(입력배열의길이 / 2)
    let 그룹1 = 병합정렬(입력배열.slice(0,중간값))
    let 그룹2 = 병합정렬(입력배열.slice(중간값))

    while(그룹1.length !=0 && 그룹2.length != 0){
        if(그룹1[0] < 그룹2[0]){
            결과값.push(그룹1.shift())
        }else {
            결과값.push(그룹2.shift())
        }
    }
    while(그룹1.length != 0){
        결과값.push(그룹1.shift())
    }
    while(그룹2.length != 0){
        결과값.push(그룹2.shift())
    }
    return 결과값
}
console.log(병합정렬(입력값));

// 분할정렬

// 3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.

// step 1 
// 피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//  step 2
// pivot : 54 (66과 77은 값이 한 개이기 때문에 더 이상 재귀로 호출X)
[32, 10, 5, 11, 15] + [54] + [66] + [77]

// step 3
// pivot : 32
[10, 5, 11, 15] + [32] + [54] + [66] + [77]

// step 4
// pivot : 10
[5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// step 5
// pivot : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    if (입력배열의길이 <= 1){
        return 입력배열
    }
    const 피벗값 = [입력배열.shift()]
    const 그룹1 = []
    const 그룹2 = []

    for(let i in 입력배열){
        if(입력배열[i] < 피벗값){
            그룹1.push(입력배열[i])
        } else {
            그룹2.push(입력배열[i])
        }
    }
    console.log(`그룹1: ${그룹1}\n그룹2 : ${그룹2}\n피벗값 : ${피벗값}\n`);
    return 퀵정렬(그룹1).concat(피벗값, 퀵정렬(그룹2))
}
console.log(퀵정렬(입력값));

// 트리 오브젝트 구현
const tree = {
    root : {
        value : 55,
        left : {
            value: 30,
            left: {
                value: 25,
                left: {
                    value: 21,
                    left : null,
                    right : null
                },
                right: null
            },
            right: {
                value: 37,
                left: null,
                right: null
            },
        },
        right : {
            value: 70,
            left: null,
            right: {
                value: 77,
                left: {
                    value : 75,
                    left : null,
                    right: null
                },
                right: {
                    value : 80,
                    left : null,
                    right : null
                }
            },
        },
    }
}
tree.root.value
// 55
tree.root.right.value
// 70


// object나 array(기존 자료형)로 tree 나 linked LIST 를 구현할 수 있는데 왜 class 로 구현할까요?

// 1. 더 lite 한 모델을 만들기 위해 
// 2. 확장성
// 3. OOP , 객체 지향 프로그래밍의 철학에 맞기 때문

// 
const root = {
    value: 55,
    left: null,
    right: null
}

let node1 = {value:99, left:null, right:null}
let node2 = {value:53, left:null, right:null}
let node3 = {value:37, left:null, right:null}
let node4 = {value:54,  left:null, right:null}
root.right = node1
root.left = node2
node2.left = node3
node2.right = node4

root.root
// 55
root.right.value
// 99
root.left.value
// 53
root.left.left.value
// 37

// step1. 노드생성 
class Node{
    constructor(data){
        this.data = data
        // this.child = [] 
        // 2진트리가 아닌 트리가 됩니다
        this.left = null
        this.right = null
    }
    
    // 
}

노드1 = new Node(55)
노드2 = new Node(99)
노드3 = new Node(53)
노드4 = new Node(37)
노드5 = new Node(54)

노드1.right = 노드2
노드1.left = 노드3
노드3.right = 노드5
노드3.left = 노드4

// step2. tree

class Node{
    constructor(data){
        this.data = data
        // this.child = [] 
        // 2진트리가 아닌 트리가 됩니다
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(){
        let init = new Node(data)
        this.root = init
        this.데이터수 = 0
    }
    length(){
        return this.데이터수
    }

    insert(data){
        let 새로운노드 = new Node(data)
        let 순회용현재노드 = this.root 
        
        while(순회용현재노드){
            if (data === 순회용현재노드.data){
                // 값이 같으면 추가시켜주지 않습니다.
                return
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.left
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.right
            }
        }
    }
        //깊스너큐, 파선아실
        DFS() {
            // 깊이우선탐색, DFS(Depth First Search)
            // Stack 이용!
            let 결과값 = []
            let 스택 = [this.root]
    
            while (스택.length !== 0){
                let current = 스택.pop()
                if (current.right){
                    스택.push(current.right)
                }
                if (current.left){
                    스택.push(current.left)
                }
                결과값.push(current.data)
            }
            return 결과값
        }
    
        BFS() {
            // 너비우선탐색, BFS(Breadth First Search)
            // Queue 이용!
        }
}

let t = new Tree(5)
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.data
// 5
t.root.left.data
// 3
t.root.right.right.data
// 9
t.root.right.left.data
// 6


// 암호를 해독
// 지도는 한 변의 길이가 n인 정사각형 배열 형태로 , 각 칸은 "공백" 또는 벽 "#" 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 곂쳐서
// 하나라도 벽인 부분은 전체 지도에서도 벽
// 두 공백인 부분은 전체 지도에서도 공백
// or 연산
// 정수 배열로 암호화
// 벽 부분을 1. 공백 부분을 0으로 부호화
// 매개변수 값

// arr1 [9, 20, 28, 18, 11]
// arr2 [30, 1, 21, 17, 28]
// 출력  ["#####","# # #", "### #", "# ##", "#####"]
// ex) 9 : 01001 / 30 : 11110 or 연산 -> 11111 => #####

let x = 9
x.toString()
x.toString(2)

let x = 9
x.toString(2).replace(/1/g, '#')
x.toString(2).replace(/1/g, '#').replace(/0/g, ' ')

// n 5
// arr1 [9, 20, 28, 18, 11]
// arr2 [30, 1, 21, 17, 28]

// 풀이
function solution(n, arr1, arr2) {
    result = []
    for (let i = 0; i < n; i++) {
        result.push((arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' '))    
    }
    return result
}
// 1001같이 앞이 0대신 공백이 있는 예외처리가 필요하다

console.log(solution(n, arr1, arr2));

// 유틸리티 코드 적용 //

const zip = (a,b) => a.map((v,i) => [v, b[i]])
const fillZero = (n, s) => {
    return '0'.repeat(n - s.length) + s
}
const fillSpace = (n,s) => {
    return ' '.repeat(n - s.length) + s
}
// 001001 처럼 앞이 공백대신 0으로 채워주게 해주는 예외처리 적용


// 풀이
n = 5
arr1 [9, 20, 28, 18, 11]
arr2 [30, 1, 21, 17, 28]
function solution(n, arr1, arr2) {
    result = []
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n,(arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))   
    }
    return result
}
console.log(solution(n, arr1, arr2));

// zip 사용해서 풀기
// 깜지하며서 이해해보기 
n = 5
arr1 [9, 20, 28, 18, 11]
arr2 [30, 1, 21, 17, 28]
function solution(n, arr1, arr2) {
    const fillSpace = (n, s) => {
        return ' '.repeat(n - s.length) + s
    }
    const zip = (a,b) => a.map((v,i) => [v, b[i]])
    result = []
    for(const [i,j] of zip(arr1, arr2)){
        result.push(fillSpace(n, (i | j)
        .toString(2)
        .replace(/1/g, '#')
        .replace(/0/g, ' ')))
    }

    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))
    }
    return result
}

// 최종정답

function solution(n, arr1, arr2) {
    const fillSpace = (n, s) => {
        return ' '.repeat(n - s.length) + s
    }
    result = []
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))
    }
    return result
}


// 다트게임
// 문자열 파싱
// 3번의 기회
//  0~ 10 점
// 영역 - single(s), double(d), triple(t) - 1,2,3 제곱
// 옵션 - * = 2배 , # = 마이너스

// step 2, 예외처리 + 나머지 코드
testcase = [
    '1S2D*3T', // 37
    '1D2S#10S', // 9
    '1D2S0T' // 3
]

for (const i of testcase) {
    //console.log(i)
    console.log(solution(i))
}

function solution(dartResult){
    let answer = []
    let result = 0
    let temp = 0

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9){
            if(dartResult[i] == 1 && dartResult[i+1] == 0){
                temp = 10
                // continue
                i++
            } else {
                temp = parseInt(dartResult[i])
            }
        } else if(dartResult[i] == 'S'){
            answer.push(temp)
        } else if(dartResult[i] == 'D'){
            answer.push(temp**2)
        } else if(dartResult[i] == 'T'){
            answer.push(temp**3)
        } else if(dartResult[i] == '*'){
            answer[answer.length-1] *= 2
            answer[answer.length-2] *= 2
        } else if(dartResult[i] == '#'){
            answer[answer.length-1] *= -1
        }
    }
    for (const value of answer) {
        result += value
    }
    return result
}

// LRU문제(오랫동안 사용되지 않은 요소 삭제)
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/#3-%EC%BA%90%EC%8B%9C%EB%82%9C%EC%9D%B4%EB%8F%84-%ED%95%98
// 문제를 해석할 때 필요한 텍스트랑 불필요한부분이랑 구분을 잘 해야한다

// 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
// cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
// cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
// 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.
// cache hit일 경우 실행시간은 1이다.
// cache miss일 경우 실행시간은 5이다.

testcase = [
    [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
    [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
    [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
];

for (const [cacheSize, cities] of testcase) {
    console.log(solution(cacheSize, cities));
}
function solution(cacheSize,cities){
    let time = 0 
    let cache = []
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase()
        let index = cache.indexOf(city)
        if(index !== -1){
            // hit
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        }else{
            //miss
            cache.push(city)
            time += 5
            if(cacheSize < cache.length){
                cache.shift()
            }
        }
        
    }
    return time
}

// 19년도 1번 오픈채팅방 문제
// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/

// 관리자창
// 닉네임변경
// 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
// 채팅방에서 닉네임을 변경한다.

let test = [
    'A 10 !',
    'B 20 !',
    'A 22 @',
    'B 20 @',
    'A 21 @'
]

test.forEach(s => {
    console.log(s.split(' '));
});

let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = []
    let user = {}

    for (const i of record){
        const [상태, 아이디, 닉네임] = i.split(' ')
        answer.push([상태, 아이디, 닉네임])
    }
    return answer
    
}

// step 2
// 
let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = []
    let result = []
    let 유저정보 = {}

    for (const i of record){
        const [상태, 아이디, 닉네임] = i.split(' ')
        if(상태 === 'Enter'){
            유저정보[아이디] = 닉네임
            result.push([아이디, '님이 들어왔습니다.'])
        } else if (상태 === 'Leave') {
            result.push([아이디, '님이 나갔습니다.'])
        } else if (상태 === 'Change') {
            유저정보[아이디] = 닉네임
        }
    }
    // push가 2개가 되었으니 합쳐줘야함
    for (const [아이디, 메세지] of result) {
        answer.push(유저정보[아이디] + 메세지)
        // [].join('')
    }

    return answer
}
solution(record)

// 실패율
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 
// 스테이지에 도달한 플레이어 수 

// 전체 스테이지의 개수 N, 
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

let n = 5
let stages = [2,1,2,6,2,4,3,3]

function solution(스테이지수, stages){
    let 실패율 = []
    let 유저수 = stages.length

    for (let i = 1; i < 스테이지수+1; i++){
        let 도달한사람수 = stages.filter((user)=>user === i).length
        let 확률 = 도달한사람수/유저수
        유저수 -= 도달한사람수
        실패율.push({
            확률 : 확률,
            stage : i
        })
    }
    실패율.sort((a,b) =>{
        if(a.확률 === b.확률){
            return a.stage - b.stage
        } else {
            return b.확률 - a.확률
        }
    })
    return 실패율.map(object => object.stage)
}
solution(5,[2,1,2,6,2,4,3,3])


// 추가 유틸리티 코드
// 무한 이터러블을 생성하는 제너레이터 함수
// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
const infi = (function* () {
    let x = 0

    while (true) {
        x += 1
        yield x;
    }
}());

const zip = (a, b) => a.map((v, i)=>[v, b.next().value]);
// next().value 로 값만 뽑음
// zip([10, 20, 30], [100, 200, 300])
zip([10, 20, 30], infi)
// 자동으로 숫자를 생성해서 묶어줌

// for (const i of infi) {
//     if (i > 10){
//         break;
//     }
//     console.log(i);
// }