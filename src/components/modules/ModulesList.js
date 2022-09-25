import ModulesItem from './ModulesItem';
import classes from './ModuleList.module.css';



function ModulesList({modules, onDelete, deleteHandler, onCancel}) {
    
    
    return (
        <ul className={classes.list}>
            {modules.map((module) => (
                <ModulesItem
                    key={module.ModuleID} 
                    onDelete={onDelete}
                    onCancel={onCancel}
                    deleteHandler={deleteHandler}
                    module={module}

                />
            ))}
        </ul>
    );
}
export default ModulesList;