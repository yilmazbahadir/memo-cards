import { ProjectAddOrEdit } from './ProjectAddOrEdit';
import {connect} from 'react-redux';
import {fetchProjectById} from './fetchProjectById';


const mapStateToProps = (state) => ({
    project: state.project.project
  });

const mapDispatchToProps = (dispatch) => ({

  fetchProjectById: (id) => dispatch(fetchProjectById(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAddOrEdit);

