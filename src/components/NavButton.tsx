import React, { useState, Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function NavButton(
{navigate, label, location
}:{
navigate: (param: string) => any, label: string, location: string,
})

{


    return (
        <button
            className='Button'
            onClick={() => navigate(location)}
        >
            {label}
        </button>
    );
    
}