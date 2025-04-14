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


(lib.originalrocket = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkOmZIjZADIGQp9IHOJxIjVADImwAGIAQM9IAFEGIIMAAIgilPIhPr6Aj+GkIo6JwIZxgZIpIqg");
	this.shape.setTransform(82.525,104.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj7IlIgFkGIgQs9IGwgGIBPL6IAiFPg");
	this.shape_1.setTransform(82.7,117.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Aj+GkIAFEFIIMAAIgilOIJIKgI5xAZgAhXwTIHOJxIjVADImwAGIjZADg");
	this.shape_2.setTransform(82.525,104.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.originalrocket, new cjs.Rectangle(-1,-1,167.1,210.8), null);


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


(lib.button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ApQJRQj3j1AAlcQAAlbD3j1QD1j3FbAAQFcAAD1D3QD3D1AAFbQAAFcj3D1Qj1D3lcAAQlbAAj1j3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-83.9,-83.9,167.9,167.9), null);


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


(lib.rockettween = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// Layer_1
	this.rocket_mc = new lib.originalrocket();
	this.rocket_mc.name = "rocket_mc";
	this.rocket_mc.setTransform(82.5,104.4,1,1,0,0,0,82.5,104.4);

	this.timeline.addTween(cjs.Tween.get(this.rocket_mc).wait(1).to({rotation:0.0235,y:104.15},0).wait(1).to({rotation:0.0983,y:103.35},0).wait(1).to({rotation:0.2225,x:82.65,y:101.9},0).wait(1).to({rotation:0.398,x:82.8,y:99.95},0).wait(1).to({rotation:0.6222,x:82.95,y:97.5},0).wait(1).to({rotation:0.8971,x:83.15,y:94.45},0).wait(1).to({rotation:1.2224,x:83.45,y:90.85},0).wait(1).to({rotation:1.5969,x:83.8,y:86.7},0).wait(1).to({rotation:2.0216,x:84.25,y:82},0).wait(1).to({rotation:2.4959,x:84.75,y:76.7},0).wait(1).to({rotation:3.0194,x:85.45,y:70.9},0).wait(1).to({rotation:3.5914,x:86.2,y:64.5},0).wait(1).to({rotation:4.2126,x:87.15,y:57.6},0).wait(1).to({rotation:4.8826,x:88.15,y:50.1},0).wait(1).to({rotation:5.5997,x:89.4,y:42.15},0).wait(1).to({rotation:6.3638,x:90.85,y:33.6},0).wait(1).to({rotation:7.1742,x:92.5,y:24.5},0).wait(1).to({rotation:8.0306,x:94.4,y:14.8},0).wait(1).to({rotation:8.9308,x:96.55,y:4.65},0).wait(1).to({rotation:9.8747,x:99.05,y:-6.1},0).wait(1).to({rotation:10.8604,x:101.85,y:-17.35},0).wait(1).to({rotation:11.8864,x:105,y:-29.2},0).wait(1).to({rotation:12.951,x:108.5,y:-41.55},0).wait(1).to({rotation:14.0523,x:112.5,y:-54.5},0).wait(1).to({rotation:15.1882,x:116.85,y:-67.95},0).wait(1).to({rotation:16.3565,x:121.75,y:-81.9},0).wait(1).to({rotation:17.5554,x:127.2,y:-96.35},0).wait(1).to({rotation:18.7817,x:133.2,y:-111.4},0).wait(1).to({rotation:20.0323,x:139.8,y:-126.95},0).wait(1).to({rotation:21.3053,x:147,y:-143.1},0).wait(1).to({rotation:22.5972,x:154.95,y:-159.65},0).wait(1).to({rotation:23.9056,x:163.6,y:-176.8},0).wait(1).to({rotation:25.2263,x:173.05,y:-194.5},0).wait(1).to({rotation:26.5564,x:183.35,y:-212.65},0).wait(1).to({rotation:27.894,x:194.4,y:-231.4},0).wait(1).to({rotation:29.2347,x:206.5,y:-250.6},0).wait(1).to({rotation:30.5763,x:219.55,y:-270.35},0).wait(1).to({rotation:31.9155,x:233.65,y:-290.65},0).wait(1).to({rotation:33.2489,x:248.75,y:-311.35},0).wait(1).to({rotation:34.5747,x:265.1,y:-332.65},0).wait(1).to({rotation:35.89,x:282.6,y:-354.4},0).wait(1).to({rotation:37.1922,x:301.35,y:-376.75},0).wait(1).to({rotation:38.4792,x:321.45,y:-399.45},0).wait(1).to({rotation:39.7493,x:342.95,y:-422.8},0).wait(1).to({rotation:41,x:365.8,y:-446.6},0).wait(1).to({rotation:42.2303,x:390.3,y:-470.9},0).wait(1).to({rotation:43.4384,x:416.25,y:-495.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-578.5,486.59999999999997,788.1);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rocket
	this.rocket_mc = new lib.rockettween();
	this.rocket_mc.name = "rocket_mc";
	this.rocket_mc.setTransform(1388.4,-264,1,1,0,0,0,82.5,104.4);

	this.timeline.addTween(cjs.Tween.get(this.rocket_mc).wait(1));

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
(lib.initKang = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
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
		
		    if (event.keyCode == 39 && root.background_mc.x > -1020) {
		        root.background_mc.x -= speed;
		        root.redHead_mc.scaleX = scaleX;
		    }
		
		   if (event.keyCode == 37 && root.background_mc.x < 2980) {
		        root.background_mc.x += speed;
		        root.redHead_mc.scaleX = -scaleX;
		    }
		}
		
		function handleKeyUp(event) {
		    root.redHead_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.rocket_mc.addEventListener("click", handleClickRocket);
		
		function handleClickRocket(event) {
			var whoosh_snd = createjs.Sound.play("whoosh");
		    root.background_mc.rocket_mc.play();
		    root.background_mc.rocket_mc.removeEventListener("click", handleClickRocket);
		    console.log("Rocket animation played once");
			
		}
		
		
		this.play_btn.addEventListener("click", handleClickPlayButton);
		
		function handleClickPlayButton(event) {
			var music_snd = createjs.Sound.play("music")
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		this.start_btn.addEventListener("click", startGame);
		
		function startGame() {
		  createjs.Sound.play("ambient");
		  this.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4DjQg2gvAAhSIAAiDIhZAAIExjwIAAB5IBbAAIAAB3IhbAAIAABaQAAAuAqAAQAeAAAWgfIAACoQgzAihKAAQhNAAg2gvg");
	this.shape.setTransform(1606.5,329.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiDCeQhFg9AAheQAAheBCg/QBDhABuAAQBOAABQAZIAAC6QhAgfg3AAQgfAAgRAKQgSAKAAARQAAAoBMAAQBBAAAsgWIAAC3Qg/AThJAAQh+AAhGg9g");
	this.shape_1.setTransform(1564.175,335.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AidCeQhDg+AAhjQAAhfA+g8QA+g8BiAAQAxAAArARQArAQAfAhQAgAhAOArQAPArAAA+IjeAAQAMAgAdASQAcASAkAAQBIAAAtguIAABLQhHBdiGAAQhtAAhEg9gAAFhfQgOARAAAhIBlAAQgBgfgOgSQgOgSgYAAQgTAAgPARg");
	this.shape_2.setTransform(1515.8,335.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiWE5IAAihQAVAGAPAAQAZAAAMgQQALgPAAgqIAAknQA+AZAxAAQA4AAAxgZIAAEvQAAB2g5A9Qg7A8hfAAQgyAAgngTgAAsjiQgSgTAAgYQAAgaASgSQASgSAaAAQAZAAASASQASASAAAaQAAAYgSATQgSASgZAAQgaAAgSgSg");
	this.shape_3.setTransform(1470.4,335.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AilCfQhCg9AAhiQAAhgBBg9QBAg9BmAAQBnAABAA9QBBA9AABgQAABhhBA9QhAA9hnAAQhkAAhBg8gAgigmQgNAOAAAVQAAAVANANQANANAVAAQAVAAANgNQANgNAAgVQAAgWgNgNQgNgNgVAAQgVAAgNANg");
	this.shape_4.setTransform(1428.8,335.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjaDWIAAmnIDZAAIAABdQAohhBPAAQAsAAAdAeQAcAcAAAtQAAAugcAdQgcAdgtgBQgzABglgnQgfAbAABJIAACfg");
	this.shape_5.setTransform(1380.875,335.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkMEMIAAoXIFEAAQBnAAA3A0QA3A0AABNQAABLg0A0Qg0A1hKAAQg+AAg8gvIAADdgAgfgiQALACAJAAQAaAAAQgRQARgQAAgcQAAgbgOgPQgOgQgZAAIgaAAg");
	this.shape_6.setTransform(1327.225,329.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhsEMIAAoXIDZAAIAAIXg");
	this.shape_7.setTransform(1255.875,329.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ai5C4QggggAAgvQAAg3AogiQAogiBAAAQAnAAAjAKQAAgdgWgRQgXgQgoAAQg8AAg/AhIAAh/QBdgyB0AAQBuAAA2AvQA0AwAABiIAADpIjZAAIAAggQgvAjg6AAQgwAAghgfgAhCA/QgMAKABAQQgBASANALQANAMAUAAQAUAAANgMIAAg7QgTgHgPAAQgVAAgMALg");
	this.shape_8.setTransform(1215.1,335.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuDWIAAj3QgBg0goAAQgSAAgUANIAAEeIjZAAIAAmnIDZAAIAAA2QA3g6BLAAQBLAAAnAqQAoAqAABRIAAEGg");
	this.shape_9.setTransform(1161.2,335.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhrERIAAmnQAqAYBEAAQA/AAArgYIAAGngAACimQgRgTAAgZQAAgZARgTQASgRAagBQAZABATARQARATAAAZQAAAZgRATQgTARgZABQgagBgSgRg");
	this.shape_10.setTransform(1117.2,329.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjcEMIAAoXIG5AAIAACGIjMAAIAABiICXAAIAACFIiXAAIAACqg");
	this.shape_11.setTransform(1079.925,329.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjJEPIBYjOIiWlPIDZAAIAyBxIAwhxIDUAAIjmIdg");
	this.shape_12.setTransform(1001.95,341.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AC8DWIAAj8QAAgXgKgMQgMgNgSAAQgUAAgTAOIAAEeIjNAAIAAj8QAAgXgKgMQgLgNgTAAQgTAAgUAOIAAEeIjaAAIAAmnIDaAAIAAA2QA0g6BOAAQBbABAtBJQAkgmAlgSQAkgSAtAAQBFAAAoArQAoAqAABMIAAEKg");
	this.shape_13.setTransform(932.325,335.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AilCfQhBg9AAhiQAAhgBAg9QBAg9BmAAQBnAABAA9QBAA9AABgQAABhhAA9QhAA9hnAAQhkAAhBg8gAghgmQgOAOAAAVQAAAVAOANQAMANAVAAQAVAAANgNQAOgNAAgVQAAgWgOgNQgNgNgVAAQgVAAgMANg");
	this.shape_14.setTransform(839.15,335.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag4DjQg1gvAAhSIAAiDIhZAAIExjwIAAB5IBaAAIAAB3IhaAAIAABaQgBAuApAAQAfAAAVgfIAACoQgzAihJAAQhOAAg1gvg");
	this.shape_15.setTransform(791.05,329.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AidCeQhDg+AAhjQAAhfA+g8QA+g8BiAAQAxAAArARQArAQAfAhQAfAhAPArQAPArAAA+IjeAAQAMAgAdASQAbASAlAAQBIAAAtguIAABLQhHBdiHAAQhsAAhEg9gAAFhfQgOARAAAhIBlAAQgBgfgOgSQgOgSgYAAQgTAAgPARg");
	this.shape_16.setTransform(723.55,335.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AC8DWIAAj8QAAgXgKgMQgMgNgSAAQgUAAgTAOIAAEeIjNAAIAAj8QAAgXgKgMQgLgNgTAAQgTAAgUAOIAAEeIjaAAIAAmnIDaAAIAAA2QA0g6BOAAQBbABAtBJQAkgmAlgSQAkgSAtAAQBFAAAoArQAoAqAABMIAAEKg");
	this.shape_17.setTransform(655.475,335.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AilCfQhCg9AAhiQAAhgBBg9QBAg9BmAAQBmAABBA9QBBA9AABgQAABhhBA9QhBA9hmAAQhkAAhBg8gAgigmQgNAOAAAVQAAAVANANQANANAVAAQAVAAANgNQANgNAAgVQAAgWgNgNQgNgNgVAAQgVAAgNANg");
	this.shape_18.setTransform(586.3,335.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiDCeQhFg9AAheQAAheBCg/QBDhABuAAQBOAABQAZIAAC6QhAgfg3AAQgfAAgRAKQgSAKAAARQAAAoBMAAQBBAAAsgWIAAC3Qg/AThJAAQh+AAhGg9g");
	this.shape_19.setTransform(536.425,335.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhsEMIAAoXIDZAAIAAIXg");
	this.shape_20.setTransform(498.175,329.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AidCeQhDg+AAhjQAAhfA+g8QA+g8BiAAQAxAAArARQArAQAfAhQAfAhAPArQAPArAAA+IjeAAQAMAgAdASQAbASAlAAQBIAAAtguIAABLQhIBdiGAAQhsAAhEg9gAAFhfQgOARAAAhIBlAAQgBgfgOgSQgOgSgYAAQgTAAgPARg");
	this.shape_21.setTransform(458.05,335.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABWEMIhVjUIhODUIiuAAIi+oXIDoAAIA+CvIBCivICjAAIBFCvIA7ivIDoAAIi1IXg");
	this.shape_22.setTransform(388.625,329.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ANIAAQAAFcj3D2Qj1D1lcAAQlbAAj1j1Qj3j2AAlcQAAlbD3j2QD1j1FbAAQFcAAD1D1QD3D2AAFbg");
	this.shape_23.setTransform(1736.5,948.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// button
	this.play_btn = new lib.button();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(1699.6,903.9);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1));

	// walking
	this.redHead_mc = new lib.walking();
	this.redHead_mc.name = "redHead_mc";
	this.redHead_mc.setTransform(872.2,818.2,1,1,0,0,0,-21,-127.5);
	this.redHead_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.redHead_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(2879.9,540,1,1,0,0,0,2879.9,-540);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,4799.9,540.0999999999999);
// library properties:
lib.properties = {
	id: '10D74DCE2D0D6A43925DB51E9FC8C7F1',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/music.mp3?1744343669093", id:"music"},
		{src:"sounds/whoosh.mp3?1744343669093", id:"whoosh"}
	],
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