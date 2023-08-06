import React from 'react';
import './TestimonialBtn.css';

const TestimonialBtn = ({ value }) => {
    const { handleTestBtn, state } = value;

    const btns = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ]

    return (
        <div>
            <ul>
                {
                    btns.map(b => <li key={b.id}>
                        <div onClick={() => handleTestBtn(`${b.id}`)} className={state === `${b.id}` ? "radio active" : "radio"}>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default TestimonialBtn;