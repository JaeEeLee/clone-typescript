//interface
interface Developer {
	name: string;
	skill: string;
}

// interface Person {
// 	name: string;
// 	// skill: string;
// }

class Person {  //이렇게해도 타입이 호환되지 않는다 //developer = person //err
	name: string
	skill: string //주석~
}

let developer: Developer
let person: Person

developer = new Person()
// developer = person //err :  부분 집합! 
// person = developer




let add = (a: number) => {
//  ...
}

let sum = (a: number, b: number) => {
	//...
}

sum = add
// add = sum //err! 


//generic
interface Empty<T> {
//..
}
let empty1: Empty<string>
let empty2: Empty<number>

interface NotEmpty<T> {
	data: T
}

let notempty1: NotEmpty<string>
let notempty2: NotEmpty<number>
// notempty1 = notempty2 //err!! 타입 호환이 안됨
// notempty2 = notempty1 //err!! 타입 호환이 안됨

