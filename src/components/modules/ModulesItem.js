import Card from '../UI/Card';
import classes from '../UI/Card.module.css';



function ModulesItem(props) {
    return (
        
        <li className={classes.Card.Hovering}>
            <Card> 
            
            <div className={classes.CardContainer}>
            <div className={classes.Card}>
            <div>
                <img className={classes.image}src={props.ModuleImage} alt={props.ModuleName} />
            </div>
                <h3 className={classes.h3}>{props.ModuleName}</h3>
                <h2 className={classes.h2}>{props.ModuleCode}</h2>
                <p>Level {props.ModuleLevel}</p>
            </div>
            </div>
            
            </Card>

            
        </li>
        
    );
}
export default ModulesItem;