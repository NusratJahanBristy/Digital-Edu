import React from 'react';

const RegisterSection = () => {
    return (
        <div
        className="container  d-flex flex-sm-column flex-column flex-lg-row content-bg-info bg-dark mt-5 p-5 rounded justify-content-around">
        <div className="p-2 ">
            <h2 className="fw-bold text-white ">Ready to join?</h2>
            <p className="text-white">It is a long established fact that a reader will be distracted by the <br/>
                readable content of a page when looking at its layout.<br/></p>
        </div>
        <div>
            <div className="text-center p-5">
                <button className="btn btn-primary bg-white text-dark fw-bold" data-bs-toggle="modal"
                    data-bs-target="#myModal">Register Now</button>
            </div>
        </div>
    </div>
    );
};

export default RegisterSection;