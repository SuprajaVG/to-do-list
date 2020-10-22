import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | toDoListManager', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:to-do-list-manager');
    assert.ok(route);
  });
});
