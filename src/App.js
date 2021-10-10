import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux';

function App(props) {
	// Allows you to extract data from the Redux store state, using a selector function.
	const count = useSelector((state) => state);
	const dispatch = useDispatch(); // gives use access to the action creators in redux store
	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(increment())}>+</button>
		</div>
	);
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
