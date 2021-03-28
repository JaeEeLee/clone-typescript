// const logText = (text) => {
// 	console.log(text);
// 	return text
// }

// logText(10) //숫자
// logText('hi') //문자열
// logText(true) // 진위값


// function logText<T>(text: T): T {
// 	console.log(text);
// 	return text
// }
// // logText('hi') //문자열
// logText<string>('hi') //문자열 타입 지정



function logText<T>(text: T): T {
	return text
}

const str = logText<string>('abc')
str.split('')

const login = logText<boolean>(true)


// interface Dropdown {
// 	value: string;
// 	selected: boolean
// }

// const obj: Dropdown = { value: 'abc', selected: false }

// interfalse에 제네릭 선언 법
interface Dropdown<T> {
	value: T;
	selected: boolean
}

// const obj: Dropdown<string> = { value: 'abc', selected: false }
const obj: Dropdown<number> = { value: 'abc', selected: false }



//제네릭의 타입 제한
// const logTextLength = <T>(text: T[]): T[] => {
// 	console.log(text.length);
// 	text.forEach(text => {
// 		console.log(text);
// 	})
// 	return text
// }

// logTextLength<string>(['hi', 'hello'])



//제네릭 타입 제한 2 - 정의된 타입 이용
interface LengthType {
	length: number;
}

//extends 는 이미 정의된 타입에 대해 확장하겠다는 정의를 내리는 것
const logTextLength = <T extends LengthType>(text: T): T => { 
	text.length
	return text
}

logTextLength('a')