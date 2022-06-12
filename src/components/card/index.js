import { IconXCircle } from 'senirupa';
import React, { memo } from 'react';

export default memo(function CardTodo({ text = '', date = '', handleClose }) {
	return (
		<div className='card mb-2'>
			<div className='card-body'>
				<div className='d-flex justify-content-between align-items-center'>
					<div className=''>
						<p className='mb-0'>{text}</p>
						<small className='text-muted'>{date}</small>
					</div>

					<div onClick={handleClose} className='pointer'>
						<IconXCircle size='25px' />
					</div>
				</div>
			</div>
		</div>
	);
});
