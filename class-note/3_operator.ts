// const logMessage = (value: any) => {
// 	console.log(value);
// }

// logMessage('hello')
// logMessage(100)

// union 타입!!
// const logMessage = (value: string | number) => {
// 	console.log(value);
// }

// logMessage('hello')
// logMessage(100)

let jaeng: string | number | boolean
const logMessage = (value: string | number) => {
	if (typeof value === 'number') {
		// type 별로 제공하는 api 속성들을 사용할수있다! 
		value.toLocaleString()
	}
	if (typeof value === 'string') {
		value.toString()
	}
	throw new TypeError('value must be string or number') //에러 처리!
}
jaeng = 1

logMessage(jaeng)
logMessage('hello')
logMessage(100)

interface Developer {
	name: string
	skill: string
}

interface Person {
	name: string
	age: number
}

const askSomeone = (someone: Developer & Person) => { // union type => 실무에서 더 많이 씀
	// someone.name
	// someone.skill
	// someone.age
}

askSomeone({ name: 'developler', skill: 'web', age: 100})

// const askSomeone = (someone: Developer | Person) => { // union type => 실무에서 더 많이 씀
// 	// someone.name
// 	// someone.skill
// 	// someone.age
// }

askSomeone({ name: 'developler', skill: 'web'})
askSomeone({ name: 'captin', age: 100})

// const askSomeone = (someone: Developer & Person) => {//intersect type  
// 	someone.name
// 	someone.skill
// 	someone.age
// }
