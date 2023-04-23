const InputTodo = ({
	todoTask,
	setTodoTask,
	todoListTask,
	setTodoListTask,
	todoDescription,
	setTodoDescription,
}) => {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		const objectList = {
			titleTodo: todoTask,
			descriptionTodo: todoDescription,
		};

		if (!todoTask || !todoDescription) {
			return;
		}

		todoListTask.length > 0
			? setTodoListTask([...todoListTask, objectList])
			: setTodoListTask([objectList]);

		setTodoTask("");
		setTodoDescription("");
	};

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="Enter todo title"
					onChange={(e) => setTodoTask(e.target.value)}
					value={todoTask}
				/>
				<input
					type="text"
					placeholder="Enter todo description"
					onChange={(e) => setTodoDescription(e.target.value)}
					value={todoDescription}
				/>

				<button type="submit" onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default InputTodo;
