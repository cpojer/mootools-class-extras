describe('Class.Properties', function(){

	it('should create getters and setters for a class', function(){

		var Human = new Class({

			Properties: {
				name: 'Mario',
				age: 15
			},

			say: function(){
				return "It's a me, " + this.getName() + '!';
			},

			setMyAge: function(age){
				this.setAge(age);
				return this;
			},

			getMyAge: function(){
				return this.getAge();
			}

		});

		var italian = new Human;
		expect(italian.getName()).toEqual('Mario');
		expect(italian.say()).toEqual("It's a me, Mario!");
		italian.setName('Valerio');
		expect(italian.getName()).toEqual('Valerio');
		expect(italian.say()).toEqual("It's a me, Valerio!");

		expect(italian.getAge()).toEqual(15);
		expect(italian.setAge(20)).toEqual(italian);
		expect(italian.getAge()).toEqual(20);

		expect(italian.setMyAge(25).getAge()).toEqual(25);
		expect(italian.getMyAge()).toEqual(25);

		var austrian = new Human;
		expect(austrian.getName()).toEqual('Mario');
		austrian.setName('Christoph');
		expect(austrian.say()).toEqual("It's a me, Christoph!");
		expect(austrian.getName()).toEqual('Christoph');
		expect(italian.getName()).toEqual('Valerio');
	});

	it('should inherit properties', function(){
		var Human = new Class({

			Properties: {
				name: 'Max',
				age: 15
			}

		});

		var Italian = new Class({

			Extends: Human,

			Properties: {
				name: 'Mario'
			}
		});

		var italian = new Italian;
		expect(italian.getName()).toEqual('Mario');
		italian.setName('Valerio');
		expect(italian.getName()).toEqual('Valerio');

		expect(italian.getAge()).toEqual(15);
	});

	it('should be able to access properties by their name', function(){
		var Human = new Class({

			Properties: {
				name: 'Mario',
				age: 22
			},

			say: function(){
				return "It's a me, " + this.name + '!';
			}

		});

		var italian = new Human;
		expect(italian.getName()).toEqual('Mario');
		expect(italian.say()).toEqual("It's a me, Mario!");

		italian.setName('Valerio');
		expect(italian.say()).toEqual("It's a me, Valerio!");
	});

	it('should allow for custom getters and setters', function(){
		var Human = new Class({

			Properties: {
				name: 'A girl',
				age: 22
			},

			setAge: function(age){
				this.age = age + 5;
			}

		});

		var girl = new Human;
		// Well that is just not true!
		girl.setAge(23);
		// But that is.
		expect(girl.getAge()).toEqual(28);
	});

	it('should strip leading underscores', function(){
		var Human = new Class({

			Properties: {
				_name: 'Mario',
				__age: 15
			},

			say: function(){
				return "It's a me, " + this._name + '!';
			}

		});

		var italian = new Human;
		expect(italian.getName()).toEqual('Mario');
		expect(italian.say()).toEqual("It's a me, Mario!");

		italian.setName('Valerio');
		expect(italian.getName()).toEqual('Valerio');
		expect(italian.say()).toEqual("It's a me, Valerio!");
		expect(italian.getAge()).toEqual(15);
	});

});
