Class Extras
============

Provides useful additions to Class.

![Screenshot](http://cpojer.net/Logo/class-extras.png)

This Plugin is part of MooTools [PowerTools!](http://cpojer.net/PowerTools).

* [Build PowerTools!](http://cpojer.net/PowerTools)
* [Fork PowerTools!](https://github.com/cpojer/PowerTools)

Build
-----

Build via [Packager](http://github.com/kamicane/packager), requires MooTools Core to be registered to Packager already

	packager register /path/to/class-extras
	packager build Class-Extras/* > mootools-class-extras.js

To build this plugin without external dependencies use

	packager build Class-Extras/* +use-only Class-Extras > class-extras.js

How To Use
----------

#### Class.Binds

Provides an alternative way to bind class methods. Stores references to bound methods internally without any manual setup and does not modify the original methods.

	new Class({
	
		Implements: Class.Binds,
		
		initialize: function(element){
			this.element = document.id(element);
			
			this.attach();
		},
		
		attach: function(){
			// Add the click method as event listener
			this.element.addEvent('click', this.bound('click'));
		},
		
		detach: function(){
			// Retrieves the same reference to the click method and removes the listener
			this.element.removeEvent('click', this.bound('click'));
		},
		
		click: function(event){
			event.preventDefault();
			
			// doSomething
			this.refersToTheClassInstance();
		}
	
	})

#### Class.Singleton

Can be used to create a single instance of a class per context or per object/DOM-Element. Provides a "check" method to check for the existence of a class instance. Creates a class instance only via explicit "new" statement.

	var MySingleton = new Class({
		
		Implements: Class.Singleton,
		
		initialize: function(){
			return this.check() || this.setup();
		},
		
		setup: function(){
			this.value = ...;
		}
		
	});
	
	new MySingleton === new MySingleton; // Returns the same instance.
	
	Class.getInstanceOf(MySingleton); // Returns the previously created instance.
	
Class.Singleton can also be used with DOM-Elements to create a single instance of a class *per* DOM-Element.

	var SinglePerElement = new Class({
		
		Implements: Class.Singleton,
		
		initialize: function(element){
			return this.check(element) || this.setup();
		},
		
		setup: function(){}
		
	});
	
	var myElement = document.id('someElement');
	
	new SinglePerElement(myElement) === new SinglePerElement(myElement); // Same instance
	
	myElement.getInstanceOf(SinglePerElement); // Returns the previously created element
	
(Note: DOM-Elements are not a requirement, any object with a store and retrieve method works)

#### Class.Instantiate

Useful for mass initialization of similar objects (usually DOM-Elements). Just a nice shortcut

	var create = Class.Instantiate(MyClass, defaultOptions);
	
	create($$('a')); // Creates one instance of MyClass for every a-tag. Initialize parameters are 'element, options'