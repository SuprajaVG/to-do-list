import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { get, set } from '@ember/object';

export default Route.extend({
  store: service(),
  newComment: null,
  model(params) {
    var toDoData = this.get('store').findAll('to-do-list');
    return toDoData;
  },

  addNewCard(list) {
    const newCard = EmberObject.create({
      "id": Math.random(),
      "type": "card",
      "title": "sampleCard",
      "description": "",
      "comments": A()
    });
    let newCardModel = this.get('store').createRecord('card', newCard);
    list.cards.pushObject(newCardModel);
    return list;
  },

  setupController(controller, model) {
    this._super(controller, model);
  },
  actions: {
    reorderItems(itemModels, draggedModel) {
      this.set('currentModel.items', itemModels);
      this.set('currentModel.justDragged', draggedModel);
    },
    addNewList() {
      const newList = EmberObject.create({
        "id": Math.random(),
        "type": "list",
        "listName": "sample",
        "cards": A()
      });
      let newListModel = this.get('store').createRecord('list', newList);
      newListModel = this.addNewCard(newListModel);
      this.currentModel.forEach(toDoList => {
        toDoList.lists.pushObject(newListModel);
      })
    },

    addNewCard(list) {
      this.addNewCard(list);
    },

    deleteCard(card, list) {
      this.currentModel.forEach(toDoList => {
        var selectedList = toDoList.lists.filterBy('id', list.id)[0];
        selectedList.set('cards', selectedList.cards.filter(cardItem => cardItem.id !== card.id));
      })
    },

    deleteList(list) {
      this.currentModel.forEach(toDoList => {
        set(toDoList, 'lists', toDoList.lists.filter(listItem => listItem.id !== list.id));
      })
    },

    addComment(card) {
      const newAddedComment = EmberObject.create({
        "id": Math.random(),
        "type": "comment",
        "content": card.newComment
      });
      let newCommentModel = this.get('store').createRecord('comment', newAddedComment);
      card.comments.pushObject(newCommentModel);
      card.set('newComment', '');
    },
  }
})
