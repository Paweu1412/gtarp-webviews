import { useState } from 'react';
import './Webviews.scss';

import { Login } from './pages/Login/Login';

export const Webviews = () => {
	const [loginState, setLoginState] = useState(true);  //eslint-disable-line
	
	// setTimeout(() => {
	//     setLoginState(true);
	// }, 2000);

	return (
		<div className="container">
			{loginState ? <Login /> : null}
		</div>
	)
}