import React, {useState} from 'react'

function computeInitialCounter() {
	return Math.trunc(Math.random() * 20)
}

function App() {

	// const [counter, setCounter] = useState(computeInitialCounter())
	const [counter, setCounter] = useState(() => {
		return computeInitialCounter()
	})

	const [state, setState] = useState({
		title: 'Counter',
		date: Date.now()
	})

	function increment() {
		//setCounter(counter + 1)

		// setCounter((prevCounter) => {
		//   return prevCounter + 1
		// })

		setCounter(prev => prev + 1) // best practice. (On before state)
	}

	function decrement() {
		setCounter(counter - 1)
	}

	function updateTitle() {
		setState(prev => {
			return {
				...prev,
				title: 'New'
			}
		})
	}

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={increment} className="btn btn-success">+</button>
			<button onClick={decrement} className="btn btn-warning">-</button>
			<button onClick={() => setState(updateTitle)} className="btn btn-info">Change title</button>

			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	)
}

export default App;
