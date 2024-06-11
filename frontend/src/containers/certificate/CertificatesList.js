import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchCertificatesList} from '../../actions/certificates';
import {Link} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";

const CertificatesList = ({fetchCertificatesList, certificates, error}) => {

    useEffect(() => {
        fetchCertificatesList();
    }, [fetchCertificatesList]);

    return (
        <div className="container">
            <h1 className="mt-3">Lista de solicitări:</h1>

            {error && <p>{error}</p>}

            {certificates && certificates.length > 0 ?
                (<>
                    <div className="mt-3">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nume și prenume student</th>
                                <th>Email student</th>
                                <th>Motiv solicitare</th>
                                <th>Data solicitării</th>
                                <th>Acțiuni</th>
                            </tr>
                            </thead>
                            <tbody>
                            {certificates.map((certificate, index) => (
                                <tr key={index}>
                                    <td>{certificate.student_data?.full_name ?? "-"}</td>
                                    <td>{certificate.student_data?.email ?? "-"}</td>
                                    <td>{certificate.purpose}</td>
                                    <td>{certificate.registration_date}</td>
                                    <td>
                                        <Link to={`/approve-certificate/${certificate.processing_position}`}
                                              className="btn btn-primary mr-2">Aprobă cerere</Link>
                                        <Link to={`/reject-certificate/${certificate.processing_position}`}
                                              className="btn btn-primary ml-2">Refuză cerere</Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </>) :
                (<div className="justify-content-center d-flex mt-5">
                    <TailSpin height="80" width="80" color="#4fa94d" ariaLabel="tail-spin-loading" radius="1"
                              wrapperStyle={{}} wrapperClass="" visible={true}/>
                </div>)
            }
        </div>
    );
}
const mapStateToProps = (state) => ({
    certificates: state.certificate.certificates,
    error: state.certificate.error
});

export default connect(mapStateToProps, {fetchCertificatesList})(CertificatesList);
