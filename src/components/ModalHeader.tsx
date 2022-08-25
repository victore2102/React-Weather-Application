import '../index.css';
import '../App.css';


export default function ModalHeader(
{modalDate, modalClose,
}:{
modalDate: string, modalClose: () => void,
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