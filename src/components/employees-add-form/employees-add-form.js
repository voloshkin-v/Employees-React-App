import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();

		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: ''
		});
	}

	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Add a new employee</h3>

				<form onSubmit={this.onSubmit} className="add-form d-flex">
					<input
						onChange={(e) => this.onValueChange(e)}
						name="name"
						type="text"
						value={name}
						className="form-control new-post-label"
						placeholder="Enter a name"
					/>

					<input
						onChange={(e) => this.onValueChange(e)}
						name="salary"
						type="number"
						value={salary}
						className="form-control new-post-label"
						placeholder="Enter the salary"
					/>

					<button type="submit" className="btn btn-outline-light">Add</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;