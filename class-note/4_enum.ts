// enum Shoes {
// 	Nike,
// 	// Nike = 10, 초기화를 한 상태. 초기화를 하면 초기화값부터 1씩 증가된다
// 	Adidas 
// }

// let myShoes = Shoes.Nike
// console.log(myShoes); // 0

enum Shoes {
		Nike = '나이키',
		Adidas = '아디다스'
	}
	
let myShoes = Shoes.Nike
console.log(myShoes); // '나이키'
	




enum Answer {
	Yes = 'Y',
	No = 'N'
}
// 정확한 코드와 예외처리가 가능!! 요거 좋은듯
const askQuestion = (answer: Answer) => { 
	if (answer === Answer.Yes) {
		console.log('정답입니다');
	}
	if (answer === Answer.No) {
		console.log('오답입니다');
	}
}
askQuestion(Answer.Yes)
// askQuestion('yy')
// askQuestion('y')
// askQuestion('yes')