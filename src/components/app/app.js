import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: [
      { name: 'Дмитрий Иванов', salary: 95000, increase: true, like: false, id: 1 },
      { name: 'Кристина Дмитриевна', salary: 105000, increase: false, like: true, id: 2 },
      { name: 'Арсен Бронсон', salary: 120000, increase: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(elem => elem.id !== id)
    }))
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: this.state.data.length + 1
    }

    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onIncrease = (id, atribute) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [atribute]: !item[atribute]}
        }
        return item
      })
    }))
  }

  searchEmployees = (term, items) => {
    if (term.length === '') {
      return items
    } 
    
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onTerm = (term) => {
    this.setState({term})
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  filterEmployees = (filter, items) => {
    switch (filter) {
      case 'like':
        return items.filter((item) => item.like)
      case 'moreSalary1000':
        return items.filter((item) => item.salary > 100000)
      case 'all':
        return items
      default:
        return items
    }
  }

  render() {
    const { data, term, filter } = this.state
    const employees = data.length
    const increased = data.filter(item => item.increase).length

    const currentData = this.filterEmployees(filter, this.searchEmployees(term, data))

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
          <div className="search-panel">
            <SearchPanel onTerm={this.onTerm}/>
            <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter}/>
          </div>
          
        <EmployeesList
          data={currentData}
          onDelete={this.deleteItem}
          onIncrease={this.onIncrease}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
