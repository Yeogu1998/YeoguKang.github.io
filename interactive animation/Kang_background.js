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


(lib.sky = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(118,36,43,0)").ss(5,1,1).p("EhZjg2AMCzHAAAMAAABsBMizHAAAg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#76E2CA","#FF2639"],[0.533,1],0,393.2,0,-393.2).s().p("EhZjA2BMAAAhsBMCzHAAAMAAABsBg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(-575.7,-348.2,1151.5,696.4), null);


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
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ArlE7QD3lOA/l3QA/l3F/gSQGAgSgrF6QgrF5FaFQQFaFRktBfQkuBglagiQlaghldgwQldgxD3lPg");
	this.shape_2.setTransform(393.0141,33.3713);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AA4MMQlaghldgwQldgxD3lPQD3lOA/l3QA/l3F/gSQGAgSgrF6QgrF5FaFQQFaFRktBfQjgBHj3AAQhXAAhagJg");
	this.shape_3.setTransform(393.0141,33.3713);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("ArlE/QD3lTA/l7QA/l9F/gRQGAgSgrF+QgrF/FaFUQFaFUktBhQkuBhlagiQlagildgxQldgxD3lTg");
	this.shape_4.setTransform(393.0141,30.6025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AA4MWQlagildgxQldgxD3lTQD3lTA/l7QA/l9F/gRQGAgSgrF+QgrF/FaFUQFaFUktBhQjfBIj4AAQhXAAhagJg");
	this.shape_5.setTransform(393.0141,30.6025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("ArlFDQD3lXA/mAQA/mBF/gSQGAgTgrGEQgrGDFaFZQFaFZktBiQkuBilagjQlagildgxQldgyD3lYg");
	this.shape_6.setTransform(393.0141,27.8321);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AA4MgQlagildgxQldgyD3lYQD3lXA/mAQA/mBF/gSQGAgTgrGEQgrGDFaFZQFaFZktBiQjgBIj3AAQhXAAhagJg");
	this.shape_7.setTransform(393.0141,27.8321);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("ArlFHQD3lbA/mFQA/mGF/gTQGAgSgrGIQgrGIFaFdQFaFdktBkQkuBjlagjQlagjldgyQldgyD3lcg");
	this.shape_8.setTransform(393.0141,25.0542);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AA4MqQlagjldgyQldgyD3lcQD3lbA/mFQA/mGF/gTQGAgSgrGIQgrGIFaFdQFaFdktBkQjgBJj4AAQhXAAhZgJg");
	this.shape_9.setTransform(393.0141,25.0542);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("ArlFLQD3lfA/mKQA/mLF/gTQGAgSgrGNQgrGNFaFhQFaFiktBkQkuBllagkQlagjldgyQldgzD3lhg");
	this.shape_10.setTransform(393.0141,22.2722);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AA4M0QlagjldgyQldgzD3lhQD3lfA/mKQA/mLF/gTQGAgSgrGNQgrGNFaFhQFaFiktBkQjfBLj4AAQhXAAhagKg");
	this.shape_11.setTransform(393.0141,22.2722);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("ArlFPQD3lkA/mPQA/mPF/gTQGAgTgrGSQgrGSFaFmQFaFmktBlQkuBmlagkQlagjldg0QldgzD3llg");
	this.shape_12.setTransform(393.0141,19.5171);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AA4M+Qlagjldg0QldgzD3llQD3lkA/mPQA/mPF/gTQGAgTgrGSQgrGSFaFmQFaFmktBlQjgBMj4AAQhWAAhagKg");
	this.shape_13.setTransform(393.0141,19.5171);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("ArlFTQD3loA/mUQA/mUF/gTQGAgTgrGXQgrGWFaFqQFaFqktBoQkuBmlagkQlagkldg0Qldg0D3lpg");
	this.shape_14.setTransform(393.0141,16.7505);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AA4NIQlagkldg0Qldg0D3lpQD3loA/mUQA/mUF/gTQGAgTgrGXQgrGWFaFqQFaFqktBoQjgBMj3AAQhXAAhagKg");
	this.shape_15.setTransform(393.0141,16.7505);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("ArlFYQD3ltA/mZQA/mZF/gTQGAgUgrGcQgrGcFaFuQFaFvktBoQkuBolagkQlaglldg0Qldg1D3ltg");
	this.shape_16.setTransform(393.0141,13.9705);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AA4NTQlaglldg0Qldg1D3ltQD3ltA/mZQA/mZF/gTQGAgUgrGcQgrGcFaFuQFaFvktBoQjgBNj5AAQhWAAhZgJg");
	this.shape_17.setTransform(393.0141,13.9705);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("ArlFbQD3lwA/meQA/meF/gTQGAgUgrGhQgrGgFaFzQFaFzktBpQkuBplaglQlagkldg2Qldg1D3lyg");
	this.shape_18.setTransform(393.0141,11.2113);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AA4NcQlagkldg2Qldg1D3lyQD3lwA/meQA/meF/gTQGAgUgrGhQgrGgFaFzQFaFzktBpQjfBOj4AAQhXAAhagKg");
	this.shape_19.setTransform(393.0141,11.2113);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("ArlFgQD3l1A/mjQA/mjF/gTQGAgUgrGmQgrGlFaF2QFaF4ktBrQkuBqlaglQlagmldg1Qldg3D3l1g");
	this.shape_20.setTransform(393.0141,8.443);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AA4NnQlagmldg1Qldg3D3l1QD3l1A/mjQA/mjF/gTQGAgUgrGmQgrGlFaF2QFaF4ktBrQjfBOj4AAQhXAAhagJg");
	this.shape_21.setTransform(393.0141,8.443);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("ArlFkQD3l6A/mnQA/moF/gUQGAgUgrGrQgrGqFaF7QFaF8ktBsQkuBrlaglQlagmldg3Qldg2D3l6g");
	this.shape_22.setTransform(393.0141,5.6651);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AA4NxQlagmldg3Qldg2D3l6QD3l6A/mnQA/moF/gUQGAgUgrGrQgrGqFaF7QFaF8ktBsQjgBQj4AAQhXAAhZgKg");
	this.shape_23.setTransform(393.0141,5.6651);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("ArlFoQD3l+A/msQA/msF/gVQGAgUgrGwQgrGuFaGAQFaGAktBtQkuBtlagmQlagmldg3Qldg4D3l+g");
	this.shape_24.setTransform(393.0141,2.8832);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AA4N7Qlagmldg3Qldg4D3l+QD3l+A/msQA/msF/gVQGAgUgrGwQgrGuFaGAQFaGAktBtQjfBRj4AAQhXAAhagKg");
	this.shape_25.setTransform(393.0141,2.8832);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("ArlFsQD3mCA/mxQA/myF/gUQGAgVgrG1QgrG0FaGDQFaGFktBuQkuBulagmQlagnldg3Qldg5D3mCg");
	this.shape_26.setTransform(393.0141,0.1259);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AA4OFQlagnldg3Qldg5D3mCQD3mCA/mxQA/myF/gUQGAgVgrG1QgrG0FaGDQFaGFktBuQjgBSj4AAQhWAAhagKg");
	this.shape_27.setTransform(393.0141,0.1259);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("ArlFwQD3mHA/m2QA/m2F/gUQGAgVgrG5QgrG5FaGIQFaGJktBvQkuBwlagnQlagnldg5Qldg4D3mHg");
	this.shape_28.setTransform(393.0141,-2.6424);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AA4OPQlagnldg5Qldg4D3mHQD3mHA/m2QA/m2F/gUQGAgVgrG5QgrG5FaGIQFaGJktBvQjgBTj4AAQhWAAhagKg");
	this.shape_29.setTransform(393.0141,-2.6424);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("ArlF0QD3mLA/m6QA/m7F/gVQGAgVgrG+QgrG9FaGNQFaGNktBxQkuBwlagnQlagoldg4Qldg6D3mLg");
	this.shape_30.setTransform(393.0141,-5.434);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AA4OZQlagoldg4Qldg6D3mLQD3mLA/m6QA/m7F/gVQGAgVgrG+QgrG9FaGNQFaGNktBxQjgBTj3AAQhXAAhagKg");
	this.shape_31.setTransform(393.0141,-5.434);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("ArlF4QD3mPA/m/QA/nAF/gVQGAgVgrHDQgrHCFaGRQFaGRktByQkuBylagoQlagoldg5Qldg6D3mQg");
	this.shape_32.setTransform(393.0141,-8.2022);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AA4OjQlagoldg5Qldg6D3mQQD3mPA/m/QA/nAF/gVQGAgVgrHDQgrHCFaGRQFaGRktByQjgBUj3AAQhXAAhagKg");
	this.shape_33.setTransform(393.0141,-8.2022);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("ArlF8QD3mTA/nEQA/nFF/gVQGAgWgrHIQgrHHFaGVQFaGWktBzQkuBzlagoQlagoldg6Qldg7D3mUg");
	this.shape_34.setTransform(393.0141,-10.9573);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AA4OtQlagoldg6Qldg7D3mUQD3mTA/nEQA/nFF/gVQGAgWgrHIQgrHHFaGVQFaGWktBzQjgBVj4AAQhXAAhZgKg");
	this.shape_35.setTransform(393.0141,-10.9573);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("ArlGAQD3mYA/nJQA/nJF/gWQGAgVgrHMQgrHMFaGaQFaGaktB1QkuB0lagpQlagpldg6Qldg8D3mYg");
	this.shape_36.setTransform(393.0141,-13.7239);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("AA4O3Qlagpldg6Qldg8D3mYQD3mYA/nJQA/nJF/gWQGAgVgrHMQgrHMFaGaQFaGaktB1QjgBWj4AAQhXAAhZgLg");
	this.shape_37.setTransform(393.0141,-13.7239);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("ArlGEQD3mcA/nOQA/nOF/gWQGAgWgrHSQgrHRFaGeQFaGektB2QkuB2lagqQlagpldg7Qldg8D3mdg");
	this.shape_38.setTransform(393.0141,-16.508);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AA4PBQlagpldg7Qldg8D3mdQD3mcA/nOQA/nOF/gWQGAgWgrHSQgrHRFaGeQFaGektB2QjfBXj4AAQhXAAhagLg");
	this.shape_39.setTransform(393.0141,-16.508);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("ArlGIQD3mgA/nTQA/nTF/gWQGAgWgrHWQgrHWFaGiQFaGjktB3QkuB3lagqQlagpldg8Qldg9D3mhg");
	this.shape_40.setTransform(393.0141,-19.2631);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AA4PLQlagpldg8Qldg9D3mhQD3mgA/nTQA/nTF/gWQGAgWgrHWQgrHWFaGiQFaGjktB3QjgBYj4AAQhWAAhagLg");
	this.shape_41.setTransform(393.0141,-19.2631);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("ArlGMQD3mlA/nXQA/nYF/gWQGAgXgrHcQgrHaFaGnQFaGnktB4QkuB4lagqQlagqldg9Qldg9D3mlg");
	this.shape_42.setTransform(393.0141,-22.0314);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AA4PVQlagqldg9Qldg9D3mlQD3mlA/nXQA/nYF/gWQGAgXgrHcQgrHaFaGnQFaGnktB4QjgBZj4AAQhWAAhagLg");
	this.shape_43.setTransform(393.0141,-22.0314);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("ArlGQQD3mpA/ncQA/ndF/gWQGAgXgrHgQgrHgFaGrQFaGrktB6QkuB5lagrQlagqldg9Qldg+D3mqg");
	this.shape_44.setTransform(393.0141,-24.823);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AA4PfQlagqldg9Qldg+D3mqQD3mpA/ncQA/ndF/gWQGAgXgrHgQgrHgFaGrQFaGrktB6QjgBZj3AAQhXAAhagLg");
	this.shape_45.setTransform(393.0141,-24.823);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("ArlGUQD3mtA/nhQA/niF/gXQGAgWgrHlQgrHkFaGvQFaGwktB7QkuB6lagrQlagrldg+Qldg+D3mug");
	this.shape_46.setTransform(393.0141,-27.5913);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AA4PpQlagrldg+Qldg+D3muQD3mtA/nhQA/niF/gXQGAgWgrHlQgrHkFaGvQFaGwktB7QjgBbj3AAQhXAAhagMg");
	this.shape_47.setTransform(393.0141,-27.5913);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("ArlGYQD3myA/nmQA/nmF/gXQGAgXgrHqQgrHpFaG0QFaG0ktB8QkuB7lagrQlagrldg/Qldg/D3myg");
	this.shape_48.setTransform(393.0141,-30.3485);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AA4PzQlagrldg/Qldg/D3myQD3myA/nmQA/nmF/gXQGAgXgrHqQgrHpFaG0QFaG0ktB8QjgBcj4AAQhXAAhZgMg");
	this.shape_49.setTransform(393.0141,-30.3485);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("ArlGcQD3m2A/nqQA/nsF/gXQGAgXgrHvQgrHuFaG4QFaG4ktB9QkuB9lagsQlagrldg/QldhAD3m3g");
	this.shape_50.setTransform(393.0141,-33.1305);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009900").s().p("AA4P9Qlagrldg/QldhAD3m3QD3m2A/nqQA/nsF/gXQGAgXgrHvQgrHuFaG4QFaG4ktB9QjgBdj3AAQhXAAhagMg");
	this.shape_51.setTransform(393.0141,-33.1305);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("ArlGhQD3m7A/nvQA/nwF/gYQGAgXgrHzQgrHzFaG9QFaG8ktB/QkuB+lagsQlagsldhAQldhAD3m7g");
	this.shape_52.setTransform(393.0141,-35.9084);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009900").s().p("AA4QIQlagsldhAQldhAD3m7QD3m7A/nvQA/nwF/gYQGAgXgrHzQgrHzFaG9QFaG8ktB/QjgBdj4AAQhXAAhZgLg");
	this.shape_53.setTransform(393.0141,-35.9084);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("ArlGlQD3m/A/n0QA/n1F/gYQGAgYgrH5QgrH4FaHAQFaHBktCAQkuB/lagsQlagtldhAQldhBD3m/g");
	this.shape_54.setTransform(393.0141,-38.6538);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009900").s().p("AA4QSQlagtldhAQldhBD3m/QD3m/A/n0QA/n1F/gYQGAgYgrH5QgrH4FaHAQFaHBktCAQjgBej4AAQhXAAhZgLg");
	this.shape_55.setTransform(393.0141,-38.6538);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("ArlGoQD3nCA/n6QA/n6F/gXQGAgYgrH9QgrH9FaHEQFaHGktCBQkuCBlaguQlagtldhBQldhBD3nEg");
	this.shape_56.setTransform(393.0141,-41.4358);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009900").s().p("AA4QbQlagtldhBQldhBD3nEQD3nCA/n6QA/n6F/gXQGAgYgrH9QgrH9FaHEQFaHGktCBQjfBfj4AAQhXAAhagMg");
	this.shape_57.setTransform(393.0141,-41.4358);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("ArlGtQD3nHA/n/QA/n+F/gYQGAgZgrIDQgrIBFaHJQFaHKktCCQkuCClagtQlaguldhBQldhCD3nIg");
	this.shape_58.setTransform(393.0141,-44.2159);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009900").s().p("AA4QmQlaguldhBQldhCD3nIQD3nHA/n/QA/n+F/gYQGAgZgrIDQgrIBFaHJQFaHKktCCQjgBgj4AAQhWAAhagLg");
	this.shape_59.setTransform(393.0141,-44.2159);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("ArlGxQD3nMA/oDQA/oDF/gZQGAgYgrIHQgrIGFaHOQFaHOktCEQkuCDlaguQlaguldhCQldhDD3nMg");
	this.shape_60.setTransform(393.0141,-46.9824);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#009900").s().p("AA4QwQlaguldhCQldhDD3nMQD3nMA/oDQA/oDF/gZQGAgYgrIHQgrIGFaHOQFaHOktCEQjgBhj3AAQhXAAhagMg");
	this.shape_61.setTransform(393.0141,-46.9824);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("ArlG1QD3nQA/oIQA/oJF/gYQGAgZgrIMQgrIMFaHRQFaHTktCFQkuCElaguQlagvldhDQldhDD3nQg");
	this.shape_62.setTransform(393.0141,-49.7375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#009900").s().p("AA4Q6QlagvldhDQldhDD3nQQD3nQA/oIQA/oJF/gYQGAgZgrIMQgrIMFaHRQFaHTktCFQjgBij4AAQhXAAhZgMg");
	this.shape_63.setTransform(393.0141,-49.7375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("ArlG5QD3nUA/oNQA/oNF/gZQGAgZgrIRQgrIQFaHWQFaHXktCGQkuCGlagvQlagvldhDQldhED3nVg");
	this.shape_64.setTransform(393.0141,-52.5195);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#009900").s().p("AA4REQlagvldhDQldhED3nVQD3nUA/oNQA/oNF/gZQGAgZgrIRQgrIQFaHWQFaHXktCGQjfBjj4AAQhXAAhagMg");
	this.shape_65.setTransform(393.0141,-52.5195);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("ArlG9QD3nZA/oRQA/oSF/gZQGAgZgrIVQgrIVFaHbQFaHbktCHQkuCHlagvQlagwldhEQldhED3nZg");
	this.shape_66.setTransform(393.0141,-55.2974);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#009900").s().p("AA4ROQlagwldhEQldhED3nZQD3nZA/oRQA/oSF/gZQGAgZgrIVQgrIVFaHbQFaHbktCHQjgBkj4AAQhXAAhZgMg");
	this.shape_67.setTransform(393.0141,-55.2974);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("ArlHBQD3ndA/oWQA/oXF/gZQGAgagrIbQgrIaFaHfQFaHfktCJQkuCIlagwQlagwldhEQldhGD3ndg");
	this.shape_68.setTransform(393.0141,-58.0678);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#009900").s().p("AA4RYQlagwldhEQldhGD3ndQD3ndA/oWQA/oXF/gZQGAgagrIbQgrIaFaHfQFaHfktCJQjgBkj4AAQhXAAhZgMg");
	this.shape_69.setTransform(393.0141,-58.0678);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("ArlHFQD3nhA/obQA/ocF/gZQGAgagrIfQgrIfFaHjQFaHkktCKQkuCJlagwQlagwldhGQldhFD3nig");
	this.shape_70.setTransform(393.0141,-60.8366);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#009900").s().p("AA4RiQlagwldhGQldhFD3niQD3nhA/obQA/ocF/gZQGAgagrIfQgrIfFaHjQFaHkktCKQjgBlj4AAQhWAAhagMg");
	this.shape_71.setTransform(393.0141,-60.8366);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AKTGfQFaHoktCLQkuCLlagxQlagwldhGQldhHD3nmQD3nlA/ogQA/ohF/gZQGAgagrIkQgrIkFaHng");
	this.shape_72.setTransform(393.0141,-63.6049);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#009900").s().p("AA4RsQlagwldhGQldhHD3nmQD3nlA/ogQA/ohF/gZQGAgagrIkQgrIkFaHnQFaHoktCLQjgBnj4AAQhWAAhagNg");
	this.shape_73.setTransform(393.0141,-63.6049);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("ArlG8QD3nYA/oQQA/oRF/gYQGAgagrIVQgrIUFaHZQFaHaktCHQkuCGlagvQlagvldhEQldhED3nYg");
	this.shape_74.setTransform(393.0141,-54.5247);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#009900").s().p("AA4RLQlagvldhEQldhED3nYQD3nYA/oQQA/oRF/gYQGAgagrIVQgrIUFaHZQFaHaktCHQjgBjj4AAQhXAAhZgMg");
	this.shape_75.setTransform(393.0141,-54.5247);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("ArlGvQD3nKA/oAQA/oBF/gYQGAgYgrIEQgrIEFaHLQFaHMktCDQkuCClaguQlagtldhCQldhDD3nJg");
	this.shape_76.setTransform(393.0141,-45.4657);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#009900").s().p("AA4QqQlagtldhCQldhDD3nJQD3nKA/oAQA/oBF/gYQGAgYgrIEQgrIEFaHLQFaHMktCDQjgBgj4AAQhWAAhagMg");
	this.shape_77.setTransform(393.0141,-45.4657);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("ArlGhQD3m7A/nwQA/nxF/gYQGAgXgrH0QgrH0FaG9QFaG+ktB+QkuB/lagsQlagtldhAQldhAD3m8g");
	this.shape_78.setTransform(393.0141,-36.41);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#009900").s().p("AA4QKQlagtldhAQldhAD3m8QD3m7A/nwQA/nxF/gYQGAgXgrH0QgrH0FaG9QFaG+ktB+QjgBej4AAQhXAAhZgLg");
	this.shape_79.setTransform(393.0141,-36.41);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("ArlGUQD3mtA/nhQA/nhF/gXQGAgXgrHlQgrHkFaGvQFaGvktB7QkuB6lagrQlagrldg9Qldg/D3mtg");
	this.shape_80.setTransform(393.0141,-27.3435);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#009900").s().p("AA4PoQlagrldg9Qldg/D3mtQD3mtA/nhQA/nhF/gXQGAgXgrHlQgrHkFaGvQFaGvktB7QjgBbj3AAQhXAAhagMg");
	this.shape_81.setTransform(393.0141,-27.3435);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("ArlGHQD3mfA/nRQA/nRF/gWQGAgWgrHUQgrHUFaGhQFaGhktB3QkuB2lagpQlagqldg8Qldg8D3mfg");
	this.shape_82.setTransform(393.0141,-18.2611);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009900").s().p("AA4PIQlagqldg8Qldg8D3mfQD3mfA/nRQA/nRF/gWQGAgWgrHUQgrHUFaGhQFaGhktB3QjgBXj4AAQhWAAhagKg");
	this.shape_83.setTransform(393.0141,-18.2611);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("ArlF6QD3mRA/nBQA/nCF/gVQGAgVgrHFQgrHEFaGSQFaGTktBzQkuBylagoQlagoldg6Qldg6D3mRg");
	this.shape_84.setTransform(393.0141,-9.2042);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#009900").s().p("AA4OnQlagoldg6Qldg6D3mRQD3mRA/nBQA/nCF/gVQGAgVgrHFQgrHEFaGSQFaGTktBzQjgBUj3AAQhXAAhagKg");
	this.shape_85.setTransform(393.0141,-9.2042);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("ArlFsQD3mCA/myQA/mxF/gVQGAgUgrG0QgrG0FaGFQFaGEktBvQkuBulagmQlagnldg4Qldg4D3mDg");
	this.shape_86.setTransform(393.0141,-0.1219);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#009900").s().p("AA4OGQlagnldg4Qldg4D3mDQD3mCA/myQA/mxF/gVQGAgUgrG0QgrG0FaGFQFaGEktBvQjgBSj4AAQhWAAhagKg");
	this.shape_87.setTransform(393.0141,-0.1219);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("ArlFfQD3l0A/miQA/miF/gTQGAgUgrGlQgrGkFaF2QFaF2ktBrQkuBqlaglQlaglldg2Qldg2D3l1g");
	this.shape_88.setTransform(393.0141,8.9446);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#009900").s().p("AA4NlQlaglldg2Qldg2D3l1QD3l0A/miQA/miF/gTQGAgUgrGlQgrGkFaF2QFaF2ktBrQjfBOj3AAQhYAAhagJg");
	this.shape_89.setTransform(393.0141,8.9446);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("ArlFRQD3lmA/mRQA/mTF/gTQGAgTgrGVQgrGVFaFnQFaFpktBmQkuBnlagkQlagkldg0Qldg0D3lng");
	this.shape_90.setTransform(393.0141,18.0003);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#009900").s().p("AA4NEQlagkldg0QldgzD3loQD3lmA/mRQA/mTF/gTQGAgTgrGWQgrGUFaFoQFaFoktBmQjgBMj3AAQhXAAhagJg");
	this.shape_91.setTransform(393.0141,18.0003);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("ArlFEQD3lYA/mCQA/mCF/gSQGAgSgrGFQgrGEFaFaQFaFaktBiQkuBilagiQlagildgyQldgyD3lZg");
	this.shape_92.setTransform(393.0141,27.0593);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#009900").s().p("AA4MjQlagildgyQldgyD3lZQD3lYA/mCQA/mCF/gSQGAgSgrGFQgrGEFaFaQFaFaktBiQjgBJj3AAQhXAAhagJg");
	this.shape_93.setTransform(393.0141,27.0593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_94.setTransform(207.0141,12.0395);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_95.setTransform(207.0141,12.0395);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("ArlE0QD3lHA/luQA/lvF/gRQGAgSgrFyQgrFxFaFIQFaFJktBdQkuBelaghQlaghldgvQldgvD3lIg");
	this.shape_96.setTransform(207.0141,11.0409);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#009900").s().p("AA4L7QlaghldgvQldgvD3lIQD3lHA/luQA/lvF/gRQGAgSgrFyQgrFxFaFIQFaFJktBdQjfBFj4AAQhXAAhagIg");
	this.shape_97.setTransform(207.0141,11.0409);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("ArlExQD3lDA/lrQA/lsF/gRQGAgRgrFuQgrFtFaFFQFaFGktBdQkuBclaggQlaghldguQldgwD3lEg");
	this.shape_98.setTransform(207.0141,10.048);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#009900").s().p("AA4L0QlaghldguQldgwD3lEQD3lDA/lrQA/lsF/gRQGAgRgrFuQgrFtFaFFQFaFGktBdQjgBEj5AAQhWAAhZgIg");
	this.shape_99.setTransform(207.0141,10.048);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("ArlEuQD3lBA/lnQA/loF/gRQGAgRgrFqQgrFqFaFCQFaFDktBbQkuBclaggQlaggldgvQldguD3lBg");
	this.shape_100.setTransform(207.0141,9.0514);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#009900").s().p("AA4LsQlaggldgvQldguD3lBQD3lBA/lnQA/loF/gRQGAgRgrFqQgrFqFaFCQFaFDktBbQjgBEj4AAQhXAAhZgIg");
	this.shape_101.setTransform(207.0141,9.0514);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("ArlErQD3k9A/lkQA/lkF/gRQGAgRgrFnQgrFmFaE/QFaE/ktBbQkuBblaggQlaggldguQldguD3k+g");
	this.shape_102.setTransform(207.0141,8.0317);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#009900").s().p("AA4LlQlaggldguQldguD3k+QD3k9A/lkQA/lkF/gRQGAgRgrFnQgrFmFaE/QFaE/ktBbQjfBDj3AAQhYAAhagIg");
	this.shape_103.setTransform(207.0141,8.0317);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("ArlEoQD3k6A/lgQA/lhF/gRQGAgQgrFjQgrFjFaE7QFaE8ktBaQkuBalaggQlagfldgtQldguD3k7g");
	this.shape_104.setTransform(207.0141,7.0234);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#009900").s().p("AA4LdQlagfldgtQldguD3k7QD3k6A/lgQA/lhF/gRQGAgQgrFjQgrFjFaE7QFaE8ktBaQjgBCj3AAQhXAAhagIg");
	this.shape_105.setTransform(207.0141,7.0234);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("ArlElQD3k3A/lcQA/leF/gQQGAgRgrFgQgrFfFaE5QFaE5ktBZQkuBYlagfQlagfldgtQldgtD3k4g");
	this.shape_106.setTransform(207.0141,6.0401);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#009900").s().p("AA4LWQlagfldgtQldgtD3k4QD3k3A/lcQA/leF/gQQGAgRgrFgQgrFfFaE5QFaE5ktBZQjgBBj4AAQhWAAhagIg");
	this.shape_107.setTransform(207.0141,6.0401);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("ArlEiQD3kzA/laQA/lZF/gRQGAgQgrFcQgrFcFaE1QFaE2ktBYQkuBYlagfQlagfldgsQldgtD3k1g");
	this.shape_108.setTransform(207.0141,5.0414);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#009900").s().p("AA4LPQlagfldgsQldgtD3k1QD3kzA/laQA/lZF/gRQGAgQgrFcQgrFcFaE1QFaE2ktBYQjfBBj4AAQhXAAhagIg");
	this.shape_109.setTransform(207.0141,5.0414);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("ArlEfQD3kwA/lWQA/lWF/gQQGAgRgrFZQgrFYFaEyQFaEzktBXQkuBXlagfQlageldgsQldgsD3kyg");
	this.shape_110.setTransform(207.0141,4.0348);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#009900").s().p("AA4LHQlageldgsQldgsD3kyQD3kwA/lWQA/lWF/gQQGAgRgrFZQgrFYFaEyQFaEzktBXQjfBAj4AAQhXAAhagIg");
	this.shape_111.setTransform(207.0141,4.0348);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("ArlEcQD3ktA/lSQA/lTF/gQQGAgQgrFVQgrFVFaEuQFaEwktBWQkuBWlageQlageldgsQldgrD3kvg");
	this.shape_112.setTransform(207.0141,3.0383);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#009900").s().p("AA4LAQlageldgsQldgrD3kvQD3ktA/lSQA/lTF/gQQGAgQgrFVQgrFVFaEuQFaEwktBWQjfBAj3AAQhYAAhagIg");
	this.shape_113.setTransform(207.0141,3.0383);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("ArlEZQD3kqA/lPQA/lPF/gQQGAgQgrFRQgrFSFaErQFaEtktBVQkuBVlageQlageldgrQldgrD3krg");
	this.shape_114.setTransform(207.0141,2.055);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#009900").s().p("AA4K4QlageldgrQldgrD3krQD3kqA/lPQA/lPF/gQQGAgQgrFRQgrFSFaErQFaEtktBVQjfA/j4AAQhXAAhagIg");
	this.shape_115.setTransform(207.0141,2.055);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("ArlEWQD3knA/lLQA/lMF/gPQGAgQgrFOQgrFNFaEpQFaEpktBUQkuBVlageQlageldgqQldgrD3kog");
	this.shape_116.setTransform(207.0141,1.0564);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#009900").s().p("AA4KxQlageldgqQldgrD3koQD3knA/lLQA/lMF/gPQGAgQgrFOQgrFNFaEpQFaEpktBUQjfA/j3AAQhXAAhbgIg");
	this.shape_117.setTransform(207.0141,1.0564);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("ArlEUQD3klA/lHQA/lIF/gQQGAgPgrFKQgrFKFaElQFaEmktBUQkuBTlagdQlagdldgqQldgrD3kkg");
	this.shape_118.setTransform(207.0141,0.0253);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#009900").s().p("AA4KqQlagdldgqQldgrD3kkQD3klA/lHQA/lIF/gQQGAgPgrFKQgrFKFaElQFaEmktBUQjfA9j3AAQhYAAhagHg");
	this.shape_119.setTransform(207.0141,0.0253);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("ArlERQD3khA/lEQA/lFF/gPQGAgQgrFHQgrFGFaEjQFaEjktBSQkuBTlagdQlagdldgqQldgqD3khg");
	this.shape_120.setTransform(207.0141,-0.9579);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#009900").s().p("AA4KjQlagdldgqQldgqD3khQD3khA/lEQA/lFF/gPQGAgQgrFHQgrFGFaEjQFaEjktBSQjgA9j3AAQhXAAhagHg");
	this.shape_121.setTransform(207.0141,-0.9579);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("ArlEOQD3keA/lBQA/lBF/gPQGAgPgrFDQgrFDFaEfQFaEgktBRQkuBSlagdQlagcldgqQldgpD3keg");
	this.shape_122.setTransform(207.0141,-1.9545);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#009900").s().p("AA4KbQlagcldgqQldgpD3keQD3keA/lBQA/lBF/gPQGAgPgrFDQgrFDFaEfQFaEgktBRQjfA9j3AAQhYAAhagIg");
	this.shape_123.setTransform(207.0141,-1.9545);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("ArlELQD3kbA/k9QA/k+F/gOQGAgPgrE/QgrE/FaEcQFaEdktBRQkuBQlagcQlagcldgpQldgpD3kbg");
	this.shape_124.setTransform(207.0141,-2.961);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#009900").s().p("AA4KUQlagcldgpQldgpD3kbQD3kbA/k9QA/k+F/gOQGAgPgrE/QgrE/FaEcQFaEdktBRQjfA7j3AAQhYAAhagHg");
	this.shape_125.setTransform(207.0141,-2.961);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("ArlEIQD3kYA/k5QA/k6F/gPQGAgPgrE8QgrE8FaEYQFaEaktBQQkuBQlagdQlagbldgpQldgoD3kYg");
	this.shape_126.setTransform(207.0141,-3.9597);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#009900").s().p("AA4KMQlagbldgpQldgoD3kYQD3kYA/k5QA/k6F/gPQGAgPgrE8QgrE8FaEYQFaEaktBQQjfA7j2AAQhYAAhbgIg");
	this.shape_127.setTransform(207.0141,-3.9597);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("ArlEEQD3kUA/k2QA/k2F/gPQGAgPgrE5QgrE4FaEVQFaEXktBPQkuBPlagcQlagcldgoQldgoD3kVg");
	this.shape_128.setTransform(207.0141,-4.943);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#009900").s().p("AA4KFQlagcldgoQldgoD3kVQD3kUA/k2QA/k2F/gPQGAgPgrE5QgrE4FaEVQFaEXktBPQjfA6j3AAQhYAAhagHg");
	this.shape_129.setTransform(207.0141,-4.943);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("ArlECQD3kRA/kzQA/kzF/gOQGAgPgrE1QgrE1FaESQFaETktBOQkuBOlagbQlagcldgnQldgoD3kRg");
	this.shape_130.setTransform(207.0141,-5.9513);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#009900").s().p("AA4J+QlagcldgnQldgoD3kRQD3kRA/kzQA/kzF/gOQGAgPgrE1QgrE1FaESQFaETktBOQjfA6j4AAQhXAAhagHg");
	this.shape_131.setTransform(207.0141,-5.9513);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("ArlD/QD3kOA/kvQA/kvF/gPQGAgOgrExQgrExFaEPQFaEQktBOQkuBNlagcQlagbldgmQldgoD3kOg");
	this.shape_132.setTransform(207.0141,-6.971);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#009900").s().p("AA4J2QlagbldgmQldgoD3kOQD3kOA/kvQA/kvF/gPQGAgOgrExQgrExFaEPQFaEQktBOQjfA4j2AAQhYAAhbgHg");
	this.shape_133.setTransform(207.0141,-6.971);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("ArlD8QD3kLA/krQA/ksF/gOQGAgOgrEtQgrEuFaEMQFaEMktBNQkuBMlagbQlagbldgmQldgnD3kLg");
	this.shape_134.setTransform(207.0141,-7.9675);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#009900").s().p("AA4JvQlagbldgmQldgnD3kLQD3kLA/krQA/ksF/gOQGAgOgrEtQgrEuFaEMQFaEMktBNQjeA4j2AAQhZAAhbgHg");
	this.shape_135.setTransform(207.0141,-7.9675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("ArlD5QD3kIA/knQA/kpF/gOQGAgOgrEqQgrEqFaEJQFaEKktBLQkuBLlagaQlagbldgmQldgmD3kIg");
	this.shape_136.setTransform(207.0141,-8.9605);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#009900").s().p("AA4JoQlagbldgmQldgmD3kIQD3kIA/knQA/kpF/gOQGAgOgrEqQgrEqFaEJQFaEKktBLQjfA4j3AAQhYAAhagHg");
	this.shape_137.setTransform(207.0141,-8.9605);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AKTDfQFaEHktBKQkuBLlagbQlagaldglQldgmD3kFQD3kFA/kkQA/klF/gNQGAgOgrEmQgrEnFaEFg");
	this.shape_138.setTransform(207.0141,-9.9591);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#009900").s().p("AA4JgQlagaldglQldgmD3kFQD3kFA/kkQA/klF/gNQGAgOgrEmQgrEnFaEFQFaEHktBKQjfA3j3AAQhXAAhbgHg");
	this.shape_139.setTransform(207.0141,-9.9591);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("ArmD8QAhgjAdgkQDCjmA3j/QARhMAkg6QBqioEagNQBPgEA/AKQDsAmgfDoQgKBKANBJQAmDYEBDHQBdBIAwA6QB8CajRA4QhjAdhvAQQjRAcjkgRQhMgGhOgHQkPgWkQgdQgvgFglgJQhlgZgTg4QgZhLB4iBg");
	this.shape_140.setTransform(206.8727,-8.211);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#009900").s().p("ABAJnIiagNQkPgWkQgdQgvgFglgJQhlgZgTg4QgZhLB4iBQAhgjAdgkQDCjmA3j/QARhMAkg6QBqioEagNQBPgEA/AKQDsAmgfDoQgKBKANBJQAmDYEBDHQBdBIAwA6QB8CajRA4QhjAdhvAQQiCARiJAAQhUAAhWgGg");
	this.shape_141.setTransform(206.8727,-8.211);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("ArmEBQAfgjAegkQDCjnA4kAQARhMAjg7QBoitEYgQQBPgEBAAJQDuAkgcDmQgIBKAMBKQAjDbD9DJQBcBJAyA7QB9CajHA6QheAhhxARQjSAdjkgQQhNgFhOgHQkQgWkSgeQgvgFglgJQhlgZgVg3QgchLB3iCg");
	this.shape_142.setTransform(206.7315,-6.4937);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009900").s().p("ABJJtIibgMQkQgWkSgeQgvgFglgJQhlgZgVg3QgchLB3iCIABgBQAfgjAegkQDCjnA4kAQARhMAjg7QBoitEYgQQBPgEBAAJQDuAkgcDmQgIBKAMBKQAjDbD9DJQBcBJAyA7QB9CajHA6QheAhhxARQiIATiQAAQhOAAhQgGg");
	this.shape_143.setTransform(206.7315,-6.4937);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AroEIQAggkAegkQDBjpA6kBQARhMAig8QBliyEXgSQBOgFBBAIQDwAigYDlQgIBKALBLQAhDdD6DMQBbBJAzA9QB/CZi+A8QhYAlh0ASQjSAgjmgQQhOgFhNgHQkRgWkTgfQgvgFgmgJQhlgYgWg3QgfhKB2iEg");
	this.shape_144.setTransform(206.6126,-4.7525);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#009900").s().p("ABQJ0QhOgFhNgHQkRgWkTgfQgvgFgmgJQhlgYgWg3QgfhKB2iEIAAAAIA+hIQDBjpA6kBQARhMAig8QBliyEXgSQBOgFBBAIQDwAigYDlQgIBKALBLQAhDdD6DMQBbBJAzA9QB/CZi+A8QhYAlh0ASQiMAViWAAQhKAAhMgFg");
	this.shape_145.setTransform(206.6126,-4.7525);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("ArpEOQAfgkAfglQDBjqA7kCQARhMAig9QBii3EVgVQBOgGBCAIQDyAggVDkQgGBJAKBMQAdDhD4DNQBZBKA1A9QCBCai1A+QhTAph2AUQjTAhjmgPQhOgFhOgHQkTgXkUgfQgvgFgmgJQhmgXgXg3QghhKB0iFg");
	this.shape_146.setTransform(206.4893,-3.0192);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009900").s().p("ABZJ7QhOgFhOgHQkTgXkUgfQgvgFgmgJQhmgXgXg3QghhKB0iFIAAAAIA+hJQDBjqA7kCQARhMAig9QBii3EVgVQBOgGBCAIQDyAggVDkQgGBJAKBMQAdDhD4DNQBZBKA1A9QCBCai1A+QhTAph2AUQiRAWiaAAQhGAAhIgEg");
	this.shape_147.setTransform(206.4893,-3.0192);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("ArqEUQAfgkAegmQDCjrA8kDQARhNAhg9QBfi8EUgXQBNgIBDAIQD0AdgRDjQgFBJAJBNQAaDkD1DPQBYBLA2A+QCCCaiqBAQhOAsh4AWQjUAjjngPQhPgEhOgHQkUgYkVgfQgvgFgngIQhmgYgYg2QgkhKBziGg");
	this.shape_148.setTransform(206.3578,-1.2941);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#009900").s().p("ABhKBQhPgEhOgHQkUgYkVgfQgvgFgngIQhmgYgYg2QgkhKBziGIAAAAIA9hKQDCjrA8kDQARhNAhg9QBfi8EUgXQBNgIBDAIQD0AdgRDjQgFBJAJBNQAaDkD1DPQBYBLA2A+QCCCaiqBAQhOAsh4AWQiWAZifAAQhCAAhEgFg");
	this.shape_149.setTransform(206.3578,-1.2941);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(5,1,1).p("ArrEaQAegkAfgmQDCjtA9kEQARhMAgg/QBdjAESgbQBNgIBEAHQD2AcgODhQgEBJAIBOQAYDmDxDSQBXBLA4BAQCECZihBCQhJAwh6AXQjUAljpgOQhPgEhOgHQkVgYkWgfQgwgFgngJQhmgXgag1QgnhKByiIg");
	this.shape_150.setTransform(206.2434,0.4189);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#009900").s().p("ABpKIQhPgEhOgHQkVgYkWgfQgwgFgngJQhmgXgag1QgnhKByiIIAAAAIA9hKQDCjtA9kEQARhMAgg/QBdjAESgbQBNgIBEAHQD2AcgODhQgEBJAIBOQAYDmDxDSQBXBLA4BAQCECZihBCQhJAwh6AXQibAbimAAQg9AAg/gEg");
	this.shape_151.setTransform(206.2434,0.4189);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(5,1,1).p("ArsEgQAeglAfgmQDBjuA+kFQAShNAfg/QBbjGEPgcQBNgJBGAGQD4AZgLDhQgDBJAHBOQAUDpDvDUQBWBMA5BBQCFCZiXBEQhDA0h9AYQjVAnjpgNQhPgEhPgHQkWgYkXggQgwgGgogIQhngWgag1QgphKBwiJg");
	this.shape_152.setTransform(206.1399,2.1669);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#009900").s().p("ABxKPQhPgEhPgHQkWgYkXggQgwgGgogIQhngWgag1QgphKBwiJIAAAAIA9hLQDBjuA+kFQAShNAfg/QBbjGEPgcQBNgJBGAGQD4AZgLDhQgDBJAHBOQAUDpDvDUQBWBMA5BBQCFCZiXBEQhDA0h9AYQihAdisAAQg4AAg5gDg");
	this.shape_153.setTransform(206.1399,2.1669);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(5,1,1).p("ArtEmQAdglAfgmQDCjvA/kHQAShNAehAQBYjKENggQBNgJBHAGQD6AXgHDfQgCBIAGBQQARDrDsDXQBVBMA7BCQCGCaiNBFQg/A4h+AaQjWAojqgMQhQgEhPgHQkXgYkZghQgvgFgogIQhogWgcg1QgrhKBuiJg");
	this.shape_154.setTransform(206.0379,3.896);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#009900").s().p("AB5KWQhQgEhPgHQkXgYkZghQgvgFgogIQhogWgcg1QgrhKBuiJIABgBIA8hLQDCjvA/kHQAShNAehAQBYjKENggQBNgJBHAGQD6AXgHDfQgCBIAGBQQARDrDsDXQBVBMA7BCQCGCaiNBFQg/A4h+AaQilAfixAAQg1AAg1gDg");
	this.shape_155.setTransform(206.0379,3.896);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(5,1,1).p("ArvEsQAdglAggnQDBjwBAkIQAThNAchBQBXjPELgiQBMgLBIAFQD8AVgEDeQAABJAFBRQAODtDpDZQBTBNA9BDQCICZiEBIQg5A8iBAbQjWAqjrgLQhQgEhQgIQkYgYkaghQgvgFgpgIQhogWgdg0QguhKBtiKg");
	this.shape_156.setTransform(205.9432,5.6085);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#009900").s().p("ACBKdQhQgEhQgIQkYgYkaghQgvgFgpgIQhogWgdg0QguhKBtiKIAAgBIA9hMQDBjwBAkIQAThNAchBQBXjPELgiQBMgLBIAFQD8AVgEDeQAABJAFBRQAODtDpDZQBTBNA9BDQCICZiEBIQg5A8iBAbQiqAhi3AAQgwAAgwgCg");
	this.shape_157.setTransform(205.9432,5.6085);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(5,1,1).p("ArwEyQAdglAfgoQDCjxBBkJQAShNAchCQBUjUEJgkQBNgMBJAFQD+ATgBDcQABBJAEBRQALDxDmDbQBSBOA/BDQCJCah6BJQg0BAiDAdQjXArjsgKQhQgEhRgHQkZgZkbghQgvgGgqgIQhogVgfgzQgwhKBriMg");
	this.shape_158.setTransform(205.8444,7.3388);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#009900").s().p("ACJKkQhQgEhRgHQkZgZkbghQgvgGgqgIQhogVgfgzQgwhKBriMIABgBIA8hNQDCjxBBkJQAShNAchCQBUjUEJgkQBNgMBJAFQD+ATgBDcQABBJAEBRQALDxDmDbQBSBOA/BDQCJCah6BJQg0BAiDAdQiuAji6AAQguAAgtgCg");
	this.shape_159.setTransform(205.8444,7.3388);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(5,1,1).p("AryE4QAcglAggpQDCjyBCkKQAThNAbhDQBRjZEHgnQBMgMBKAEQEBAQACDcQACBIADBTQAJDyDjDeQBQBOBABFQCLCahwBLQgvBDiFAfQjYAtjtgKQhQgDhRgIQkagZkcghQgwgGgqgIQhogUgggzQg0hKBriNg");
	this.shape_160.setTransform(205.7768,9.0651);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#009900").s().p("ACQKqQhQgDhRgIQkagZkcghQgwgGgqgIQhogUgggzQg0hKBriNIAAgBIA8hOQDCjyBCkKQAThNAbhDQBRjZEHgnQBMgMBKAEQEBAQACDcIAFCbQAJDyDjDeQBQBOBABFQCLCahwBLQgvBDiFAfQixAli/AAQgqAAgrgCg");
	this.shape_161.setTransform(205.7768,9.0651);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(5,1,1).p("Ar0E/QAcgmAggpQDCjzBDkMQAThNAahEQBPjdEFgqQBMgNBLADQEDAPAGDaQACBIACBUQAGD1DgDgQBPBPBCBGQCNCZhnBNQgqBHiHAgQjZAwjugKQhQgDhRgIQkcgZkdgiQgwgFgqgIQhpgUghgzQg2hKBpiNg");
	this.shape_162.setTransform(205.7115,10.792);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#009900").s().p("ACXKxQhQgDhRgIQkcgZkdgiQgwgFgqgIQhpgUghgzQg2hKBpiNIAAgBIA8hPQDCjzBDkMQAThNAahEQBPjdEFgqQBMgNBLADQEDAPAGDaIAECcQAGD1DgDgQBPBPBCBGQCNCZhnBNQgqBHiHAgQi1AojDAAQgnAAgogCg");
	this.shape_163.setTransform(205.7115,10.792);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(5,1,1).p("Ar1FFQAbgmAhgpQDCj2BEkMQAThNAZhFQBMjiEEgtQBLgOBNADQEEANAJDYQAEBJABBUQADD4DdDjQBOBPBEBHQCNCZhdBQQgkBLiJAhQjaAxjvgJQhRgDhRgHQkdgakegiQgwgGgrgHQhpgVgjgxQg4hKBniPg");
	this.shape_164.setTransform(205.6375,12.4864);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#009900").s().p("ACfK4QhRgDhRgHQkdgakegiQgwgGgrgHQhpgVgjgxQg4hKBniPIABgBQAbgmAhgpQDCj2BEkMQAThNAZhFQBMjiEEgtQBLgOBNADQEEANAJDYQAEBJABBUQADD4DdDjQBOBPBEBHQCNCZhdBQQgkBLiJAhQi6ApjJAAIhGgBg");
	this.shape_165.setTransform(205.6375,12.4864);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(5,1,1).p("Ar3FLQAbgnAhgpQDCj3BFkNQAThNAYhGQBKjnECgvQBLgPBOACQEGALANDXQAFBIAABWQAAD6DaDlQBMBQBGBIQCPCZhUBRQgfBPiLAjQjbAzjvgIQhSgDhTgIQkcgZkggjQgvgGgsgHQhpgUglgxQg7hKBmiQg");
	this.shape_166.setTransform(205.5981,14.2114);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#009900").s().p("ACnK/QhSgDhTgIQkcgZkggjQgvgGgsgHQhpgUglgxQg7hKBmiQIABgBQAbgnAhgpQDCj3BFkNQAThNAYhGQBKjnECgvQBLgPBOACQEGALANDXQAFBIAABWQAAD6DaDlICSCYQCPCZhUBRQgfBPiLAjQi9AsjNAAIhAgBg");
	this.shape_167.setTransform(205.5981,14.2114);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(5,1,1).p("Ar5FRQAagnAigqQDBj4BGkOQAUhNAXhHQBIjrD/gzQBLgPBPACQEIAIAQDWQAGBIgBBXQgCD8DXDoQBLBQBHBKQCRCZhLBTQgaBSiNAkQjbA1jxgHQhRgDhTgIQkegZkhgjQgwgGgrgIQhqgTgmgwQg+hKBliSg");
	this.shape_168.setTransform(205.5852,15.9351);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#009900").s().p("ACtLGQhRgDhTgIQkegZkhgjQgwgGgrgIQhqgTgmgwQg+hKBliSIABgBQAagnAigqQDBj4BGkOQAUhNAXhHQBIjrD/gzQBLgPBPACQEIAIAQDWQAGBIgBBXQgCD8DXDoICSCaQCRCZhLBTQgaBSiNAkQjAAvjQAAIg8gBg");
	this.shape_169.setTransform(205.5852,15.9351);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(5,1,1).p("Ar8FXQAbgnAhgrQDCj5BHkPQAUhOAWhHQBFjwD+g1QBKgRBQACQELAGATDUQAHBIgCBYQgFD/DUDqQBKBRBIBKQCSCahABVQgVBWiPAmQjcA2jygHQhRgChUgIQkfgakigjQgwgGgsgIQhqgTgngvQhBhKBkiTg");
	this.shape_170.setTransform(205.5698,17.6586);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#009900").s().p("AC0LMQhRgChUgIQkfgakigjQgwgGgsgIQhqgTgngvQhBhKBkiTIAAgBQAbgnAhgrQDCj5BHkPQAUhOAWhHQBFjwD+g1QBKgRBQACQELAGATDUQAHBIgCBYQgFD/DUDqQBKBRBIBKQCSCahABVQgVBWiPAmQjDAwjUAAIg3gBg");
	this.shape_171.setTransform(205.5698,17.6586);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(5,1,1).p("Ar+FdQAagnAigrQDBj6BIkRQAVhNAVhJQBDj1D7g3QBLgSBRABQEMAEAXDTQAIBIgDBZQgIECDRDsQBIBSBLBLQCTCZg3BXQgPBaiSAnQjcA4jzgGQhSgChUgIQkggakjgkQgwgGgtgHQhqgTgpgvQhDhKBiiTg");
	this.shape_172.setTransform(205.5866,19.3533);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009900").s().p("AC7LTQhSgChUgIQkggakjgkQgwgGgtgHQhqgTgpgvQhDhKBiiTIABgCQAagnAigrQDBj6BIkRQAVhNAVhJQBDj1D7g3QBLgSBRABQEMAEAXDTQAIBIgDBZQgIECDRDsQBIBSBLBLQCTCZg3BXQgPBaiSAnQjHAzjZAAIgvgBg");
	this.shape_173.setTransform(205.5866,19.3533);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(5,1,1).p("AsBFkQAagoAigrQDBj8BJkSQAVhNAUhKQBBj5D5g7QBLgSBRAAQEPACAaDSQAKBIgEBaQgMEEDODvQBIBSBMBMQCVCZguBZQgKBeiUApQjdA6jzgGQhTgChUgIQkigakkgkQgwgGgtgIQhrgSgqguQhFhKBgiVg");
	this.shape_174.setTransform(205.6273,21.0738);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#009900").s().p("ADCLaQhTgChUgIQkigakkgkQgwgGgtgIQhrgSgqguQhFhKBgiVIABgBQAagoAigrQDBj8BJkSIApiXQBBj5D5g7QBLgSBRAAQEPACAaDSQAKBIgEBaQgMEEDODvQBIBSBMBMQCVCZguBZQgKBeiUApQjKA1jcAAIgqgBg");
	this.shape_175.setTransform(205.6273,21.0738);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(5,1,1).p("AsEFqQAZgoAigsQDCj9BKkTQAVhOAThKQA+j/D3g8QBLgTBTgBQEQAAAeDRQAKBHgFBbQgOEHDLDxQBGBTBOBNQCWCZgjBbQgFBiiWAqQjeA8j1gFQhSgChVgIQkigbkmgkQgwgHgugHQhrgRgrguQhIhKBfiWg");
	this.shape_176.setTransform(205.7117,22.8156);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#009900").s().p("ADHLhQhSgChVgIQkigbkmgkIhegOQhrgRgrguQhIhKBfiWIABgBQAZgoAigsQDCj9BKkTIAoiYQA+j/D3g8QBLgTBTgBQEQAAAeDRQAKBHgFBbQgOEHDLDxQBGBTBOBNQCWCZgjBbQgFBiiWAqQjPA4jiAAIgigBg");
	this.shape_177.setTransform(205.7117,22.8156);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(5,1,1).p("AsIFwQAZgoAjgtQDBj9BLkVQAWhNAShMQA8kDD1hAQBKgTBUgCQETgCAhDQQALBHgGBcQgREJDID0QBFBTBPBPQCYCYgaBdQAABmiYArQjeA+j2gEQhTgChVgIQkjgbknglQgwgGgugHQhsgRgsguQhLhKBeiWg");
	this.shape_178.setTransform(205.813,24.5085);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#009900").s().p("ADNLoQhTgChVgIQkjgbknglIhegNQhsgRgsguQhLhKBeiWIAAgCQAZgoAjgtQDBj9BLkVQAWhNAShMQA8kDD1hAQBKgTBUgCQETgCAhDQQALBHgGBcQgREJDID0QBFBTBPBPQCYCYgaBdQAABmiYArQjSA7jnAAIgbgBg");
	this.shape_179.setTransform(205.813,24.5085);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(5,1,1).p("AsLF2QAZgoAigtQDCj/BMkVQAVhOAShNQA5kIDzhCQBLgVBUgBQEVgFAkDPQANBHgHBcQgUENDFD2QBEBUBRBPQCZCZgQBfQAFBpiaAtQjfA/j3gDQhTgBhWgIQkkgckoglQgwgHgvgGQhsgRgugtQhNhKBciYg");
	this.shape_180.setTransform(205.9466,26.227);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#009900").s().p("ADTLvQhTgBhWgIQkkgckoglIhfgNQhsgRgugtQhNhKBciYIABgCQAZgoAigtQDCj/BMkVQAVhOAShNQA5kIDzhCQBLgVBUgBQEVgFAkDPQANBHgHBcQgUENDFD2QBEBUBRBPQCZCZgQBfQAFBpiaAtQjVA8jrAAIgWAAg");
	this.shape_181.setTransform(205.9466,26.227);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(5,1,1).p("AsPF9QAYgpAjguQDBkABOkWQAVhOARhNQA2kNDyhFQBKgWBWgCQEXgGAnDNQAOBHgIBdQgXEPDCD4QBDBVBSBQQCbCZgHBhQALBtidAvQjgBBj3gDQhTgBhXgIQklgckpgmQgwgGgwgHQhsgQgvgtQhQhJBbiag");
	this.shape_182.setTransform(206.1491,27.9446);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#009900").s().p("ADYL2QhTgBhXgIQklgckpgmIhggNQhsgQgvgtQhQhJBbiaIABgBQAYgpAjguQDBkABOkWQAVhOARhNQA2kNDyhFQBKgWBWgCQEXgGAnDNQAOBHgIBdQgXEPDCD4QBDBVBSBQQCbCZgHBhQALBtidAvQjYA+jtAAIgSAAg");
	this.shape_183.setTransform(206.1491,27.9446);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(5,1,1).p("AsVGDQAYgpAjguQDCkCBOkXQAWhPAQhOQA0kRDvhIQBKgWBXgDQEZgJArDMQAPBHgJBfQgaERC/D7QBBBVBUBRQCdCZADBjQAPBxieAwQjhBDj4gCQhUgBhXgJQkmgckqgmQgwgGgwgHQhtgQgwgsQhThJBaibg");
	this.shape_184.setTransform(206.4405,29.6589);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#009900").s().p("ADcL9QhUgBhXgJQkmgckqgmIhggNQhtgQgwgsQhThJBaibIAAgBQAYgpAjguQDCkCBOkXQAWhPAQhOQA0kRDvhIQBKgWBXgDQEZgJArDMQAPBHgJBfQgaERC/D7QBBBVBUBRQCdCZADBjQAPBxieAwQjaBBjxAAIgOAAg");
	this.shape_185.setTransform(206.4405,29.6589);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(5,1,1).p("AsaGJQAXgpAkguQDBkDBQkZQAWhOAOhPQAykWDuhLQBJgXBYgDQEbgLAvDLQAQBGgKBgQgdEUC8D9QBABWBWBSQCdCZANBkQAVB1ihAyQjhBEj5gBQhUgBhXgIQkogckrgnQgxgGgwgHQhtgPgygsQhVhJBYicg");
	this.shape_186.setTransform(206.733,31.3498);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#009900").s().p("ADgMEQhUgBhXgIQkogckrgnIhhgNQhtgPgygsQhVhJBYicIABgCQAXgpAkguQDBkDBQkZQAWhOAOhPQAykXDuhKQBJgXBYgDQEbgLAvDKQAQBHgKBgQgdETC8D+QBABWBWBSQCdCZANBkQAVB1ihAyQjeBDj1AAIgHAAg");
	this.shape_187.setTransform(206.733,31.3498);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQhtgPgzgrQhYhLBYidQAXgqAjgvQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_188.setTransform(207.0141,33.0395);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#009900").s().p("AA4MCQlaghldgvQhtgPgzgrQhYhLBYidQAXgqAjgvQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_189.setTransform(207.0141,33.0395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94}]}).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).wait(1));

	// Layer_1
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQFaFMktBeQkuBelaghQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_190.setTransform(0.0141,23.7395);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMQFaFMktBeQjgBGj3AAQhXAAhagJg");
	this.shape_191.setTransform(0.0141,23.7395);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(5,1,1).p("ArlFMQD3lgA/mLQA/mKF/gTQGAgTgrGOQgrGNFaFhQFaFiktBlQkuBklagjQlagjldgzQldgzD3lgg");
	this.shape_192.setTransform(0.0141,13.3626);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#009900").s().p("AA4M1QlagjldgzQldgzD3lgQD3lgA/mLQA/mKF/gTQGAgTgrGOQgrGNFaFhQFaFiktBlQjgBKj4AAQhWAAhagJg");
	this.shape_193.setTransform(0.0141,13.3626);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(5,1,1).p("ArlFgQD3l2A/miQA/mkF/gTQGAgUgrGmQgrGlFaF4QFaF3ktBrQkuBrlagmQlaglldg2Qldg2D3l2g");
	this.shape_194.setTransform(0.0141,3.018);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#009900").s().p("AA4NnQlaglldg2Qldg2D3l2QD3l2A/miQA/mkF/gTQGAgUgrGmQgrGlFaF4QFaF3ktBrQjgBPj3AAQhXAAhagKg");
	this.shape_195.setTransform(0.0141,3.018);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(5,1,1).p("ArlF1QD3mMA/m7QA/m7F/gVQGAgVgrG+QgrG+FaGOQFaGNktBxQkuBxlagoQlagnldg5Qldg6D3mLg");
	this.shape_196.setTransform(0.0141,-7.3589);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#009900").s().p("AA4OaQlagnldg5Qldg6D3mLQD3mMA/m7QA/m7F/gVQGAgVgrG+QgrG+FaGOQFaGNktBxQjgBTj3AAQhXAAhagKg");
	this.shape_197.setTransform(0.0141,-7.3589);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(5,1,1).p("ArlGJQD3mhA/nTQA/nUF/gWQGAgWgrHXQgrHWFaGjQFaGjktB3QkuB3lagqQlagpldg8Qldg9D3mhg");
	this.shape_198.setTransform(0.0141,-17.7263);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#009900").s().p("AA4PMQlagpldg8Qldg9D3mhQD3mhA/nTQA/nUF/gWQGAgWgrHXQgrHWFaGjQFaGjktB3QjfBYj4AAQhXAAhagLg");
	this.shape_199.setTransform(0.0141,-17.7263);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(5,1,1).p("ArlGeQD3m3A/nsQA/nsF/gXQGAgXgrHvQgrHvFaG5QFaG5ktB9QkuB9lagsQlagrldhAQldg/D3m3g");
	this.shape_200.setTransform(0.0141,-28.1032);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#009900").s().p("AA4P/QlagrldhAQldg/D3m3QD3m3A/nsQA/nsF/gXQGAgXgrHvQgrHvFaG5QFaG5ktB9QjgBcj3AAQhXAAhagLg");
	this.shape_201.setTransform(0.0141,-28.1032);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(5,1,1).p("ArlGxQD3nMA/oEQA/oFF/gYQGAgYgrIIQgrIHFaHPQFaHPktCDQkuCElagvQlaguldhCQldhDD3nNg");
	this.shape_202.setTransform(0.0141,-38.4477);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#009900").s().p("AA4QxQlaguldhCQldhDD3nNQD3nMA/oEQA/oFF/gYQGAgYgrIIQgrIHFaHPQFaHPktCDQjfBij3AAQhYAAhagNg");
	this.shape_203.setTransform(0.0141,-38.4477);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(5,1,1).p("AKTGdQFaHkktCKQkuCKlagxQlagwldhFQldhGD3njQD3niA/ocQA/odF/gaQGAgZgrIgQgrIgFaHlg");
	this.shape_204.setTransform(0.0141,-48.8247);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#009900").s().p("AA4RkQlagwldhFQldhGD3njQD3niA/ocQA/odF/gaQGAgZgrIgQgrIgFaHlQFaHkktCKQjfBmj4AAQhXAAhagNg");
	this.shape_205.setTransform(0.0141,-48.8247);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(5,1,1).p("ArjHDQDcmrBKnXQAKg7AHg8QA0m7ERhdQA5gTBBgFQFRgVAGGhQAAA5gEBBQghGrDTGGQAJARAKAQQAxBWA8BVQCvD1ADCaQgICciGA9QjvBrkLgJQhEgChHgKQlYgvlbhFQgJgBgIgCQlHhODxnTg");
	this.shape_206.setTransform(-0.1795,-47.1156);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#009900").s().p("ADCRnQhEgChHgKQlYgvlbhFIgRgDQlHhODxnTQDcmrBKnXQAKg7AHg8QA0m7ERhdQA5gTBBgFQFRgVAGGhQAAA5gEBBQghGrDTGGIATAhQAxBWA8BVQCvD1ADCaQgICciGA9QjcBjj1AAIgpgBg");
	this.shape_207.setTransform(-0.1795,-47.1156);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(5,1,1).p("ArhG/QDdmpBKnUQAJg7AHg7QA2m3EShbQA5gTBBgEQFPgUAFGeQAAA5gEBBQggGpDWGDQAJAQAJAQQAyBWA7BUQCuD0gCCYQgMCZiEA7QjvBqkJgJQhFgChGgKQlWgvlahEQgJgCgIgCQlIhNDynPg");
	this.shape_208.setTransform(-0.3604,-45.3857);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#009900").s().p("ADBReQhFgChGgKQlWgvlahEIgRgEQlIhNDynPQDdmpBKnUQAJg7AHg7QA2m3EShbQA5gTBBgEQFPgUAFGeQAAA5gEBBQggGpDWGDIASAgQAyBWA7BUQCuD0gCCYQgMCZiEA7QjcBijzAAIgpgBg");
	this.shape_209.setTransform(-0.3604,-45.3857);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(5,1,1).p("ArfG8QDdmnBJnRQAKg7AHg7QA3mzEUhYQA5gTBAgEQFNgSAEGcQAAA4gEBAQgfGmDYGBQAJAQAKAQQAyBVA7BUQCtDzgICWQgOCWiEA6QjuBnkIgJQhEgChGgKQlVgvlYhDQgJgBgIgCQlIhMDynMg");
	this.shape_210.setTransform(-0.5128,-43.6748);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#009900").s().p("AC/RVQhEgChGgKQlVgvlYhDIgRgDQlIhMDynMQDdmnBJnRQAKg7AHg7QA3mzEUhYQA5gTBAgEQFNgSAEGcQAAA4gEBAQgfGmDYGBIATAgQAyBVA7BUQCtDzgICWQgOCWiEA6QjaBfjwAAIgsgBg");
	this.shape_211.setTransform(-0.5128,-43.6748);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(5,1,1).p("AreG4QDemkBJnPQAJg6AIg7QA4mvEVhWQA5gSA/gEQFMgRADGZQAAA4gEBAQgeGjDbF/QAJAPAJAQQAyBVA7BSQCtDzgPCUQgRCTiDA5QjsBlkIgKQhEgChFgJQlTgvlXhCQgIgBgJgCQlIhMDynIg");
	this.shape_212.setTransform(-0.6479,-41.941);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#009900").s().p("AC8RLQhEgChFgJQlTgvlXhCIgRgDQlIhMDynIQDemkBJnPIARh1QA4mvEVhWQA5gSA/gEQFMgRADGZQAAA4gEBAQgeGjDbF/IASAfQAyBVA7BSQCtDzgPCUQgRCTiDA5QjXBcjuAAIgvgBg");
	this.shape_213.setTransform(-0.6479,-41.941);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(5,1,1).p("ArdG0QDfmhBJnMQAJg7AIg5QA5mrEXhVQA4gRA/gEQFLgQABGXQAAA4gEBAQgdGgDdF8QAJAPAKAQQAzBUA6BSQCsDxgVCTQgUCPiCA4QjrBkkHgLQhDgChFgJQlSgulVhCQgIgBgJgCQlJhLDynFg");
	this.shape_214.setTransform(-0.7642,-40.2304);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#009900").s().p("AC6RCQhDgChFgJQlSgulVhCIgRgDQlJhLDynFQDfmhBJnMIARh0QA5mrEXhVQA4gRA/gEQFLgQABGXQAAA4gEBAQgdGgDdF8IATAfQAzBUA6BSQCsDxgVCTQgUCPiCA4QjVBajrAAIgygBg");
	this.shape_215.setTransform(-0.7642,-40.2304);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(5,1,1).p("ArcGxQDgmfBInKQAKg6AIg5QA5mnEZhSQA4gRA+gEQFKgOAAGUQAAA4gEA/QgcGeDfF5QAKAPAJAQQAzBTA6BRQCsDxgbCQQgXCNiCA2QjqBikFgLQhDgChFgJQlQgulUhAQgIgCgIgCQlKhKDynBg");
	this.shape_216.setTransform(-0.8778,-38.524);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#009900").s().p("AC4Q5QhDgChFgJQlQgulUhAIgQgEQlKhKDynBQDgmfBInKIAShzQA5mnEZhSQA4gRA+gEQFKgOAAGUQAAA4gEA/QgcGeDfF5IATAfQAzBTA6BRQCsDxgbCQQgXCNiCA2QjTBYjqAAIgygBg");
	this.shape_217.setTransform(-0.8778,-38.524);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(5,1,1).p("ArbGtQDhmcBInHQAJg6AIg5QA7miEahRQA4gRA+gDQFIgNgBGSQAAA4gEA+QgbGbDiF2QAJAQAJAPQA0BTA5BQQCrDwghCOQgZCJiBA2QjqBgkEgLQhDgDhEgJQlPgslShBQgIgBgIgCQlKhJDym+g");
	this.shape_218.setTransform(-0.9645,-36.7686);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#009900").s().p("AC1QwQhDgDhEgJQlPgslShBIgQgDQlKhJDym+QDhmcBInHIARhzQA7miEahRQA4gRA+gDQFIgNgBGSQAAA4gEA+QgbGbDiF2IASAfQA0BTA5BQQCrDwghCOQgZCJiBA2QjTBWjoAAIgzgBg");
	this.shape_219.setTransform(-0.9645,-36.7686);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(5,1,1).p("AraGqQDhmaBInFQAJg5AIg5QA8meEbhPQA5gQA9gDQFGgLgCGPQAAA3gEA+QgaGZDkFzQAKAQAJAPQA0BSA5BQQCqDvgnCMQgcCGiAA0QjpBekDgLQhCgDhEgJQlNgslRg/QgIgCgIgBQlLhJDzm6g");
	this.shape_220.setTransform(-1.039,-35.0585);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#009900").s().p("ACyQnQhCgDhEgJQlNgslRg/IgQgDQlLhJDzm6QDhmaBInFIARhyQA8meEbhPQA5gQA9gDQFGgLgCGPQAAA3gEA+QgaGZDkFzIATAfQA0BSA5BQQCqDvgnCMQgcCGiAA0QjQBUjmAAIg2gBg");
	this.shape_221.setTransform(-1.039,-35.0585);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(5,1,1).p("ArZGmQDhmYBInCQAJg5AJg4QA8maEehNQA4gQA8gCQFFgKgDGNQAAA3gEA9QgZGWDnFxQAJAPAJAPQA1BSA4BPQCqDugtCKQggCDh/AzQjoBckBgLQhCgDhEgJQlMgslPg+QgHgCgIgCQlMhHDzm3g");
	this.shape_222.setTransform(-1.1138,-33.3295);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#009900").s().p("ACwQeQhCgDhEgJQlMgslPg+IgPgEQlMhHDzm3QDhmYBInCIAShxQA8maEehNQA4gQA8gCQFFgKgDGNQAAA3gEA9QgZGWDnFxIASAeQA1BSA4BPQCqDugtCKQggCDh/AzQjPBSjjAAIg3gBg");
	this.shape_223.setTransform(-1.1138,-33.3295);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(5,1,1).p("ArZGiQDjmUBHnAQAJg5AJg4QA9mVEfhLQA4gQA8gCQFEgJgEGLQgBA3gDA9QgYGTDoFuQAKAPAJAPQA1BRA3BOQCqDugzCHQgjCAh+AyQjnBakAgLQhCgDhDgJQlKgrlOg+QgIgBgHgCQlNhHDzm0g");
	this.shape_224.setTransform(-1.1654,-31.6199);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#009900").s().p("ACtQVQhCgDhDgJQlKgrlOg+IgPgDQlNhHDzm0QDjmUBHnAIAShxQA9mVEfhLQA4gQA8gCQFEgJgEGLQgBA3gDA9QgYGTDoFuIATAeQA1BRA3BOQCqDugzCHQgjCAh+AyQjNBQjhAAIg5gBg");
	this.shape_225.setTransform(-1.1654,-31.6199);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(5,1,1).p("ArYGfQDjmSBHm9QAJg5AJg3QA+mSEhhIQA3gQA8gCQFCgHgFGIQgBA3gDA8QgXGQDrFsQAJAPAKAOQA1BRA3BNQCpDtg5CGQgmB9h9AxQjmBYj/gMQhCgDhDgJQlIgrlMg9QgIgBgIgCQlMhGDzmwg");
	this.shape_226.setTransform(-1.2114,-29.91);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#009900").s().p("ACqQMQhCgDhDgJQlIgrlMg9IgQgDQlMhGDzmwQDjmSBHm9IAShwQA+mSEhhIQA3gQA8gCQFCgHgFGIQgBA3gDA8QgXGQDrFsIATAdQA1BRA3BNQCpDtg5CGQgmB9h9AxQjKBNjeAAIg9gBg");
	this.shape_227.setTransform(-1.2114,-29.91);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(5,1,1).p("ArYGbQDkmQBGm6QAJg4AKg4QA/mNEihGQA3gPA7gCQFBgGgGGGQgBA2gDA8QgWGNDtFqQAKAOAJAPQA2BQA2BMQCpDshACEQgoB6h9AwQjlBVj+gMQhBgDhDgIQlHgrlKg8QgHgBgIgCQlOhFD0mtg");
	this.shape_228.setTransform(-1.244,-28.1815);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#009900").s().p("ACmQCQhBgDhDgIQlHgrlKg8IgPgDQlOhFD0mtQDkmQBGm6IAThwQA/mNEihGQA3gPA7gCQFBgGgGGGQgBA2gDA8QgWGNDtFqIATAdQA2BQA2BMQCpDshACEQgoB6h9AwQjIBLjcAAIg/gCg");
	this.shape_229.setTransform(-1.244,-28.1815);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(5,1,1).p("ArYGYQDlmOBGm3QAJg5AKg2QBAmJEjhFQA3gOA7gCQFAgFgIGEQgBA2gDA8QgVGKDwFnQAJAOAKAOQA2BQA2BMQCoDrhGCBQgrB3h8AvQjkBUj9gNQhBgDhCgIQlFgqlJg8QgIgBgHgCQlOhEDzmpg");
	this.shape_230.setTransform(-1.2666,-26.4722);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#009900").s().p("ACjP5QhBgDhCgIQlFgqlJg8IgPgDQlOhEDzmpQDlmOBGm3IAThvQBAmJEjhFQA3gOA7gCQFAgFgIGEQgBA2gDA8QgVGKDwFnIATAcQA2BQA2BMQCoDrhGCBQgrB3h8AvQjGBJjaAAQggAAghgCg");
	this.shape_231.setTransform(-1.2666,-26.4722);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(5,1,1).p("ArYGUQDlmLBHm1QAJg4AJg2QBCmFEkhDQA3gOA7gBQE+gEgJGBQgBA2gDA8QgUGHDyFkQAKAPAJAOQA2BPA2BLQCnDqhLB/QguB0h7AuQjjBSj8gNQhBgDhCgJQlEgplHg7QgHgBgIgCQlOhEDzmlg");
	this.shape_232.setTransform(-1.2812,-24.7381);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#009900").s().p("ACgPwQhBgDhCgJQlEgplHg7IgPgDQlOhEDzmlQDlmLBHm1IAShuQBCmFEkhDQA3gOA7gBQE+gEgJGBQgBA2gDA8QgUGHDyFkIATAdIBsCaQCnDqhLB/QguB0h7AuQjEBHjXAAQgiAAgigCg");
	this.shape_233.setTransform(-1.2812,-24.7381);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(5,1,1).p("ArYGQQDmmIBGmyQAJg4AKg2QBCmBEnhAQA2gOA6gBQE9gCgKF+QgBA2gDA7QgTGFD0FhQAKAOAJAPQA3BOA1BKQCnDqhSB9QgxBxh6AsQjiBQj7gNQhAgDhCgJQlCgplFg6QgIgBgHgBQlPhEDzmig");
	this.shape_234.setTransform(-1.2882,-23.0289);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#009900").s().p("ACcPnQhAgDhCgJQlCgplFg6IgPgCQlPhEDzmiQDmmIBGmyIAThuQBCmBEnhAQA2gOA6gBQE9gCgKF+IgEBxQgTGFD0FhIATAdIBsCYQCnDqhSB9QgxBxh6AsQjBBFjUAAQgkAAgkgCg");
	this.shape_235.setTransform(-1.2882,-23.0289);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(5,1,1).p("ArYGNQDnmGBFmwQAJg3AKg2QBEl8Eog/QA2gNA6gBQE7gBgLF9QgBA1gDA6QgSGDD2FeQAKAOAJAOQA4BOA0BKQCmDohXB8Qg0Bth5ArQjiBOj5gNQhAgEhBgIQlBgolEg5QgHgCgIgBQlQhCD0mfg");
	this.shape_236.setTransform(-1.2973,-21.3255);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#009900").s().p("ACZPeQhAgEhBgIQlBgolEg5IgPgDQlQhCD0mfQDnmGBFmwIAThtQBEl8Eog/QA2gNA6gBQE7gBgLF9IgEBvQgSGDD2FeIATAcIBsCYQCmDohXB8Qg0Bth5ArQjABDjSAAQgkAAglgCg");
	this.shape_237.setTransform(-1.2973,-21.3255);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(5,1,1).p("ArYGJQDnmDBGmuQAJg3AKg1QBEl4Eqg9QA2gMA5gBQE6AAgMF6QgCA2gCA5QgRGAD5FcQAJAOAKAOQA3BNA0BIQCmDpheB5Qg2Bqh5AqQjgBMj5gOQg/gDhBgIQk/golDg4QgHgCgIgBQlQhCD0mbg");
	this.shape_238.setTransform(-1.2947,-19.5911);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#009900").s().p("ACVPUQg/gDhBgIQk/golDg4IgPgDQlQhCD0mbQDnmDBGmuIAThsQBEl4Eqg9QA2gMA5gBQE6AAgMF6IgEBvQgRGAD5FcIATAcIBrCVQCmDpheB5Qg2Bqh5AqQi9BBjPAAQgmAAgngDg");
	this.shape_239.setTransform(-1.2947,-19.5911);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(5,1,1).p("ArYGGQDomBBFmrQAJg3AKg0QBGl1Erg6QA2gMA4gBQE5ACgNF3QgCA1gCA6QgQF8D7FaQAKAOAJANQA4BNAzBIQClDnhjB3Qg6Boh3AoQjgBLj3gPQhAgDhAgIQk+golAg3QgIgBgHgCQlRhBD0mXg");
	this.shape_240.setTransform(-1.2815,-17.8819);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#009900").s().p("ACSPLQhAgDhAgIQk+golAg3IgPgDQlRhBD0mXQDomBBFmrIAThrQBGl1Erg6QA2gMA4gBQE5ACgNF3IgEBvQgQF8D7FaIATAbIBrCVQClDnhjB3Qg6Boh3AoQi7A/jMAAQgoAAgogDg");
	this.shape_241.setTransform(-1.2815,-17.8819);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(5,1,1).p("ArYGCQDpl+BFmoQAJg3AKg0QBGlwEtg5QA2gLA4AAQE3ACgOF1QgCA1gCA5QgPF6D9FXQAKAOAJANQA5BMAyBHQClDnhqB1Qg8Bkh3AoQjfBIj2gPQg/gDhAgIQk8gnk/g3QgHgBgIgCQlRhAD0mUg");
	this.shape_242.setTransform(-1.2746,-16.1535);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#009900").s().p("ACOPCQg/gDhAgIQk8gnk/g3IgPgDQlRhAD0mUQDpl+BFmoIAThrQBGlwEtg5QA2gLA4AAQE3ACgOF1IgEBuQgPF6D9FXIATAbQA5BMAyBHQClDnhqB1Qg8Bkh3AoQi5A7jKAAQgoAAgqgCg");
	this.shape_243.setTransform(-1.2746,-16.1535);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(5,1,1).p("ArYF/QDpl9BFmlQAJg2AKg0QBIlsEug3QA1gLA4AAQE1AFgPFyQgCA1gCA4QgOF3EAFVQAKANAJANQA5BMAyBGQCkDmhwBzQg/Bhh2AnQjeBGj1gPQg+gEhAgHQk7gnk9g2QgHgBgIgCQlSg/D1mQg");
	this.shape_244.setTransform(-1.2339,-14.4256);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#009900").s().p("ACKO5Qg+gEhAgHQk7gnk9g2IgPgDQlSg/D1mQQDpl9BFmlQAJg2AKg0QBIlsEug3QA1gLA4AAQE1AFgPFyIgEBtQgOF3EAFVIATAaIBrCSQCkDmhwBzQg/Bhh2AnQi4A6jHAAQgqAAgqgDg");
	this.shape_245.setTransform(-1.2339,-14.4256);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(5,1,1).p("ArYF7QDql6BEmiQAJg3ALgzQBIlnEwg1QA1gLA3AAQE0AGgQFwQgCA1gCA4QgNF0ECFSQAKANAJANQA5BLAyBGQCkDlh2BwQhCBeh2AmQjcBEj0gPQg/gEg/gHQk5gmk8g2QgHgBgHgBQlTg/D1mNg");
	this.shape_246.setTransform(-1.2038,-12.7164);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#009900").s().p("ACHOwQg/gEg/gHQk5gmk8g2IgOgCQlTg/D1mNQDql6BEmiQAJg3ALgzQBIlnEwg1QA1gLA3AAQE0AGgQFwIgEBtQgNF0ECFSIATAaQA5BLAyBGQCkDlh2BwQhCBeh2AmQi1A4jFAAQgrAAgrgDg");
	this.shape_247.setTransform(-1.2038,-12.7164);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(5,1,1).p("ArZF3QDrl3BEmgQAJg2ALgzQBJljExgzQA2gLA2ABQEzAHgRFuQgDA0gCA4QgLFxEEFPQAJANAKANQA6BLAxBFQCjDkh8BuQhFBbh1AlQjcBCjygPQg+gEg/gIQk4glk6g1QgHgBgHgCQlUg9D1mKg");
	this.shape_248.setTransform(-1.181,-10.9905);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#009900").s().p("ACDOnQg+gEg/gIQk4glk6g1IgOgDQlUg9D1mKQDrl3BEmgQAJg2ALgzQBJljExgzQA2gLA2ABQEzAHgRFuQgDA0gCA4QgLFxEEFPIATAaQA6BLAxBFQCjDkh8BuQhFBbh1AlQizA2jCAAQgsAAgtgDg");
	this.shape_249.setTransform(-1.181,-10.9905);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(5,1,1).p("ArZF0QDrl0BEmeQAJg2ALgzQBKlfEzgxQA1gKA2ABQExAJgSFrQgDA0gBA3QgLFvEGFMQAKANAKANQA6BKAwBEQCjDjiCBtQhIBYh0AjQjbBAjxgPQg+gEg/gIQk2glk4g0QgHgBgHgBQlUg9D1mGg");
	this.shape_250.setTransform(-1.1415,-9.2794);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#009900").s().p("AB/OeQg+gEg/gIQk2glk4g0IgOgCQlUg9D1mGQDrl0BEmeQAJg2ALgzQBKlfEzgxQA1gKA2ABQExAJgSFrIgEBrQgLFvEGFMIAUAaQA6BKAwBEQCjDjiCBtQhIBYh0AjQiwA0i/AAQguAAgvgDg");
	this.shape_251.setTransform(-1.1415,-9.2794);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(5,1,1).p("ArZFwQDslxBDmcQAJg2ALgyQBMlbE0gvQA1gJA1ABQEwAKgTFoQgDA0gBA3QgKFsEJFKQAJANAKAMQA6BKAwBDQCiDjiIBqQhLBVhyAiQjaA+jxgQQg9gEg+gHQk1glk3gzQgHgBgHgBQlUg9D1mCg");
	this.shape_252.setTransform(-1.102,-7.5472);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#009900").s().p("AB7OUQg9gEg+gHQk1glk3gzIgOgCQlUg9D1mCQDslxBDmcQAJg2ALgyQBMlbE0gvQA1gJA1ABQEwAKgTFoQgDA0gBA3QgKFsEJFKIATAZQA6BKAwBDQCiDjiIBqQhLBVhyAiQiuAyi8AAQgwAAgxgEg");
	this.shape_253.setTransform(-1.102,-7.5472);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(5,1,1).p("AraFtQDslvBEmaQAIg1AMgxQBMlXE2gtQA1gJA1ABQEuALgUFnQgDAzgCA3QgIFpELFHQAKANAJAMQA7BJAwBCQChDiiOBpQhOBRhyAhQjZA9jvgRQg9gEg9gHQk0gkk2gyQgHgCgHgBQlUg7D1l/g");
	this.shape_254.setTransform(-1.0486,-5.8339);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#009900").s().p("AB3OLQg9gEg9gHQk0gkk2gyIgOgDQlUg7D1l/QDslvBEmaQAIg1AMgxQBMlXE2gtQA1gJA1ABQEuALgUFnQgDAzgCA3QgIFpELFHIATAZQA7BJAwBCQChDiiOBpQhOBRhyAhQiqAwi4AAQgzAAgzgEg");
	this.shape_255.setTransform(-1.0486,-5.8339);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(5,1,1).p("AraFpQDtlsBDmXQAJg1ALgxQBOlTE3grQA1gIA0ABQEtANgVFkQgEAzgBA2QgHFmENFFQAKAMAKANQA7BIAvBCQCgDhiUBmQhQBPhxAfQjZA7jugRQg9gEg8gHQkygkk0gxQgHgBgHgCQlWg6D2l8g");
	this.shape_256.setTransform(-1.0087,-4.1297);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#009900").s().p("ABzOCQg9gEg8gHQkygkk0gxIgOgDQlWg6D2l8QDtlsBDmXQAJg1ALgxQBOlTE3grQA1gIA0ABQEtANgVFkQgEAzgBA2QgHFmENFFIAUAZQA7BIAvBCQCgDhiUBmQhQBPhxAfQipAui2AAQg0AAg0gEg");
	this.shape_257.setTransform(-1.0087,-4.1297);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(5,1,1).p("ArbFlQDulqBDmUQAJg0ALgxQBPlPE5gpQA1gIAzACQEsAOgXFhQgDA0gBA1QgHFjEQFDQAKAMAJAMQA8BIAuBBQCgDgiaBkQhTBMhwAeQjYA5jtgRQg8gFg9gHQkwgjkzgwQgGgBgHgCQlWg6D1l4g");
	this.shape_258.setTransform(-0.9529,-2.3984);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#009900").s().p("ABvN5Qg8gFg9gHQkwgjkzgwIgNgDQlWg6D1l4QDulqBDmUQAJg0ALgxQBPlPE5gpQA1gIAzACQEsAOgXFhQgDA0gBA1QgHFjEQFDIATAYQA8BIAuBBQCgDgiaBkQhTBMhwAeQimAsizAAQg1AAg3gEg");
	this.shape_259.setTransform(-0.9529,-2.3984);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(5,1,1).p("ArcFiQDvloBCmRQAJg1AMgwQBPlKE7gnQA1gIAzACQEqAPgYFfQgEAzAAA1QgGFhESFAQAKAMAKAMQA7BHAuBAQCgDgigBiQhXBIhvAdQjWA3jsgRQg8gFg8gHQkvgikxgwQgHgBgHgBQlWg6D1l0g");
	this.shape_260.setTransform(-0.8938,-0.6848);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#009900").s().p("ABrNwQg8gFg8gHQkvgikxgwIgOgCQlWg6D1l0QDvloBCmRQAJg1AMgwQBPlKE7gnQA1gIAzACQEqAPgYFfQgEAzAAA1QgGFhESFAIAUAYQA7BHAuBAQCgDgigBiQhXBIhvAdQiiAqivAAQg4AAg5gEg");
	this.shape_261.setTransform(-0.8938,-0.6848);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(5,1,1).p("ArcFfQDvlmBCmOQAJg1AMgwQBRlGE7glQA1gHAzADQEoAQgZFdQgDAygBA1QgFFeEVE9QAKAMAJAMQA9BGAtBAQCfDeimBgQhZBGhvAcQjWA0jqgRQg8gFg8gGQktgjkwgvQgGgBgHgBQlXg4D2lxg");
	this.shape_262.setTransform(-0.8244,1.0359);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#009900").s().p("ABnNnQg8gFg8gGQktgjkwgvIgNgCQlXg4D2lxQDvlmBCmOQAJg1AMgwQBRlGE7glQA1gHAzADQEoAQgZFdQgDAygBA1QgFFeEVE9IATAYQA9BGAtBAQCfDeimBgQhZBGhvAcQigAnisAAQg6AAg6gEg");
	this.shape_263.setTransform(-0.8244,1.0359);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(5,1,1).p("ArdFbQDwljBCmMQAJg0AMgwQBSlCE9giQA1gHAyACQEnASgaFaQgEAzgBA0QgDFbEWE7QAKALAKAMQA9BGAtA/QCeDdisBeQhcBDhuAbQjVAyjpgSQg8gEg7gHQksgikuguQgGgBgHgBQlYg4D2ltg");
	this.shape_264.setTransform(-0.7586,2.7536);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#009900").s().p("ABjNdQg8gEg7gHQksgikuguIgNgCQlYg4D2ltQDwljBCmMQAJg0AMgwQBSlCE9giQA1gHAyACQEnASgaFaQgEAzgBA0QgDFbEWE7IAUAXQA9BGAtA/QCeDdisBeQhcBDhuAbQidAlioAAQg8AAg9gFg");
	this.shape_265.setTransform(-0.7586,2.7536);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(5,1,1).p("AreFXQDxlgBCmJQAIg0ANgvQBSk+E/ghQA0gGAyACQEmATgbFYQgEAzgBAzQgCFZEYE4QALALAJALQA9BGAtA+QCeDdizBcQhfA/htAaQjTAxjpgTQg7gEg7gHQkqghksguQgHgBgHgBQlYg3D2lqg");
	this.shape_266.setTransform(-0.6941,4.4688);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#009900").s().p("ABeNUQg7gEg7gHQkqghksguIgOgCQlYg3D2lqQDxlgBCmJQAIg0ANgvQBSk+E/ghQA0gGAyACQEmATgbFYQgEAzgBAzQgCFZEYE4IAUAWQA9BGAtA+QCeDdizBcQhfA/htAaQiZAjilAAQg+AAhAgFg");
	this.shape_267.setTransform(-0.6941,4.4688);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(5,1,1).p("AreFUQDxleBBmHQAJgzANgvQBTk6FBgeQA0gGAxADQEkAUgcFVQgEAzAAAzQgCFVEbE2QAKALAKALQA+BFArA9QCeDdi5BZQhiA9hsAYQjTAvjngTQg7gEg6gHQkpghkrgsQgGgBgHgCQlZg2D3lmg");
	this.shape_268.setTransform(-0.6346,6.1883);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#009900").s().p("ABaNLQg7gEg6gHQkpghkrgsIgNgDQlZg2D3lmQDxleBBmHQAJgzANgvQBTk6FBgeQA0gGAxADQEkAUgcFVQgEAzAAAzQgCFVEbE2IAUAWQA+BFArA9QCeDdi5BZQhiA9hsAYQiXAhihAAQhAAAhCgFg");
	this.shape_269.setTransform(-0.6346,6.1883);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(5,1,1).p("ArfFQQDylbBBmFQAJgzANguQBUk2FCgcQA0gGAxADQEjAWgeFTQgEAyAAAzQgBFTEeEyQAKALAKALQA+BFArA8QCdDci/BXQhlA6hrAXQjSAtjmgTQg6gFg6gGQkoghkpgrQgGgCgHgBQlZg1D2ljg");
	this.shape_270.setTransform(-0.5603,7.9063);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#009900").s().p("ABWNCQg6gFg6gGQkoghkpgrIgNgDQlZg1D2ljQDylbBBmFQAJgzANguQBUk2FCgcQA0gGAxADQEjAWgeFTQgEAyAAAzQgBFTEeEyIAUAWQA+BFArA8QCdDci/BXQhlA6hrAXQiTAgidAAQhDAAhFgGg");
	this.shape_271.setTransform(-0.5603,7.9063);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(5,1,1).p("ArgFNQDzlZBBmCQAIgzANguQBWkxFCgbQA1gFAwAEQEiAXgfFQQgEAyAAAyQAAFQEgEwQAKALAKALQA+BEArA8QCcDajEBWQhoA2hqAWQjRArjlgTQg7gFg5gGQkmggkogrQgGgBgGgBQlag1D2lfg");
	this.shape_272.setTransform(-0.4757,9.6319);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#009900").s().p("ABSM5Qg7gFg5gGQkmggkogrIgMgCQlag1D2lfQDzlZBBmCQAIgzANguQBWkxFCgbQA1gFAwAEQEiAXgfFQQgEAyAAAyQAAFQEgEwIAUAWQA+BEArA8QCcDajEBWQhoA2hqAWQiRAeibAAQhEAAhGgGg");
	this.shape_273.setTransform(-0.4757,9.6319);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(5,1,1).p("ArhFJQD0lXBAl/QAJgyANguQBWktFEgZQA1gFAwAEQEgAZggFOQgEAxAAAyQABFNEiEuQALALAJALQA/BDAqA7QCcDajLBTQhqAzhqAVQjQApjkgTQg6gFg5gHQkkgfkmgqQgHgBgGgBQlag0D2lcg");
	this.shape_274.setTransform(-0.3962,11.3504);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#009900").s().p("ABNMwIhzgMQkkgfkmgqIgNgCQlag0D2lcQD0lXBAl/QAJgyANguQBWktFEgYQA1gGAwAEQEgAZggFOQgEAxAAAyQABFNEiEuIAUAWQA/BDAqA7QCcDajLBTQhqAzhqAVQiMAciXAAQhHAAhKgGg");
	this.shape_275.setTransform(-0.3962,11.3504);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(5,1,1).p("ArhFFQD0lUBAl8QAJgzANgtQBXkoFGgXQA1gFAvAEQEeAaggFMQgFAxAAAxQADFLEkErQAKALAKAKQA/BDAqA6QCbDZjRBSQhtAvhpAUQjPAnjjgTQg5gGg5gGQkjgekkgqQgHgBgGgBQlbgzD3lZg");
	this.shape_276.setTransform(-0.3264,13.0559);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#009900").s().p("ABJMnIhygMQkjgekkgqIgNgCQlbgzD3lZQD0lUBAl8QAJgzANgtQBXkoFGgXQA1gFAvAEQEeAaggFMQgFAxAAAxQADFLEkErIAUAVQA/BDAqA6QCbDZjRBSQhtAvhpAUQiKAaiTAAQhJAAhMgGg");
	this.shape_277.setTransform(-0.3264,13.0559);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(5,1,1).p("AriFCQD1lRBAl6QAIgzAOgsQBYklFHgVQA1gEAuAFQEdAbghFJQgFAxAAAxQAEFIEmEoQALALAJAKQBABCApA5QCbDZjXBPQhxAthoATQjOAljhgUQg6gGg4gFQkhgfkjgpQgGgBgHgBQlbgyD3lVg");
	this.shape_278.setTransform(-0.2345,14.7818);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#009900").s().p("ABFMeIhygLQkhgfkjgpIgNgCQlbgyD3lVQD1lRBAl6QAIgzAOgsQBYklFHgVQA1gEAuAFQEdAbghFJQgFAxAAAxQAEFIEmEoIAUAVQBABCApA5QCbDZjXBPQhxAthoATQiFAYiOAAQhNAAhPgHg");
	this.shape_279.setTransform(-0.2345,14.7818);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(5,1,1).p("ArjE+QD1lPBAl3QAIgyAOgsQBakhFIgTQA1gDAtAEQEcAdgjFHQgFAwABAxQAEFFEpEmQALAKAKAKQA/BCApA4QCaDYjdBNQhzAqhnASQjNAjjhgVQg5gFg4gGQkggekhgoQgGgBgGgBQlcgxD3lSg");
	this.shape_280.setTransform(-0.1397,16.502);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#009900").s().p("ABAMUIhxgLQkggekhgoIgMgCQlcgxD3lSQD1lPBAl3QAIgyAOgsQBakhFIgTQA1gDAtAEQEcAdgjFHQgFAwABAxQAEFFEpEmIAVAUQA/BCApA4QCaDYjdBNQhzAqhnASQiBAWiJAAQhRAAhTgIg");
	this.shape_281.setTransform(-0.1397,16.502);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(5,1,1).p("ArkE7QD3lNA/l0QAIgyAOgsQBbkcFKgRQA0gDAtAFQEbAdgkFFQgFAwAAAwQAGFDErEjQALAKAJAKQBBBBAoA4QCZDXjjBLQh2AmhmARQjNAhjfgVQg5gFg3gGQkegdkggoQgGgBgGgBQldgwD3lOg");
	this.shape_282.setTransform(-0.0634,18.2115);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#009900").s().p("AA8MLIhwgLQkegdkggoIgMgCQldgwD3lOQD3lNA/l0QAIgyAOgsQBbkcFKgRQA0gDAtAFQEbAdgkFFQgFAwAAAwQAGFDErEjIAUAUQBBBBAoA4QCZDXjjBLQh2AmhmARQh/AUiFAAQhSAAhWgIg");
	this.shape_283.setTransform(-0.0634,18.2115);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(5,1,1).p("AKTEbQALAKAKAKQE8E6kkBcQgMAEgMADQkkBWlMggQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMg");
	this.shape_284.setTransform(0.0141,19.9395);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#009900").s().p("AA4MCQlaghldgvQldgwD3lLQD3lKA/lyQA/lyF/gSQGAgRgrF1QgrF0FaFMIAVAUQE8E6kkBcIgYAHQjVA/jqAAQhXAAhagJg");
	this.shape_285.setTransform(0.0141,19.9395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_191},{t:this.shape_190}]}).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).wait(1));

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
	this.instance_6 = new lib.sky();
	this.instance_6.setTransform(306.95,-128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

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

	// scene_1
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