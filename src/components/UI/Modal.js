import '../UI/Modal.css';




function Modal ({module, onDelete, onCancel}) {
    console.log(JSON.stringify())
    return ( 
    <div className='modal'>
        <p>Are you sure you want to delete this Module?</p>
        <button className='btn btn--alt' onClick={() => onDelete(module?.ModuleID)} >Yes</button>
        <button className='btn' onClick={() => onCancel(onCancel)} >No</button>
    </div>
    );
}

export default Modal;