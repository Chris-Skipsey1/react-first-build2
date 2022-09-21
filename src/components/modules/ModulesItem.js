import Card from '../UI/Card';
import classes from '../UI/Card.module.css';
import { FaCheck, FaPen, FaTrash } from 'react-icons/fa';
import '../UI/IconHover.css';
import '../UI/IconDiv.css';
import '../UI/Icons.css';



function ModulesItem(props, onDelete) {
    return (

        <div className={classes.Card.Hovering}>
            <Card>

                <div className={classes.CardContainer}>
                    <div className={classes.Card}>
                        <div>
                            <img className={classes.image} src={props.ModuleImage} alt={props.ModuleName} />
                        </div>
                        <h3 className={classes.h3}>{props.ModuleName}</h3>
                        <h2 className={classes.h2}>{props.ModuleCode}</h2>
                        <p className={classes.p}> Level {props.ModuleLevel} </p>
                        <div className="iconDiv">
                            <div className="iconHover">
                                <FaCheck />
                            </div>
                            <div className="iconHover">
                                <FaPen />
                            </div>
                            <div className="iconHover">
                                <FaTrash onClick={() => onDelete(module.ModuleID)} />
                            </div>
                        </div>


                    </div>
                </div>
            </Card>


        </div>

    );
}
export default ModulesItem;