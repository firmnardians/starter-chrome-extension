import WelcomePage from './components/welcome';
import Container from './components/container';
import React from 'react';

export default function Home() {
	return (
		<Container>
			<div className='pt-5'>
				<WelcomePage />
			</div>
		</Container>
	);
}
