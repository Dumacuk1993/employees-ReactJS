import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onIncrease}) => {

    const employees = data.map(item => {
        const { id, ...prop } = item

        return <EmployeesListItem
                    key={id} {...prop}
                    onDelete={() => onDelete(id)}
                    onIncrease={(e) => onIncrease(id, e.currentTarget.getAttribute('data-toggle'))}/>
    })

    if (employees.length === 0) {
        return (
            <h2 className="alert">Таких сотрудников не найдено!</h2>  
        )
    }

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployeesList;