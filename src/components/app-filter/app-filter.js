import './app-filter.css';

const AppFilter = ( {activeFilter, onUpdateFilter} ) => {
	const buttonsData = [
		{name: 'all', label: 'All employees'},
		{name: 'rise', label: 'Employees for promotion'},
		{name: 'salary', label: 'Salary over $1,000'},
	];

	const buttons = buttonsData.map(({name, label}) => {
		const isActive = activeFilter === name,
			  activeClass = isActive ? 'btn-light' : 'btn-outline-light';

		return (
			<button
				key={name}
				onClick={() => onUpdateFilter(name)}
				className={`btn ${activeClass}`}
			>
				{label}
			</button>
		);
	});

	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
}

export default AppFilter;