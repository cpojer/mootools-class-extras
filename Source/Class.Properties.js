/*
---

name: Class.Properties

description: Provides getters/setters sugar for your class properties.

authors: Christoph Pojer (@cpojer)

license: MIT-style license.

requires: [Core/Class, Core/String]

provides: Class.Properties

...
*/

var Core = require('Core');
var Class = Core.Class;

var setter = function(name){
	return function(value){
		this[name] = value;
		return this;
	};
};

var getter = function(name){
	return function(){
		return this[name] !== undefined ? this[name] : null;
	};
};

Class.Mutators.Properties = function(properties){
	this.implement(properties);

	for (var prop in properties){
		var name = prop.replace(/^_+/, '').capitalize().camelCase();
		this.implement('set' + name, setter(prop));
		this.implement('get' + name, getter(prop));
	}
};
