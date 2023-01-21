import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term});

		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<input onChange={this.onUpdateSearch} value={this.state.term} type="text" className="form-control search-input" placeholder="Find an employee" />
		);
	}
}

export default SearchPanel;