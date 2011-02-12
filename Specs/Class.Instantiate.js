describe('Class.Instantiate', function(){
		
	it('should create the correct instances', function(){
		var objects = [{a: 1}, {a: 2}, {a: 3}],
			counter = 1;
	
		Class.Instantiate(new Class({
		
			initialize: function(object, options){
				expect(options && options.options).toBeTruthy();

				expect(counter++).toEqual(object.a);
			}
		
		}), {options: true})(objects);
	
		expect(counter).toEqual(4);
	});
	
	it('should only create one instance of a singleton', function(){
			var i = 0;
			var Single = new Class({

				Implements: Class.Singleton,

				initialize: function(element){
					return this.check(element) || this.setup();
				},

				setup: function(){
					this.value = i++;
				}

			});
			
			var list = [
				new Element('div'),
				new Element('a')
			];
			
			Class.Instantiate(Single)(list);
			expect(list[0].getInstanceOf(Single).value).toEqual(0);
			expect(list[1].getInstanceOf(Single).value).toEqual(1);
			
			Class.Instantiate(Single)(list);
			expect(list[0].getInstanceOf(Single).value).toEqual(0);
			expect(list[1].getInstanceOf(Single).value).toEqual(1);
	});
	
});