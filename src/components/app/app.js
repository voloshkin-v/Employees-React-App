import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary: 1000, increase: true, id: nextId('id-')},
				{name: 'Alex M.', salary: 1200, increase: false, id: nextId('id-')},
				{name: 'Robert D.', salary: 800, increase: true, id: nextId('id-')}
			]
		};
	}

	deleteItem = (id) => {
		this.setState(( {data} ) => {
			// const index = data.findIndex(item => item.id === id);

			// return {
			// 	data: [...data.slice(0, index), ...data.slice(index + 1)]
			// }

			return {
				data: data.filter(item => item.id !== id)
			}
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: nextId('id-')
		};

		this.setState(( {data} ) => {
			return {
				data: [...data, newItem]
			}
		});
	}

	render() {
		const {data} = this.state;

		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={data}
					onDelete={this.deleteItem}
				/>

				<EmployeesAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;