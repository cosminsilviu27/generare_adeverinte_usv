import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Generare Certificate</h1>
            <p className='lead'>Sistem digital pentru generarea de certificate</p>
            <hr className='my-4' />
            <div className="text-center mb-4">
                <h3>UNIVERSITATEA „ȘTEFAN CEL MARE” DIN SUCEAVA</h3>
                <h4>FACULTATEA DE INGINERIE ELECTRICĂ ȘI ȘTIINȚA CALCULATOARELOR</h4>
            </div>
            <p>Alegeți tipul de utilizator pentru înregistrare:</p>
            <div className='btn-group' role='group' aria-label='Basic example'>
                <Link className='btn btn-primary' to='/login-admin' role='button'>Înregistrează-te ca și Student</Link>
                <Link className='btn btn-secondary' to='/google' role='button'>Înregistrează-te ca și Secretară</Link>
                <Link className='btn btn-success' to='/login-admin' role='button'>Înregistrează-te ca și Administrator</Link>
            </div>
            <p className='mt-3'>
                Ați uitat parola? <Link to='/login-admin'>Creati un cont</Link>
            </p>
        </div>
    </div>
);

export default Home;
