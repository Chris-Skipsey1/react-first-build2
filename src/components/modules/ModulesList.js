import ModulesItem from './ModulesItem';
import classes from './ModuleList.module.css';

function ModulesList({modules, onDelete}) {
    // Component state ------------------------------
    // Handlers -------------------------------------
    // View -----------------------------------------    
    return (
        <ul className={classes.list}>
            {modules.map((module) => (
                <ModulesItem
                    key={module.ModuleID}
                    module={module}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default ModulesList;