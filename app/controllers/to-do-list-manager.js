import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    reorderItems(cards, itemModels, draggedModel) {
      this.set('cards', itemModels);
      this.set('cards', draggedModel);
    },
    dragStarted(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
  }
});
