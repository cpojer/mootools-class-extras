describe('Class.Instantiate', function(){
	var objects = [{a: 1}, {a: 2}, {a: 3}],
		counter = 1;
	
	Class.Instantiate(new Class({
		
		initialize: function(object, options){
			it('should create the correct instances', function(){
				expect(options && options.options).toBeTruthy();

				expect(counter++).toEqual(object.a);
			});
		}
		
	}), {options: true})(objects);
});