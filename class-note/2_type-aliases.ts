/**
 * type 은 구체적 키값이 나오지만 interface는 interface 이름이 나온다
 * so command or ctrl? alt? 누르고 마우스 오버하면 구체적으로 나온다
 * type vs interface 의 큰 차이점은 타입으 ㅣ확장 가능/불가능
 * type 은 확장 불가능
 * 좋은 소프트웨어는 언제나 확장이 용이해야한다는 원칙!! 가능하면 인터페이스로 선언을 선호
 */



interface Person_ {
	name: string;
	age: number;
}

// type Person_ = {
// 	name: string;
// 	age: number;
// }

let _jaei: Person_ = {
	name: '쟁',
	age: 26
}

type MyString = string
let _str: MyString = 'hi'

type TODO = { id: string; title: string; done: boolean}
const getTodo = (todo: TODO) => {

}