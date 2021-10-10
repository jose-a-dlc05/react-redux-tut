import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/index';

function App(props) {
	const { count, increment, decrement } = props;
	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</div>
	);
}

function mapStateToProps(globalState) {
	return { count: globalState };
}

const mapDispatchToProps = {
	increment,
	decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// How does connect work?
// connect(What parts of state do you want, What actions do you want to dispatch)(Component)
// connect(mapStateToPropsFunc, mapDispatchToProps)(Component)

// It is a higher-order component

// Pass 2 parameters:
// 1. "What parts of global state does this component want to access?"
// 2. "What actions do you want to be able to dispatch from this component?"

// It then returns a function to which you pass the component you want to connect.
// When called, this function creates a new component wrapping yours which passes
// the global state and "dispatchable" actions to your component via props.
