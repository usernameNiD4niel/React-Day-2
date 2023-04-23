const TodoListTask = ({ todoListTask, setTodoListTask }) => {
	const handleDelete = (id) => {
		setTodoListTask(todoListTask.filter((value, index) => id !== index));
	};

	return (
		<ul>
			{todoListTask.map((value, index) => (
				<li key={index}>
					<h3>{value.titleTodo}</h3>
					<p>{value.descriptionTodo}</p>
					<button key={index}>Edit</button>
					<button onClick={() => handleDelete(index)}>Remove</button>
				</li>
			))}
		</ul>
	);
};
export default TodoListTask;
