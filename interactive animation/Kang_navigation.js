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


(lib.myself = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnmF3QgegxgchCQgshmgihwQg0ioAAhrQAAkCEOiEQDhhuFdAAQFKAABqDlQAsBgAPCZQAKBoAADFQAADBglCHAEJipQAKglAZgVQAXgWAbAAQAgAAAjAKQARAEApAQADhifIAUAAQATB4ARArQAiBZBGAHIAABaQgVAIgJAIQgDADgHALAHRg7IAAAKQhOATg6ABQAUgBApgKQBHgSAEgBgABfGfQAAhzCvAAQAyAAAZAxQAUAoAAA9QAAAogqAnQgpAlg0AKQg5AKgkgjQgqgpAAhfgAJwGnQgeBYgxA7QiECgk0AAQjDAAi3hqQgDgDgEgCAmehFQAYgIAagWQAQgMAfgcQA+gyBMAAQA0AAA2ATQBOAcAKADAjWgJQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACQgiABhGAAIAAgKAj0JEQh4g5g+hDQgfghgdgwAlFJOQiIhfgZh4");
	this.shape.setTransform(-19.5,-137.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhcBwQgqgpAAheQAAhzCuAAQAyAAAZAyQAUAoAAA7QAAAogqAnQgpAmg0AJQgMACgMAAQgoAAgcgbg");
	this.shape_1.setTransform(3.5,-93.9626);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("A29KRQAHhrAZhSQASg9AihHQAWgtAthQQCfkbB+ixQCtjwC9idIAHgGIAHAEQC3BqDDAAQEzABCEigQAxg8AehXQAHAFAJAEQCyBUDJCJQCDBZDdCsQBFA2AlAeQA5AvAqArQCqCvBHDyQBHDzgxDuQ20A+28BIQAAiBAFg/g");
	this.shape_2.setTransform(18.9504,-10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AkRJvIgGgDQAJgKAFgKQAIgQgKgLQgIgJgRAEQgNAEgNAMIgHAGQiIhfgZh4QAdAwAfAhQA+BDB4A5Qh4g5g+hDQgfghgdgwQgegygchBQgrhlgjhxQg0ioAAhrQAAkCEPiEQDhhuFcAAQFKAABpDlQAsBgAQCZQAKBoAADFQAADBglCIIgGAAQgTAAgEAPQgEAPATAPQgfBXgwA7QiECgk0AAQjCAAi4hrgABfGfQAABfAqApQAkAjA5gKQA0gKApglQAqgnAAgoQAAg8gUgoQgZgygyAAQivAAAABzgAGBC+QgVAJgJAHQgDADgHALQAHgLADgDQAJgHAVgJIAAhaQhGgIgihYQgRgrgTh4IgUAAIAUAAQATB4ARArQAiBYBGAIgAiugJIBogBQA4gCAngHIAAgUQgfgUg1AAQhOAAgOADQgnAIgYAnQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACIhoABIAAgKgAFJgdQA6gBBOgTIAAgKIhMATQgoAKgUABIAAAAgAk9iLQgfAcgQANQgaAVgYAIQAYgIAagVQAQgNAfgcQA+gyBMAAQA0AAA2AUQBOAcAKACQgKgChOgcQg2gUg0AAQhMAAg+AygAErjkQgYAXgKAkQAKgkAYgXQAYgVAbAAQAgAAAiAKQARAFAqAPQgqgPgRgFQgigKggAAQgbAAgYAVgAFJgdIAAAAgAGFgoIBMgTIAAAKQhOATg6ABQAUgBAogKg");
	this.shape_3.setTransform(-19.5,-137.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("A20N6QglAAgMgOQgLgMAAghQACiEAFhBQAKhuAahTQASg5AghDQAWgtAphKQCgkdCGi6QCujyC9ijIAIgHQANgLANgEQAQgFAJAKQAJAKgIARQgFAKgJAJIgHAGQi9CditDxQh+CwifEbQgtBQgWAuQgiBGgSA9QgZBSgHBrQgFBAAACAQW8hIW0g9QAxjvhHjzQhHjxiqivQgqgrg5gwQglgehFg2QjdisiDhZQjJiJiyhTQgJgFgHgFQgTgOAEgPQAEgPAUgBIAFAAQAOABAPAHQCpBQDgCZQCBBZCEBjQDXCkB5CKQCkC5A0DFQAbBmADCGQACBQgJCfQgCAVgCALQgFASgJAKQgLALgSAFQgNAEgVABQg6AEhNABIiGABQmoACt4A1QtNAznBAAIgSgBg");
	this.shape_4.setTransform(18.6857,-10.949);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AnmF3QgegxgchCQgshmgihwQg0ioAAhrQAAkCEOiEQDhhuFdAAQFKAABqDlQAsBgAPCZQAKBoAADFQAADBglCHAEJipQAKglAZgVQAXgWAbAAQAgAAAjAKQARAEApAQADhifIAUAAQATB4ARArQAiBZBGAHIAABaQgVAIgJAIQgDADgHALAHRg7IAAAKQhOATg6ABQAUgBApgKQBHgSAEgBgABfGxQAAgCAAgBQAHgaCoAAQAyAAAZAMQATAJABAOQAAABAAABQAAAAAAABQgCAJgoAJQgpAJg0ACQg5ADgkgIQglgJgEgTQgBgDAAgCgAJwGnQgeBYgxA7QiECgk0AAQjDAAi3hqQgDgDgEgCAmehFQAYgIAagWQAQgMAfgcQA+gyBMAAQA0AAA2ATQBOAcAKADAjWgJQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACQgiABhGAAIAAgKAj0JEQh4g5g+hDQgfghgdgwAlFJOQiIhfgZh4");
	this.shape_5.setTransform(-19.5,-137.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhcAbQglgIgEgTIgBgFIAAgCQAHgaCnAAQAyAAAZAMQATAJABANIAAACIAAABQgCAJgoAJQgpAJg0ACIgYABQgoAAgcgHg");
	this.shape_6.setTransform(3.5,-94.0466);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("AkRJvIgGgDQAJgKAFgKQAIgQgKgLQgIgJgRAEQgNAEgNAMIgHAGQiIhfgZh4QAdAwAfAhQA+BDB4A5Qh4g5g+hDQgfghgdgwQgegygchBQgrhlgjhxQg0ioAAhrQAAkCEPiEQDhhuFcAAQFKAABpDlQAsBgAQCZQAKBoAADFQAADBglCIIgGAAQgTAAgEAPQgEAPATAPQgfBXgwA7QiECgk0AAQjCAAi4hrgABfGuIAAADIABAFQAEATAlAJQAkAIA5gDQA0gCApgJQAogJACgJIAAgBIAAgCQgBgOgTgJQgZgMgyAAQioAAgHAagAGBC+QgVAJgJAHQgDADgHALQAHgLADgDQAJgHAVgJIAAhaQhGgIgihYQgRgrgTh4IgUAAIAUAAQATB4ARArQAiBYBGAIgAiugJIBogBQA4gCAngHIAAgUQgfgUg1AAQhOAAgOADQgnAIgYAnQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACIhoABIAAgKgAFJgdQA6gBBOgTIAAgKIhMATQgoAKgUABIAAAAgAk9iLQgfAcgQANQgaAVgYAIQAYgIAagVQAQgNAfgcQA+gyBMAAQA0AAA2AUQBOAcAKACQgKgChOgcQg2gUg0AAQhMAAg+AygAErjkQgYAXgKAkQAKgkAYgXQAYgVAbAAQAgAAAiAKQARAFAqAPQgqgPgRgFQgigKggAAQgbAAgYAVgAFJgdIAAAAgAGFgoIBMgTIAAAKQhOATg6ABQAUgBAogKg");
	this.shape_7.setTransform(-19.5,-137.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AnmF3QgegxgchCQgshmgihwQg0ioAAhrQAAkCEOiEQDhhuFdAAQFKAABqDlQAsBgAPCZQAKBoAADFQAADBglCHADhifIAUAAQATB4ARArQAiBZBGAHIAABaQgVAIgJAIQgDADgHALAEJipQAKglAZgVQAXgWAbAAQAgAAAjAKQARAEApAQAHRg7IAAAKQhOATg6ABQAUgBApgKQBHgSAEgBgABfGVQAAgGABgGQAHifCnAAQAyAAAZBLQASA0ACBNQAAACAAABQAAAAAAABQAAABAAABQAAAGAAAGQAAADAAADQgCA2goA1QgpA5g0ANQg5APgkgzQgkgzgFhxQAAAAAAgBQAAgEAAgFQgBgLAAgNgAJwGnQgeBYgxA7QiECgk0AAQjDAAi3hqQgDgDgEgCAmehFQAYgIAagWQAQgMAfgcQA+gyBMAAQA0AAA2ATQBOAcAKADAjWgJQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACQgiABhGAAIAAgKAj0JEQh4g5g+hDQgfghgdgwAlFJOQiIhfgZh4");
	this.shape_8.setTransform(-19.5,-137.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhcCkQgkgygFhxIAAgBIgBgIIAAgYIAAgMQAIifCmAAQAyAAAZBLQASA0ACBMIAAADIAAABIAAACIAAAMIAAAGQgCA1goA2QgpA5g0AMQgMAEgMAAQgoAAgcgog");
	this.shape_9.setTransform(3.5,-94.0295);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("AkRJvIgGgDQAJgKAFgKQAIgQgKgLQgIgJgRAEQgNAEgNAMIgHAGQiIhfgZh4QAdAwAfAhQA+BDB4A5Qh4g5g+hDQgfghgdgwQgegygchBQgrhlgjhxQg0ioAAhrQAAkCEPiEQDhhuFcAAQFKAABpDlQAsBgAQCZQAKBoAADFQAADBglCIIgGAAQgTAAgEAPQgEAPATAPQgfBXgwA7QiECgk0AAQjCAAi4hrgABfGJIAAAMIAAAZIAAAAIAAADIABAFIAAABQAFBxAkAzQAkAzA5gPQA0gNApg5QAog1ACg2IAAgGIAAgMIAAgCIAAgBIAAgCIAAAAQgChOgSg0QgZhKgyAAQingBgICfgAGBC+QgVAJgJAHQgDADgHALQAHgLADgDQAJgHAVgJIAAhaQhGgIgihYQgRgrgTh4IgUAAIAUAAQATB4ARArQAiBYBGAIgAiugJIBogBQA4gCAngHIAAgUQgfgUg1AAQhOAAgOADQgnAIgYAnQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACIhoABIAAgKIAAAKgAFJgdQA6gBBOgTIAAgKIhMATQgoAKgUABIAAAAgAk9iLQgfAcgQANQgaAVgYAIQAYgIAagVQAQgNAfgcQA+gyBMAAQA0AAA2AUQBOAcAKACQgKgChOgcQg2gUg0AAQhMAAg+AygAErjkQgYAXgKAkQAKgkAYgXQAYgVAbAAQAgAAAiAKQARAFAqAPQgqgPgRgFQgigKggAAQgbAAgYAVgAFJgdIAAAAgAGFgoIBMgTIAAAKQhOATg6ABQAUgBAogKg");
	this.shape_10.setTransform(-19.5,-137.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AnmF3QgegxgchCQgshmgihwQg0ioAAhrQAAkCEOiEQDhhuFdAAQFKAABqDlQAsBgAPCZQAKBoAADFQAADBglCHADhifIAUAAQATB4ARArQAiBZBGAHIAABaQgVAIgJAIQgDADgHALAEJipQAKglAZgVQAXgWAbAAQAgAAAjAKQARAEApAQAHRg7IAAAKQhOATg6ABQAUgBApgKQBHgSAEgBgABgGxQgBgBAAgCQAAgEAAgFQAAgCAAgBQAAgCABgCQAHhQCnAAQAyAAAZAnQASAZACAoAFtHBQgCAcgoAbQgpAdg0AGQg5AIgkgaQgkgagFg5QAAABAAAAAFtG3IAAACQAAAAAAABQAAABAAABAJwGnQgeBYgxA7QiECgk0AAQjDAAi3hqQgDgDgEgCAmehFQAYgIAagWQAQgMAfgcQA+gyBMAAQA0AAA2ATQBOAcAKADAjWgJQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACQgiABhGAAIAAgKAj0JEQh4g5g+hDQgfghgdgwAlFJOQiIhfgZh4");
	this.shape_11.setTransform(-19.5,-137.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhcBTQglgagEg5IAAAAIgBgEIAAgCIAAgKIAAgDIAAgDQAIhRCmAAQAyAAAZAnQASAaACAmIAAACIAAABIAAABIAAACIAAADIAAADQgCAbgoAcQgpAcg0AHQgMACgLAAQgpAAgcgVg");
	this.shape_12.setTransform(3.5,-94.091);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFCC").s().p("AkRJvIgGgDQAJgKAFgKQAIgQgKgLQgIgJgRAEQgNAEgNAMIgHAGQiIhfgZh4QAdAwAfAhQA+BDB4A5Qh4g5g+hDQgfghgdgwQgegygchBQgrhlgjhxQg0ioAAhrQAAkCEPiEQDhhuFcAAQFKAABpDlQAsBgAQCZQAKBoAADFQAADBglCIIgGAAQgTAAgEAPQgEAPATAPQgfBXgwA7QiECgk0AAQjCAAi4hrgACJIJQAkAaA5gHQA0gHApgcQAogcACgbIAAgEIAAgCIAAgCIAAgBIAAgBIAAgCQgCgogSgaQgZgmgyAAQinAAgIBRIAAACIAAAEIAAAJIAAADIABAFIAAABIAAgBQAEA5AlAagAGBC+QgVAJgJAHQgDADgHALQAHgLADgDQAJgHAVgJIAAhaQhGgIgihYQgRgrgTh4IgUAAIAUAAQATB4ARArQAiBYBGAIgAiugJIBogBQA4gCAngHIAAgUQgfgUg1AAQhOAAgOADQgnAIgYAnQAYgnAngIQAOgDBOAAQA1AAAfAUIAAAUQgnAHg4ACIhoABIAAgKIAAAKgAFJgdQA6gBBOgTIAAgKIhMATQgoAKgUABIAAAAgAk9iLQgfAcgQANQgaAVgYAIQAYgIAagVQAQgNAfgcQA+gyBMAAQA0AAA2AUQBOAcAKACQgKgChOgcQg2gUg0AAQhMAAg+AygAErjkQgYAXgKAkQAKgkAYgXQAYgVAbAAQAgAAAiAKQARAFAqAPQgqgPgRgFQgigKggAAQgbAAgYAVgAFJgdIAAAAgAGFgoIBMgTIAAAKQhOATg6ABQAUgBAogKg");
	this.shape_13.setTransform(-19.5,-137.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_2},{t:this.shape_5}]},4).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_4},{t:this.shape_2},{t:this.shape_11}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-213.3,304.20000000000005,291.4);


(lib.ciclebutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AOnAAQAAGEkSERQkRESmEAAQmDAAkSkSQkRkRAAmEQAAmDERkSQESkRGDAAQGEAAERERQESESAAGDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqVKVQkRkRAAmEQAAmDERkSQESkRGDAAQGEAAERERQESESAAGDQAAGEkSERQkRESmEAAQmDAAkSkSg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AqVKVQkRkRAAmEQAAmDERkSQESkRGDAAQGEAAERERQESESAAGDQAAGEkSERQkRESmEAAQmDAAkSkSg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AQ8AAQAAHCk9E9QgYAYgYAWQkvEPmgAAQmfAAkvkPQgZgWgXgYQi9i9hMjrQg0ihAAi2QAAi1A0ihQBMjrC9i9QE9k9HBAAQHCAAE9E9QE9E9AAHBg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ArNMtQgZgXgYgXQi8i9hNjrQg0ihAAi2QAAi1A0ihQBNjrC8i9QE9k9HBAAQHBAAE+E9QE9E9AAHBQAAHBk9E+IgxAuQkuEPmgAAQmfAAkukPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-109.4,218.8,218.8);


(lib.buttermilk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoxC0QgKgHgBgKQgBgTAjgQQAigRAagcIhihWQgRgQgDgKQgGgWAigeQASgPAMADQAIACAFAIQAEAIgBAJQgCAOgPAQQA2ArArAlQASARADALQAFASgNASQgIALgVAPIgsAgQgXASgPABIgDAAQgJAAgJgFgAAcCZQgJgKABgLQAAgPASgZIAhgsQAJgNgCgGQgCgIgOgGIg5gVQgegNgHgPQgNgbAjglQAVgaAVgCQANgCALAKQALALgEAMQgDAIgQALQgQALgCAJQALAIATAIIAfAMQApAQAFAdQACARgMAYQgIAQgWAfIgZAlQgMAQgJACIgEAAQgIAAgHgHgAHpBpQgKgCgFgIQgIgPAUgaIAjgsQAdgjgIgYQgFgPgYgOQgfgTgigPQgPgHgIgFQgMgHgEgLQgEgJACgJQABgKAHgGQAGgHAKgBQAKgCAIAFQAEADAFAGIAIAJQAKAKAXALQAgAQAIAFQAWAMAOAOQARASAEAQQAEAUgIAZQgIAWgQAaQgLARgWAcQgPAUgMAGQgGADgGAAIgHgBg");
	this.shape.setTransform(-2.8427,-106.7356);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoxGpQgKgPgBgZQgBgsAjgnQAigoAahCIhijMQgRgmgDgZQgGg0AihFQASgkAMAGQAIAFAFAUQAEATgBAVQgCAhgPAmQA2BmArBZQASAnADAbQAFArgNAqQgIAZgVAkIgsBMQgXAqgPADIgDABQgJAAgJgOgAAcFqQgJgXABgbQAAgiASg9IAhhoQAJgegCgPQgCgSgOgOIg5g0QgegegHgjQgNhAAjhZQAVg8AVgGQANgEALAYQALAZgEAcQgDAUgQAaQgQAZgCAWQALAUATARQAVASAKALQApAnAFBFQACAogMA6QgIAlgWBKIgZBWQgMAmgJAFIgEABQgIAAgHgRgAHpD4QgKgFgFgTQgIgjAUg+IAjhoQAdhUgIg4QgFgkgYgiQgfgsgigkQgPgPgIgMQgMgSgEgZQgEgVACgXQABgWAHgPQAGgQAKgDQAKgEAIAMQAEAHAFANIAIAWQAKAXAXAbQAgAlAIAMQAWAdAOAgQARArAEAnQAEAvgIA7QgIA2gQA9QgLAngWBDQgPAwgMANQgGAHgGAAQgDAAgEgCg");
	this.shape_1.setTransform(-3.5927,-137.1985);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AoxJ7QgKgWgBglQgBhCAjg6QAig8AahjIhikxQgRg4gDgmQgGhNAihoQASg1AMAIQAIAIAFAdQAEAdgBAgQgCAxgPA5QA2CYArCFQASA6ADApQAFBAgNA/QgIAlgVA1IgsBzQgXA+gPAFIgDAAQgJAAgJgUgAAcIdQgJgiABgpQAAgzAShaIAhibQAJgtgCgXQgCgagOgVIg5hPQgegsgHg1QgNhgAjiEQAVhaAVgJQANgGALAkQALAlgEAqQgDAegQAnQgQAlgCAhQALAdATAbQAVAaAKAQQApA6AFBoQACA8gMBWQgIA3gWBwIgZCAQgMA5gJAHIgEABQgIAAgHgZgAHpFyQgKgGgFgdQgIg1AUhbIAjicQAdh+gIhTQgFg3gYgyQgfhCgig1QgPgXgIgSQgMgagEgmQgEggACgiQABghAHgXQAGgXAKgFQAKgFAIARQAEALAFAUIAIAhQAKAhAXApQAgA3AIASQAWAsAOAvQARBAAEA6QAEBHgIBYQgIBRgQBbQgLA7gWBjQgPBIgMAUQgGAJgGAAQgDAAgEgDg");
	this.shape_2.setTransform(-3.5927,-194.9617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_2}]},5).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(10,1,1).p("AGVzmQiqgTjIAAQmlAAkXBZQlTBugzDjQgJAoAAAsQAAACAAACQAAAPADAPQAYB0DABOQDgBaFlAAQH3AAGgiWQC+hFBshTQBVhCAVhBQAGgUAAgUQAAjXlChPQiRgkjBgGQhVgChfADAw8sFQABAGACAGQAAABAAABQADAPAEARQApC+BcG4QBMFuBHExQAaBxAPD9QAXDPBWAlQClBICZAOQAzAEEiAAQEnAAB9gfQB/ghA3hbQAkg9AvjFQA+kCA/izQBfkLBElzQAkjMA9nH");
	this.shape_3.setTransform(5.5,-23.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlLQwQiZgOilhHQhWgmgXjPQgPj9gahwQhHkyhMluQhcm4gpi9IANgDQAYB0DABOQDgBbFlgBQH2AAGgiWQC+hEBshUQBWhCAUhBIAbAFQg9HHglDMQhDF0hfEKQhACzg9ECQgvDFglA9Qg2BbiAAhQh8AgknAAQkiAAgzgFg");
	this.shape_4.setTransform(6.0125,-3.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AtMFEQjBhOgXh0QgEgPAAgPIAAgEQAAgsAJgoQAzjiFUhuQEWhZGlAAQDIAACqATIgTAAIg8gBIgBAAIAAAAIhgACIgEAAIAEAAIBggCIAAAAIABAAIA8ABIATAAQDBAGCQAkQFDBPAADXQAAAUgHAUQgUBAhWBCQhsBTi+BFQmfCWn3AAQllAAjfhagAGVmKIAAAAg");
	this.shape_5.setTransform(5.5,-109.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-260.5,227,369.5);


(lib.anchovypizza = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACMqIQADAEADAFQEQjoCiiTIAUAAQC3IFFgKjQFqK5CtCUQhKgklHgNQAYAnAHAKACDBOQAjhQAdgcQApgmBPAAQAkAAAdAfQAQARAYAfIAAAyQgQAAgyARQgZAIgVADQgSgBgUgBQgrgCg2gEQgXgCgTgBQhZgHgCAAQhbAAgOAFQgdAJg3BCIAABQIBkAAQASgPAegRQAQgKAigTQA7glAWg0QABgCAAgBgABahiQhSgcgYgGQgngKgngEQgWgCgXAAQiCAAgVAFQg4ANhJBIIAABtQAWAAArAFQAsAFALAAQBuAAAvg0QAhgjAKhNQADgYACgTQAJg6AFgNQAUgzBBAAQA8AAAsA8QArA6gMA0IgyAAIgyAAAgTB5IgyAeACQGlIAMAAQAXAAAfAAQAbAAA4ABQAwgBAdgLQBLgcgEhvIiDAAIAAgcQgfAGgxAKQhaASgoASQg8AcAAArQAAAuA9AIQABABAqAAgAFyBbQgaAAgkgCAE2DzIAAg+QAZgXAJgHQAbgTAdgBQAUAUAAAjQAAAbg7ASQgNAEgmAIgAIwEFQgeAAgKAKIhPAAQgBgFAAgFABkFLICMAAACcGlQA/ABAqAcQAxAiAABBQAABDgpAMQgQAEgfgBQgjgBgVgBQhJg1gmgVQgjgTgigOQAagoAYgVQAugmA+gCACSp/QCPDfCtDmQBvCUDZENQB2CTCaD8QCXD5A4BbQi3gHkGAAQmhACjQAAQlpgCjZgOQkxgTmigjQnBgmh2gIQHxl+L8p+QE/kKDrjKgAJiJOQAGg6ATgYQAggnBTAAQAxAAAqAyQAnAwAAAvQAAANgbAPQgDABgEACQgeAOgQAAANmKJQgJgEgIgDQhcgqgogHQgSgDhdAAQgZgBgeAAQhdgGgfAGQgzAJAAA9QAAA8BuAAQBKAAAZgnQAOgWAGhAQAAgCABgCAHqJ1Ig8AAQAAAIgHAGQgJAGgOAAAipJNQANgXAvgvAgOIKQhUghhRAAQguAAgOAVQgKAOAAAtQAAA0AUAcQAWAeArAAQAqAAAhgoQANgQAshJQAJgPAJgNgADcKdQgdgWgZgSAqtHVQATgtAKgYQAYg5AXgWIA8AAQAIAYAGAcQAGAeAAASQAAAUgVAZQgTAXgYATQgigPg6gYQgKgFgMgFQiKg6hFAAQhCAAgoAeQgnAfAAA0QAAAxBaAlQBIAdAwAAQBcAAA6h+QAIgSAGgQgAkhg6QgQANgeAOQgeANgOAAAobIRQgFgBgxgUAv7HzQAQAAAdgMQAegNAPgP");
	this.shape.setTransform(19,-45.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AHWGyQAAg9AygJQAggGBdAGIA2AAIAAAFQgGBAgPAWQgZAnhJAAQhuAAAAg8gAIBGiQgJAGgOAAQAOAAAJgGQAHgGAAgIIA8AAIg8AAQAAAIgHAGgAiLGoQgUgcAAg0QAAgtAKgOQAOgVAuAAQBRAABTAhIgSAcQgrBJgNAQQghAogqAAQgqAAgXgegAhPFsQANgXAvgvQgvAvgNAXgAMrFwQgSgDhegBQAHg5ATgYQAfgnBUAAQAxAAApAyQAoAwAAAvQAAANgbAPQhcgqgogHgAE3GWIg3gCQhJg1gmgVQgjgTgjgOQAbgoAZgVQAtgmA+gCIAMAAIgMAAIgrgBQg9gIAAguQAAgrA8gcQApgSBZgSIBQgQIAAg9QAYgXAKgHQAbgTAdgBQAUAUAAAjQAAAbg7ARQgNAEgmAIIAAAcICDAAQAEBvhLAcQgdALgwABIhTgBIg2AAQA/ABAqAcQAxAiAABBQAABDgpAMQgNADgYAAIgLAAgAFKBqIiMAAgAtvF3QhaglAAgxQAAg0AngfQAogeBCAAQBFAACKA6IAWAKIgNAiQg7B+hcAAQgwAAhIgdgAt0EGQgdAMgQAAQAQAAAdgMQAfgNAOgPQgOAPgfANgApTD0IAehFQAXg5AXgWIA8AAQAIAYAGAcQAGAeAAASQAAAUgVAZQgTAXgXATIhdgngApTD0IAAAAgAg7AGIAAhPQA4hCAbgJQAOgFBcAAIBbAGIgBAEQgXA0g6AlIgzAdQgeARgSAOgAAUhJIAygegAFoiJIhhgGIgqgEQAjhQAdgcQApgmBPAAQAkAAAdAfQAQARAYAgIAAAyQgQAAgyARQgZAIgVADIgmgCgADdiTIAAAAgAkIioQgrgFgWAAIAAhuQBKhIA3gNQAVgFCCAAQAXAAAWACIgFArQgKBNghAkQgvA0huAAQgLAAgsgFgAj1kAQgeANgOAAQAOAAAegNQAfgOAPgNQgPANgfAOgAC0lDQhSgcgZgGQgngKgmgEQAIg6AFgNQAVgzBBAAQA7AAAtA8QArA6gMA0gAgElzIAAAAg");
	this.shape_1.setTransform(10,-23.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AQAMeQmhACjQAAQlpgCjZgOQkwgTmjgjQnBgmh2gIQHxl/L9p9QE9kKDsjKQCPDeCtDnQBvCUDZEMQB2CTCaD9IDQFUQi3gHkHAAgAJ3GoQgzAJAAA9QAAA8BuAAQBKAAAZgnQAOgWAGhAIABgFQBdABASADQAoAGBdAqIAQAIIgQgIQAagOAAgNQAAgvgngwQgqgygxAAQhTAAggAnQgTAYgGA5Ig3AAQgugDgfAAQgfAAgQADgAgmFYQgLAPAAAtQAAA0AVAcQAWAeApAAQAqAAAigpQANgPArhJIASgcQhTghhSAAQgtAAgNAUgAGkH4Ig2goIA2AogAQWHgQgeAOgQAAQAQAAAegOIAIgEIgIAEgAGuBdQhZATgpASQg8AcAAAqQAAAvA9AIIAsAAQg+ACguAnQgZAVgbAoQAjAOAjATQAmAVBJA1IA4ACQAfABAQgFQApgLAAhDQAAhBgxgiQgpgcg/gCIA1AAIBTABQAwgBAdgKQBLgcgEhvIBPAAQAKgLAeAAQgeAAgKALIhPAAIgBgLIABALIiDAAIAAgdQAngIAMgEQA7gRAAgcQAAghgUgVQgdACgbATQgJAGgZAXIAAA9IhQAQgAszEKQgoAfAAA0QAAAxBaAkQBIAeAwAAQBcAAA7h/IAOghIBcAnQAxAUAEABQgEgBgxgUQAYgUATgWQAUgZAAgVQAAgRgGgeQgGgcgIgZIg8AAQgWAXgYA5IgdBFIgXgKQiKg6hFgBQhCABgnAegACGhYQgcAJg4BBIAABPIBkAAQASgOAegRIAzgeQA7gjAWg1IACgDIApADIBiAHIAlACIA+ACIg+gCQAWgDAYgJQAygQAQgBIAAgxQgYghgQgRQgdgegkAAQhPAAgpAmQgdAcgiBQIhcgHQhcABgOAFgAhak1Qg3AOhKBIIAABtQAWAAAsAGQAsAEAKAAQBtABAvg0QAhgkAKhNIAGgrQAmADAnALQAZAGBSAbIgyAAIAyAAIAyAAQAMgzgrg6Qgsg9g8ABQhBAAgVAzQgFANgIA6QgXgDgXABQiAAAgWAEgAEikIg");
	this.shape_2.setTransform(-1.0375,-29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AFpPKIjPlUQiaj8h1iTQjZkNhviUQitjmiPjfQEQjoCiiTIAUAAQC2IFFgKjQFpK5CuCUQhKgklHgNg");
	this.shape_3.setTransform(109.8,-45.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.anchovypizza, new cjs.Rectangle(-149,-148.8,336,205.8), null);


// stage content:
(lib.Kang_navigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click", changeLine01);
		function changeLine01(){
		    console.log("will change line 1");
		    root.line01_txt.text = line01;
		}
		var line01 = "Anchovy Pizza";
		
		this.line02_txt.addEventListener("click", changeLine02);
		function changeLine02(){
		    console.log("will change line 2");
		    root.line02_txt.text = line02;
		}
		var line02 = "ButterMilk";
		
		this.line03_txt.addEventListener("click", changeLine03);
		function changeLine03(){
		    console.log("will change line 3");
		    root.line03_txt.text = line03;
		}
		var line03 = "My Self";
		
		var root = this;
		stage.enableMouseOver();
		this.stop();
		
		this.toFrame02_btn.addEventListener("click", toFrame02);
		
		function toFrame02() {
		    console.log("Moving to Frame 2");
			root.gotoAndStop("artwork");
		}
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click", toFrame01);
		
		function toFrame01() {
		    console.log("going to frame 1");
		    root.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.ciclebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(449.7,477.05);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.ciclebutton(), 3);

	this.toFrame01_btn = new lib.ciclebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(858,454.9);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.ciclebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// pizza
	this.instance = new lib.anchovypizza();
	this.instance.setTransform(613.9,496.55,1,1,0,0,0,19,-46);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// milk
	this.instance_1 = new lib.buttermilk();
	this.instance_1.setTransform(254.15,469.3,1,1,0,0,0,5.5,-23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// myself
	this.instance_2 = new lib.myself();
	this.instance_2.setTransform(455.6,352.6,1,1,0,0,0,18.7,-67.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("누구랑 먹냐고", "bold 40px 'Arial'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 42;
	this.line03_txt.lineWidth = 659;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(471.9,224.7);

	this.line02_txt = new cjs.Text("내가 마시는 거", "bold 40px 'Arial'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 42;
	this.line02_txt.lineWidth = 659;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(471.9,157.45);

	this.line01_txt = new cjs.Text("내가 좋아하는 피자", "bold 40px 'Arial'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 42;
	this.line01_txt.lineWidth = 659;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(471.9,90.45);

	this.text = new cjs.Text("고니치와", "bold 40px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.parent = this;
	this.text.setTransform(473.75,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("EhNjg0JMCbHAAAMAAABoTMibHAAAg");
	this.shape.setTransform(485.425,324.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("EhNjA0KMAAAhoTMCbHAAAMAAABoTg");
	this.shape_1.setTransform(485.425,324.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EhS7g5uMCl3AAAMAAABzdMil3AAAg");
	this.shape_2.setTransform(478.075,336.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("EhS7A5vMAAAhzdMCl3AAAMAAABzdg");
	this.shape_3.setTransform(478.075,336.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(426.3,285.8,583.5999999999999,421.09999999999997);
// library properties:
lib.properties = {
	id: 'FA16C407DE3DC940A564333FE01563F7',
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
an.compositions['FA16C407DE3DC940A564333FE01563F7'] = {
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