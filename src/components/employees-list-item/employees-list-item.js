
import './employees-list-item.css';

const EmployeesListItem = (props) => {

    
        const { name, salary, increase, like, onDelete, onIncrease } = props
        // const {increase, like} = this.state
        let cssClass = "list-group-item d-flex justify-content-between" 
    
        if (increase) {
            cssClass += ' increase' 
        }

        if (like) {
            cssClass += ' like'
        }
        
        return (
            <li className={cssClass}>
                <span data-toggle='like' onClick={onIncrease} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' руб'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        data-toggle='increase'
                        onClick={onIncrease}
                        type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    
}

export default EmployeesListItem;
