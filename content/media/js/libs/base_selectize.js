$(document).ready(function(){
	ko.applyBindings(new TestVM());
});

function TestVM(){
	var self = this;

	self.items = ko.observableArray([
		{'id': 1, 'name': 'One'},
		{'id': 2, 'name': 'Two'}
		]);

	self.item_id = ko.observable();
	self.my_item_id = ko.observable();
	self.my_item = ko.observable();
	self.selected_items = ko.observableArray();
	self.selected_items2 = ko.observableArray();
}
