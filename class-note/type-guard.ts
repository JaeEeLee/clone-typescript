interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

const introduce = (): Developer | Person => {
	return { 
		name: 'Tony',
		age: 33,
		skill: 'Iron Making'
	}
}

// example start
let tony = introduce()
console.log(tony.name);
// console.log(tony.skill); //err

if((tony as Developer).skill) {
	let skill = (tony as Developer).skill
	console.log(skill);
} else if ((tony as Person).age) {
	let age = (tony as Person).age
	console.log(age);
} //이럴때 쓰는게 타입 가드!!
// example end



// example solution start
//타입 가드 정의
const isDeveloper = (target: Developer | Person): target is Developer => {
	return (target as Developer).skill !== undefined
}

if(isDeveloper(tony)) {
	tony.skill
}else {
	tony.age
}
// example solution end
