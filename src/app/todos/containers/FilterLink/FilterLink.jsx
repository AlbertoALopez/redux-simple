import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/actions.js';
import Link from '../../components/Link/Link.jsx';


const mapStatetoProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        },
    };
};

const FilterLink = connect(
    mapStatetoProps,
    mapDispatchToProps,
)(Link);

export default FilterLink;
