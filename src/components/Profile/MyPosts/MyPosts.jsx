
import React, { PureComponent } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utilits/validation/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';


const MyPosts = React.memo(props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.props
    // }
    //shouldComponentUpdate replaced on the "PureComponent". In functional components we use "memo"

    let postsElements = props.profilePage.postData.map(p => <Post key={p.id} message={p.message} like={p.like} />)


    let addNewPost = (value) => {

        props.addPost(value.newPostText)
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

})
const maxLength = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='Enter your post' validate={[required, maxLength]} />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddPostForm)
export default MyPosts;