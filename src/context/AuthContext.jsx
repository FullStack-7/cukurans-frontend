import { createContext, useEffect, useReducer } from 'react';

const initialState = {
	userId:
		localStorage.getItem('userId') !== 'undefined'
			? JSON.parse(localStorage.getItem('userId'))
			: null,
	token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_START':
			return {
				userId: null,
				token: null,
			};

		case 'LOGIN_SUCCESS':
			return {
				userId: action.payload.userId,
				token: action.payload.token,
			};

		case 'LOGOUT':
			return {
				userId: null,
				token: null,
			};

		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		localStorage.setItem('userId', JSON.stringify(state.userId));
		localStorage.setItem('token', JSON.stringify(state.token));
	}, [state]);

	return (
		<authContext.Provider
			value={{
				userId: state.userId,
				token: state.token,
				dispatch,
			}}>
			{children}
		</authContext.Provider>
	);
};
