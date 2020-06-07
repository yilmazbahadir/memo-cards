import { Project } from './Project';
import { connect } from 'react-redux';
import { resetProjectState } from './resetProjectState';
import { deleteProjectById } from './deleteProjectById';

const mapStateToProps = (state) => ({
  project: state.project.project,
});

const mapDispatchToProps = (dispatch) => ({
  resetEditDialog: () => dispatch(resetProjectState()),
  deleteProject: (id) => dispatch(deleteProjectById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
