import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { Signup, Login } from './components/User';


export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			urlComponent : null,
			page: 'home'
		}
	}

	componentDidMount(){
		this.loadPage();
	}

	componentDidUpdate(prevProps){
		
	}

	updateUrl = (url) => {
		this.setState({
			page: url
		}, ()=>{
			this.loadPage()
		} );
	}

	loadPage = () =>{
		switch(this.state.page){
			case 'home' : 
				this.setState({ urlComponent: <HomePage /> });
			break;

			case 'login' :
				this.setState({ urlComponent: <Login />});
			break;

			case 'signup' :
				this.setState({ urlComponent: <Signup /> });
			break;

			default:
				this.setState({ urlComponent: <HomePage /> });
		}
	}
	
	render() {
		const { urlComponent } = this.state;
		return (
			<div>
				<TopNav pageLoader={ this.updateUrl } />
				{ urlComponent }
				<Footer />
			</div>
		)
	}
}
ReactDOM.render(<Home/>, document.getElementById("root"));
