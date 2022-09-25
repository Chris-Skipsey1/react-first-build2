function Backdrop({onCancel}) {
    return <div className='backdrop' onClick={() => onCancel(onCancel)} />;
}
export default Backdrop;