'use strict';

module.exports = function(app) {
  const express = require('express');
  let toDoListRouter = express.Router();

  toDoListRouter.get('/', function(req, res) {
    res.send({
      data: {
      "id": "101",
      "type": "to-do-list",
      "attributes": {
        "name": "To Do Board",
      },
      "relationships": {
        "lists": {
          "data": [
            {
              "id": "1001",
              "type": "list"
            },
            {
              "id": "1002",
              "type": "list"
            },
            {
              "id": "1003",
              "type": "list"
            }
          ]}
      }
    },
    "included": [
      {
        "id": "1001",
        "type": "list",
        "attributes": {
          "list-name": "First List"
        },
        "relationships": {
          "cards": {
            "data": [
              {
                "id": "5001",
                "type": "card"
              },
              {
                "id": "5002",
                "type": "card"
              },
              {
                "id": "5003",
                "type": "card"
              }
            ]
          }
        }
      },
      {
        "id": "1002",
        "type": "list",
        "attributes": {
          "list-name": "Second List"
        },
        "relationships": {
          "cards": {
            "data": [
              {
                "id": "5004",
                "type": "card"
              },
              {
                "id": "5005",
                "type": "card"
              }
            ]
          }
        }
      },
      {
        "id": "1003",
        "type": "list",
        "attributes": {
          "list-name": "Third List"
        },
        "relationships": {
          "cards": {
            "data": [
              {
                "id": "5007",
                "type": "card"
              }
            ]
          }
        }
      },
      {
        "id": "5001",
        "type": "card",
        "attributes": {
          "title": "dirty",
          "description": "This is the first card of list 1"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6001",
                "type": "comment"
              },
              {
                "id": "6002",
                "type": "comment"
              },
              {
                "id": "6003",
                "type": "comment"
              }
            ]
          }

        }
      },
      {
        "id": "6001",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6002",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6003",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5002",
        "type": "card",
        "attributes": {
          "title": "valid",
          "description": "This is the second card of list 1"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6004",
                "type": "comment"
              },
              {
                "id": "6005",
                "type": "comment"
              },
              {
                "id": "6006",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6004",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6005",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6006",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5003",
        "type": "card",
        "attributes": {
          "title": "first card three",
          "description": "This is the third card of list 1"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6007",
                "type": "comment"
              },
              {
                "id": "6008",
                "type": "comment"
              },
              {
                "id": "6009",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6007",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6008",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6009",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5004",
        "type": "card",
        "attributes": {
          "title": "second list card 1",
          "description": "This is the first card of list 2"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6010",
                "type": "comment"
              },
              {
                "id": "6011",
                "type": "comment"
              },
              {
                "id": "6012",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6010",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6011",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6012",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5005",
        "type": "card",
        "attributes": {
          "title": "second list card 2",
          "description": "This is the second card of list 2"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6013",
                "type": "comment"
              },
              {
                "id": "6014",
                "type": "comment"
              },
              {
                "id": "6015",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6013",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6014",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6015",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5006",
        "type": "card",
        "attributes": {
          "title": "second list card 3",
          "description": "This is the third card of list 2"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6016",
                "type": "comment"
              },
              {
                "id": "6017",
                "type": "comment"
              },
              {
                "id": "6018",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6016",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6017",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6018",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5007",
        "type": "card",
        "attributes": {
          "title": "third list card 1",
          "description": "This is the first card of list 3"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6019",
                "type": "comment"
              },
              {
                "id": "6020",
                "type": "comment"
              },
              {
                "id": "6021",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6019",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6020",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6021",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5008",
        "type": "card",
        "attributes": {
          "title": "third list card 2",
          "description": "This is the second card of list 3"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6022",
                "type": "comment"
              },
              {
                "id": "6023",
                "type": "comment"
              },
              {
                "id": "6024",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6022",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6023",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6024",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
      {
        "id": "5009",
        "type": "card",
        "attributes": {
          "title": "third list card 3",
          "description": "This is the third card of list 3"
        },
        "relationships": {
          "comments": {
            "data": [
              {
                "id": "6025",
                "type": "comment"
              },
              {
                "id": "6026",
                "type": "comment"
              },
              {
                "id": "6027",
                "type": "comment"
              }
            ]
          }
        }
      },
      {
        "id": "6025",
        "type": "comment",
        "attributes": {
          "content": "comment 1",
          "date": "sample"
        }
      },
      {
        "id": "6026",
        "type": "comment",
        "attributes": {
          "content": "comment 2",
          "date": "sample"
        }
      },
      {
        "id": "6027",
        "type": "comment",
        "attributes": {
          "content": "comment 3",
          "date": "sample"
        }
      },
    ]
}
);
  });

  toDoListRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  toDoListRouter.get('/:id', function(req, res) {
    res.send({
      'to-do-list': {
        id: req.params.id
      }
    });
  });

  toDoListRouter.put('/:id', function(req, res) {
    res.send({
      'to-do-list': {
        id: req.params.id
      }
    });
  });

  toDoListRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/to-do-list', require('body-parser').json());
  app.use('/to-do-lists', toDoListRouter);
};
