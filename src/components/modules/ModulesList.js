import ModulesItem from './ModulesItem';
import classes from './ModuleList.module.css';


function ModulesList({modules, onDelete}) {
    return (
        <ul className={classes.list}>
            {modules.map((module) => (
                <ModulesItem
                    key={module.ModuleID} 
                    onDelete={onDelete}
                    module={module}
                />
            ))}
        </ul>
    );
}
export default ModulesList;