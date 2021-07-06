import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let userModel = store.createRecord('user', {});

    assert.equal(userModel.value, false, 'Default value should be false.')
    run(() => userModel.changeValue());
    assert.equal(userModel.value, true, 'Value should change when function is called.');
    assert.ok(userModel);
  });
});
