test('Class.Instantiate', function(){
	expect(6);
	
	var objects = [{a: 1}, {a: 2}, {a: 3}],
		counter = 1;
	
	Class.Instantiate(new Class({
		
		initialize: function(object, options){
			ok(options && options.options, 'Options object available');
			
			equals(counter++, object.a, 'Contains correct object');
		}
		
	}), {options: true})(objects);
});