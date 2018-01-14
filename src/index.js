import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		return (
			<div>
				<TopNav />
				<HomePage />
				<Footer />
			</div>
		)
	}
}
ReactDOM.render(<Home/>, document.getElementById("root"));
