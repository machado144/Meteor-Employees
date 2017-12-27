import { Meteor } from 'meteor/meteor';
import { image, helpers } from 'faker'
import _ from 'lodash';

import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', (limit) => {
    return Employees.find({}, { limit });
  });
});
