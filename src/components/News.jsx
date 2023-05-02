import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

const NewsNavigate = (props) => {
	if (props.auth === null || props.auth === false) {
		return <Navigate to="/login"/>;
	}
	return <section className="news"><h1>News</h1></section>;
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.isAuthorized,
	};
};

const News = connect(mapStateToProps, null)(NewsNavigate);

export default News;