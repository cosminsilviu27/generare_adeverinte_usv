import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import CSRFToken from '../components/CSRFToken';

const LoginAdmin = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    let navigate = useNavigate();

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };

    if (isAuthenticated)
        return navigate('/dashboard');

    return (
    <div className='container mt-5'>
        <div className='text-center mb-5'>
            <h2>UNIVERSITATEA „ȘTEFAN CEL MARE” DIN SUCEAVA</h2>
            <h3>FACULTATEA DE INGINERIE ELECTRICĂ ȘI ȘTIINȚA CALCULATOARELOR</h3>
        </div>
        <h1>Conectare</h1>
        <p>Conectați-vă la contul de Administrator</p>
        <form onSubmit={e => onSubmit(e)}>
                <CSRFToken />
                <div className='form-group'>
                    <label className='form-label'>Username: </label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Username*'
                        name='username'
                        onChange={e => onChange(e)}
                        value={username}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label mt-3'>Password: </label>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        onChange={e => onChange(e)}
                        value={password}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Login</button>
            </form>
            <p className='mt-3'>
                Don't have an Account? <Link to='/register'>Sign Up</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginAdmin);
