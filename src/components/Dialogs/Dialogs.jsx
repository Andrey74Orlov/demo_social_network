import React, { Component } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import { Textarea } from '../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../utilits/validation/validators';




const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.src} />);

    let messagesElements = props.dialogPage.dialogMessage.map(m => <Messages message={m.message} key={m.id} id={m.id} />);
    let newMessageText = props.dialogPage.newMessageText;

   


    let addNewMessage = (value) => {
        props.addMessage(value.newMessageText)
    };
    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
           
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50 ]} name='newMessageText' placeholder={'Enter your message'} />
            </div>
            <div><button>addMessage</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;