import React, { Component } from "react";
import './Auth.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                required: true,
                minLength: 6
            }}
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = e => {
        e.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)


        // Получаем копию данного state
        const formControls = {...this.state.formControls}

        const control = {...formControls[controlName]}


        // Переопределяем значения переменных, не затрагивая state
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        let inputs = null
        return inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Авторизация</h1>
                </div>

                <form onSubmit={this.submitHandler} className='AuthForm'>
                    {this.renderInputs()}
                    <Button 
                        type="success" 
                        onClick={this.loginHandler}
                        disabled={!this.state.isFormValid}
                    >
                    Войти
                    </Button>
                    <Button 
                        type="primary" 
                        onClick={this.registerHandler}
                        disabled={!this.state.isFormValid}
                    >
                    Зарегистрироваться
                    </Button>
                </form>
            </div>
        )
    }
} 