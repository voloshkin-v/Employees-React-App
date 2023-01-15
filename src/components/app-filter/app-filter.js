import './app-filter.css';

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-light">All employees</button>
			<button className="btn btn-outline-light">Employees for promotion</button>
			<button className="btn btn-outline-light">Salary over $1,000</button>
		</div>
	);
};

export default AppFilter;