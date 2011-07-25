/*
---

name: Class.Properties

description: Provides getters/setters sugar for your Classes

authors: Christoph Pojer (@cpojer)

license: MIT-style license.

requires: [Core/Class, Core/String]

provides: Class.Properties

...
*/

(function(){

var key = '$' + String.uniqueID() + '-properties';

var setter = function(name){
	return function(value){
		this[key][name] = value;
		return this;
	};
};

var getter = function(name){
	return function(){
		return this[key][name] || null;
	};
};

Class.Mutators.Properties = function(properties){
	this.implement(key, properties);

	for (var prop in properties){
		var name = prop.capitalize().camelCase();
		this.implement('set' + name, setter(prop));
		this.implement('get' + name, getter(prop));
	}
};

})();
