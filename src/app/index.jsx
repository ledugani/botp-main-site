import React from 'react';
import Header from './components/header/index';
import Bnt from './components/bestnewtunes/index';
import Reviews from './components/reviews/index';

export default function Home() {
	return (
		<div className="full">
			<Header />
			<Bnt />
			<Reviews />
		</div>
	);
}