import React from "react";
import TaskItem from './TaskItem'

function Todo() {
	const [query, setQuery] = React.useState("");
	const [tasks, setTasks] = React.useState([]);
	const handleChange = (e) => {
		// console.log(e.target);
		const {value}  = e.target;
		// console.log(value);
		setQuery(value);
	};
	// console.log(query)
	const handleTask = () => {
		const payload = {
			title: query,
			status: false,
		};
		// console.log(payload.title);
		let newTasks = [...tasks, payload];
		// console.log(newTasks,tasks,payload);
		setTasks(newTasks);
    };
    
	return (
		<>
			<h1>Todo</h1>
			<div>
				<input
					value={query}
					onChange={handleChange}
					placeholder="Enter something"
				/>
				<button onClick={handleTask}>ADD</button>
			</div>

			<div>
				{/* {tasks.map((item) => {
					return <div>{item.title}</div>;
				})} */}
                {tasks.map((item) => {
                    // console.log(item);
					return <TaskItem {...item} />;
				})}
			</div>
		</>
	);
}


var arr = [1, 2, 3, 4];
var a = 12
let newarr = [...arr, a]
console.log(newarr);
export { Todo };
