test('Class.Singleton', function(){
	
	var Singleton = new Class({
		
		Implements: Class.Singleton,
		
		initialize: function(){
			return this.check() || this.setup();
		},
		
		setup: function(){
			this.value = 5;
		}
		
	});
	
	var single = new Singleton;
	same(single, new Singleton, 'Returns the same instance');
	
	ok(single.value == 5, 'Value is initialized');
	equals((new Singleton).value, single.value, 'Value is equal');
	equals(Class.getInstanceOf(Singleton), single, 'Class.getInstanceOf returns correct instance');
	
	var SinglePer = new Class({
		
		Implements: Class.Singleton,
		
		initialize: function(object){
			return this.check(object) || this.setup();
		},
		
		setup: function(){
			this.value = 5;
		}
		
	});
	
	var storage = {

		store: function(key, value){
			this.storage[key] = value;
		},

		retrieve: function(key){
			return this.storage[key] || null;
		}

	};
	
	var obj1 = Object.append({a: 1, storage: {}}, storage),
		obj2 = Object.append({a: 2, storage: {}}, storage);
	
	var single1 = new SinglePer(obj1),
		single2 = new SinglePer(obj2);
	
	ok(single1 == new SinglePer(obj1), 'Instances from same object are equal');
	ok(single1 != single2, 'Instances from different objects are not equal');
	
});