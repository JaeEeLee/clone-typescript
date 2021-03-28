// Type 별칭
// type Todo = {
// 	id: number;
// 	title: string;
// 	done: boolean;
// }

interface Todo {
	id: number;
	title: string;
	done: boolean;
}
// 사용법 : 
let todoItems: Todo[]

//api
function fetchTodoItems(): Todo[] {
	const todos = [
		{ id: 1, title: '안녕', done: false },
		{ id: 2, title: '타입', done: false },
		{ id: 3, title: '스크립트', done: false },
	]

	return todos
}

const fetchTodos = (): object => {
	const todos = fetchTodoItems()

	return todos
}

const addTodo = (todo: Todo): void => {
	todoItems.push(todo)
}

const deleteTodo = (index: number): void => { //void 는 반환 타입이 없는 것
	todoItems.splice(index, 1)
}

const completeTodo = (
	index: number,
	todo: Todo
): void => {
	todo.done = true
	todoItems.splice(index, 1, todo)
}

const logFirstTodo = (): object => {
	return todoItems[0]
}

const showCompleted = (): object[] => {
	return todoItems.filter((item: any) => item.done)
}

const addTwoTodoItems = (): void => {
	let setTodo: object[] = [
		{ id: 4, title: '한번', done: false, },
		{ id: 5, title: '두번', done: false, },
	]

	setTodo.map((todo: any) => addTodo(todo))
}

const log = (): void => {
	console.log(todoItems)
}

todoItems = fetchTodoItems()
addTwoTodoItems()
log()