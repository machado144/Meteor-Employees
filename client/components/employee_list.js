import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

import EmployeeDetail from './employee_detail'

const LIMIT = 5;

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    this.page += 1;
    Meteor.subscribe('employees', (LIMIT * this.page));
  }

  render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee =>
            <EmployeeDetail key={employee._id} employee={employee}/>
          )}
        </div>
      <button onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary center-block">
          Load More...
        </button>
      </div>
    )
  }
};

export default withTracker(() => {
  Meteor.subscribe('employees', LIMIT);

  return { employees: Employees.find({}).fetch() };
})(EmployeeList);
