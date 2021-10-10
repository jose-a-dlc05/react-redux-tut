import './App.css';
import { connect } from 'react-redux';

function App(props) {
	return (
		<div className='App'>
			<h1>{props.banana}</h1>
			<h1>COUNT GOES HERE</h1>
			<button>-</button>
			<button>+</button>
		</div>
	);
}

function mapStateToProps(globalState) {
	// returns an object where the keys are the name of the prop your component wants,
	// values are the actual parts of the global state your component wants
	// globalState is the state inside the reducer in redux directory
	return {
		banana: globalState,
	};
}

export default connect(mapStateToProps, {})(App);

// How does connect work?
// connect(What parts of state do you want, What actions do you want to dispatch)(Component)
// connect(mapStateToPropsFunc, mapDispatchToPropsFunc)(Component)

// It is a higher-order component

// Pass 2 parameters:
// 1. "What parts of global state does this component want to access?"
// 2. "What actions do you want to be able to dispatch from this component?"

// It then returns a function to which you pass the component you want to connect.
// When called, this function creates a new component wrapping yours which passes
// the global state and "dispatchable" actions to your component via props.
