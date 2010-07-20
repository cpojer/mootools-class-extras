test('Class.Binds binding', function(){
	expect(4);
	
	var instance;
	
	new new Class({
		
		Implements: Class.Binds,
		
		initialize: function(){
			instance = this;
			
			equals(this.bound('method'), this.bound('method'), 'Returns the same reference');
			
			equals(this.bound('method')(), 1, 'Returns the correct value when executed');
			
			ok(this.bound('method') != this.bound('method2'), 'Returns the *correct* reference');
		},
		
		method: function(){
			equals(this, instance, 'Is bound to the correct object');
			
			return 1;
		},
		
		method2: function(){}
		
	});
});