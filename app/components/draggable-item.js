import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  classNames        : [ 'draggableItem' ],
  attributeBindings : [ 'draggable' ],
  draggable         : 'true',

  dragStart(event) {
    return event.dataTransfer.setData('text/data', get(this, 'content'));
  }
});
