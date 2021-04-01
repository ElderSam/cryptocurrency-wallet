import React, { Component } from 'react';
import './SignUp.css';

export default class SignUp extends Component {
    render() {
        return(
            <div>
                <h2>Cadastro de Usuário</h2>
                <form onSubmit={() => alert('submited')}>
                    <label htmlFor="user">Usuário</label>
                    <input type="text" name="user" id="user" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" required />

                    <label htmlFor="password2">Repita a Senha</label>
                    <input type="password" name="password2" id="password2" required />

                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
        )
    }
}