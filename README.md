# 바닐라 자바스크립트를 이용하여 HTML의 details태그 컨트롤 하기

## 조건

- 목록을 클릭하면 해당 아이템에 대한 컨텍스트메뉴가 나타나고,
- 메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는
- 팝오버 컴포넌트를 구현하세요.
- 팝오버는 한 번에 하나만 보여야 합니다.

## TODO

| 번호 | 내용                                                                                                                             |
| :--: | -------------------------------------------------------------------------------------------------------------------------------- |
|  1   | summary 클릭 시 p태그(내용)가 표시되고, 다시 같은 .item을 클릭 시 사라진다.                                                      |
|  2   | summary 클릭 시 p태그(내용)가 표시되고, 다른 summary을 클릭 기존의 p태그(내용)는 사라지고 다른 summary의 p태그(내용)가 표시된다. |
|  3   | summary 클릭 시 p태그(내용)가 표시되고, 다른 공간(summary을 제외)을 클릭하면 p태그(내용)는 사라진다.                             |
|  4   | p태그(내용) 클릭 시 아무 변화가 없어야 한다.                                                                                     |

## 배운점

### 1. details 클릭 시 summary가 클릭된다.

details를 클릭하여 console로 출력해보면 summary가 출력된다.
details를 얻고싶으면 summary의 parent element를 불러오면 된다.

```js
e.target.parentElement;
```

### 2. HTML의 attribute 컨트롤하기

```js
const details = document.querySelectorAll("details");

...

detail.removeAttribute("open");
```

### 3. body에 이벤트리스너를 설정하여 모든 이벤트 관리

#### **body에 이벤트리스너를 설정 시**

| 구분 | 내용                                                                                                                                                                       |
| :--: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 장점 | 1. 이벤트리스너가 하나라서 성능이 좋아진다.                                                                                                                                |
| 단점 | 1. 이벤트리스너가 하나라서 내부에 조건문이 많아질 수 있다. <br>2. 이벤트리스너가 body에 걸려있어서 모든 이벤트를 여기서 관리해서 add or remove로 메모리 관리를 할 수 없다. |
