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
				{name: 'John C.', salary: 1000, increase: false, rise: false, id: nextId('id-')},
				{name: 'Alex M.', salary: 1200, increase: false, rise: false, id: nextId('id-')},
				{name: 'Robert D.', salary: 800, increase: false, rise: false, id: nextId('id-')}
			],
			term: '',
			filter: 'all'
		};
	}

	deleteItem = (id) => {
		this.setState(( {data} ) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		});
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: nextId('id-')
		};

		this.setState(( {data} ) => {
			return {
				data: [...data, newItem]
			}
		});
	}

	onToggleProp = (id, prop) => {
		this.setState(( {data} ) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}

				return item;
			})
		}));
	}

	searchEmp = (items, term) => {
		if (!term) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'salary':
				return items.filter(item => item.salary > 1000)
			default:
				return items;
		}
	}

	onUpdateFilter = (filter) => {
		this.setState({
			filter
		});
	}

	onInputSalary = (id, salary) => {
		this.setState(( {data} ) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, salary}
				}

				return item;
			})
		}));
	}

	render() {
		const {data, term, filter} = this.state;

		const employeesCount = data.length,
			  employeesIncreaseCount = data.filter(item => item.increase).length;

		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo employees={employeesCount} increased={employeesIncreaseCount} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter activeFilter={filter} onUpdateFilter={this.onUpdateFilter} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onInputSalary={this.onInputSalary}
				/>

				<EmployeesAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;