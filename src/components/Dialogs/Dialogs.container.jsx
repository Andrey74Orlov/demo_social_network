import { addMessagesActionCreator } from '../../redux/reducerdialogs';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessagesActionCreator(newMessageText))
        },      
    }
}




export default 
compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)