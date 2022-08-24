import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function ModalHeader(
{modalDate, modalClose,
}:{
modalDate: string, modalClose: (params: any) => any,
})


{


    return (
        <div className='modal-header'>
            {modalDate}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={modalClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}