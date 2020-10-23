import Controller from '@ember/controller';

export default Controller.extend({
  draggedCard: null,
  actions: {
    addDraggedCard(listId, cardId) {
      this.send('removeDraggedCard', listId, cardId);
      this.model.forEach(toDoList => {
        toDoList.lists.forEach(list => {
          if (list.id === listId) {
            list.cards.pushObject(this.get('draggedCard'));
          }
        });
      })
    },

    removeDraggedCard(listId, cardId) {
      var removedCard;
      this.model.forEach(toDoList => {
        toDoList.lists.forEach(list => {
          if (list.cards.filterBy('id', cardId).length) {
            removedCard = list.cards.filterBy('id', cardId)[0];
            this.set('draggedCard', removedCard);
            list.cards.removeObject(removedCard);
          }
        });
      });
    }
  }
});
