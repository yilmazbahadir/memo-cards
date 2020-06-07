import { ProjectAddOrEdit } from './ProjectAddOrEdit';
import { connect } from 'react-redux';
import { fetchProjectById } from './fetchProjectById';
import { updateProject } from './updateProject';
import { createProject } from './createProject';

const mapStateToProps = (state) => ({
  project: state.project.project,
  updating: state.project.updating,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjectById: (id) => dispatch(fetchProjectById(id)),
  updateProject: (project) => dispatch(updateProject(project)),
  createProject: (project) => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAddOrEdit);
