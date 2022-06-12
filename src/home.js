import CardTodo from './components/card';
import Container from './components/container';
import InputTodo from './components/input';
import React, { useState } from 'react';

export default function Home() {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

	function handleSubmit() {
		const newTodo = {
			todo: value,
			id: +new Date(),
			date: new Date().toLocaleString('id-ID'),
		};

		setTodos((prev) => [...prev, newTodo]);
		setValue('');
	}

	function removeTodo(id) {
		setTodos((prev) => prev.filter((item) => item.id !== id));
	}

	return (
		<Container>
			<div className='pt-5'>
				<h2>Todolist 📝</h2>

				<InputTodo submit={handleSubmit} value={value} disabled={value.length === 0} onChange={(e) => setValue(e.target.value)} />

				{todos.length > 0 ? (
					<div className='pt-4'>
						{todos.map((item) => {
							return <CardTodo date={item.date} text={item.todo} key={item.id} handleClose={() => removeTodo(item.id)} />;
						})}
					</div>
				) : (
					<div className='d-flex align-items-center justify-content-center pt-5'>
						<p>Belum ada todolist.</p>
					</div>
				)}
			</div>
		</Container>
	);
}
