interface User {
	age: number;
	name: string;
}

// 변수에 활용한 인터페이스
var jaei: User = {
	age: 26,
	name: '재이'
}

//함수에 인터페이스 활용
const getUser = (user: User) => {
	console.log(user);
}

const capt = {
	name: 'captin',
	age: 45
}

getUser(capt)

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
	// (인자1: 인사1의 타입): 반환 값
	(a: number, b: number): number
}

let sum: SumFunction

sum = (a: number, b: number): number => {
	return a + b
}

//인덱싱
interface StringArray {
	[index: number]: string
}

let arr: StringArray = ['a','b','c']
// arr[0] = 10

//딕셔너리 패턴
interface StringRegexDictionary {
	[key: string]: RegExp
}

let obj: StringRegexDictionary = {
	// sth: /abc/,
	// cssFile: 'css'  => error 정규표현식이 들어와야함 
	cssFile: /\.css$/,
	jsFile: /\.js$/,

}

// obj['cssFile'] = 'a' 오류! 정규표현식 와야함!

// 딕셔너리 패턴의 장점
Object.keys(obj).forEach((v) => { //타입추론 가능
// ~~
})

//인터페이스 확장
interface Person {
	name: string,
	age: number
}

interface Developer extends Person {
	language: string
}

let capting: Developer = {
	name: "jaei",
	age: 26,	
	language: 'ts',
}