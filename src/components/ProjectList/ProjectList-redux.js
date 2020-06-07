import ProjectList from './ProjectList';
import { fetchProjectList } from './fetchProjectListActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ...state.projectList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjectList: () => dispatch(fetchProjectList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
//export default connect(mapStateToProps, { fetchProjectList })(ProjectList);
