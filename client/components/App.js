import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import * as actionCreators from "../actions/actionCreator"
import Main from "./Main"

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default withRouter(App)
