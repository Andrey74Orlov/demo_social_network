import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createFild } from '../common/FormsControl/FormsControl';
import { required } from '../../utilits/validation/validators';
import { login } from '../../redux/reducer -auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControl/FormsControl.module.css'

const LoginForm = ({handleSubmit, error,  captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} >      
        {createFild('Login', [required], 'email', Input,)}
        {createFild('Password', [required], 'password', Input, {type:'password'})}
        {createFild(null, null, 'rememberMe', Input, {type: 'checkbox'}, 'remember me')}
            {/* <div>
                <Field placeholder={'Login'} validate={[required]}
                    name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} validate={[required]}
                    name={'password'} type='password' component={Input} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
        </div> */}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&   createFild('Symbols from image', [required], 'captcha', Input, {})}
           {error && <div className={style.formSummaryError}>
          {error}    
        </div>
           }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN for test:  Email: free@samuraijs.com  Password: free</h1>

        <LoginReduxForm onSubmit={onSubmit}  captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, { login })(Login);