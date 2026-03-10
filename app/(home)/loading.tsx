export default function Loading() {
    return <h2>Loading...</h2>
}

/* 

server component에서 fetching 하는 중에 loading 파일을 제공해주면
그 파일이 페이지에 나타나게 된다. fetch이 끝나면 loading component를 page component로 변경한다.

이는 백엔드가 content를 streaming 하기 때문 + http streaming에 대해서 찾아보는 것도 나쁘지 않을 듯

로딩중이라고 판단될 때는 navigation Bar나 loading component 같은 준비된 HTML 부분을 브라우저에서 보여준다
그리고 await가 끝나면 마지막 HTML을 전달한다.
*/