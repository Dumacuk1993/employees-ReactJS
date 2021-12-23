import "./app-filter.css";

const AppFilter = (props) => {

    const data = [
        { name: 'all', lable: 'Все сотрудники' },
        { name: 'like', lable: 'На повышение' },
        { name: 'moreSalary1000', lable: 'З/П больше 1000$' }
    ]


    const filterButton = data.map(item => {
        const active = item.name === props.filter
        const activeClass = active ? 'btn-outline-light' : 'btn-light'

        return (
            <button type="button"
                className={`btn ${activeClass}`} 
                onClick={() => props.onUpdateFilter(item.name)}>
                    {item.lable}
            </button>   
        )
    })

    return (
        <div className="btn-group">
            {filterButton}
        </div>
    )
}

export default AppFilter;