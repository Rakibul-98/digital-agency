import React from 'react';

const ContactForm = () => {

    const inputs =[
        {id:1, name:"Full Name", type:"text"},
        {id:2, name:"Email", type:"email"},
        {id:3, name:"Phone Number", type:"tel"},
    ]

    return (
        <div>
            <h1 className='uppercase font-bold text-3xl'>contact us</h1>
            {
                inputs.map(i=><input key={i.id} className='w-full border-b h-10 border-black mt-5 focus:outline-none placeholder:text-black' type={i.type} name={i.name} id="" placeholder={i.name}/>)
            }
            <textarea className='w-full border-b h-20 border-black mt-4 focus:outline-none placeholder:text-black' name="" id="" placeholder='Message'></textarea>
            <button className='py-3 bg-blue-600 rounded-full uppercase text-sm text-white cursor-pointer hover:bg-blue-900 hover:shadow-lg duration-300 w-full mt-5'>submit now</button>
        </div>
    );
};

export default ContactForm;