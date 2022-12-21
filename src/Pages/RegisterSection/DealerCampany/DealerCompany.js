import React from 'react';

import img1 from "../../../assets/company/company-1.png"
import img2 from "../../../assets/company/company-2.png"
import img3 from "../../../assets/company/company-3.png"
import img4 from "../../../assets/company/company-4.png"
import img5 from "../../../assets/company/company-5.png"
import img6 from "../../../assets/company/company-6.png"

const DealerCompany = () => {
    return (
        <section className="d-none d-sm-none d-md-none d-lg-block">
        <div className="text-center pt-5  ">
            <h2 className="fw-bold fs-1">Trusted by over 800+ companies</h2>
        </div>
        <div className="container">
            <div className="d-flex  justify-content-around gap-4 pb-5 pt-4">
                <div>
                <img className='img-fluid' src={img2} alt='img'/>
                </div>
                <div>
                <img className='img-fluid' src={img3} alt='img'/>
                </div>
                <div>
                <img className='img-fluid' src={img4} alt='img'/>
                </div>
                <div>
                <img className='img-fluid' src={img5} alt='img'/>
                </div>
                <div>
                <img className='img-fluid' src={img6} alt='img'/> 
                </div>
                <div>
                      <img className='img-fluid' src={img1} alt='img'/>
                  
                </div>
            </div>
        </div>
    </section>
    );
};

export default DealerCompany;