import ModulesItem from './ModulesItem';
import classes from './ModuleList.module.css';


function ModulesList(props, onDelete) {
    return (
        <ul className={classes.list}>
            {props.modules.map((ModuleItem) => (
                <ModulesItem
                    key={ModuleItem.ModuleID} 
                    onDelete={onDelete}
                    ModuleID={ModuleItem.ModuleID}
                    ModuleImage={ModuleItem.ModuleImage}
                    ModuleName={ModuleItem.ModuleName}
                    ModuleCode={ModuleItem.ModuleCode}
                    ModuleLevel={ModuleItem.ModuleLevel}
                />
            ))}
        </ul>
    );
}
export default ModulesList;