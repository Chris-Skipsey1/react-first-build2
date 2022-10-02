import { useState } from 'react';
import Modal from '../UI/Modal';
import Card from '../UI/Card';
import classes from '../UI/Card.module.css';
import FavouriteDecorator from '../UI/FavouriteDecorator';
import { FaCheck, FaPen, FaTrash, FaHeart } from 'react-icons/fa';
import '../UI/IconHover.css';
import '../UI/IconDiv.css';
import '../UI/Icons.css';
import '../UI/Favourite.css';



function ModulesItem({ module, onDelete }) {

    //Component State ---

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [favouriteActivate, setFavouriteActivate] = useState(false);

    //Handlers ---

    const handleCancel = () => {
        setModalIsOpen(false);
    }

    //Modal helpers ---

    const createDeleteModal = (module) => {
        setModalMessage(`Are you sure you want to delete the ${module.ModuleName} module?`);
        setModalAction({ title: 'Yes', onClick: () => onDelete(module.ModuleID) });
        setModalIsOpen(true);
    }


   


    const turnOnFavourite = () => {
        return (
            
            console.log("test")   
        )
    }


    
     

    return (
        <>
            <div className={classes.Card.Hovering}>
                <Card>
                    <div className={classes.CardContainer}>
                        <div className={classes.Card}>
                            <div>
                                <img className={classes.image} src={module.ModuleImage} alt={module.ModuleName} />
                            </div>
                            
                            <h3 className={classes.h3}>{module.ModuleName}</h3>
                            <h2 className={classes.h2}>{module.ModuleCode}</h2>
                            <p className={classes.p}> Level {module.ModuleLevel} </p>
                            
                           
                            <div className="iconDiv">
                                <div className="iconHover">              
                                    <FaCheck onClick={() => turnOnFavourite(module)} />
                                    </div><div></div>
                                
                                <div className="iconHover">
                                    <FaPen />
                                </div>dd
                                <div className="iconHover">
                                    <FaTrash onClick={() => createDeleteModal(module)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            {modalIsOpen &&
                <Modal
                    message={modalMessage}
                    action={modalAction}
                    onCancel={handleCancel}
                    test
                    
                />
            }

        </>
    );}
    export default ModulesItem;