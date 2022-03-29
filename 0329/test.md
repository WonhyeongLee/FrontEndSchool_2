# 0329 TIL

- 기초상식, HTML 기초 ~ Grouping content

## **3월 29일 과제**

1. URL , IP , PORT 정리
2. HTML Living Standard란 ?
3. ~ Grouping content 까지 이미지 포함하여 정리하기
4. ~~github 가입~~ (계정있음)
5. ~~extension 설치~~ (설치완료)

### **1.URL, IP, PORT 정리**

![blog img](./%EA%B8%B0%EC%B4%88.png)

IP는 넷상에서 사용하는 주소체계라고 한다.

PORT는 네트워크 상에서 특정 PC를 나타내는 IP주소와 그 주호에 진입할 수 있는 통로(문)를 PORT 라고 한다.

URL은 흔히 웹 주소라고 하며 웹상에서 서비스를 제공하는 각 서버들에 있는 자원이 실제로 존재하는 위치를 가리긴다.(Uniform Resource **Locator**)

URI는 자원의 위치뿐만 아니라 특정 리소스를 식별하는 통합 자원 식별자를 의미한다.(Uniform Resouce **Identifier**)

`https://www.naver.com:443` 을 예로 들면 [ 프로토콜 : // 도메인 : 포트 ] 로 나뉜다.

포트는 보통 추가하지 않아도 자동으로 들어가게 된다.<br>
(https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D)[포트목록]

현 시점 궁금점을 다 해결하기엔 파도파도 끝이 없어서
강사님이 추천해주신 HTTP완벽 가이드를 따로 공부해서 더 추가해야겠다.

### **2. HTML Living Standard 란 ?**

결론부터 적으면 현재는 WHATWG가 발표하는 HTML Living Standard 가 웹표준이라고 한다.<br>
(https://html.spec.whatwg.org/)[링크]

W3C 와 WHATWG가 다른것도 요번 강의에 알았는데

간단히 요약하면 W3C의 마지막 HTML표준은 HTML5.2 이고 HTML5.3은 중단됐으며 최신 표준이 궁금할 땐

위의 WHATWG 링크에서 찾아보면 된다는 것이다.

### **3. 수업내용 정리**

생산성을 늘리는 emmit 사용법

```
태그${내용}\*(개수)
($ : 순차적으로 번호)
태그 + 태그
태그 > p
태그 + 태그 + 태그
태그 > 태그 * (갯수)
태그#(아이디이름)
태그.(클래스이름)
태그[태그="값" 태그="값"]
ex )테이블생성 table>(tr>td*4)*3
```

이외에도 정말 다양한 사용법이 있다 (https://docs.emmet.io/cheat-sheet/)[링크]

`<!DOCTYPE html>` 써야하는 이유, 안쓰면 하위호환모드로 들어가서 다르게 동작 할 수 있다<br>
`<mata>` --> 해당 문서의 메타데이터를 나타내는 요소 , SEO 최적화하기 위해 사용<br>
`<div>` --> div 로만 사용해 구현하는 방법은 **최후의 수단**, 웹 접근성을 높히는 방향으로 구현 해야한다<br>
`<article>` --> **독립적**으로 구분하거나 **재사용**할 수 있는 구획<br>
![blog img](./article%EC%98%88%EC%8B%9C.png)

위 사진과 같이 다른 페이지에 붙여도 독립적으로 사용 가능하다면 article 요소 고려

`<section>` --> 하나의 주제로 그룹화된 컨텐츠(다른 서비스에 가져다 놓으면 이상함) , 일반적으로 섹션 요소의 하위 항목으로 제목을 포함시켜 식별

` <article>``<section> ` 는 heading 요소와 함께 사용하는 것을 권장(높이 없이 비워두기도 함)

`<dl><dd><dt>` --> 웹 접근성 지켜주려고 주로 사용 ex)회사명 , 번호 등

`<br>`--> 직접주는경우는 거의 없다(특히 2번은 절대 안씀), 보통 CSS로 조절함

`&nbsp` --> 스페이스, 거의 사용하지 않고 특수한 경우에만 사용

`<cite>, <blackquate>, <q>`
`<cite>` --> 저작물의 출처를 표기할 때 사용하며 제목을 반드시 포함해야 한다. 특이한 점은 W3C 와 WHATWG 에서의 명세가 다르니 참고
`<blackquate>, <q>` 요소가 가진 인용문의 출처를 나타내려면 cite 특성을 사용한다
[https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite](https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite)
cite 문서링크

`<main>` --> IE에서는 쓰이지 않음, 다른페이지나 섹션에서 반복적으로 표시 될 수 있는 정보(로고, 검색 폼, 저작권 정보 등)는 들어가지 않음
공공기관사이트에선 사용 주의

`<hr>` --> HTML5 에서 의미가 생김 , 회사마다 사용이 다름 `<p>` 태그 내 사용은 웹 표준에 어긋남

`<address>` 가장 가까운 부모 article 이나 body 요소의 연락처 정보를 나타냅

### **간단 소감**

기본개념을 엄청 자세히 알려주시고 HTML 뼈대 구조를 어떻게 짜는지 생각하기 어려웠는데 실무환경 참고해서 말해주시는게 정말 도움이 된다.
오늘은 70% 정도는 아는 내용인데 그렇다고 다른 것을 먼저 진행하기엔 확실히 알지 못해서 집중해서 듣고 기록하고 있다.
HTTP같은 개념도 주말 이용하여 공부해 포스팅할 예정
