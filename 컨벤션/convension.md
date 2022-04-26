# 컨벤션
 - 네이버 컨벤션
    - https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf
    <br>
    class 명과 폴더명, 이미지명은 예약된



 - google code convention
    - https://google.github.io/styleguide/
    - 아래와 같이 사용하지 않는다 (링크에 타입 안씀)
      ```

      ```
 - toast 컨벤션
    - https://ui.toast.com/fe-guide/ko_HTMLCSS
      ```
      <!-- Bad -->
      <input type="text" disabled=true>

      <!-- Good -->
      <input type="text" disabled>

      <!-- Good -->
      <input type="checkbox" value="1" checked>

      <!-- Bad -->
      <input type="checkbox" value="1" checked=true>

      <!-- Good -->
      <select>
        <option value="1" selected>1</option>
      </select>

      <!-- Bad -->
      <select>
        <option value="1" selected=true>1</option>
      </select>
      ```
    - 단일 스타일은 한 줄에 표시한다.<br>
      반대로 다중 스타일은 정확한 디버깅을 위해 한 줄에 속성을 하나씩 표시한다.
      ```
      /* Bad */
      .selector {
        padding:15px;
      }
      .selector {padding: 15px;margin: 15px;}

      /* Good */
      .selector {padding:15px;}
      .selector {
        padding: 15px;
        margin: 15px;
      }
      ```
    - https://ui.toast.com/fe-guide/ko_CODING-CONVENTION
 - airbnb 컨벤션
    - https://github.com/airbnb/javascript
 - class101 컨벤션
    - https://jobs.class101.net/dev/event/secret_codereview