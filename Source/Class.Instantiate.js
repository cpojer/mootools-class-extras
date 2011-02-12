/*
---

name: Class.Instantiate

description: Simple Wrapper for Mass-Class-Instantiation

authors: Christoph Pojer (@cpojer)

license: MIT-style license.

requires: [Core/Class]

provides: Class.Instantiate

...
*/

Class.Instantiate = function(klass, options){
	var create = function(object){
		if (object.getInstanceOf && object.getInstanceOf(klass)) return;
		new klass(object, options);
	};
	
	return function(objects){
		objects.each(create);
	};
};