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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AIoDoQgmAugdAgAT8oaQjNCHjZEDQg5BDiGCrQg/BQgwA6IBxAAAUcovQgCABgBABQgFADgFADQgBABAAAAQgFADgEADQgFADgEADAUto5QgJAFgIAFAUtovIgRAAIggAAI6GAAAUOomQgJAHgJAFQlRCjpAD2QmyC4knB0QhVAhhJAcICeAAIDUAAIErAAAj+o4IiMAAIuGAAIgcAAQAPAnANAWIBSBEIGgEZIDqCeIDGCrAseieIgBLYIKFkOIErhEIGXAA");
	this.shape.setTransform(-22.5,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsUieIDrCeIDGCqIieA9ICeAAIDUAAIAABEIqFEOgACcDnIkrAAIjUAAIAAg9QEnh0Gxi4QJBj2FQijQlQCjpBD2QmxC4knB0IjGiqIjrieImfkaIhShEIAAg8IOGAAIAAAJIaFAAIAAAUQjMCHjZEDQg5BDiHCrQg/BQgvA6gAljDng");
	this.shape_1.setTransform(-23.575,-31.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ATHn9QgRgCgkgBQgjgCgUAAQgNAAhgAHQhgAGgNAAQgNAAhaAKQhaAJgNAAQgNAAhQAGQhQAHgNAAQgOAAg1AHQg1AHgNAAQgNAAh8AJQh8AIgNAAQgNAAhIAGQhGAGgNAAQgNAAgxAGQgwAGgOAAQgNAAglAGQglAHgOAAQgNAAhUAJQhVAIgNAAQgNAAg6AJQg6AIgNAAQgNAAgrAJQgqAIgNAAQgNAAg6AKQg6AJgNAAQgNAAgiAIQgiAJgOAAQgRAAhvAhQheAdg0ASQASAoAxAAQANAAANAMQAMAMANAAQANAAARAKQARALANAAQAOAAAKAIQALAIANAAQACAAAlAXQAmAXADAAQAEAABIA4QBJA2ARAAIAsAkQArAjAMAAQANAAgFAJQgEAIANAAQAFAAAUAVQAUAVANAAQANAAgFAJQgGAIANAAQARAAADANQABAQACAEAmOC4QAUAeAIAHQAKAHAVAAQANAAgFAJQgFAIANAAQANAAABALQABAKANAAQAOAAA3AsQA4ArAWAAQAGAEAHAFQANAJAMAAQAOAAACALQACAKANAAQANAAAAALQABAKANAAQANAAgDAMQgDANANAAQADAAAfAmQAfAnAOAAQAHAAA/ggQA/ggAAgDQBHgqBHgrQCNhYAAgVQAAgFAfgcQAegdAAgCQAAgVBDhCQBDhBAAgLQAAgNALgBQAKgBAAgNQAAgNALgBQALgBAAgOQAAgNAMgBQALgBAAgNQAAgCAiglQAiglAAgCQAAgCAigkQAigkAAgCQAAgNALgBQAKgCAAgNQAAgNAMgBQALgCAAgNQAAAAAigfQAighAAgNQAAgSAWgPQAVgQAAgJQAAgDABgCIAHgDQAGAFACgIICZhAIBHgeAmOC4IWEpRIACgBQABgHAGAEIAIgDQAAgCAAgDQAAgOAMgFQAVgJAIgHAo0D+IANgGICZhA");
	this.shape_2.setTransform(-8.875,-39.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlHcQgfgmgEAAQgMAAAEgNQADgMgNAAQgOAAAAgKQgBgLgNAAQgNAAgBgKQgDgLgNAAQgNAAgNgJIgMgJQgWAAg4grQg3gsgOAAQgNAAgBgKQgCgLgNAAQgMAAAEgIQAGgJgOAAQgUAAgKgHQgIgHgUgeIWDpRIACAEQAAAJgVAQQgXAPAAASQABANgjAhIghAfQAAANgMACQgLABAAANQAAANgKACQgLABAAANQAAACgiAkQgiAkAAACQAAACgiAlQgjAlABACQAAANgMABQgLABAAANQAAAOgLABQgLABAAANQAAANgLABQgKABAAANQAAALhDBBQhDBCAAAVQAAACgeAdQgfAcAAAFQgBAViMBYIiOBVQAAADg/AgQg/AggIAAQgNAAgggngAoWDLQgCgEgCgQQgDgNgQAAQgNAAAFgIQAGgJgOAAQgNAAgTgVQgUgVgGAAQgNAAAFgIQAFgJgOAAQgLAAgsgjIgrgkQgRAAhJg2QhJg4gDAAQgDAAgmgXQgmgXgBAAQgOAAgKgIQgLgIgNAAQgNAAgRgLQgRgKgNAAQgNAAgNgMQgMgMgOAAQgwAAgSgoQA0gSBegdQBvghARAAQAOAAAhgJQAjgIANAAQANAAA6gJQA5gKANAAQANAAArgIQAqgJAOAAQANAAA6gIQA5gJAOAAQANAABUgIQBVgJANAAQANAAAmgHQAlgGANAAQANAAAxgGQAwgGANAAQAOAABGgGQBHgGANAAQAOAAB7gIQB8gJAOAAQANAAA1gHQA1gHANAAQAOAABQgHQBPgGAOAAQANAABagJQBagKANAAQANAABggGQBggHAMAAIA4ACIAOAgIiaBAIABgFQAAgOAMgFQAVgJAHgHQgHAHgVAJQgMAFAAAOIgBAFIgHADQgGgEgCAIIgCAAI2DJRIiZBBg");
	this.shape_3.setTransform(-12.45,-39.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-93.5,276.7,121);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ACUAAQAAA+grArQgsArg9AAQg8AAgsgrQgrgrAAg+QAAg9ArgrQAsgrA8AAQA9AAAsArQArArAAA9g");
	this.shape.setTransform(92.45,-17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhoBpQgrgsAAg9QAAg9ArgrQAsgrA8AAQA+AAAqArQAsArAAA9QAAA9gsAsQgqArg+AAQg8AAgsgrg");
	this.shape_1.setTransform(92.45,-17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ACUAAQAAA+grArQgsArg9AAQg8AAgsgrQgrgrAAg+QAAg9ArgrQAsgrA8AAQA9AAAsArQArArAAA9g");
	this.shape_2.setTransform(-50.6,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhoBpQgrgsAAg9QAAg9ArgrQAsgrA8AAQA+AAAqArQAsArAAA9QAAA9gsAsQgqArg+AAQg8AAgsgrg");
	this.shape_3.setTransform(-50.6,-12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ACUAAQAAA+grArQgsArg9AAQg8AAgsgrQgrgrAAg+QAAg9ArgrQAsgrA8AAQA9AAAsArQArArAAA9g");
	this.shape_4.setTransform(92.45,-16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhoBpQgrgsAAg9QAAg9ArgrQAsgrA8AAQA+AAAqArQAsArAAA9QAAA9gsAsQgqArg+AAQg8AAgsgrg");
	this.shape_5.setTransform(92.45,-16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ACUAAQAAA+grArQgsArg9AAQg8AAgsgrQgrgrAAg+QAAg9ArgrQAsgrA8AAQA9AAAsArQArArAAA9g");
	this.shape_6.setTransform(-50.6,-12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhoBpQgrgsAAg9QAAg9ArgrQAsgrA8AAQA+AAAqArQAsArAAA9QAAA9gsAsQgqArg+AAQg8AAgsgrg");
	this.shape_7.setTransform(-50.6,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-17.7}},{t:this.shape,p:{y:-17.7}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-17.7}},{t:this.shape,p:{y:-17.7}}]},6).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-16.7}},{t:this.shape,p:{y:-16.7}}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-16.7}},{t:this.shape,p:{y:-16.7}}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-17.7}},{t:this.shape,p:{y:-17.7}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-17.7}},{t:this.shape,p:{y:-17.7}}]},1).wait(9));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ADSAAQAABXg9A9Qg+A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWg");
	this.shape_8.setTransform(89.1,-17.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWQAABXg9A9Qg+A+hXAAQhWAAg9g+g");
	this.shape_9.setTransform(89.1,-17.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ADSAAQAABXg9A9Qg+A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWg");
	this.shape_10.setTransform(-53.5,-12.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWQAABXg9A9Qg+A+hXAAQhWAAg9g+g");
	this.shape_11.setTransform(-53.5,-12.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AsPBOQgngHhFgfQgVgKgLgJQgQgNgBgPQgCgUATgOQASgMAVABQARACAWAJIAlARQA2AWBXgCQBjgGAwACQAhABAMAOQALANgGATQgFASgPAKQgVAOguABQhBAChAAAIgQAAQg0AAgdgGgAKUAdQgMgDgegKQgbgIgQgDIghgFQgTgEgIgMQgIgLADgQQACgPALgKQAUgRAiACQAPABApANQBrAeBsgXQAlgHALAAQAeACALAVQAHANgFASQgFAPgOAKQgUAQgqAEQghADhUABQg3AAgagFg");
	this.shape_12.setTransform(17.7609,-5.034);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ADSAAQAABXg9A9Qg+A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWg");
	this.shape_13.setTransform(89.1,-16.6951,1,0.7257);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWQAABXg9A9Qg+A+hXAAQhWAAg9g+g");
	this.shape_14.setTransform(89.1,-16.6951,1,0.7257);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ADSAAQAABXg9A9Qg+A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWg");
	this.shape_15.setTransform(-53.5,-12.7951,1,0.7257);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA+A9QA9A+AABWQAABXg9A9Qg+A+hXAAQhWAAg9g+g");
	this.shape_16.setTransform(-53.5,-12.7951,1,0.7257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{scaleY:1,y:-12.05}},{t:this.shape_10,p:{scaleY:1,y:-12.05}},{t:this.shape_9,p:{scaleY:1,y:-17.45}},{t:this.shape_8,p:{scaleY:1,y:-17.45}}]}).to({state:[{t:this.shape_11,p:{scaleY:0.9156,y:-12.2832}},{t:this.shape_10,p:{scaleY:0.9156,y:-12.2832}},{t:this.shape_9,p:{scaleY:0.9156,y:-17.1832}},{t:this.shape_8,p:{scaleY:0.9156,y:-17.1832}}]},6).to({state:[{t:this.shape_11,p:{scaleY:0.7257,y:-12.7951}},{t:this.shape_10,p:{scaleY:0.7257,y:-12.7951}},{t:this.shape_9,p:{scaleY:0.7257,y:-16.6951}},{t:this.shape_8,p:{scaleY:0.7257,y:-16.6951}}]},2).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11,p:{scaleY:0.7257,y:-12.7951}},{t:this.shape_10,p:{scaleY:0.7257,y:-12.7951}},{t:this.shape_9,p:{scaleY:0.7257,y:-16.6951}},{t:this.shape_8,p:{scaleY:0.7257,y:-16.6951}}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_11,p:{scaleY:0.9156,y:-12.2832}},{t:this.shape_10,p:{scaleY:0.9156,y:-12.2832}},{t:this.shape_9,p:{scaleY:0.9156,y:-17.1832}},{t:this.shape_8,p:{scaleY:0.9156,y:-17.1832}}]},1).to({state:[{t:this.shape_11,p:{scaleY:1,y:-12.05}},{t:this.shape_10,p:{scaleY:1,y:-12.05}},{t:this.shape_9,p:{scaleY:1,y:-17.45}},{t:this.shape_8,p:{scaleY:1,y:-17.45}}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(9).to({_off:false},0).wait(4).to({_off:true},1).wait(11));

	// head
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AifHoQgggFgUgeQgVgdAEghQAEgfAXgbQAWgZAggMQgUhGgcg8QgJgTgfg7QgZgwgNgfQgUg4gOgbQgJgTgQgXIgcgoQgSgagXglIg2haQgUgigGgVQgLggAJgaQAHgUASgPQAQgOAWgHQAcgJA8AAIKvAAQAlAAAUADQAfAGATAQQAbAXgBAnQgBAogcAVQgSAOgcAGQgRADgjABIpXALQAHAYAWAcIAlAxQAPAVAUAqIA2ByQAsBdAVAxQAiBRAUBDQAdBgglAsQgNAPgXANIgqATQgjATgSAIQgZAKgUAAIgLAAg");
	this.shape_17.setTransform(64.9117,-8.614);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Am0BVIglgMIgZgSIgSgSIAAgSIAAgTIAAgRIAAgSIASgTIAZgSIAlgHIAAgGINpAAIAkANIAZASIANATIAFASIAAARIAAATIgFASIgNASIgZASIgqAMItjAAg");
	this.shape_18.setTransform(-66.3,-41.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("AWLAAQAAJMmgGfQmfGgpMAAQpLAAmfmgQmgmfAApMQAApLGgmfQGfmgJLAAQJMAAGfGgQGgGfAAJLg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AvqPrQmfmgAApLQAApLGfmfQGfmgJLAAQJMAAGfGgQGfGfAAJLQAAJLmfGgQmfGgpMAAQpLAAmfmgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.8,-142.8,285.70000000000005,285.70000000000005);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(-21,-230.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-218.95},0).wait(2).to({y:-230.95},0).wait(2).to({y:-235.95},0).wait(4));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArWSfQgfgCgXgVQgSgQgQgeIgZg1QgWgxgDgLQgMgiAHgbQAIgZAZgXQAQgOAigUQDxiPDRi9QgtibgrjGQgah3gujtIiWsEQgFgZAAgRQABgXANgOQAQgRAbAEQAaADARATQAPAQAJAaQAFAQAGAgIB3JvQAwD9AbB8QAtDRAxClQANAsAEAXQAFAmgLAcQgIAUgRATQgLANgWATQjUC8jyCRQACAVAQAaIAbArQAPAZADAYQAEAcgOATQgPAVgeAAIgFAAgAG6SYQgYgCgQgLQgSgLgKgYQgHgQgHgdQhwndg8nkIgRiFQgulnhUldIgqirQgXhZgSgsIgRgpQgIgYgCgTQgBgYAKgUQALgVAUgHQATgGATAIQATAIANAQQASAXANAzIBMEkQAgB7APA+QAYBnAOBUQAJA6AHA9QAsFVAVCIQBBG1BkGoQB8gJBsg3IApgUQAYgLATgCQAYgDAVAKQAWALAHAUQAKAegaAdQgVAYgkARQiUBEihAWQgUADgPAAIgKAAg");
	this.shape.setTransform(0.0065,0.0261);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ALmS/QhTgUhMgfQgigNgUgOQgbgSgMgYQgMgaADglQADgYAMgoIBwl7QAXhOAIgqQANhDgGg3QgEgmgOguQgJgbgVg1QhajlhnkkQg9irh5ljIhUj3QgLgegBgUQgBgdAQgQQAQgQAZADQAYACASAQQAQAOALAWQAIAQAJAbIDOJgQB6FiBkD3QAmBgANAqQAZBPABBBQABAzgNA+QgIAogUBGIhxGMQgLAnAMASQAJAOAgAIIBoAcQAoAKAZAUQAfAYgHAeQgHAeglAIQgOADgPAAQgUAAgVgFgAsFDEQgegEgTgXQgQgTgIgfQgFgVgDgjQgEhEAEhIQABgUADgLQAEgQAJgKQAOgPAagCQATgBAcAGQE0A/FBBQIjrq3Qg8ixgVhTQgMgvAGgbQAEgTANgOQANgPASgCQAQgCAQAKQAOAIAJAPQAIAMAGASIAIAhQAUBTAkBqQALAjA3CXQBJDLBGDeQAWBDAKAoQAQA7AGAxQAIA6gYAXQgXAVgwgGQgngEhQgSIoPh6QgNAUAFAdQAEASANAhQAbBGgbAfQgPARgYAAIgLgBg");
	this.shape_1.setTransform(-20.1546,4.4108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AipToQhGgZg/giQgYgNgOgLQgTgQgIgSQgIgVAEgcQADgRAKggQA4ikA4jRQAiiBA9j6IA/kDIAHgeQiGAziJAxQAJAOATAPIAgAZQASAQAIARQALAUgFASQgFATgTALQgSAKgUgBQghgCgngeQgsgjgfgsQgUgegHgcQgIgiAQgYQAJgPATgKQALgHAYgIIF7iNQA+kIAgiaIAGgcQjgjPjvi+Qg4guAIglQAFgWAXgLQAWgLAYAEQAUAEAWAOQAPAKAWATQEBDbB/BxIABABQAsjoAWjHQAFgxANgWQAKgRAQgJQASgKARAEQAZAGAMAfQAIAYgBAjQgDBWgQBnQgLBIgXB0IgfCcQCRCFB2B3QAXAYALAQQAQAZAAAXQABAUgLATQgKASgRAOQgXATgxATQikBEinBBQh+IkiZIeQgGAUABAMQABAdAgAUQAUANAqAOQAkAMAWAXQAaAbgKAcQgLAbgkAEIgMAAQgZAAgdgKgABbjEQCXg7BsgxQhfhhhjhdQgfCVgiCVg");
	this.shape_2.setTransform(-19.9322,7.6219);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ApNT5QgfgFgigXIhwhJQgfgUgPgOQgXgVgIgYQgKgcAJglQAGgXASgoQD4oREhoCQBoi4DRlwQBAh0A3hrQkNhrhxgzQgqgUgPgQQgNgOgFgQQgFgSAHgPQAHgQARgKQARgIATABQAQAAAUAHIAhAPQB9A6EABmQA+h+AvhuQAQgkATgTQAZgaAbAGQAaAHAKAeQAJAagFAgQgGAogTAuQgMAdgbA0IgzBgQEjBzCaBKQAaAMANAKQAUAOAKARQAPAagGAnQgEAagSAoIjrIxQAbgCAOAAQAWABARAHQAUAIAMARQANASgDATQgCAQgNAMQgLAMgRAFQgUAHgsgBIhXgDQgXAAgMgDQgTgEgKgLQgcgcAdhHIEJp2QilhQkhhzQhLCKhbCjIkZH1QlXJji1GbQgLAZADAMQADANAOAKQAIAGASAJQA1AYAuAnQAaAVALAZQAOAdgOAWQgOAVgbAAIgPgBg");
	this.shape_3.setTransform(-33.8047,10.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AEsS4QgYgCgQgLQgSgLgKgYQgHgQgHgdQhwndg8nkIgRiGQgtlmhUldIgrirQgXhZgSgsIgRgpQgIgYgCgTQgBgYAKgUQALgVAUgHQATgGAUAIQATAIANAQQASAXANAzIBLEkQAgB7APA+QAYBnAOBUQAJA6AHA9QAsFVAVCIQBBG1BkGoQB8gJBsg3IApgUQAYgLATgCQAYgDAVAKQAWALAHAUQAKAegaAdQgVAYgkARQiUBEihAWQgUADgPAAIgKAAgAp1SvQgcgDgQgGQgXgIgNgOQgOgQgEgaQgDgRABgeQAPnpBEnjIASiFQAxlnAJlnIACiwQABhcgFgvIgGgsQgCgaAEgSQAEgYAPgQQAQgSAWgCQATgBASANQAQANAIATQAMAbgBA1IgCEuQgBB+gCBAQgDBqgJBUQgGA6gJA+QgtFUgQCKQgyG2gNGzQB6AYB3gaIAtgIQAZgEAUADQAXADASAPQATAQABAWQACAfghAWQgaARgoAHQhcAQhdAAQhEAAhEgJg");
	this.shape_4.setTransform(21.1603,7.1419);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.3,-378.3,284.70000000000005,515.8);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-26.95,114.05,1,1,0,0,0,-22.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-19.2,regY:-33,x:30.1,y:79.25},0).wait(1).to({x:84,y:48.4},0).wait(1).to({x:138,y:20.5},0).wait(1).to({x:192.1,y:-4.5},0).wait(1).to({x:246.3,y:-26.6},0).wait(1).to({x:300.65,y:-45.7},0).wait(1).to({x:355.05,y:-61.95},0).wait(1).to({x:409.6,y:-75.3},0).wait(1).to({x:464.3,y:-85.75},0).wait(1).to({x:519.05,y:-93.25},0).wait(1).to({x:573.95,y:-97.85},0).wait(1).to({x:628.95,y:-99.55},0).wait(1).to({x:684.1,y:-98.35},0).wait(1).to({x:739.35,y:-94.2},0).wait(1).to({x:794.7,y:-87.15},0).wait(1).to({x:850.2,y:-77.2},0).wait(1).to({x:905.8,y:-64.35},0).wait(1).to({x:961.55,y:-48.6},0).wait(1).to({x:1017.45,y:-29.95},0).wait(1).to({x:1073.45,y:-8.35},0).wait(1).to({x:1129.55,y:16.2},0).wait(1).to({x:1185.8,y:43.65},0).wait(1).to({x:1242.25,y:74.05},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-158,1535.9,331.6);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {background_mc:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.plane_mc = new lib.paperPlane_flying();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(1083.65,-617.75,1,1,0,0,0,-26.9,114);

	this.timeline.addTween(cjs.Tween.get(this.plane_mc).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(0.1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(4799.875,-540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1B17A5","#6A6D4F"],[0,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(4799.875,-540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(50,50,50,0)").ss(0.1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_2.setTransform(2879.925,-540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF2625","#0038E3"],[0,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(2879.925,-540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(50,50,50,0)").ss(0.1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_4.setTransform(959.975,-540);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#000000"],[0,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_5.setTransform(959.975,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-1,-1081,5761.9,1082), null);


// stage content:
(lib.kangclickableobjectinbackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		var scaleX = 1;
		
		function handleKeyDown(event) {
		    console.log(root.background_mc.x);
		    if (root.redHead_mc.currentFrame == 9) {
		        root.redHead_mc.gotoAndPlay("walking");
		    }
		
		    if (event.keyCode == 39 && root.background_mc.x > -2930) {
		        root.background_mc.x -= speed;
		        root.redHead_mc.scaleX = scaleX;
		    }
		
		   if (event.keyCode == 37 && root.background_mc.x < 950) {
		        root.background_mc.x += speed;
		        root.redHead_mc.scaleX = -scaleX;
		    }
		}
		
		function handleKeyUp(event) {
		    root.redHead_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.plane_mc.addEventListener("click", flyPlane);
		
		function flyPlane() {
		  this.background_mc.plane_mc.gotoAndPlay("fly");
		  this.background_mc.plane_mc.removeEventListener("click", flyPlane);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// walking
	this.redHead_mc = new lib.walking();
	this.redHead_mc.name = "redHead_mc";
	this.redHead_mc.setTransform(872.2,818.2,1,1,0,0,0,-21,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.redHead_mc).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(960.05,540,1,1,0,0,0,960,-540);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,4800,540.0999999999999);
// library properties:
lib.properties = {
	id: '10D74DCE2D0D6A43925DB51E9FC8C7F1',
	width: 1920,
	height: 1080,
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
an.compositions['10D74DCE2D0D6A43925DB51E9FC8C7F1'] = {
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