import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doner from '../Doner/Doner';

const Donate = () => {

    const [doners, setDoners] = useState([])

    useEffect(() => {
        fetch("/fakes.JSON")
        .then(res => res.json())
        .then(data => setDoners(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {/* Doner Details Dekhabo */}
                    
                    <div className="row">

                        {
                            doners.map(doner => <Doner
                                doner={doner}
                            >
                            </Doner>)
                        }

                    </div>

                </div>
                <div className="col-md-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Donate;