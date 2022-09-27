import '../UI/Modal.css';
import Backdrop from './Backdrop';



function Modal({ message, action, onCancel }) {
    return (
        <>
            <div className='modal'>
                <p>{message}</p>
                {
                    action &&
                    <button className='btn btn--alt' onClick={action.onClick}>{action.title}</button>
                }
                <button className='btn' onClick={onCancel}>Cancel</button>

            </div>
            <Backdrop onCancel={onCancel} />
        </>
    );
}

export default Modal;