1. pages에 원하는 라우팅 url을 이름으로 하는 js 파일을 만든다.

2. 사이드바 없는 페이지는 About.js 같이만들고 사이드바 있는 페이지는 Studies.js 같이 만든다.

3. Layout을 임포트해주고 그 밑네 body 부분에 들어갈 jsx를 작성한다.

4. Layout의 props는 {sideList, setSideCurrent,pathName, children} 이거 네개인데, 
children은 자동으로 넘어오는 props이고 pathName은 About.js, Studies.js 와 같이 꼭 넘겨주어야 한다.

sideList 를 넘겨주지 않으면 자동으로 사이드바가 생겨나지 않는다. 전체 화면을 쓰고싶다면 sideList에 0을 넘겨준다.

setSidecurrent도 넘겨주어도되고 안넘겨주어도된다.
단 리액트에서 렌더링 되는 페이지를 다르게 하고 싶으면 setSideCurrent를 이용하면 된다.  