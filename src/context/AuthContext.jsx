import { createContext, useEffect, useReducer } from 'react';

const initialState = {
	userId: localStorage.getItem('userId') || null,
	username:
		localStorage.getItem('username') !== 'undefined'
			? JSON.parse(localStorage.getItem('username'))
			: null,
	token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				userId: action.payload.userId,
				username: action.payload.username,
				token: action.payload.token,
			};

		case 'LOGOUT':
			return {
				userId: localStorage.removeItem('userId'),
				username: localStorage.removeItem('username'),
				token: localStorage.removeItem('token'),
			};

		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		localStorage.setItem('userId', JSON.stringify(state.userId));
		localStorage.setItem('username', JSON.stringify(state.username));
		localStorage.setItem('token', JSON.stringify(state.token));
	}, [state]);

	return (
		<authContext.Provider
			value={{
				userId: state.userId,
				username: state.username,
				token: state.token,
				dispatch,
			}}>
			{children}
		</authContext.Provider>
	);
};
