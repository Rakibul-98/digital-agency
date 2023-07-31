import React from 'react';
import SecTitle from '../Shared/SecTitle/SecTitle';

const Success = () => {
    return (
        <div>
            <SecTitle/>
            <div className='grid grid-cols-4 gap-3'>
                <div className="card border p-5">
                    <h3></h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card border p-5">
                    <h3></h3>
                    <p>Veniam quis dolore libero expedita.</p>
                </div>
                <div className="card border p-5">
                    <h3></h3>
                    <p>Veniam soluta nemo necessitatibus repudiandae!</p>
                </div>
                <div className="card border p-5">
                    <h3></h3>
                    <p>Dolor, suscipit iste? Nihil, alias!</p>
                </div>
            </div>
        </div>
    );
};

export default Success;