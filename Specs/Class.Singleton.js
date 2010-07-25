describe('Class.Singleton', function(){
	
	it('should only allow a single instance', function(){
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
		expect(single).toBe(new Singleton);

		expect(single.value).toBe(5);
		expect((new Singleton).value).toBe(single.value);
		expect(Class.getInstanceOf(Singleton)).toBe(single);
	});
	
	it('should create one instance per object', function(){
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
		
		expect(single1).toBe(new SinglePer(obj1));
		expect(single1).not.toBe(single2);
	});
	
});