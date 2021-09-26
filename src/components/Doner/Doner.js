import React from 'react';

const Doner = (props) => {

    const{name, img, phone, job, division, donate}=props.doner;
    
    return (
        <div className="col-md-4 text-center">
            <div class="card mb-3">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <h5>Job: {job}</h5>
                    <h5>Division: {division}</h5>
                    <h5>Phone No: {phone}</h5>
                    <h5>Donate Amount: ${donate}</h5>
                </div>
            </div>
        </div>
    );
};

export default Doner;