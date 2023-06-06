import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [allEntry, setAllEntry] = useState([]);

	const toastify = () => {
		toast.success('Login Successfully', {
			position: 'bottom-right',
			autoClose: 1000,
			theme: 'colored',
		});
	};
	const warning = () => {
		toast.warn('Login Failed', {
			position: 'bottom-right',
			autoClose: 1000,
			theme: 'colored',
		});
	};
	const error = () => {
		toast.error('Login Failed', {
			position: 'bottom-right',
			autoClose: 1000,
			theme: 'colored',
		});
	};

	const submitform = (e) => {
		e.preventDefault();
		const newEntry = { email: email, password: password };
		setAllEntry([...allEntry, newEntry]);
	};

	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="col-lg-6">
					<form action="" className="mt-5" onSubmit={submitform}>
						<input
							type="email"
							className="form-control rounded mb-3"
							required="true"
							placeholder="Enter your Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							className="form-control rounded mb-3"
							placeholder="Enter your Password"
							required="true"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit" id="submit" className="btn btn-primary form-control">
							Submit
						</button>
					</form>
				</div>
			</div>

			<div className="d-flex justify-content-center mt-5">
				<ul className="list-unstyled ">
					{allEntry.map((curElem, mn) => {
						return (
							<>
								<li className="text-light d-flex justify-content-between" key={mn}>
									<p className="me-5 mb-0">{curElem.email}</p>
									<p className='mb-0'>{curElem.password}</p>
								</li>
							</>
						);
					})}
				</ul>
			</div>

			{/* <button onClick={toastify}>Success</button>
			<button onClick={warning}>Warning</button>
			<button onClick={error}>Error</button> */}
			{/* <ToastContainer /> */}
		</>
	);
};

export default Toast;
