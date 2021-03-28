//타입 단언(type assertion)
let a;
a = 20
a = 'a'
let b = a as string;

//DOM API 조작
// <div id="test">test</div>
let div = document.querySelector('div') //null 이 될수도 있다.
if(div) {
	div.innerText
}