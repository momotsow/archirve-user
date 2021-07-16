import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToggleComponent extends Component {
  @tracked archived = false;

  constructor() {
    super(...arguments);
    console.log('initializing');
  }

  @action
  toggleArchived(record, id) {
    //Convert ember object to js and update
    // debugger
    const _user = record.serialize().data.attributes;
    const payload = {
      ..._user,
      attributes: {
        ..._user.attributes,
        archived: !_user.attributes?.archived,
      },
    };

    const message = `Confirm to ${
      !_user.archived ? 'Archive' : 'Unarchive'
    } user`;

    if (!window.confirm(message)) return;
    fetch(`/api/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(() => {
        record.set('archived', !_user.archived);
      })
      .catch((error) => {
        console.log('@@@ Error ==> ' + error);
      });
  }

  stringify(data = {}) {
    return JSON.stringify(data);
  }
}
