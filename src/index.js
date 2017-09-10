import ko from 'knockout';
import './style.css';

var places = [
    {title: 'Basílica de Santa María', location: {lat:42.4337842, lng: -8.6497433}},
    {title: 'Capela da Peregrina', location: {lat:42.4307817, lng: -8.6457994}},
    {title: 'Pazo de Mugartegui', location: {lat:42.4336684, lng: -8.6455831}},
    {title: 'Praza da Ferrería', location: {lat:42.4314201, lng: -8.6469382}},
    {title: 'Mercado de Abastos', location: {lat:42.4342407, lng: -8.6457197}},
    {title: 'Ponte do Burgo', location: {lat:42.4357541, lng: -8.6460983}},
    {title: 'Ponte do Burgo', location: {lat:42.4357541, lng: -8.6460983}},
];

// Here's my data model
var Place = function(data) {
    this.title = ko.observable(data.title)
};


var ViewModel = function() {
    var that = this;
    this.placeList = ko.observableArray([]);

    places.forEach(function(placeItem) {
        that.placeList.push(new Place(placeItem));
    })

    that.placeList().forEach(function(placeItem) {
        
    })
}
 
ko.applyBindings(new ViewModel); // This makes Knockout get to work