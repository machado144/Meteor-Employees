import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentWillMount() {

  };

  render() {
    return (
      <div>
        <EmployeeList />
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
