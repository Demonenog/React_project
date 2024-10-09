import { useState } from 'react';
import './App.css';

function ToDoList() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	function handleInputTaskValue(e) {
		setNewTask(e.target.value);
	}

	function addTask() {
		if (newTask.trim() !== '') {
			setTasks([...tasks, newTask]);
			setNewTask('');
		}
	}
	function deleteTask(index) {
		setTasks(tasks.filter((_, a) => a !== index));
	}

	function moveTaskUp(index) {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [
				updatedTasks[index - 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	}

	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = [
				updatedTasks[index + 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	}

	return (
		<div className='container'>
			<div className='text__container'>
				<h1>Задания на сегодня</h1>
				<input
					type='text'
					placeholder='Введите задание...'
					value={newTask}
					onChange={handleInputTaskValue}
				/>
				<button onClick={addTask} className='add__button'>
					Добавить задачу
				</button>
				<ol>
					{tasks.map((task, index) => (
						<li key={index}>
							<span className='text'>{task}</span>
							<button
								className='delete__button'
								onClick={() => deleteTask(index)}
							>
								Delete
							</button>
							<button
								className='move__button'
								onClick={() => moveTaskUp(index)}
							>
								☝️
							</button>
							<button
								className='move__button'
								onClick={() => moveTaskDown(index)}
							>
								👇
							</button>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default ToDoList;
