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
      { name: 'Kuryndin Dmitry', salary: 95000, increase: false, like: false, id: 1 },
      { name: 'Kanavina Alexandra', salary: 85000, increase: false, like: false, id: 2 },
      { name: 'Gorohova Irina', salary: 100000, increase: false, like: false, id: 3}
      ]
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

  render() {
    const { data } = this.state
    const employees = data.length
    const increased = data.filter(item => item.increase).length

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onIncrease={this.onIncrease}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
