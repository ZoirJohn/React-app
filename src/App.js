import {BrowserRouter} from 'react-router-dom';
import Header from './container_components/HeaderContainer';
import Main from './components/Main';
import './css/App.css';
import {Component} from 'react';

class App extends Component {
	componentDidMount() {
		this.props.setData()
	}

	render() {
		return (<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<Main/>
			</div>
		</BrowserRouter>);
	}
}


export default App;
