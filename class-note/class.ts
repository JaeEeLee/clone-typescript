class Person { 
	private named: string
	public age: number
	readonly log: number

	constructor(named: string, age: number) {
		this.named = named
		this.age = age
	}
}
//리액트 예전 문법
// class App extends React.Component {

// }


  
// react 최신 문법 - hook 기반 함수형 코드
// const App = () => {
// 	return <div>Hello World</div>
// }

// new Vue({
// 	el: '',
// 	setup() {

// 	}
// })