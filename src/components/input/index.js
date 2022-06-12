import React, { memo } from 'react';

export default memo(function InputTodo({
	disabled = false,
	placeholder = 'Hari ini aku ingin...?',
	onChange = {},
	value = '',
	titleSubmit = 'Simpan',
	submit,
}) {
	return (
		<div className='input-group mb-3'>
			<input type='text' value={value} className='form-control' placeholder={placeholder} onChange={onChange} aria-describedby='input-todo' />

			<button onClick={submit} disabled={disabled} className='btn btn-outline-secondary' type='button' id='input-todo'>
				{titleSubmit}
			</button>
		</div>
	);
});
