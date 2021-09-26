import React from 'react';
import './Doner.css'

const Doner = (props) => {

    const{name, img, phone, job, division, donate}=props.doner;
    
    return (
        <div className="col-md-4 text-center mt-3">
            <div class="card mb-3 background">
                <div className="img">
                    <img src={img} class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <h5>Job: {job}</h5>
                    <h5>Division: {division}</h5>
                    <h5>Phone No: {phone}</h5>
                    <h5>Donate Amount: ${donate}</h5>
                    <button 
                    onClick={()=> props.handleAddDoner(props.doner)}
                    className="btn btn-primary">
                        <i class="fas fa-hand-holding-medical fw"></i>
                        Add Doner
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Doner;