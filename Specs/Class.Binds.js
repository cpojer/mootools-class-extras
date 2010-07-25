describe('Class.Binds binding', function(){
	var instance;
	
	new new Class({
		
		Implements: Class.Binds,
		
		initialize: function(){
			instance = this;
			it('should bind correctly', function(){
				expect(instance.bound('method')).toBe(instance.bound('method'));

				expect(instance.bound('method')()).toEqual(1);

				expect(instance.bound('method')).not.toBe(instance.bound('method2'));
			});
			
			this.method2();
		},
		
		method: function(){
			return 1;
		},
		
		method2: function(){
			var self = this;
			it('should refer to the correct instance', function(){
				expect(self).toBe(instance);
			});
		}
		
	});
	
});