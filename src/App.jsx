import { useState, useEffect } from 'react'
import './App.css'
import BinaryTreeInput from './components/BinaryTreeInput';
import { useLevelOrderArray } from './utilities/levelOrderArrayUtils';

function App() {
	const [treeInput, setTreeInput] = useState("");
	const { levelOrderArray, generateLevelOrderArray } = useLevelOrderArray();

	const handleTreeInputChange = (treeInput) => setTreeInput(treeInput);

	useEffect(() => {
		generateLevelOrderArray(treeInput)
	}, [treeInput]);

	
	return (
		<>
			<div className="container">
				<BinaryTreeInput handleTreeInputChange={handleTreeInputChange} />
			</div>
		</>
	)
}

export default App
