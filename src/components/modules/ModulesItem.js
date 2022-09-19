import Card from '../UI/Card';
import classes from './ModuleList.module.css';

function ModulesItem(props) {
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.ModuleImage} alt={props.ModuleName} />

            </div>
            <div className={classes.content}>
                <h3>{props.ModuleName}</h3>
                <h2>{props.ModuleCode}</h2>
                <p>{props.ModuleLevel}</p>
            </div>
            <div className={classes.actions}>
                <button>To favourites</button>
            </div>
            </Card>
        </li>
    );
}



export default ModulesItem;