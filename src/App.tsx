import './App.css'


function Hello() {
  return <h1>Hello</h1>
}

const element1=  <h2>Hello, World</h2>
const element2=  (
    <ul>
      <li>JSX</li>
      <li>TSX</li>
    </ul>
)

// React 에서 대문자로 시작하고 jsx 태그를 리턴하는 함수는 컴포넌트라고 생각하면 됨
function App() {

  // <> 로 감싸는 이유
  // 최상위 요소를 둘 이상 반환하면 에러가 발생함
  // -> div or span 으로 감싸야함
  // -> 불필요한 DOM 요소가 만들어지니 <> 를 붙임 ( DOM 을 만들지 않고 자식 요소를 그룹화해서 반환함 )
  return (
      <>
        <h1>fuck !</h1>
        <Hello></Hello>
        {element1}
        {element2}
      </>
  )
}

export default App
