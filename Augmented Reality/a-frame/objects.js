var models = [], // 
    message = []; // treasure / reward

function ARModel(name, description) {
    this.name = name;
    this.description = description;
}

ARModel.prototype.speak = function () {
    return this.description;
}

function Model(name, description, message) {
    ARModel.call(this, name, description);
    this.message = message;
}

Model.prototype = Object.create(ARModel.prototype);

function initialize() {
    var modelsArray = [
        {
            name: 'phone',
            description: 'place the clue in here',
            message: 'here is the explanation for the object'
        },
        {
            name: 'desk',
            description: 'place the clue in here',
            message: 'here is the explanation for the object'
        }
    ];

    modelsArray.forEach(function (model) {
        models.push(new Model(model.name, model.description, model.message));
        if (model.message) message.push(model.message);
    });

    
    
}
