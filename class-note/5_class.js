const Person_ = (name, age) => {
	this.name = name
	this.age = age
}
let capt = new Person_('cg', 100)



/**
 * javascript 는 prototype 기반 언어
 */

class Person_ {
	//클래스 로직
	/**
	 * 초기화 constructor()
	 */

	 constructor(name, age) { //초기화 constructor()
		 console.log('생성 되었습니다.');
		 this.name = name
		 this.age = age
	 }
}


let _jaei = new Person_('재이', 26) 
// class Person {
// 	//클래스 로직
// 	/**
// 	 * 초기화 constructor()
// 	 */

// 	 constructor() {
// 		 console.log('생성 되었습니다.');
// 	 }
// }

// new Person() // 생성되었습니다.


// let user = { name: 'capt', age: 100 }
// let admin = {}

// admin.__proto__ = user