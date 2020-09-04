import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {CreateField("Email", "email", Input, [required])}
        {CreateField("Password", "password", Input, [required], {type: "password"})}
        {CreateField(null, "rememberMe", Input, [], {type: "checkbox"}, "Remember Me")}
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && CreateField("Symbols from image", "captcha", Input, [required], {})}
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: `login`
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
