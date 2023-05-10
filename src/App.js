import Header from './container_components/HeaderContainer';
import Main from './components/Main';
import './css/App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {setData} from './redux/auth-reducer';
import {initialize} from './redux/app-reducer';
import Loader from './ui/Loader';
import {withRouter} from './container_components/ProfileContainer';
import {compose} from 'redux';

class App extends Component {
	componentDidMount() {
		this.props.initialize();
	}

	render() {
		if (this.props.initialized !== true) {
			return <Loader/>;
		}
		return (
			<div className="wrapper">
				<Header/>
				<Main/>
			</div>);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {initialized: state.app.initialized};
};

export default compose(
	withRouter,
	connect(mapStateToProps, {setData, initialize},
	))(App);
