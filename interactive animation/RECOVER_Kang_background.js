(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree_stick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("EgGugjJINdAAMAAABGTItdAAg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("EgGuAjKMAAAhGTINdAAMAAABGTg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree_stick, new cjs.Rectangle(-45.6,-227.5,91.30000000000001,455), null);


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AIoDoQgmAugdAgAT8oaQjNCHjZEDQg5BDiGCrQg/BQgwA6IBxAAAUcovIggAAI6GAAAUtovIgRAAAUto5QgJAFgIAFQgCABgBABQgFADgFADQgBABAAAAQgFADgEADQgFADgEADAUOomQgJAHgJAFQlRCjpAD2QmyC4knB0Aj+o4IiMAAIuGAAIgcAAQAPAnANAWIBSBEIGgEZIDqCeIDGCrQhVAhhJAcICeAAIDUAAIErAAAseieIgBLYIKFkOIErhEIGXAA");
	this.shape.setTransform(-22.5,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsUieIDrCeIDGCqIieA9ICeAAIDUAAIAABEIqFEOgACcDnIkrAAIjUAAIAAg9QEnh0Gxi4QJBj2FQijQlQCjpBD2QmxC4knB0IjGiqIjrieImfkaIhShEIAAg8IOGAAIAAAJIaFAAIAAAUQjMCHjZEDQg5BDiHCrQg/BQgvA6gAljCqg");
	this.shape_1.setTransform(-23.575,-31.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ATHn9QgRgCgkgBQgjgCgUAAQgNAAhgAHQhgAGgNAAQgNAAhaAKQhaAJgNAAQgNAAhQAGQhQAHgNAAQgOAAg1AHQg1AHgNAAQgNAAh8AJQh8AIgNAAQgNAAhIAGQhGAGgNAAQgNAAgxAGQgwAGgOAAQgNAAglAGQglAHgOAAQgNAAhUAJQhVAIgNAAQgNAAg6AJQg6AIgNAAQgNAAgrAJQgqAIgNAAQgNAAg6AKQg6AJgNAAQgNAAgiAIQgiAJgOAAQgRAAhvAhQheAdg0ASQASAoAxAAQANAAANAMQAMAMANAAQANAAARAKQARALANAAQAOAAAKAIQALAIANAAQACAAAlAXQAmAXADAAQAEAABIA4QBJA2ARAAIAsAkQArAjAMAAQANAAgFAJQgEAIANAAQAFAAAUAVQAUAVANAAQANAAgFAJQgGAIANAAQARAAADANQABAQACAEAmOC4QAUAeAIAHQAKAHAVAAQANAAgFAJQgFAIANAAQANAAABALQABAKANAAQAOAAA3AsQA4ArAWAAQAGAEAHAFQANAJAMAAQAOAAACALQACAKANAAQANAAAAALQABAKANAAQANAAgDAMQgDANANAAQADAAAfAmQAfAnAOAAQAHAAA/ggQA/ggAAgDQBHgqBHgrQCNhYAAgVQAAgFAfgcQAegdAAgCQAAgVBDhCQBDhBAAgLQAAgNALgBQAKgBAAgNQAAgNALgBQALgBAAgOQAAgNAMgBQALgBAAgNQAAgCAiglQAiglAAgCQAAgCAigkQAigkAAgCQAAgNALgBQAKgCAAgNQAAgNAMgBQALgCAAgNQAAAAAigfQAighAAgNQAAgSAWgPQAVgQAAgJQAAgDABgCIAHgDQAGAFACgIICZhAIBHgeAQHmgQAAgCAAgDQAAgOAMgFQAVgJAIgHAP4maQABgHAGAEIAIgDAmOC4IWEpRIACgBAo0D+IANgGICZhA");
	this.shape_2.setTransform(-8.875,-39.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlHcQgfgmgEAAQgMAAAEgNQADgMgNAAQgOAAAAgKQgBgLgNAAQgNAAgBgKQgDgLgNAAQgNAAgNgJIgMgJQgWAAg4grQg3gsgOAAQgNAAgBgKQgCgLgNAAQgMAAAEgIQAGgJgOAAQgUAAgKgHQgIgHgUgeIWDpRIACAEQAAAJgVAQQgXAPAAASQABANgjAhIghAfQAAANgMACQgLABAAANQAAANgKACQgLABAAANQAAACgiAkQgiAkAAACQAAACgiAlQgjAlABACQAAANgMABQgLABAAANQAAAOgLABQgLABAAANQAAANgLABQgKABAAANQAAALhDBBQhDBCAAAVQAAACgeAdQgfAcAAAFQgBAViMBYIiOBVQAAADg/AgQg/AggIAAQgNAAgggngAoWDLQgCgEgCgQQgDgNgQAAQgNAAAFgIQAGgJgOAAQgNAAgTgVQgUgVgGAAQgNAAAFgIQAFgJgOAAQgLAAgsgjIgrgkQgRAAhJg2QhJg4gDAAQgDAAgmgXQgmgXgBAAQgOAAgKgIQgLgIgNAAQgNAAgRgLQgRgKgNAAQgNAAgNgMQgMgMgOAAQgwAAgSgoQA0gSBegdQBvghARAAQAOAAAhgJQAjgIANAAQANAAA6gJQA5gKANAAQANAAArgIQAqgJAOAAQANAAA6gIQA5gJAOAAQANAABUgIQBVgJANAAQANAAAmgHQAlgGANAAQANAAAxgGQAwgGANAAQAOAABGgGQBHgGANAAQAOAAB7gIQB8gJAOAAQANAAA1gHQA1gHANAAQAOAABQgHQBPgGAOAAQANAABagJQBagKANAAQANAABggGQBggHAMAAIA4ACIAOAgIiaBAIABgFQAAgOAMgFQAVgJAHgHQgHAHgVAJQgMAFAAAOIgBAFIgHADQgGgEgCAIIgCAAI2DJRIiZBBgAlqC4g");
	this.shape_3.setTransform(-12.45,-39.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-93.5,276.7,121);


(lib.middleground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Eg3LAAfIAAtEUAw0gQCAvSAQCIAANEIORAAIAAUIMhuXAAAIAA0IUAxfgNkAunANk");
	this.shape.setTransform(45.65,9.4125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("Eg3LANdIAA0HUAxfgNkAunANkIORAAIAAUHg");
	this.shape_1.setTransform(45.65,55.2029);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("EgwCAKjIAAtEUAwzgQCAvSAQCIAANEUguogNkgxdANkg");
	this.shape_2.setTransform(0,-54.9625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.middleground, new cjs.Rectangle(-310,-125,711.4,268.8), null);


(lib.leaves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape.setTransform(393.0141,36.1395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_1.setTransform(393.0141,36.1395);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ArlE+QD3lRA/l6QA/l6F/gSQGAgRgrF8QgrF8FaFTQFaFSktBhQkuBglagiQlagildgwQldgxD3lRg");
	this.shape_2.setTransform(393.0141,31.7948);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AA4MSQlagildgwQldgxD3lRQD3lRA/l6QA/l6F/gSQGAgRgrF8QgrF8FaFTQFaFSktBhQjgBHj4AAQhXAAhZgJg");
	this.shape_3.setTransform(393.0141,31.7948);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("ArlFEQD3lYA/mBQA/mCF/gSQGAgSgrGEQgrGEFaFZQFaFaktBiQkuBilagjQlagildgxQldgyD3lYg");
	this.shape_4.setTransform(393.0141,27.4571);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AA4MhQlagildgxQldgyD3lYQD3lYA/mBQA/mCF/gSQGAgSgrGEQgrGEFaFZQFaFaktBiQjgBIj3AAQhXAAhagJg");
	this.shape_5.setTransform(393.0141,27.4571);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("ArlFKQD3leA/mJQA/mJF/gTQGAgSgrGMQgrGLFaFgQFaFgktBlQkuBjlagjQlagjldgyQldgzD3lfg");
	this.shape_6.setTransform(393.0141,23.1141);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AA4MxQlagjldgyQldgzD3lfQD3leA/mJQA/mJF/gTQGAgSgrGMQgrGLFaFgQFaFgktBlQjgBJj3AAQhXAAhagJg");
	this.shape_7.setTransform(393.0141,23.1141);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("ArlFRQD3llA/mRQA/mQF/gTQGAgTgrGTQgrGTFaFnQFaFnktBmQkuBmlagkQlagjldg0Qldg0D3llg");
	this.shape_8.setTransform(393.0141,18.7922);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AA4NBQlagjldg0Qldg0D3llQD3llA/mRQA/mQF/gTQGAgTgrGTQgrGTFaFnQFaFnktBmQjgBLj4AAQhWAAhagJg");
	this.shape_9.setTransform(393.0141,18.7922);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("ArlFXQD3lsA/mXQA/mZF/gTQGAgTgrGbQgrGaFaFuQFaFuktBoQkuBnlagkQlagkldg1Qldg1D3lsg");
	this.shape_10.setTransform(393.0141,14.4475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AA4NRQlagkldg1Qldg1D3lsQD3lsA/mXQA/mZF/gTQGAgTgrGbQgrGaFaFuQFaFuktBoQjgBMj4AAQhXAAhZgJg");
	this.shape_11.setTransform(393.0141,14.4475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("ArlFdQD3lyA/mgQA/mgF/gTQGAgUgrGjQgrGiFaF0QFaF1ktBqQkuBqlagmQlaglldg1Qldg2D3lzg");
	this.shape_12.setTransform(393.0141,10.1194);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AA4NgQlaglldg1Qldg2D3lzQD3lyA/mgQA/mgF/gTQGAgUgrGjQgrGiFaF0QFaF1ktBqQjfBOj3AAQhYAAhagKg");
	this.shape_13.setTransform(393.0141,10.1194);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("ArlFkQD3l6A/mnQA/mnF/gUQGAgUgrGqQgrGqFaF7QFaF7ktBtQkuBrlagmQlaglldg3Qldg3D3l5g");
	this.shape_14.setTransform(393.0141,5.7764);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AA4NwQlaglldg3Qldg3D3l5QD3l6A/mnQA/mnF/gUQGAgUgrGqQgrGqFaF7QFaF7ktBtQjfBPj3AAQhYAAhagKg");
	this.shape_15.setTransform(393.0141,5.7764);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("ArlFqQD3mBA/muQA/mvF/gUQGAgVgrGyQgrGyFaGBQFaGDktBuQkuBtlagmQlagnldg3Qldg4D3mAg");
	this.shape_16.setTransform(393.0141,1.4545);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AA4OAQlagnldg3Qldg4D3mAQD3mBA/muQA/mvF/gUQGAgVgrGyQgrGyFaGBQFaGDktBuQjgBRj3AAQhXAAhagKg");
	this.shape_17.setTransform(393.0141,1.4545);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("ArlFwQD3mHA/m2QA/m2F/gVQGAgVgrG6QgrG5FaGIQFaGJktBwQkuBwlagnQlagnldg5Qldg5D3mHg");
	this.shape_18.setTransform(393.0141,-2.8902);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AA4OQQlagnldg5Qldg5D3mHQD3mHA/m2QA/m2F/gVQGAgVgrG6QgrG5FaGIQFaGJktBwQjgBTj4AAQhWAAhagKg");
	this.shape_19.setTransform(393.0141,-2.8902);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("ArlF3QD3mOA/m+QA/m+F/gVQGAgVgrHBQgrHBFaGPQFaGQktByQkuBxlagoQlagnldg6Qldg5D3mOg");
	this.shape_20.setTransform(393.0141,-7.2279);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AA4OfQlagnldg6Qldg5D3mOQD3mOA/m+QA/m+F/gVQGAgVgrHBQgrHBFaGPQFaGQktByQjfBUj4AAQhXAAhagLg");
	this.shape_21.setTransform(393.0141,-7.2279);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("ArlF9QD3mUA/nGQA/nFF/gWQGAgVgrHJQgrHIFaGWQFaGXktBzQkuB0lagpQlagoldg6Qldg7D3mVg");
	this.shape_22.setTransform(393.0141,-11.5726);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AA4OvQlagoldg6Qldg7D3mVQD3mUA/nGQA/nFF/gWQGAgVgrHJQgrHIFaGWQFaGXktBzQjgBWj3AAQhXAAhagLg");
	this.shape_23.setTransform(393.0141,-11.5726);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("ArlGDQD3mbA/nNQA/nNF/gWQGAgWgrHRQgrHQFaGcQFaGektB2QkuB1lagpQlagpldg8Qldg7D3mcg");
	this.shape_24.setTransform(393.0141,-15.8928);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AA4O/Qlagpldg8Qldg7D3mcQD3mbA/nNQA/nNF/gWQGAgWgrHRQgrHQFaGcQFaGektB2QjgBXj4AAQhWAAhagLg");
	this.shape_25.setTransform(393.0141,-15.8928);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("ArlGJQD3mhA/nVQA/nVF/gWQGAgWgrHYQgrHYFaGjQFaGlktB3QkuB3lagpQlagqldg8Qldg9D3mjg");
	this.shape_26.setTransform(393.0141,-20.2375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AA4PPQlagqldg8Qldg9D3mjQD3mhA/nVQA/nVF/gWQGAgWgrHYQgrHYFaGjQFaGlktB3QjgBZj4AAQhXAAhZgLg");
	this.shape_27.setTransform(393.0141,-20.2375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("ArlGQQD3mpA/ncQA/ncF/gWQGAgXgrHgQgrHfFaGqQFaGrktB6QkuB5lagrQlagqldg9Qldg+D3mpg");
	this.shape_28.setTransform(393.0141,-24.5752);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AA4PeQlagqldg9Qldg+D3mpQD3mpA/ncQA/ncF/gWQGAgXgrHgQgrHfFaGqQFaGrktB6QjgBZj3AAQhXAAhagLg");
	this.shape_29.setTransform(393.0141,-24.5752);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("ArlGWQD3mvA/njQA/nkF/gXQGAgXgrHnQgrHnFaGxQFaGyktB7QkuB7lagrQlagrldg+Qldg/D3mwg");
	this.shape_30.setTransform(393.0141,-28.9199);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AA4PuQlagrldg+Qldg/D3mwQD3mvA/njQA/nkF/gXQGAgXgrHnQgrHnFaGxQFaGyktB7QjgBbj4AAQhXAAhZgLg");
	this.shape_31.setTransform(393.0141,-28.9199);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("ArlGcQD3m2A/nrQA/nrF/gXQGAgYgrHvQgrHuFaG5QFaG4ktB9QkuB9lagrQlagsldg/QldhAD3m3g");
	this.shape_32.setTransform(393.0141,-33.2418);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AA4P+Qlagsldg/QldhAD3m3QD3m2A/nrQA/nrF/gXQGAgYgrHvQgrHuFaG5QFaG4ktB9QjgBdj4AAQhXAAhZgLg");
	this.shape_33.setTransform(393.0141,-33.2418);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("ArlGjQD3m9A/nzQA/nzF/gXQGAgYgrH3QgrH2FaG+QFaHAktB/QkuB/lagsQlagtldhAQldhBD3m9g");
	this.shape_34.setTransform(393.0141,-37.5848);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AA4QOQlagtldhAQldhBD3m9QD3m9A/nzQA/nzF/gXQGAgYgrH3QgrH2FaG+QFaHAktB/QjgBej5AAQhWAAhZgLg");
	this.shape_35.setTransform(393.0141,-37.5848);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("ArlGpQD3nDA/n7QA/n6F/gYQGAgYgrH+QgrH+FaHFQFaHGktCCQkuCBlaguQlagtldhBQldhBD3nFg");
	this.shape_36.setTransform(393.0141,-41.9129);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("AA4QdQlagtldhBQldhBD3nFQD3nDA/n7QA/n6F/gYQGAgYgrH+QgrH+FaHFQFaHGktCCQjfBfj4AAQhXAAhagMg");
	this.shape_37.setTransform(393.0141,-41.9129);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("ArlGwQD3nLA/oBQA/oDF/gYQGAgYgrIGQgrIFFaHMQFaHNktCDQkuCDlaguQlaguldhCQldhCD3nLg");
	this.shape_38.setTransform(393.0141,-46.2576);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AA4QtQlaguldhCQldhCD3nLQD3nLA/oBQA/oDF/gYQGAgYgrIGQgrIFFaHMQFaHNktCDQjgBhj3AAQhXAAhagMg");
	this.shape_39.setTransform(393.0141,-46.2576);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("ArlG2QD3nRA/oKQA/oKF/gYQGAgZgrIOQgrIMFaHUQFaHTktCFQkuCFlaguQlagvldhDQldhDD3nSg");
	this.shape_40.setTransform(393.0141,-50.5795);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AA4Q9QlagvldhDQldhDD3nSQD3nRA/oKQA/oKF/gYQGAgZgrIOQgrIMFaHUQFaHTktCFQjgBjj4AAQhXAAhZgMg");
	this.shape_41.setTransform(393.0141,-50.5795);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("ArlG8QD3nYA/oRQA/oRF/gZQGAgZgrIVQgrIVFaHZQFaHbktCHQkuCHlagvQlagwldhEQldhED3nZg");
	this.shape_42.setTransform(393.0141,-54.9225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AA4RNQlagwldhEQldhED3nZQD3nYA/oRQA/oRF/gZQGAgZgrIVQgrIVFaHZQFaHbktCHQjgBkj4AAQhXAAhZgMg");
	this.shape_43.setTransform(393.0141,-54.9225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("ArlHDQD3nfA/oYQA/oZF/gZQGAgagrIdQgrIcFaHgQFaHiktCJQkuCIlagwQlagvldhFQldhGD3nfg");
	this.shape_44.setTransform(393.0141,-59.2602);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AA4RcQlagvldhFQldhGD3nfQD3nfA/oYQA/oZF/gZQGAgagrIdQgrIcFaHgQFaHiktCJQjgBlj3AAQhXAAhagNg");
	this.shape_45.setTransform(393.0141,-59.2602);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("ArlHDQD3nfA/oZQA/oZF/gZQGAgagrIdQgrIcFaHhQFaHiktCJQkuCJlagwQlagwldhFQldhGD3nfg");
	this.shape_46.setTransform(393.0141,-59.4369);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AA4RdQlagwldhFQldhGD3nfQD3nfA/oZQA/oZF/gZQGAgagrIdQgrIcFaHhQFaHiktCJQjgBlj4AAQhWAAhagMg");
	this.shape_47.setTransform(393.0141,-59.4369);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("ArlG9QD3nZA/oRQA/oSF/gZQGAgZgrIVQgrIVFaHbQFaHbktCHQkuCHlagvQlagwldhEQldhED3nZg");
	this.shape_48.setTransform(393.0141,-55.2974);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AA4ROQlagwldhEQldhED3nZQD3nZA/oRQA/oSF/gZQGAgZgrIVQgrIVFaHbQFaHbktCHQjgBkj4AAQhXAAhZgMg");
	this.shape_49.setTransform(393.0141,-55.2974);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("ArlG3QD3nSA/oLQA/oKF/gZQGAgZgrIPQgrINFaHUQFaHVktCFQkuCFlaguQlagvldhDQldhED3nSg");
	this.shape_50.setTransform(393.0141,-51.1294);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009900").s().p("AA4Q/QlagvldhDQldhED3nSQD3nSA/oLQA/oKF/gZQGAgZgrIPQgrINFaHUQFaHVktCFQjgBjj4AAQhXAAhZgMg");
	this.shape_51.setTransform(393.0141,-51.1294);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("ArlGxQD3nMA/oDQA/oDF/gZQGAgYgrIHQgrIGFaHOQFaHOktCEQkuCDlaguQlaguldhCQldhDD3nMg");
	this.shape_52.setTransform(393.0141,-46.9824);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009900").s().p("AA4QwQlaguldhCQldhDD3nMQD3nMA/oDQA/oDF/gZQGAgYgrIHQgrIGFaHOQFaHOktCEQjgBhj3AAQhXAAhagMg");
	this.shape_53.setTransform(393.0141,-46.9824);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("ArlGrQD3nFA/n8QA/n8F/gYQGAgZgrIAQgrH/FaHHQFaHIktCCQkuCBlagtQlaguldhBQldhCD3nFg");
	this.shape_54.setTransform(393.0141,-42.824);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009900").s().p("AA4QhQlaguldhBQldhCD3nFQD3nFA/n8QA/n8F/gYQGAgZgrIAQgrH/FaHHQFaHIktCCQjgBfj4AAQhXAAhZgLg");
	this.shape_55.setTransform(393.0141,-42.824);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("ArlGlQD3m/A/n0QA/n1F/gYQGAgYgrH5QgrH4FaHAQFaHBktCAQkuB/lagsQlagtldhAQldhBD3m/g");
	this.shape_56.setTransform(393.0141,-38.6538);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009900").s().p("AA4QSQlagtldhAQldhBD3m/QD3m/A/n0QA/n1F/gYQGAgYgrH5QgrH4FaHAQFaHBktCAQjgBej4AAQhXAAhZgLg");
	this.shape_57.setTransform(393.0141,-38.6538);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("ArlGfQD3m5A/ntQA/nuF/gXQGAgXgrHxQgrHxFaG6QFaG6ktB+QkuB+lagsQlagsldhAQldhAD3m4g");
	this.shape_58.setTransform(393.0141,-34.5069);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009900").s().p("AA4QDQlagsldhAQldhAD3m4QD3m5A/ntQA/nuF/gXQGAgXgrHxQgrHxFaG6QFaG6ktB+QjgBdj3AAQhXAAhagLg");
	this.shape_59.setTransform(393.0141,-34.5069);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("ArlGYQD3myA/nmQA/nmF/gXQGAgXgrHqQgrHpFaG0QFaG0ktB8QkuB7lagrQlagrldg/Qldg/D3myg");
	this.shape_60.setTransform(393.0141,-30.3485);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#009900").s().p("AA4PzQlagrldg/Qldg/D3myQD3myA/nmQA/nmF/gXQGAgXgrHqQgrHpFaG0QFaG0ktB8QjgBcj4AAQhXAAhZgMg");
	this.shape_61.setTransform(393.0141,-30.3485);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("ArlGTQD3msA/neQA/ngF/gWQGAgXgrHjQgrHiFaGtQFaGtktB6QkuB6lagqQlagrldg+Qldg+D3mrg");
	this.shape_62.setTransform(393.0141,-26.2011);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#009900").s().p("AA4PlQlagrldg+Qldg+D3mrQD3msA/neQA/ngF/gWQGAgXgrHjQgrHiFaGtQFaGtktB6QjgBaj4AAQhXAAhZgKg");
	this.shape_63.setTransform(393.0141,-26.2011);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("ArlGMQD3mlA/nXQA/nYF/gWQGAgXgrHcQgrHaFaGnQFaGnktB4QkuB4lagqQlagqldg9Qldg9D3mlg");
	this.shape_64.setTransform(393.0141,-22.0314);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#009900").s().p("AA4PVQlagqldg9Qldg9D3mlQD3mlA/nXQA/nYF/gWQGAgXgrHcQgrHaFaGnQFaGnktB4QjgBZj4AAQhWAAhagLg");
	this.shape_65.setTransform(393.0141,-22.0314);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("ArlGGQD3meA/nQQA/nRF/gWQGAgWgrHUQgrHTFaGgQFaGhktB2QkuB2lagpQlagpldg8Qldg8D3mfg");
	this.shape_66.setTransform(393.0141,-17.8958);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#009900").s().p("AA4PGQlagpldg8Qldg8D3mfQD3meA/nQQA/nRF/gWQGAgWgrHUQgrHTFaGgQFaGhktB2QjgBYj5AAQhWAAhZgLg");
	this.shape_67.setTransform(393.0141,-17.8958);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("ArlGAQD3mYA/nJQA/nJF/gWQGAgVgrHMQgrHMFaGaQFaGaktB1QkuB0lagpQlagpldg6Qldg8D3mYg");
	this.shape_68.setTransform(393.0141,-13.7239);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#009900").s().p("AA4O3Qlagpldg6Qldg8D3mYQD3mYA/nJQA/nJF/gWQGAgVgrHMQgrHMFaGaQFaGaktB1QjgBWj4AAQhXAAhZgLg");
	this.shape_69.setTransform(393.0141,-13.7239);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("ArlF6QD3mRA/nCQA/nCF/gVQGAgWgrHGQgrHEFaGTQFaGUktBzQkuBylagoQlagoldg6Qldg6D3mSg");
	this.shape_70.setTransform(393.0141,-9.5695);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#009900").s().p("AA4OoQlagoldg6Qldg6D3mSQD3mRA/nCQA/nCF/gVQGAgWgrHGQgrHEFaGTQFaGUktBzQjfBUj3AAQhYAAhagKg");
	this.shape_71.setTransform(393.0141,-9.5695);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("ArlF0QD3mLA/m6QA/m7F/gVQGAgVgrG+QgrG9FaGNQFaGNktBxQkuBwlagnQlagoldg4Qldg6D3mLg");
	this.shape_72.setTransform(393.0141,-5.434);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#009900").s().p("AA4OZQlagoldg4Qldg6D3mLQD3mLA/m6QA/m7F/gVQGAgVgrG+QgrG9FaGNQFaGNktBxQjgBTj3AAQhXAAhagKg");
	this.shape_73.setTransform(393.0141,-5.434);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("ArlFuQD3mEA/m0QA/mzF/gVQGAgVgrG3QgrG2FaGGQFaGHktBvQkuBvlagnQlagnldg4Qldg4D3mFg");
	this.shape_74.setTransform(393.0141,-1.2642);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#009900").s().p("AA4OKQlagnldg4Qldg4D3mFQD3mEA/m0QA/mzF/gVQGAgVgrG3QgrG2FaGGQFaGHktBvQjfBSj4AAQhXAAhagKg");
	this.shape_75.setTransform(393.0141,-1.2642);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("ArlFoQD3l+A/msQA/msF/gVQGAgUgrGwQgrGuFaGAQFaGAktBtQkuBtlagmQlagmldg3Qldg4D3l+g");
	this.shape_76.setTransform(393.0141,2.8832);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#009900").s().p("AA4N7Qlagmldg3Qldg4D3l+QD3l+A/msQA/msF/gVQGAgUgrGwQgrGuFaGAQFaGAktBtQjfBRj4AAQhXAAhagKg");
	this.shape_77.setTransform(393.0141,2.8832);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("ArlFiQD3l3A/mlQA/mlF/gUQGAgUgrGoQgrGnFaF5QFaF6ktBrQkuBrlaglQlagmldg2Qldg2D3l4g");
	this.shape_78.setTransform(393.0141,7.0415);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#009900").s().p("AA4NsQlagmldg2Qldg2D3l4QD3l3A/mlQA/mlF/gUQGAgUgrGoQgrGnFaF5QFaF6ktBrQjgBPj4AAQhWAAhagJg");
	this.shape_79.setTransform(393.0141,7.0415);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("ArlFbQD3lwA/meQA/meF/gTQGAgUgrGhQgrGgFaFzQFaFzktBpQkuBplaglQlagkldg2Qldg1D3lyg");
	this.shape_80.setTransform(393.0141,11.2113);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#009900").s().p("AA4NcQlagkldg2Qldg1D3lyQD3lwA/meQA/meF/gTQGAgUgrGhQgrGgFaFzQFaFzktBpQjfBOj4AAQhXAAhagKg");
	this.shape_81.setTransform(393.0141,11.2113);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("ArlFVQD3lqA/mWQA/mXF/gTQGAgTgrGZQgrGZFaFsQFaFtktBnQkuBolaglQlagkldg0Qldg1D3lrg");
	this.shape_82.setTransform(393.0141,15.3587);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009900").s().p("AA4NNQlagkldg0Qldg1D3lrQD3lqA/mWQA/mXF/gTQGAgTgrGZQgrGZFaFsQFaFtktBnQjfBNj4AAQhXAAhagKg");
	this.shape_83.setTransform(393.0141,15.3587);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("ArlFPQD3lkA/mPQA/mPF/gTQGAgTgrGSQgrGSFaFmQFaFmktBlQkuBmlagkQlagjldg0QldgzD3llg");
	this.shape_84.setTransform(393.0141,19.5171);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#009900").s().p("AA4M+Qlagjldg0QldgzD3llQD3lkA/mPQA/mPF/gTQGAgTgrGSQgrGSFaFmQFaFmktBlQjgBMj4AAQhWAAhagKg");
	this.shape_85.setTransform(393.0141,19.5171);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("ArlFJQD3ldA/mIQA/mIF/gTQGAgSgrGLQgrGKFaFfQFaFgktBkQkuBjlagjQlagjldgyQldgzD3leg");
	this.shape_86.setTransform(393.0141,23.664);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#009900").s().p("AA4MvQlagjldgyQldgzD3leQD3ldA/mIQA/mIF/gTQGAgSgrGLQgrGKFaFfQFaFgktBkQjgBJj3AAQhXAAhagJg");
	this.shape_87.setTransform(393.0141,23.664);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("ArlFDQD3lXA/mAQA/mBF/gSQGAgTgrGEQgrGDFaFZQFaFZktBiQkuBilagjQlagildgxQldgyD3lYg");
	this.shape_88.setTransform(393.0141,27.8321);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#009900").s().p("AA4MgQlagildgxQldgyD3lYQD3lXA/mAQA/mBF/gSQGAgTgrGEQgrGDFaFZQFaFZktBiQjgBIj3AAQhXAAhagJg");
	this.shape_89.setTransform(393.0141,27.8321);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("ArlE9QD3lQA/l5QA/l6F/gSQGAgSgrF8QgrF8FaFSQFaFTktBgQkuBglagiQlaghldgxQldgxD3lRg");
	this.shape_90.setTransform(393.0141,31.9715);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#009900").s().p("AA4MRQlaghldgxQldgxD3lRQD3lQA/l5QA/l6F/gSQGAgSgrF8QgrF8FaFSQFaFTktBgQjgBHj3AAQhXAAhagJg");
	this.shape_91.setTransform(393.0141,31.9715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleY:1,y:36.1395}},{t:this.shape,p:{scaleY:1,y:36.1395}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_1,p:{scaleY:1.47,y:-63.6254}},{t:this.shape,p:{scaleY:1.47,y:-63.6254}}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_1,p:{scaleY:1,y:36.1395}},{t:this.shape,p:{scaleY:1,y:36.1395}}]},1).wait(1));

	// Layer_2
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_92.setTransform(207.0141,12.0395);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_93.setTransform(207.0141,12.0395);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("ArlE0QD3lHA/luQA/lvF/gSQGAgRgrFyQgrFxFaFIQFaFJktBeQkuBdlaghQlaghldgvQldgvD3lIg");
	this.shape_94.setTransform(207.0141,11.0813);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#009900").s().p("AA4L7QlaghldgvQldgvD3lIQD3lHA/luQA/lvF/gSQGAgRgrFyQgrFxFaFIQFaFJktBeQjgBFj4AAQhXAAhZgJg");
	this.shape_95.setTransform(207.0141,11.0813);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("ArlExQD3lEA/lrQA/lsF/gRQGAgRgrFuQgrFuFaFFQFaFGktBdQkuBclaggQlaggldgvQldgvD3lFg");
	this.shape_96.setTransform(207.0141,10.1252);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#009900").s().p("AA4L0QlaggldgvQldgvD3lFQD3lEA/lrQA/lsF/gRQGAgRgrFuQgrFuFaFFQFaFGktBdQjgBFj5AAQhWAAhZgJg");
	this.shape_97.setTransform(207.0141,10.1252);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("ArlEvQD3lBA/loQA/lpF/gRQGAgRgrFrQgrFqFaFDQFaFDktBcQkuBblaggQlaggldguQldgvD3lBg");
	this.shape_98.setTransform(207.0141,9.1629);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#009900").s().p("AA4LtQlaggldguQldgvD3lBQD3lBA/loQA/lpF/gRQGAgRgrFrQgrFqFaFDQFaFDktBcQjfBDj3AAQhXAAhbgIg");
	this.shape_99.setTransform(207.0141,9.1629);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("ArlEsQD3k+A/llQA/llF/gRQGAgQgrFnQgrFnFaE/QFaFAktBbQkuBblaggQlaggldguQldguD3k+g");
	this.shape_100.setTransform(207.0141,8.2067);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#009900").s().p("AA4LmQlaggldguQldguD3k+QD3k+A/llQA/llF/gRQGAgQgrFnQgrFnFaE/QFaFAktBbQjfBDj3AAQhYAAhagIg");
	this.shape_101.setTransform(207.0141,8.2067);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("ArlEpQD3k7A/lhQA/lhF/gRQGAgRgrFkQgrFkFaE8QFaE9ktBaQkuBalaggQlagfldguQldgtD3k8g");
	this.shape_102.setTransform(207.0141,7.2485);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#009900").s().p("AA4LfQlagfldguQldgtD3k8QD3k7A/lhQA/lhF/gRQGAgRgrFkQgrFkFaE8QFaE9ktBaQjgBCj3AAQhXAAhagIg");
	this.shape_103.setTransform(207.0141,7.2485);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("ArlEmQD3k4A/leQA/leF/gQQGAgRgrFgQgrFhFaE5QFaE6ktBZQkuBZlagfQlaggldgsQldguD3k4g");
	this.shape_104.setTransform(207.0141,6.3113);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#009900").s().p("AA4LYQlaggldgsQldguD3k4QD3k4A/leQA/leF/gQQGAgRgrFgQgrFhFaE5QFaE6ktBZQjgBCj4AAQhXAAhZgIg");
	this.shape_105.setTransform(207.0141,6.3113);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("ArlEjQD3k1A/laQA/lbF/gQQGAgRgrFdQgrFdFaE2QFaE3ktBYQkuBZlaggQlageldgtQldgtD3k1g");
	this.shape_106.setTransform(207.0141,5.3512);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#009900").s().p("AA4LQQlageldgtQldgtD3k1QD3k1A/laQA/lbF/gQQGAgRgrFdQgrFdFaE2QFaE3ktBYQjfBCj3AAQhXAAhbgJg");
	this.shape_107.setTransform(207.0141,5.3512);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("ArlEgQD3kxA/lXQA/lYF/gQQGAgQgrFaQgrFZFaEzQFaE0ktBXQkuBYlagfQlagfldgsQldgsD3kzg");
	this.shape_108.setTransform(207.0141,4.3929);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#009900").s().p("AA4LKQlagfldgsQldgsD3kzQD3kxA/lXQA/lYF/gQQGAgQgrFaQgrFZFaEzQFaE0ktBXQjfBBj3AAQhYAAhagIg");
	this.shape_109.setTransform(207.0141,4.3929);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("ArlEeQD3kvA/lUQA/lUF/gQQGAgQgrFWQgrFWFaEwQFaExktBXQkuBWlageQlageldgsQldgsD3kvg");
	this.shape_110.setTransform(207.0141,3.4368);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#009900").s().p("AA4LDQlageldgsQldgsD3kvQD3kvA/lUQA/lUF/gQQGAgQgrFWQgrFWFaEwQFaExktBXQjfBAj4AAQhXAAhagIg");
	this.shape_111.setTransform(207.0141,3.4368);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("ArlEbQD3ksA/lQQA/lRF/gQQGAgQgrFTQgrFTFaEtQFaEuktBVQkuBWlageQlageldgrQldgsD3ksg");
	this.shape_112.setTransform(207.0141,2.4786);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#009900").s().p("AA4K8QlageldgrQldgsD3ksQD3ksA/lQQA/lRF/gQQGAgQgrFTQgrFTFaEtQFaEuktBVQjgBAj3AAQhXAAhagIg");
	this.shape_113.setTransform(207.0141,2.4786);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("ArlEYQD3kpA/lNQA/lNF/gQQGAgQgrFQQgrFPFaEqQFaErktBVQkuBUlagdQlageldgrQldgrD3kpg");
	this.shape_114.setTransform(207.0141,1.5203);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#009900").s().p("AA4K1QlageldgrQldgrD3kpQD3kpA/lNQA/lNF/gQQGAgQgrFQQgrFPFaEqQFaErktBVQjgA+j4AAQhXAAhZgHg");
	this.shape_115.setTransform(207.0141,1.5203);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("ArlEVQD3kmA/lJQA/lKF/gQQGAgPgrFMQgrFLFaEnQFaEoktBUQkuBUlageQlagdldgqQldgrD3kmg");
	this.shape_116.setTransform(207.0141,0.5602);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#009900").s().p("AA4KtQlagdldgqQldgrD3kmQD3kmA/lJQA/lKF/gQQGAgPgrFMQgrFLFaEnQFaEoktBUQjfA+j2AAQhYAAhbgIg");
	this.shape_117.setTransform(207.0141,0.5602);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("ArlESQD3kjA/lGQA/lGF/gQQGAgPgrFIQgrFJFaEkQFaEkktBUQkuBTlageQlagdldgqQldgqD3kjg");
	this.shape_118.setTransform(207.0141,-0.3981);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#009900").s().p("AA4KmQlagdldgqQldgqD3kjQD3kjA/lGQA/lGF/gQQGAgPgrFIQgrFJFaEkQFaEkktBUQjfA9j3AAQhXAAhbgIg");
	this.shape_119.setTransform(207.0141,-0.3981);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("ArlEPQD3kfA/lDQA/lDF/gPQGAgQgrFGQgrFFFaEhQFaEhktBTQkuBSlagdQlagdldgpQldgqD3khg");
	this.shape_120.setTransform(207.0141,-1.3564);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#009900").s().p("AA4KgQlagdldgpQldgqD3khQD3kfA/lDQA/lDF/gPQGAgQgrFGQgrFFFaEhQFaEhktBTQjfA8j3AAQhYAAhagHg");
	this.shape_121.setTransform(207.0141,-1.3564);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("ArlENQD3kdA/k/QA/lAF/gPQGAgPgrFBQgrFCFaEeQFaEfktBRQkuBRlagcQlagdldgpQldgpD3kdg");
	this.shape_122.setTransform(207.0141,-2.3125);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#009900").s().p("AA4KZQlagdldgpQldgpD3kdQD3kdA/k/QA/lAF/gPQGAgPgrFBQgrFCFaEeQFaEfktBRQjgA8j3AAQhXAAhagHg");
	this.shape_123.setTransform(207.0141,-2.3125);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("ArlEKQD3kaA/k8QA/k8F/gPQGAgPgrE+QgrE/FaEaQFaEcktBRQkuBQlagcQlagdldgoQldgpD3kag");
	this.shape_124.setTransform(207.0141,-3.2708);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#009900").s().p("AA4KSQlagdldgoQldgpD3kaQD3kaA/k8QA/k8F/gPQGAgPgrE+QgrE/FaEaQFaEcktBRQjgA7j4AAQhWAAhagHg");
	this.shape_125.setTransform(207.0141,-3.2708);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("ArlEHQD3kXA/k4QA/k5F/gPQGAgPgrE7QgrE7FaEYQFaEYktBQQkuBQlagdQlagbldgpQldgoD3kXg");
	this.shape_126.setTransform(207.0141,-4.2309);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#009900").s().p("AA4KKQlagbldgpQldgoD3kXQD3kXA/k4QA/k5F/gPQGAgPgrE7QgrE7FaEYQFaEYktBQQjeA7j3AAQhYAAhbgIg");
	this.shape_127.setTransform(207.0141,-4.2309);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("ArlEEQD3kUA/k1QA/k2F/gOQGAgPgrE4QgrE3FaEVQFaEWktBOQkuBPlagcQlagbldgoQldgoD3kUg");
	this.shape_128.setTransform(207.0141,-5.1681);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#009900").s().p("AA4KDQlagbldgoQldgoD3kUQD3kUA/k1QA/k2F/gOQGAgPgrE4QgrE3FaEVQFaEWktBOQjfA7j3AAQhYAAhagIg");
	this.shape_129.setTransform(207.0141,-5.1681);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("ArlEBQD3kRA/kxQA/kzF/gOQGAgPgrE1QgrE0FaERQFaETktBOQkuBOlagcQlagbldgnQldgoD3kRg");
	this.shape_130.setTransform(207.0141,-6.1264);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#009900").s().p("AA4J8QlagbldgnQldgoD3kRQD3kRA/kxQA/kzF/gOQGAgPgrE1QgrE0FaERQFaETktBOQjfA5j4AAQhXAAhagHg");
	this.shape_131.setTransform(207.0141,-6.1264);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("ArlD+QD3kOA/kuQA/kvF/gOQGAgOgrEwQgrExFaEPQFaEPktBNQkuBNlagbQlagbldgnQldgnD3kOg");
	this.shape_132.setTransform(207.0141,-7.0825);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#009900").s().p("AA4J1QlagbldgnQldgnD3kOQD3kOA/kuQA/kvF/gOQGAgOgrEwQgrExFaEPQFaEPktBNQjgA5j3AAQhXAAhagHg");
	this.shape_133.setTransform(207.0141,-7.0825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("ArlD7QD3kKA/krQA/ksF/gOQGAgOgrEtQgrEtFaEMQFaENktBMQkuBMlagbQlagbldgmQldgnD3kLg");
	this.shape_134.setTransform(207.0141,-8.0447);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#009900").s().p("AA4JuQlagbldgmQldgnD3kLQD3kKA/krQA/ksF/gOQGAgOgrEtQgrEtFaEMQFaENktBMQjeA4j2AAQhZAAhbgHg");
	this.shape_135.setTransform(207.0141,-8.0447);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("ArlD5QD3kIA/knQA/kpF/gNQGAgOgrEpQgrEqFaEJQFaEJktBMQkuBLlagbQlagaldgmQldgmD3kIg");
	this.shape_136.setTransform(207.0141,-9.0009);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#009900").s().p("AA4JnQlagaldgmQldgmD3kIQD3kIA/knQA/kpF/gNQGAgOgrEpQgrEqFaEJQFaEJktBMQjfA3j2AAQhYAAhbgHg");
	this.shape_137.setTransform(207.0141,-9.0009);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AKTDfQFaEHktBKQkuBLlagbQlagaldglQldgmD3kFQD3kFA/kkQA/klF/gNQGAgOgrEmQgrEnFaEFg");
	this.shape_138.setTransform(207.0141,-9.9591);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#009900").s().p("AA4JgQlagaldglQldgmD3kFQD3kFA/kkQA/klF/gNQGAgOgrEmQgrEnFaEFQFaEHktBKQjfA3j3AAQhXAAhbgHg");
	this.shape_139.setTransform(207.0141,-9.9591);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("ArmD8QAggjAegkQDCjmA3j/QARhMAkg6QBpipEagMQBQgEA/AKQDrAlgeDoQgKBKANBJQAmDYEADHQBeBIAvA7QB9CajRA4QhjAdhvAQQjRAcjkgRQhMgGhNgHQkPgWkRgdQgvgFglgJQhlgZgTg4QgZhLB4iBg");
	this.shape_140.setTransform(206.8512,-8.136);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#009900").s().p("ABAJnIiZgNQkPgWkRgdQgvgFglgJQhlgZgTg4QgZhLB4iBQAggjAegkQDCjmA3j/QARhMAkg6QBpipEagMQBQgEA/AKQDrAlgeDoQgKBKANBJQAmDYEADHQBeBIAvA7QB9CajRA4QhjAdhvAQQiCARiJAAQhTAAhXgGg");
	this.shape_141.setTransform(206.8512,-8.136);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("ArnECQAggjAegkQDCjoA4kAQARhMAjg7QBniuEYgPQBQgFA/AJQDuAkgbDmQgIBKAMBKQAiDbD+DJQBcBJAxA8QB+CajHA6QhdAhhyARQjRAejlgQQhNgGhNgGQkRgXkSgeQgvgFglgJQhlgYgUg4QgdhKB3iDg");
	this.shape_142.setTransform(206.7421,-6.3437);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009900").s().p("ABJJuIiagMQkRgXkSgeQgvgFglgJQhlgYgUg4QgdhKB3iDIAAAAQAggjAegkQDCjoA4kAQARhMAjg7QBniuEYgPQBQgFA/AJQDuAkgbDmQgIBKAMBKQAiDbD+DJQBcBJAxA8QB+CajHA6QhdAhhyARQiIAUiQAAQhOAAhQgGg");
	this.shape_143.setTransform(206.7421,-6.3437);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AroEIQAggjAeglQDCjpA5kBQARhMAjg8QBkizEXgSQBOgGBBAJQDwAigYDlQgHBJALBLQAgDeD6DMQBbBJAzA9QB/Cai9A8QhXAlh0ATQjSAfjmgPQhOgFhNgHQkSgXkTgeQgvgFgmgJQhlgYgWg3QgfhKB1iEg");
	this.shape_144.setTransform(206.5946,-4.5394);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#009900").s().p("ABSJ1QhOgFhNgHQkSgXkTgeQgvgFgmgJQhlgYgWg3QgfhKB1iEIAAgBIA+hIQDCjpA5kBQARhMAjg8QBkizEXgSQBOgGBBAJQDwAigYDlQgHBJALBLQAgDeD6DMQBbBJAzA9QB/Cai9A8QhXAlh0ATQiNAViWAAQhKAAhLgFg");
	this.shape_145.setTransform(206.5946,-4.5394);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("ArpEPQAfgkAeglQDCjqA7kDQARhMAhg9QBii3EVgWQBOgGBCAIQDyAfgUDkQgGBJAKBMQAdDiD3DNQBZBKA1A+QCBCaizA+QhSAph2AUQjTAijngPQhOgFhOgHQkTgXkUgfQgvgFgmgJQhmgXgXg3QgihKB0iFg");
	this.shape_146.setTransform(206.4705,-2.7387);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009900").s().p("ABaJ8IicgMQkTgXkUgfQgvgFgmgJQhmgXgXg3QgihKB0iFIA9hJQDCjqA7kDQARhMAhg9QBii3EVgWQBOgGBCAIQDyAfgUDkQgGBJAKBMQAdDiD3DNQBZBKA1A+QCBCaizA+QhSAph2AUQiSAYibAAQhGAAhHgFg");
	this.shape_147.setTransform(206.4705,-2.7387);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("ArqEVQAfgkAegmQDCjrA8kEQARhMAhg+QBfi8ETgYQBNgIBEAIQD0AdgRDiQgFBJAJBNQAaDkD0DQQBYBLA2A/QCDCaipBAQhNAth4AWQjUAjjngOQhPgFhOgHQkUgXkVgfQgwgGgmgIQhngXgYg2QglhKBziHg");
	this.shape_148.setTransform(206.3317,-0.9375);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#009900").s().p("ABjKDQhPgFhOgHQkUgXkVgfQgwgGgmgIQhngXgYg2QglhKBziHIAAAAIA9hKQDCjrA8kEQARhMAhg+QBfi8ETgYQBNgIBEAIQD0AdgRDiQgFBJAJBNQAaDkD0DQQBYBLA2A/QCDCaipBAQhNAth4AWQiXAZiiAAQhAAAhCgEg");
	this.shape_149.setTransform(206.3317,-0.9375);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(5,1,1).p("ArrEbQAegkAfgmQDBjtA9kFQAShMAfg/QBdjBERgbQBNgIBFAHQD2AagNDhQgEBKAIBOQAXDmDxDTQBWBLA5BAQCECaifBCQhHAxh7AXQjUAljpgNQhPgFhPgHQkVgXkWggQgwgFgngIQhngXgag1QgnhLBxiHg");
	this.shape_150.setTransform(206.2236,0.8807);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#009900").s().p("ABrKKQhPgFhPgHQkVgXkWggQgwgFgngIQhngXgag1QgnhLBxiHIABgBIA9hKQDBjtA9kFQAShMAfg/QBdjBERgbQBNgIBFAHQD2AagNDhQgEBKAIBOQAXDmDxDTQBWBLA5BAQCECaifBCQhHAxh7AXQidAcioAAQg8AAg8gEg");
	this.shape_151.setTransform(206.2236,0.8807);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(5,1,1).p("ArtEiQAeglAfgmQDCjuA+kHQAShMAehAQBajGEPgeQBNgJBGAGQD4AZgJDgQgDBJAHBPQAUDpDtDVQBWBMA6BBQCFCZiUBFQhCA1h9AZQjVAnjqgNQhPgEhPgHQkWgYkYggQgwgGgogIQhngWgbg1QgqhKBwiJg");
	this.shape_152.setTransform(206.1104,2.6817);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#009900").s().p("ABzKRQhPgEhPgHQkWgYkYggQgwgGgogIQhngWgbg1QgqhKBwiJIAAAAIA9hLQDCjuA+kHQAShMAehAQBajGEPgeQBNgJBGAGQD4AZgJDgQgDBJAHBPQAUDpDtDVQBWBMA6BBQCFCZiUBFQhCA1h9AZQihAdiuAAQg3AAg5gDg");
	this.shape_153.setTransform(206.1104,2.6817);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(5,1,1).p("AruEoQAeglAfgnQDCjvA/kHQAShNAdhBQBYjLENghQBMgKBIAGQD6AWgGDfQgBBJAFBQQARDsDrDXQBUBNA7BCQCHCZiKBHQg9A5h/AaQjWApjqgMQhQgEhPgHQkYgYkZghQgvgFgpgIQhngWgdg0QgshLBuiJg");
	this.shape_154.setTransform(205.991,4.4647);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#009900").s().p("AB8KYQhQgEhPgHQkYgYkZghQgvgFgpgIQhngWgdg0QgshLBuiJIAAgBIA9hMQDCjvA/kHQAShNAdhBQBYjLENghQBMgKBIAGQD6AWgGDfQgBBJAFBQQARDsDrDXQBUBNA7BCQCHCZiKBHQg9A5h/AaQinAgizAAQgzAAgzgDg");
	this.shape_155.setTransform(205.991,4.4647);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(5,1,1).p("ArwEuQAdglAggnQDCjxBAkIQAShNAdhCQBVjQEKgjQBNgLBIAFQD9AUgDDdQAABJAFBRQANDvDoDaQBTBNA9BDQCJCZiBBJQg3A9iBAcQjXAqjsgLQhQgEhPgHQkZgYkaghQgwgGgpgIQhngVgfg0QgvhKBtiLg");
	this.shape_156.setTransform(205.9052,6.26);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#009900").s().p("ACDKfQhQgEhPgHQkZgYkaghQgwgGgpgIQhngVgfg0QgvhKBtiLIAAgBIA9hMQDCjxBAkIQAShNAdhCQBVjQEKgjQBNgLBIAFQD9AUgDDdQAABJAFBRQANDvDoDaQBTBNA9BDQCJCZiBBJQg3A9iBAcQirAii4AAQgvAAgxgDg");
	this.shape_157.setTransform(205.9052,6.26);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(5,1,1).p("ArxE1QAcgmAggoQDCjxBBkKQAThNAbhDQBTjVEJgmQBMgMBJAFQD/ASABDbQABBJADBSQALDxDlDdQBRBOA/BEQCKCZh2BLQgyBBiDAdQjYAtjtgLQhQgEhQgHQkagZkbghQgwgFgpgIQhogVgggzQgyhKBriNg");
	this.shape_158.setTransform(205.8161,8.0619);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#009900").s().p("ACLKmQhQgEhQgHQkagZkbghQgwgFgpgIQhogVgggzQgyhKBriNIABAAIA8hOQDCjxBBkKQAThNAbhDQBTjVEJgmQBMgMBJAFQD/ASABDbQABBJADBSQALDxDlDdQBRBOA/BEQCKCZh2BLQgyBBiDAdQivAki8AAQgsAAgugCg");
	this.shape_159.setTransform(205.8161,8.0619);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(5,1,1).p("ArzE7QAdglAggpQDBjzBDkLQAThMAahEQBRjbEGgoQBMgNBKAEQECAQAEDaQACBJACBTQAID0DiDfQBPBOBBBFQCMCahsBMQgtBFiGAfQjYAujtgJQhRgEhRgHQkbgZkcgiQgwgFgqgIQhogVghgyQg1hKBqiOg");
	this.shape_160.setTransform(205.7341,9.843);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#009900").s().p("ACUKuQhRgEhRgHQkbgZkcgiQgwgFgqgIQhogVghgyQg1hKBqiOIAAgBIA9hOQDBjzBDkLQAThMAahEQBRjbEGgoQBMgNBKAEQECAQAEDaIAECcQAID0DiDfQBPBOBBBFQCMCahsBMQgtBFiGAfQizAmjCAAQgoAAgogBg");
	this.shape_161.setTransform(205.7341,9.843);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(5,1,1).p("Ar0FCQAbgmAhgpQDBj0BEkMQAThNAahFQBNjfEFgsQBLgNBMADQEDANAIDaQADBIACBUQAED3DfDhQBOBPBDBHQCNCZhiBOQgnBJiIAhQjZAwjvgJQhQgDhSgIQkcgZkdgiQgwgGgrgIQhpgUgigyQg3hKBoiOg");
	this.shape_162.setTransform(205.6879,11.6438);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#009900").s().p("ACbK1QhQgDhSgIQkcgZkdgiQgwgGgrgIQhpgUgigyQg3hKBoiOIABgBQAbgmAhgpQDBj0BEkMQAThNAahFQBNjfEFgsQBLgNBMADQEDANAIDaQADBIACBUQAED3DfDhQBOBPBDBHQCNCZhiBOQgnBJiIAhQi3AojGAAIhLgBg");
	this.shape_163.setTransform(205.6879,11.6438);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(5,1,1).p("Ar2FIQAbgmAhgqQDBj2BFkMQAThOAZhFQBLjkECgvQBLgOBOADQEFALALDYQAFBIAABVQACD5DbDkQBNBQBFBIQCOCZhYBQQgiBNiKAiQjaAyjvgIQhRgDhSgIQkdgZkfgjQgwgGgrgHQhpgUgkgxQg6hKBniQg");
	this.shape_164.setTransform(205.6256,13.4355);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#009900").s().p("ACjK8QhRgDhSgIQkdgZkfgjQgwgGgrgHQhpgUgkgxQg6hKBniQIABgBQAbgmAhgqQDBj2BFkMQAThOAZhFQBLjkECgvQBLgOBOADQEFALALDYQAFBIAABVQACD5DbDkICSCYQCOCZhYBQQgiBNiKAiQi6ArjLAAIhEgBg");
	this.shape_165.setTransform(205.6256,13.4355);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(5,1,1).p("Ar4FOQAbgmAhgqQDBj4BGkNQAUhOAXhGQBJjpEAgxQBLgQBOACQEIAJAODXQAGBIAABWQgCD8DYDnQBMBQBGBJQCQCZhOBSQgcBRiNAjQjaA0jwgHQhSgDhTgIQkdgZkggjQgwgGgsgIQhqgTglgxQg8hKBliQg");
	this.shape_166.setTransform(205.5906,15.2108);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#009900").s().p("ACrLDQhSgDhTgIQkdgZkggjQgwgGgsgIQhqgTglgxQg8hKBliQIABgCQAbgmAhgqQDBj4BGkNQAUhOAXhGQBJjpEAgxQBLgQBOACQEIAJAODXQAGBIAABWQgCD8DYDnICSCZQCQCZhOBSQgcBRiNAjQi/AujPAAIg8gBg");
	this.shape_167.setTransform(205.5906,15.2108);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(5,1,1).p("Ar7FVQAbgnAhgrQDCj4BGkPQAUhOAXhHQBGjuD+g0QBLgQBPABQEKAHASDVQAHBIgCBXQgED/DVDpQBLBRBHBKQCSCZhEBUQgXBViPAlQjbA2jxgHQhSgDhTgHQkfgakhgkQgwgGgsgHQhqgTgngwQg/hKBkiSg");
	this.shape_168.setTransform(205.5748,17.0087);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#009900").s().p("ACyLKQhSgDhTgHQkfgakhgkQgwgGgsgHQhqgTgngwQg/hKBkiSIAAgBQAbgnAhgrQDCj4BGkPQAUhOAXhHQBGjuD+g0QBLgQBPABQEKAHASDVQAHBIgCBXQgED/DVDpQBLBRBHBKQCSCZhEBUQgXBViPAlQjCAwjTAAIg3gBg");
	this.shape_169.setTransform(205.5748,17.0087);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(5,1,1).p("Ar9FcQAagoAhgrQDCj5BIkRQAUhNAWhIQBDj0D8g2QBMgRBPAAQEMAFAWDUQAIBIgDBYQgHEBDSDsQBJBRBKBLQCTCZg6BWQgSBZiRAnQjcA4jygHQhSgChUgIQkggakigkQgwgGgtgHQhqgTgogvQhChKBiiTg");
	this.shape_170.setTransform(205.5965,18.7831);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#009900").s().p("AC5LRQhSgChUgIQkggakigkQgwgGgtgHQhqgTgogvQhChKBiiTIABgBQAagoAhgrQDCj5BIkRQAUhNAWhIQBDj0D8g2QBMgRBPAAQEMAFAWDUQAIBIgDBYQgHEBDSDsQBJBRBKBLQCTCZg6BWQgSBZiRAnQjFAyjXAAIgygBg");
	this.shape_171.setTransform(205.5965,18.7831);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(5,1,1).p("AsAFiQAagoAhgrQDCj7BJkRQAUhOAVhJQBBj5D6g5QBLgSBRAAQEOADAZDSQAJBIgDBZQgLEEDPDuQBIBSBLBMQCVCZgwBYQgMBdiTAoQjdA6jzgGQhTgChUgIQkhgakkgkQgwgGgtgIQhrgSgpgvQhFhJBhiVg");
	this.shape_172.setTransform(205.6187,20.5733);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009900").s().p("ADALYQhTgChUgIQkhgakkgkQgwgGgtgIQhrgSgpgvQhFhJBhiVIABgBQAagoAhgrQDCj7BJkRIApiXQBBj5D6g5QBLgSBRAAQEOADAZDSQAJBIgDBZQgLEEDPDuQBIBSBLBMQCVCZgwBYQgMBdiTAoQjKA1jcAAIgqgBg");
	this.shape_173.setTransform(205.6187,20.5733);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(5,1,1).p("AsDFoQAZgnAigsQDCj9BKkSQAVhOAThKQA/j+D4g8QBKgTBTAAQEQAAAcDSQALBHgFBaQgOEHDMDwQBHBTBNBNQCWCZgmBaQgGBhiWAqQjdA7j1gEQhSgChVgIQkigbklglQgwgGgugHQhrgSgrguQhHhKBfiVg");
	this.shape_174.setTransform(205.6944,22.3908);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#009900").s().p("ADGLgQhSgChVgIQkigbklglIhegNQhrgSgrguQhHhKBfiVIABgCQAZgnAigsQDCj9BKkSIAoiYQA/j+D4g8QBKgTBTAAQEQAAAcDSQALBHgFBaQgOEHDMDwQBHBTBNBNQCWCZgmBaQgGBhiWAqQjOA3jiAAIgiAAg");
	this.shape_175.setTransform(205.6944,22.3908);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(5,1,1).p("AsHFvQAZgoAjgtQDBj9BLkUQAVhOAThLQA8kDD2g/QBKgTBUgBQESgCAgDQQAMBHgGBcQgREJDJDzQBFBTBPBOQCYCZgcBcQgBBliYArQjeA+j2gEQhTgChVgIQkjgbkmglQgwgGgvgHQhrgSgsgtQhKhKBeiXg");
	this.shape_176.setTransform(205.7886,24.1613);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#009900").s().p("ADMLnQhTgChVgIQkjgbkmglIhfgNQhrgSgsgtQhKhKBeiXIAAgBQAZgoAjgtQDBj9BLkUQAVhOAThLQA8kDD2g/QBKgTBUgBQESgCAgDQQAMBHgGBcQgREJDJDzQBFBTBPBOQCYCZgcBcQgBBliYArQjRA6jlAAIgeAAg");
	this.shape_177.setTransform(205.7886,24.1613);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(5,1,1).p("AsKF1QAYgoAjgtQDBj/BMkVQAWhOARhMQA6kID0hBQBKgVBUgBQEVgFAjDPQANBHgHBdQgUELDGD2QBEBUBRBPQCZCZgSBeQAEBpiaAtQjfA/j2gDQhTgChWgIQkkgbkogmQgwgGgvgHQhsgRgtgtQhNhKBdiXg");
	this.shape_178.setTransform(205.9133,25.952);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#009900").s().p("ADSLuQhTgChWgIQkkgbkogmIhfgNQhsgRgtgtQhNhKBdiXIABgCQAYgoAjgtQDBj/BMkVQAWhOARhMQA6kID0hBQBKgVBUgBQEVgFAjDPQANBHgHBdQgUELDGD2QBEBUBRBPQCZCZgSBeQAEBpiaAtQjVA8jpAAIgXAAg");
	this.shape_179.setTransform(205.9133,25.952);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(5,1,1).p("AsPF8QAYgpAjgtQDCkABNkXQAVhOARhNQA3kMDyhFQBKgVBVgCQEXgGAnDNQAOBHgIBdQgXEPDDD4QBDBUBSBRQCaCYgHBhQAJBsicAvQjgBBj3gDQhTgBhWgIQkmgckogmQgxgGgvgHQhsgQgvgtQhQhJBbiZg");
	this.shape_180.setTransform(206.1238,27.7211);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#009900").s().p("ADXL1QhTgBhWgIQkmgckogmIhggNQhsgQgvgtQhQhJBbiZIABgCQAYgpAjgtQDCkABNkXQAVhOARhNQA3kMDyhFQBKgVBVgCQEXgGAnDNQAOBHgIBdQgXEPDDD4QBDBUBSBRQCaCYgHBhQAJBsicAvQjXA+jtAAIgTAAg");
	this.shape_181.setTransform(206.1238,27.7211);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(5,1,1).p("AsUGCQAXgpAjguQDCkBBOkXQAWhPAQhOQA0kRDwhHQBJgXBYgCQEYgJArDMQAPBHgJBeQgaESDAD6QBBBVBUBSQCcCYACBjQAQBwifAwQjgBDj5gCQhTgBhXgIQkngckpgmQgxgHgwgGQhsgQgxgsQhShKBaiag");
	this.shape_182.setTransform(206.4087,29.5109);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#009900").s().p("ADbL8QhTgBhXgIQkngckpgmIhhgNQhsgQgxgsQhShKBaiaIABgCQAXgpAjguQDCkBBOkXQAWhPAQhOQA0kRDwhHQBJgXBYgCQEYgJArDMQAPBHgJBeQgaESDAD6QBBBVBUBSQCcCYACBjQAQBwifAwQjaBBjwAAIgPAAg");
	this.shape_183.setTransform(206.4087,29.5109);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(5,1,1).p("AsaGJQAYgpAjgvQDBkCBQkZQAWhOAOhPQAzkWDthLQBJgXBZgDQEbgLAuDLQAQBHgKBfQgdEUC9D9QA/BWBWBSQCeCZAMBkQAVB1ihAxQjhBFj5gBQhVgBhXgIQkogdkqgmQgxgHgwgGQhtgQgygrQhVhKBYibg");
	this.shape_184.setTransform(206.7276,31.2748);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#009900").s().p("ADgMEQhVgBhXgIQkogdkqgmIhhgNQhtgQgygrQhVhKBYibIABgCQAYgpAjgvQDBkCBQkZQAWhOAOhPQAzkWDthLQBJgXBZgDQEbgLAuDLQAQBHgKBfQgdEUC9D9QA/BWBWBSQCeCZAMBkQAVB1ihAxQjeBEj1AAIgHAAg");
	this.shape_185.setTransform(206.7276,31.2748);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQhtgPgzgrQhYhLBYidQAXgqAjgvQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_186.setTransform(207.0141,33.0395);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#009900").s().p("AA4MCQlaghldgvQhtgPgzgrQhYhLBYidQAXgqAjgvQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_187.setTransform(207.0141,33.0395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92}]}).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).wait(1));

	// Layer_1
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_188.setTransform(0.0141,23.7395);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_189.setTransform(0.0141,23.7395);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(5,1,1).p("ArlE9QD3lQA/l6QA/l6F/gRQGAgSgrF8QgrF8FaFSQFaFTktBgQkuBglaghQlagildgxQldgwD3lSg");
	this.shape_190.setTransform(0.0141,20.5926);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#009900").s().p("AA4MSQlagildgxQldgwD3lSQD3lQA/l6QA/l6F/gRQGAgSgrF8QgrF8FaFSQFaFTktBgQjgBHj4AAQhXAAhZgIg");
	this.shape_191.setTransform(0.0141,20.5926);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(5,1,1).p("ArlFEQD3lYA/mAQA/mCF/gSQGAgSgrGEQgrGDFaFZQFaFZktBjQkuBhlagiQlagildgyQldgyD3lXg");
	this.shape_192.setTransform(0.0141,17.4338);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#009900").s().p("AA4MhQlagildgyQldgyD3lXQD3lYA/mAQA/mCF/gSQGAgSgrGEQgrGDFaFZQFaFZktBjQjfBIj3AAQhYAAhagJg");
	this.shape_193.setTransform(0.0141,17.4338);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(5,1,1).p("ArlFKQD3leA/mIQA/mJF/gTQGAgSgrGLQgrGLFaFgQFaFfktBlQkuBjlagjQlagjldgyQldgzD3leg");
	this.shape_194.setTransform(0.0141,14.2641);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#009900").s().p("AA4MwQlagjldgyQldgzD3leQD3leA/mIQA/mJF/gTQGAgSgrGLQgrGLFaFgQFaFfktBlQjgBJj3AAQhXAAhagJg");
	this.shape_195.setTransform(0.0141,14.2641);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(5,1,1).p("ArlFQQD3lkA/mQQA/mQF/gTQGAgTgrGTQgrGSFaFmQFaFnktBmQkuBllagjQlagkldgzQldg0D3llg");
	this.shape_196.setTransform(0.0141,11.1172);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#009900").s().p("AA4NAQlagkldgzQldg0D3llQD3lkA/mQQA/mQF/gTQGAgTgrGTQgrGSFaFmQFaFnktBmQjgBLj4AAQhWAAhagJg");
	this.shape_197.setTransform(0.0141,11.1172);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(5,1,1).p("ArlFWQD3lrA/mXQA/mYF/gTQGAgTgrGaQgrGaFaFtQFaFtktBoQkuBnlagkQlagkldg1Qldg0D3lsg");
	this.shape_198.setTransform(0.0141,7.9566);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#009900").s().p("AA4NPQlagkldg1Qldg0D3lsQD3lrA/mXQA/mYF/gTQGAgTgrGaQgrGaFaFtQFaFtktBoQjfBMj4AAQhXAAhagJg");
	this.shape_199.setTransform(0.0141,7.9566);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(5,1,1).p("ArlFcQD3lxA/mfQA/mfF/gTQGAgUgrGiQgrGhFaFzQFaF0ktBqQkuBplaglQlaglldg1Qldg2D3lyg");
	this.shape_200.setTransform(0.0141,4.8135);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#009900").s().p("AA4NeQlaglldg1Qldg2D3lyQD3lxA/mfQA/mfF/gTQGAgUgrGiQgrGhFaFzQFaF0ktBqQjfBOj4AAQhXAAhagKg");
	this.shape_201.setTransform(0.0141,4.8135);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(5,1,1).p("ArlFjQD3l4A/mmQA/mnF/gUQGAgTgrGpQgrGoFaF7QFaF6ktBsQkuBrlagmQlaglldg3Qldg2D3l5g");
	this.shape_202.setTransform(0.0141,1.6438);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#009900").s().p("AA4NuQlaglldg3Qldg2D3l5QD3l4A/mmQA/mnF/gUQGAgTgrGpQgrGoFaF7QFaF6ktBsQjgBPj4AAQhWAAhagKg");
	this.shape_203.setTransform(0.0141,1.6438);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(5,1,1).p("ArlFpQD3l/A/mtQA/muF/gUQGAgUgrGwQgrGwFaGBQFaGBktBuQkuBtlagmQlagnldg3Qldg3D3mAg");
	this.shape_204.setTransform(0.0141,-1.503);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#009900").s().p("AA4N+Qlagnldg3Qldg3D3mAQD3l/A/mtQA/muF/gUQGAgUgrGwQgrGwFaGBQFaGBktBuQjgBQj4AAQhXAAhZgJg");
	this.shape_205.setTransform(0.0141,-1.503);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(5,1,1).p("ArlFvQD3mFA/m1QA/m1F/gVQGAgUgrG4QgrG3FaGIQFaGHktBwQkuBvlagnQlagnldg4Qldg5D3mGg");
	this.shape_206.setTransform(0.0141,-4.6636);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#009900").s().p("AA4ONQlagnldg4Qldg5D3mGQD3mFA/m1QA/m1F/gVQGAgUgrG4QgrG3FaGIQFaGHktBwQjgBSj3AAQhXAAhagKg");
	this.shape_207.setTransform(0.0141,-4.6636);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(5,1,1).p("ArlF1QD3mMA/m8QA/m8F/gVQGAgVgrG/QgrG/FaGOQFaGPktBxQkuBxlagoQlagnldg5Qldg6D3mNg");
	this.shape_208.setTransform(0.0141,-7.8088);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#009900").s().p("AA4OcQlagnldg5Qldg6D3mNQD3mMA/m8QA/m8F/gVQGAgVgrG/QgrG/FaGOQFaGPktBxQjgBTj3AAQhXAAhagKg");
	this.shape_209.setTransform(0.0141,-7.8088);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(5,1,1).p("ArlF8QD3mTA/nEQA/nEF/gVQGAgVgrHHQgrHGFaGVQFaGVktBzQkuBzlagoQlagpldg6Qldg6D3mTg");
	this.shape_210.setTransform(0.0141,-10.9557);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#009900").s().p("AA4OsQlagpldg6Qldg6D3mTQD3mTA/nEQA/nEF/gVQGAgVgrHHQgrHGFaGVQFaGVktBzQjgBVj4AAQhXAAhZgKg");
	this.shape_211.setTransform(0.0141,-10.9557);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(5,1,1).p("ArlGCQD3mZA/nLQA/nMF/gWQGAgVgrHOQgrHOFaGcQFaGbktB1QkuB1lagpQlagpldg7Qldg7D3mag");
	this.shape_212.setTransform(0.0141,-14.1295);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#009900").s().p("AA4O7Qlagpldg7Qldg7D3maQD3mZA/nLQA/nMF/gWQGAgVgrHOQgrHOFaGcQFaGbktB1QjfBXj3AAQhYAAhagLg");
	this.shape_213.setTransform(0.0141,-14.1295);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(5,1,1).p("ArlGIQD3mgA/nSQA/nTF/gWQGAgWgrHWQgrHVFaGiQFaGiktB3QkuB3lagqQlagpldg8Qldg9D3mgg");
	this.shape_214.setTransform(0.0141,-17.2764);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#009900").s().p("AA4PKQlagpldg8Qldg9D3mgQD3mgA/nSQA/nTF/gWQGAgWgrHWQgrHVFaGiQFaGiktB3QjfBYj4AAQhXAAhagLg");
	this.shape_215.setTransform(0.0141,-17.2764);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(5,1,1).p("ArlGOQD3mmA/naQA/naF/gXQGAgWgrHdQgrHdFaGpQFaGpktB5QkuB4lagqQlagrldg8Qldg+D3mng");
	this.shape_216.setTransform(0.0141,-20.4216);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#009900").s().p("AA4PaQlagrldg8Qldg+D3mnQD3mmA/naQA/naF/gXQGAgWgrHdQgrHdFaGpQFaGpktB5QjfBZj4AAQhXAAhagLg");
	this.shape_217.setTransform(0.0141,-20.4216);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(5,1,1).p("ArlGUQD3mtA/nhQA/niF/gWQGAgXgrHlQgrHkFaGvQFaGwktB7QkuB6lagrQlagrldg+Qldg+D3mug");
	this.shape_218.setTransform(0.0141,-23.5821);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#009900").s().p("AA4PpQlagrldg+Qldg+D3muQD3mtA/nhQA/niF/gWQGAgXgrHlQgrHkFaGvQFaGwktB7QjfBaj3AAQhXAAhbgLg");
	this.shape_219.setTransform(0.0141,-23.5821);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(5,1,1).p("ArlGbQD3m0A/npQA/npF/gXQGAgXgrHsQgrHsFaG2QFaG2ktB9QkuB8lagsQlagrldg/Qldg/D3m0g");
	this.shape_220.setTransform(0.0141,-26.729);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#009900").s().p("AA4P4Qlagrldg/Qldg/D3m0QD3m0A/npQA/npF/gXQGAgXgrHsQgrHsFaG2QFaG2ktB9QjfBcj3AAQhYAAhagMg");
	this.shape_221.setTransform(0.0141,-26.729);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(5,1,1).p("ArlGhQD3m7A/nwQA/nwF/gYQGAgXgrH0QgrHzFaG9QFaG8ktB/QkuB+lagsQlagsldhAQldhAD3m7g");
	this.shape_222.setTransform(0.0141,-29.8987);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#009900").s().p("AA4QIQlagsldhAQldhAD3m7QD3m7A/nwQA/nwF/gYQGAgXgrH0QgrHzFaG9QFaG8ktB/QjgBej3AAQhXAAhagMg");
	this.shape_223.setTransform(0.0141,-29.8987);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(5,1,1).p("ArlGnQD3nBA/n4QA/n3F/gYQGAgYgrH7QgrH7FaHDQFaHEktCAQkuCAlagtQlagtldhAQldhCD3nBg");
	this.shape_224.setTransform(0.0141,-33.0418);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#009900").s().p("AA4QXQlagtldhAQldhCD3nBQD3nBA/n4QA/n3F/gYQGAgYgrH7QgrH7FaHDQFaHEktCAQjgBfj3AAQhXAAhagMg");
	this.shape_225.setTransform(0.0141,-33.0418);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(5,1,1).p("ArlGuQD3nIA/n/QA/n/F/gYQGAgYgrICQgrICFaHKQFaHKktCDQkuCClaguQlaguldhBQldhCD3nIg");
	this.shape_226.setTransform(0.0141,-36.2023);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#009900").s().p("AA4QnQlaguldhBQldhCD3nIQD3nIA/n/QA/n/F/gYQGAgYgrICQgrICFaHKQFaHKktCDQjfBgj3AAQhYAAhagMg");
	this.shape_227.setTransform(0.0141,-36.2023);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(5,1,1).p("ArlGzQD3nOA/oGQA/oHF/gYQGAgZgrIKQgrIKFaHQQFaHRktCEQkuCElaguQlaguldhDQldhDD3nPg");
	this.shape_228.setTransform(0.0141,-39.3492);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#009900").s().p("AA4Q2QlaguldhDQldhDD3nPQD3nOA/oGQA/oHF/gYQGAgZgrIKQgrIKFaHQQFaHRktCEQjfBij4AAQhXAAhagMg");
	this.shape_229.setTransform(0.0141,-39.3492);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(5,1,1).p("ArlG6QD3nVA/oOQA/oOF/gZQGAgYgrIRQgrIRFaHYQFaHXktCGQkuCGlagvQlagvldhEQldhED3nVg");
	this.shape_230.setTransform(0.0141,-42.519);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#009900").s().p("AA4RGQlagvldhEQldhED3nVQD3nVA/oOQA/oOF/gZQGAgYgrIRQgrIRFaHYQFaHXktCGQjgBjj3AAQhXAAhagMg");
	this.shape_231.setTransform(0.0141,-42.519);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(5,1,1).p("ArlHAQD3nbA/oVQA/oWF/gZQGAgZgrIZQgrIYFaHeQFaHektCIQkuCIlagwQlagvldhFQldhFD3ncg");
	this.shape_232.setTransform(0.0141,-45.6778);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#009900").s().p("AA4RVQlagvldhFQldhFD3ncQD3nbA/oVQA/oWF/gZQGAgZgrIZQgrIYFaHeQFaHektCIQjfBkj3AAQhYAAhagMg");
	this.shape_233.setTransform(0.0141,-45.6778);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(5,1,1).p("AKTGdQFaHkktCKQkuCKlagxQlagwldhFQldhGD3njQD3niA/ocQA/odF/gaQGAgZgrIgQgrIgFaHlg");
	this.shape_234.setTransform(0.0141,-48.8247);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#009900").s().p("AA4RkQlagwldhFQldhGD3njQD3niA/ocQA/odF/gaQGAgZgrIgQgrIgFaHlQFaHkktCKQjfBmj4AAQhXAAhagNg");
	this.shape_235.setTransform(0.0141,-48.8247);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(5,1,1).p("ArhHAQDcmpBKnVQAJg7AIg7QA1m5EShbQA5gTBAgFQFQgUAFGfQABA5gFBBQggGpDVGFQAJAQAJAQQAyBWA8BUQCuD0gBCaQgKCZiFA8QjvBqkKgJQhEgChGgKQlXgvlbhEQgIgCgJgCQlHhNDynRg");
	this.shape_236.setTransform(-0.3164,-45.9609);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#009900").s().p("ADBRhQhEgChGgKQlXgvlbhEIgRgEQlHhNDynRQDcmpBKnVQAJg7AIg7QA1m5EShbQA5gTBAgFQFQgUAFGfQABA5gFBBQggGpDVGFIASAgQAyBWA8BUQCuD0gBCaQgKCZiFA8QjcBij0AAIgpgBg");
	this.shape_237.setTransform(-0.3164,-45.9609);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(5,1,1).p("ArfG6QDemlBJnRQAKg7AHg6QA3myEVhYQA4gSBAgEQFNgSADGbQABA4gFBAQgeGlDZGAQAJAQAJAQQAyBVA8BTQCtDzgLCWQgPCUiEA6QjtBnkIgJQhEgDhGgJQlUgvlYhDQgIgBgIgCQlJhMDynLg");
	this.shape_238.setTransform(-0.5526,-43.0727);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#009900").s().p("AC+RSQhEgDhGgJQlUgvlYhDIgQgDQlJhMDynLQDemlBJnRQAKg7AHg6QA3myEVhYQA4gSBAgEQFNgSADGbQABA4gFBAQgeGlDZGAIASAgQAyBVA8BTQCtDzgLCWQgPCUiEA6QjZBfjwAAIgsgBg");
	this.shape_239.setTransform(-0.5526,-43.0727);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(5,1,1).p("ArdG0QDfmhBJnMQAJg7AIg5QA5mrEXhVQA4gRA/gEQFLgQABGXQAAA4gEBAQgdGgDdF8QAJAPAKAQQAzBUA6BSQCsDxgVCTQgUCPiCA4QjrBkkHgLQhDgChFgJQlSgulVhCQgIgBgJgCQlJhLDynFg");
	this.shape_240.setTransform(-0.7642,-40.2304);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#009900").s().p("AC6RCQhDgChFgJQlSgulVhCIgRgDQlJhLDynFQDfmhBJnMIARh0QA5mrEXhVQA4gRA/gEQFLgQABGXQAAA4gEBAQgdGgDdF8IATAfQAzBUA6BSQCsDxgVCTQgUCPiCA4QjVBajrAAIgygBg");
	this.shape_241.setTransform(-0.7642,-40.2304);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(5,1,1).p("ArbGvQDgmeBInIQAJg5AJg6QA6mjEZhSQA5gRA9gDQFJgNAAGTQgBA3gEA/QgbGcDhF3QAJAPAKAQQAzBTA6BQQCrDxgfCOQgZCLiBA2QjqBgkEgLQhDgChFgJQlPgtlShBQgIgBgIgCQlLhJDzm/g");
	this.shape_242.setTransform(-0.9436,-37.3701);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#009900").s().p("AC2QzQhDgChFgJQlPgtlShBIgQgDQlLhJDzm/QDgmeBInIIAShzQA6mjEZhSQA5gRA9gDQFJgNAAGTQgBA3gEA/QgbGcDhF3IATAfQAzBTA6BQQCrDxgfCOQgZCLiBA2QjSBWjpAAIgzgBg");
	this.shape_243.setTransform(-0.9436,-37.3701);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(5,1,1).p("AraGoQDhmZBInEQAJg5AJg5QA8mcEchOQA4gQA9gDQFGgLgCGPQAAA3gEA9QgaGYDlFzQAJAPAJAPQA1BSA4BPQCrDvgpCLQgeCGiAA0QjoBdkCgLQhDgDhEgJQlMgslQg/QgIgCgIgBQlLhIDym6g");
	this.shape_244.setTransform(-1.0546,-34.4829);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#009900").s().p("ACyQkQhDgDhEgJQlMgslQg/IgQgDQlLhIDym6QDhmZBInEIAShyQA8mcEchOQA4gQA9gDQFGgLgCGPQAAA3gEA9QgaGYDlFzIASAeQA1BSA4BPQCrDvgpCLQgeCGiAA0QjPBTjlAAIg2gBg");
	this.shape_245.setTransform(-1.0546,-34.4829);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(5,1,1).p("ArZGiQDjmUBHnAQAJg5AJg4QA9mVEfhLQA4gQA8gCQFEgJgEGLQgBA3gDA9QgYGTDoFuQAKAPAJAPQA1BRA3BOQCqDugzCHQgjCAh+AyQjnBakAgLQhCgDhDgJQlKgrlOg+QgIgBgHgCQlNhHDzm0g");
	this.shape_246.setTransform(-1.1654,-31.6199);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#009900").s().p("ACtQVQhCgDhDgJQlKgrlOg+IgPgDQlNhHDzm0QDjmUBHnAIAShxQA9mVEfhLQA4gQA8gCQFEgJgEGLQgBA3gDA9QgYGTDoFuIATAeQA1BRA3BOQCqDugzCHQgjCAh+AyQjNBQjhAAIg5gBg");
	this.shape_247.setTransform(-1.1654,-31.6199);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(5,1,1).p("ArYGdQDjmRBHm7QAJg5AJg3QA/mPEihHQA3gPA8gCQFBgGgGGGQgBA3gDA8QgWGODsFqQAKAPAJAPQA1BQA3BNQCpDsg+CEQgnB7h9AwQjlBXj/gMQhBgDhDgJQlHgrlLg8QgIgBgHgCQlOhGD0mtg");
	this.shape_248.setTransform(-1.2407,-28.7572);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#009900").s().p("ACnQGQhBgDhDgJQlHgrlLg8IgPgDQlOhGD0mtQDjmRBHm7IAShwQA/mPEihHQA3gPA8gCQFBgGgGGGQgBA3gDA8QgWGODsFqIATAeQA1BQA3BNQCpDsg+CEQgnB7h9AwQjJBMjdAAIg+gBg");
	this.shape_249.setTransform(-1.2407,-28.7572);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(5,1,1).p("ArYGWQDlmMBGm3QAJg4AKg3QBBmHEjhEQA3gPA7gBQE/gFgIGDQgBA2gDA8QgUGJDwFmQAJAOAKAPQA2BPA2BMQCnDrhHCAQgsB2h7AuQjkBUj9gNQhBgDhCgJQlFgplIg8QgHgBgIgCQlOhEDzmog");
	this.shape_250.setTransform(-1.2767,-25.8906);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#009900").s().p("ACiP2QhBgDhCgJQlFgplIg8IgPgDQlOhEDzmoQDlmMBGm3IAThvQBBmHEjhEQA3gPA7gBQE/gFgIGDQgBA2gDA8QgUGJDwFmIATAdQA2BPA2BMQCnDrhHCAQgsB2h7AuQjGBJjXAAQgiAAgigCg");
	this.shape_251.setTransform(-1.2767,-25.8906);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(5,1,1).p("ArYGQQDmmIBGmyQAJg4AKg2QBCmBEnhAQA2gOA6gBQE9gCgKF+QgBA2gDA7QgTGFD0FhQAKAOAJAPQA3BOA1BKQCnDqhSB9QgxBxh6AsQjiBQj7gNQhAgDhCgJQlCgplFg6QgIgBgHgBQlPhEDzmig");
	this.shape_252.setTransform(-1.2882,-23.0289);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#009900").s().p("ACcPnQhAgDhCgJQlCgplFg6IgPgCQlPhEDzmiQDmmIBGmyIAThuQBCmBEnhAQA2gOA6gBQE9gCgKF+IgEBxQgTGFD0FhIATAdIBsCYQCnDqhSB9QgxBxh6AsQjBBFjUAAQgkAAgkgCg");
	this.shape_253.setTransform(-1.2882,-23.0289);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(5,1,1).p("ArXGLQDnmFBFmuQAJg3AKg1QBEl6Epg9QA2gNA6gBQE6AAgLF7QgCA1gDA6QgRGBD4FdQAKANAJAOQA4BOA0BJQClDohbB6Qg2Brh4ArQjhBMj5gNQhAgEhBgIQlAgolCg5QgIgBgHgBQlQhCD0mcg");
	this.shape_254.setTransform(-1.3036,-20.1737);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#009900").s().p("ACXPYQhAgEhBgIQlAgolCg5IgPgCQlQhCD0mcQDnmFBFmuIAThsQBEl6Epg9QA2gNA6gBQE6AAgLF7IgFBvQgRGBD4FdIATAbIBsCXQClDohbB6Qg2Brh4ArQjABBjQAAQglAAglgCg");
	this.shape_255.setTransform(-1.3036,-20.1737);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(5,1,1).p("ArYGEQDomABFmqQAJg3ALg0QBFlzEsg6QA2gMA4AAQE4ACgNF3QgCA1gCA5QgQF8D8FYQAKAOAJANQA4BNAzBIQClDnhlB2Qg7Bmh3ApQjfBJj3gOQhAgEhAgHQk9golAg3QgIgBgHgCQlRhAD0mXg");
	this.shape_256.setTransform(-1.2657,-17.288);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#009900").s().p("ACRPIQhAgEhAgHQk9golAg3IgPgDQlRhAD0mXQDomABFmqQAJg3ALg0QBFlzEsg6QA2gMA4AAQE4ACgNF3IgEBuQgQF8D8FYIATAbIBrCVQClDnhlB2Qg7Bmh3ApQi8A+jMAAQgnAAgngDg");
	this.shape_257.setTransform(-1.2657,-17.288);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(5,1,1).p("ArYF/QDpl9BFmlQAJg2AKg0QBIlsEug3QA1gLA4AAQE1AFgPFyQgCA1gCA4QgOF3EAFVQAKANAJANQA5BMAyBGQCkDmhwBzQg/Bhh2AnQjeBGj1gPQg+gEhAgHQk7gnk9g2QgHgBgIgCQlSg/D1mQg");
	this.shape_258.setTransform(-1.2339,-14.4256);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#009900").s().p("ACKO5Qg+gEhAgHQk7gnk9g2IgPgDQlSg/D1mQQDpl9BFmlQAJg2AKg0QBIlsEug3QA1gLA4AAQE1AFgPFyIgEBtQgOF3EAFVIATAaIBrCSQCkDmhwBzQg/Bhh2AnQi4A6jHAAQgqAAgqgDg");
	this.shape_259.setTransform(-1.2339,-14.4256);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(5,1,1).p("ArYF5QDql4BEmhQAJg2ALgzQBJllExg0QA1gKA3AAQEzAHgRFuQgCA1gCA4QgMFyEDFQQAKANAJANQA6BLAxBFQCjDkh6BwQhEBch0AkQjdBDjzgPQg+gEg/gIQk4glk7g1QgHgBgHgCQlTg+D1mKg");
	this.shape_260.setTransform(-1.2029,-11.5805);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#009900").s().p("ACEOqQg+gEg/gIQk4glk7g1IgOgDQlTg+D1mKQDql4BEmhQAJg2ALgzQBJllExg0QA1gKA3AAQEzAHgRFuIgEBtQgMFyEDFQIATAaQA6BLAxBFQCjDkh6BwQhEBch0AkQi0A3jBAAQgtAAgugDg");
	this.shape_261.setTransform(-1.2029,-11.5805);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(5,1,1).p("ArZFyQDrlzBEmdQAJg2ALgyQBLleEzgwQA1gKA2ABQExAJgTFqQgDA0gBA3QgLFuEHFMQAKANAKAMQA6BKAwBEQCjDjiEBsQhJBXh0AiQjaBAjxgQQg+gEg/gHQk1glk4gzQgHgCgHgBQlUg9D1mFg");
	this.shape_262.setTransform(-1.1221,-8.6948);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#009900").s().p("AB+OaQg+gEg/gHQk1glk4gzIgOgDQlUg9D1mFQDrlzBEmdQAJg2ALgyQBLleEzgwQA1gKA2ABQExAJgTFqIgEBrQgLFuEHFMIAUAZQA6BKAwBEQCjDjiEBsQhJBXh0AiQivA0i9AAQgvAAgwgEg");
	this.shape_263.setTransform(-1.1221,-8.6948);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(5,1,1).p("AraFtQDslvBEmaQAIg1AMgxQBMlXE2gtQA1gJA1ABQEuALgUFnQgDAzgCA3QgIFpELFHQAKANAJAMQA7BJAwBCQChDiiOBpQhOBRhyAhQjZA9jvgRQg9gEg9gHQk0gkk2gyQgHgCgHgBQlUg7D1l/g");
	this.shape_264.setTransform(-1.0486,-5.8339);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#009900").s().p("AB3OLQg9gEg9gHQk0gkk2gyIgOgDQlUg7D1l/QDslvBEmaQAIg1AMgxQBMlXE2gtQA1gJA1ABQEuALgUFnQgDAzgCA3QgIFpELFHIATAZQA7BJAwBCQChDiiOBpQhOBRhyAhQiqAwi4AAQgzAAgzgEg");
	this.shape_265.setTransform(-1.0486,-5.8339);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(5,1,1).p("ArbFnQDulrBDmVQAJg1ALgxQBOlQE5gpQA1gIAzABQEsAOgWFiQgDAzgBA2QgHFkEPFDQAKANAJAMQA8BIAuBBQChDgiZBlQhSBNhxAfQjXA5jugRQg8gEg9gHQkxgkkzgwQgHgCgGgBQlWg6D1l5g");
	this.shape_266.setTransform(-0.9643,-2.9766);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#009900").s().p("ABwN8Qg8gEg9gHQkxgkkzgwIgNgDQlWg6D1l5QDulrBDmVQAJg1ALgxQBOlQE5gpQA1gIAzABQEsAOgWFiQgDAzgBA2QgHFkEPFDIATAZQA8BIAuBBQChDgiZBlQhSBNhxAfQinAsi0AAQg1AAg1gEg");
	this.shape_267.setTransform(-0.9643,-2.9766);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(5,1,1).p("ArcFhQDvlnBCmQQAJg1AMgwQBQlJE7gmQA1gIAyADQEqAPgYFeQgEAzAAA1QgGFgETE/QAKAMAKALQA8BIAtA/QCgDgiiBhQhYBIhvAcQjWA2jrgRQg9gFg7gGQkvgjkwgvQgHgCgHgBQlWg5D1lzg");
	this.shape_268.setTransform(-0.8685,-0.1171);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#009900").s().p("ABqNtQg9gFg7gGQkvgjkwgvIgOgDQlWg5D1lzQDvlnBCmQQAJg1AMgwQBQlJE7gmQA1gIAyADQEqAPgYFeQgEAzAAA1QgGFgETE/IAUAXQA8BIAtA/QCgDgiiBhQhYBIhvAcQihApiuAAQg5AAg5gEg");
	this.shape_269.setTransform(-0.8685,-0.1171);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(5,1,1).p("ArdFbQDwljBCmMQAJg0AMgwQBSlCE9giQA1gHAyACQEnASgaFaQgEAzgBA0QgDFbEWE7QAKALAKAMQA9BGAtA/QCeDdisBeQhcBDhuAbQjVAyjpgSQg8gEg7gHQksgikuguQgGgBgHgBQlYg4D2ltg");
	this.shape_270.setTransform(-0.7586,2.7536);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#009900").s().p("ABjNdQg8gEg7gHQksgikuguIgNgCQlYg4D2ltQDwljBCmMQAJg0AMgwQBSlCE9giQA1gHAyACQEnASgaFaQgEAzgBA0QgDFbEWE7IAUAXQA9BGAtA/QCeDdisBeQhcBDhuAbQidAlioAAQg8AAg9gFg");
	this.shape_271.setTransform(-0.7586,2.7536);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(5,1,1).p("AreFVQDylfBBmHQAJg0AMgvQBTk7FAgfQA0gHAyADQEkAUgbFWQgFAzAAAzQgCFXEbE2QAKALAKAMQA9BFAsA9QCdDdi2BaQhhA9hsAZQjUAwjngTQg7gEg7gHQkpghkrgtQgHgBgGgBQlZg3D2lng");
	this.shape_272.setTransform(-0.6633,5.6119);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#009900").s().p("ABcNOQg7gEg7gHQkpghkrgtIgNgCQlZg3D2lnQDylfBBmHQAJg0AMgvQBTk7FAgfQA0gHAyADQEkAUgbFWQgFAzAAAzQgCFXEbE2IAUAXQA9BFAsA9QCdDdi2BaQhhA9hsAZQiZAjiiAAQg/AAhBgGg");
	this.shape_273.setTransform(-0.6633,5.6119);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(5,1,1).p("ArfFPQDylaBBmEQAJgzAMguQBVk0FCgcQA1gGAwAEQEjAWgeFSQgEAyAAAyQgBFSEeEyQALALAJALQA+BEArA9QCdDbjABXQhmA4hrAXQjSAsjlgTQg7gFg6gGQknggkogsQgHgBgGgBQlag1D3lig");
	this.shape_274.setTransform(-0.5306,8.4912);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#009900").s().p("ABVM/Ih1gLQknggkogsIgNgCQlag1D3liQDylaBBmEQAJgzAMguQBVk0FCgcQA1gGAwAEQEjAWgeFSQgEAyAAAyQgBFSEeEyIAUAWQA+BEArA9QCdDbjABXQhmA4hrAXQiTAfidAAQhDAAhEgGg");
	this.shape_275.setTransform(-0.5306,8.4912);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(5,1,1).p("ArhFJQD0lXBAl/QAJgyANguQBWktFEgZQA1gFAwAEQEgAZggFOQgEAxAAAyQABFNEiEuQALALAJALQA/BDAqA7QCcDajLBTQhqAzhqAVQjQApjkgTQg6gFg5gHQkkgfkmgqQgHgBgGgBQlag0D2lcg");
	this.shape_276.setTransform(-0.3962,11.3504);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#009900").s().p("ABNMwIhzgMQkkgfkmgqIgNgCQlag0D2lcQD0lXBAl/QAJgyANguQBWktFEgYQA1gGAwAEQEgAZggFOQgEAxAAAyQABFNEiEuIAUAWQA/BDAqA7QCcDajLBTQhqAzhqAVQiMAciXAAQhHAAhKgGg");
	this.shape_277.setTransform(-0.3962,11.3504);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(5,1,1).p("AriFDQD1lSBAl7QAIgyAOgtQBYkmFGgVQA1gEAvAEQEdAaghFLQgFAxABAxQADFJEmEpQAKAKAKALQA/BCApA6QCbDYjVBQQhvAuhoATQjPAmjigUQg5gFg5gGQkigfkjgpQgGgBgGgBQlcgyD3lXg");
	this.shape_278.setTransform(-0.2669,14.1978);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#009900").s().p("ABGMhIhygLQkigfkjgpIgMgCQlcgyD3lXQD1lSBAl7QAIgyAOgtQBYkmFGgVQA1gEAvAEQEdAaghFLQgFAxABAxQADFJEmEpIAUAVQA/BCApA6QCbDYjVBQQhvAuhoATQiHAYiPAAQhMAAhPgGg");
	this.shape_279.setTransform(-0.2669,14.1978);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(5,1,1).p("ArjE9QD2lOA/l2QAJgyANgtQBakeFJgTQA1gDAtAFQEcAcgkFGQgFAxABAwQAFFFEpEkQALALAKAKQBABBAoA5QCaDXjfBMQh0AphnASQjNAijggVQg5gFg4gGQkfgdkhgoQgGgBgGgBQlcgyD3lQg");
	this.shape_280.setTransform(-0.1142,17.0635);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#009900").s().p("AA/MRIhxgLQkfgdkhgoIgMgCQlcgyD3lQQD2lOA/l2QAJgyANgtQBakeFJgTQA1gDAtAFQEcAcgkFGQgFAxABAwQAFFFEpEkIAVAVQBABBAoA5QCaDXjfBMQh0AphnASQiAAViHAAQhSAAhUgIg");
	this.shape_281.setTransform(-0.1142,17.0635);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQALAKAKAKQE8E6kkBcQgMAEgMADQkkBWlMggQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_282.setTransform(0.0141,19.9395);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMIAVAUQE8E6kkBcIgYAHQjVA/jqAAQhXAAhagJg");
	this.shape_283.setTransform(0.0141,19.9395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_189},{t:this.shape_188}]}).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.9,-180.5,566.9,297);


(lib.paperPlane_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-26.95,114.05,1,1,0,0,0,-22.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-19.2,regY:-33,x:30.4,y:79.35},0).wait(1).to({x:85.25,y:48.8},0).wait(1).to({x:140.8,y:21.4},0).wait(1).to({x:197.05,y:-2.9},0).wait(1).to({x:254.05,y:-24.1},0).wait(1).to({x:311.8,y:-42.1},0).wait(1).to({x:370.25,y:-57.05},0).wait(1).to({x:429.45,y:-68.9},0).wait(1).to({x:489.4,y:-77.6},0).wait(1).to({x:550.05,y:-83.2},0).wait(1).to({x:611.45,y:-85.7},0).wait(1).to({x:673.6,y:-85.1},0).wait(1).to({x:736.45,y:-81.4},0).wait(1).to({x:800.05,y:-74.55},0).wait(1).to({x:864.45,y:-64.6},0).wait(1).to({x:929.55,y:-51.55},0).wait(1).to({x:995.35,y:-35.4},0).wait(1).to({x:1061.95,y:-16.15},0).wait(1).to({x:1129.3,y:6.2},0).wait(1).to({x:1197.4,y:31.75},0).wait(1).to({x:1266.25,y:60.35},0).wait(1).to({x:1335.85,y:92.15},0).wait(1).to({x:1406.25,y:127.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-144.2,1699.9,331.79999999999995);


(lib.Front_Bulding = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.instance = new lib.paperPlane_flying();
	this.instance.setTransform(-305.3,-260.6,1,1,0,0,0,67.7,64.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// front_building
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AKwsgQAAEZjHDHQhhBhh1AyQh6A0iPAAQkYAAjHjHQjHjHAAkZQAAkZDHjHQDHjGEYAAQCPAAB6A0QB1AxBhBhQDHDHAAEZgAJlRoQAAAsgfAfQgfAggsAAQgsAAggggQgfgfAAgsQAAgsAfgfQAggfAsAAQAsAAAfAfQAfAfAAAsgAL0c3IAAAHI3hAAIAAgHIAA3cIXhAAgArtc3IxMAAMAAAg50MA5zAAAMAAAA50IxGAA");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("ArwLxIAAgGIAA3bIXhAAIAAXbIAAAGgAGNAcQAAAsAfAfQAgAfAsAAQAsAAAfgfQAfgfAAgsQAAgrgfggQgfgfgsAAQgsAAggAfQgfAgAAArIAAAAgAGsBnQgfgfAAgsQAAgrAfggQAggfAsAAQAsAAAfAfQAfAgAAArQAAAsgfAfQgfAfgsAAQgsAAgggfgAJiAcIAAAAg");
	this.shape_1.setTransform(0.325,110.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AnfHfQjHjGAAkZQAAkYDHjHQDHjGEYAAQCQgBB5A0QB1AyBiBhQDHDHgBEYQABEZjHDGQhiBih1AyQh5A0iQgBQkYAAjHjHg");
	this.shape_2.setTransform(1,-80.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AL0c6IAA3cI3hAAIAAXcIxMAAMAAAg5zMA5zAAAMAAAA5zgAnVz8QjHDHAAEZQAAEZDHDGQDHDHEYAAQCPAAB6g0QB1gxBhhiQDHjGAAkZQAAkZjHjHQhhhhh1gyQh6g0iPAAQkYAAjHDHg");
	this.shape_3.setTransform(0.025,-0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// middle_ground
	this.instance_1 = new lib.middleground();
	this.instance_1.setTransform(467.6,61.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Leaves_animation
	this.instance_2 = new lib.leaves();
	this.instance_2.setTransform(285.7,-287.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Tree_stick
	this.instance_3 = new lib.tree_stick();
	this.instance_3.setTransform(672.65,-39.65);

	this.instance_4 = new lib.tree_stick();
	this.instance_4.setTransform(483.85,-39.65);

	this.instance_5 = new lib.tree_stick();
	this.instance_5.setTransform(284.45,-39.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// back_Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ehm8AdmUAOqgugAmSgsVUAh7AUNAZdAX9QL3yhSbsWQUXLGV3aoQV3aohFCbQhFCbBxUIQA4KEA4J0MjSLgB9g");
	this.shape_4.setTransform(328.85,-16.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("EhpFA7TICJ9tUAOqgugAmTgsUUAh6AUMAZdAX9QL3yhSbsWQUXLGV3apQV3anhFCbQhFCbBwUHIBxT5g");
	this.shape_5.setTransform(328.85,-16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// sky
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(118,36,43,0)").ss(5,1,1).p("EhZjg2AMCzHAAAMAAABsBMizHAAAg");
	this.shape_6.setTransform(306.975,-128.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#76E2CA","#FF2639"],[0.533,1],0,393.2,0,-393.2).s().p("EhZjA2BMAAAhsBMCzHAAAMAAABsBg");
	this.shape_7.setTransform(306.975,-128.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Front_Bulding, new cjs.Rectangle(-534.9,-476.3,1538.9,853.9000000000001), null);


// stage content:
(lib.RECOVER_Kang_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front_building
	this.instance = new lib.Front_Bulding();
	this.instance.setTransform(186.25,455.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(131.3,299.1,1058.9,533.9);
// library properties:
lib.properties = {
	id: '88F7FEA58D21FB47965B1B84C4DFA8FE',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['88F7FEA58D21FB47965B1B84C4DFA8FE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;