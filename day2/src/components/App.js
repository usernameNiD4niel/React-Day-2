import { useState } from "react";
import InputTodo from "./InputTodo";
import TodoListTask from "./TodoListTask";

const App = () => {
	const [todoTask, setTodoTask] = useState("");
	const [todoDescription, setTodoDescription] = useState("");
	const [todoListTask, setTodoListTask] = useState([]);

	return (
		<div>
			<InputTodo
				todoTask={todoTask}
				setTodoTask={setTodoTask}
				todoListTask={todoListTask}
				setTodoListTask={setTodoListTask}
				todoDescription={todoDescription}
				setTodoDescription={setTodoDescription}
			/>
			<TodoListTask
				todoListTask={todoListTask}
				setTodoListTask={setTodoListTask}
				setTodoTask={setTodoTask}
				setTodoDescription={setTodoDescription}
			/>
		</div>
	);
};

export default App;
