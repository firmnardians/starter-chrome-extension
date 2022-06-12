import React, { memo } from 'react';

export default memo(function Container({ children }) {
	return <div className='container-todo'>{children}</div>;
});
