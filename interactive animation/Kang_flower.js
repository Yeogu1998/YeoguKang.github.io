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



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2238,159);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2198,167);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2203,178);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2229,189);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2196,183);


(lib.wow = function(mode,startPosition,loop,reversed) {
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
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// wow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(11,1,1).p("ABZiIQgVgJgpgLABZiIQg9AIg+AnQgoAZhCA6QhQBFglAyQg4BKgDBKQgCAjAMAeQANAhAaAOQAgAQAzgJQAygKA6gZQAkgQBBgkQAzgaAXgWQAgghAPg3QAKgkAIhCQAGgygDgeQgEgtgXgcQgTgXgggPgAIAnYQBBF6CxFQQBtkNAwiCQBUjgAyi5QBxGdDfFpQAaAvAegCQAPAAAPgMQAJgJANgRQEHmDCzmpA+KmQQBmFtBdC/QCOEmDVCUQB/mnACm5QA5BFAuBpQAXA0AxCMQArB8AhBCQAxBjBCBAQDWndAzoC");
	this.shape.setTransform(28.125,-4.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(11,1,1).p("ABZk5QgVgVgpgZABZk5Qg9ASg+BaQgoA5hCCGQhQCfglBzQg4CqgDCqQgCBSAMBFQANBMAaAgQAgAlAzgWQAygWA6g7QAkgjBBhTQAzg8AXg0QAghMAPh9QAKhSAIiYQAGh0gDhGQgEhngXhCQgTg0gggigAIAxAQBBNnCxMGQBtprAwksQBUoEAympQBxO1DfNBQAaBsAegEQAPAAAPgdQAJgUANgoQEHt6CzvUA+KuZQBmNIBdG4QCOKlDVFVQB/vNACv5QA5CfAuDxQAXB5AxFCQArEeAhCXQAxDlBCCTQDWxMAzyf");
	this.shape_1.setTransform(28.125,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(11,1,1).p("ACLnbQhfAchhCHQg/BYhoDKQh8Dyg7CuQhXECgFECQgDB8ATBpQAUBzApAxQAyA4BPgiQBPghBahZQA5g2Bmh9QBQhbAjhPQAzhzAYi+QAPh9AMjmQAKixgFhpQgGidgkhkQgdhOgzg0Qghggg/gmAMh5yQBlUpEVSWQCrusBLnGQCDsPBOqFQCxWgFdTwQApCkAvgHQAXAAAXgsQAPgeATg8QGc1HEY3OEgvLgV2QCgT7CRKcQDeQCFNIFQDH3DAD4HQBZDxBIFtQAkC4BMHpQBEGxAzDlQBOFcBmDeQFQ6DBP8C");
	this.shape_2.setTransform(28.175,-5.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(11,1,1).p("ACLkWQhfARhhBPQg/AzhoB3Qh8CMg7BmQhXCXgFCXQgDBJATA9QAUBEApAcQAyAhBPgUQBPgTBag0QA5ggBmhJQBQg1AjgvQAzhDAYhvQAPhJAMiHQAKhngFg9QgGhcgkg6QgdgugzgfQghgSg/gXAMhvFQBlMFEVKuQCrolBLkKQCDnKBOl5QCxNKFdLjQApBgAvgEQAXAAAXgZQAPgSATgkQGcsVEYtmEgvLgMxQCgLpCRGHQDeJYFNEvQDHtgADuGQBZCNBIDWQAkBrBMEeQBED+AzCGQBODLBmCCQFQvPBPwa");
	this.shape_3.setTransform(28.175,-5.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(11,1,1).p("ABmkWQgYgSgvgXABmkWQhGARhHBPQguAzhMB3QhbCMgrBmQhACXgECXQgCBJAOA9QAOBEAfAcQAkAhA6gUQA6gTBCg0QAqggBKhJQA7g1AagvQAlhDAShvQALhJAJiHQAHhngEg9QgEhcgbg6QgVguglgfgAJLvFQBLMFDKKuQB+olA3kKQBgnKA5l5QCCNKEALjQAeBgAigEQARAAARgZQALgSAOgkQEusVDOtmEgimgMxQB2LpBqGHQCiJYD1EvQCStgACuGQBBCNA1DWQAaBrA4EeQAyD+AmCGQA4DLBMCCQD2vPA6wa");
	this.shape_4.setTransform(28.225,-5.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(11,1,1).p("ABOikQg1AKg2AvQgkAeg6BHQhGBSghA9QgxBZgDBaQgCArALAkQALAoAYARQAcATAsgLQAsgMAzgfQAggSA5gsQAtgfAUgcQAcgoAOhBQAIgsAHhPQAFg+gCgjQgEg3gUgjQgQgbgdgSQgSgLgkgOAHCo8QA5HKCcGXQBglFAqidQBKkQArjgQBkHzDEG2QAXA5AbgCQANAAAMgPQAJgLALgVQDnnTCeoEA6hnjQBbG5BRDnQB8FkC8CzQBwn/ABoXQAyBUApB+QAUBAArCpQAmCWAdBQQArB4A6BOQC9pCAspu");
	this.shape_5.setTransform(28.225,-5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(11,1,1).p("ABOikQgSgLgkgOABOikQg1AKg2AvQgkAeg6BHQhGBSghA9QgxBZgDBaQgCArALAkQALAoAYARQAcATAsgLQAsgMAzgfQAggSA5gsQAtgfAUgcQAcgoAOhBQAIgsAHhPQAFg+gCgjQgEg3gUgjQgQgbgdgSgAHCo8QA5HKCcGXQBglFAqidQBKkQArjgQBkHzDEG2QAXA5AbgCQANAAAMgPQAJgLALgVQDnnTCeoEA6hnjQBbG5BRDnQB8FkC8CzQBwn/ABoXQAyBUApB+QAUBAArCpQAmCWAdBQQArB4A6BOQC9pCAspu");
	this.shape_6.setTransform(28.225,-5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(11,1,1).p("ABTjKQgTgOgmgQABTjKQg5AMg5A5QgmAmg+BXQhLBmgiBKQg1BugDBuQgCA1AMAtQAMAxAZAVQAdAYAwgOQAvgPA2gmQAhgWA9g2QAwgnAVgiQAfgxAOhRQAJg1AIhiQAFhMgDgsQgEhDgWgqQgQgigfgWgAHerAQA9I0CmH1QBmmRAtjCQBOlOAukTQBqJmDRIbQAYBGAcgDQAOAAANgSQAJgNAMgaQD2pACop6A8MpTQBhIfBWEdQCEG1DIDdQB2p1ACqSQA1BnArCbQAVBPAuDQQAoC5AfBhQAuCVA+BfQDIrHAwr+");
	this.shape_7.setTransform(28.25,-5.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.3,-219.3,615,428.6);


(lib.ground = function(mode,startPosition,loop,reversed) {
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
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// gound
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-559.35,-44.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-559.95,-9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-547.95,37,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-547.75,-58.2,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-564.95,-36.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-564.9,-58.2,1119.5,184.2);


(lib.flowercelanimation = function(mode,startPosition,loop,reversed) {
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

	// petals
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AJBFZIgJAAIgEAAIgjgEIgBAAIgBgBIgCAAIgMgCQgigIgdgLQgggNgagQIgNgGIAAgBIgBgBIgogdQgXgSgXgZIgPgSIgBgBIgBgBIgBgBIgRgWIAAAAIgBgCIgPgWIAAAAIAAgBIgBgBIgCgDIgUgmIgBgCIgBgBIgPgjIAAgBIAAAAIgCgEIgJgfQgBAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAcgQIACgBIABgBIABAAIAAAAIAjgQIADAAIgBgBIgIgEIgBAAIAAgBIgBAAIgCgCIgEgBIgXgPQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAIAHggIABgCIAAgBIAMgjIAAgBIABgBIABgCIASgnIAAgBIABgCIALgVIABAAIAAgBIAPgWIAAgBIABgBIAOgSQAUgZAUgSIAFgEIAdgYIABAAIAAgBIAcgRIABgBIABAAIAvgVIADgBIAEgBIAOgFIACAAIABgBIAfgHIACAAIAggEIALAAQAZgCAhADIAVADIACAAIACAAIAYAGIACABIACAAIAYAHIABAAIABABIADABIBKAfIAAAAIABABIABABIACABIAEACIAWAOQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgIAgIAAABIAAABIgMAjIgBABIAAACIgCACIgRAnIAAAAIgBACIgMAVIAAABIgBAAIgOAWIgBACIAAAAIgOATQgVAZgTARIgiAcIgBABIgBAAIgcASIgBAAIgBAAIgBAAIAcAOIAMAHIABAAIABABIAeAVIAJAIQAYASAWAZIAQASIABABIABABIAAABIARAWIABABIAAABIAPAXIABAAIAAABIAAABIACACIAVAmIABACIAAACIAPAjIABABIAAAAIABADIAKAfIAAABIgBABIgcAQIgCABIgBABIAAAAIgBAAIhSAgIgBABIAAAAIgBABIgBAAIgZAGIgBAAIgBAAIgCABIgWAEIgEABIgCAAIgCAAIgXADQgXACgTAAIgVgBgAm/CrIiLgHIhdgKIgCAAQhIgJgtg4Qgug3AGhHQAGhLA4gwQA5gwBKAGIDiAfIABABIACAAIBSASIAzAOIDIBEIADACIADABIBeAsIADADIAfAPIADADIADABIBbA4IAMAKQAAAAABABQAAAAAAAAQgBAAAAAAQAAAAAAAAIg2AXIhpAhIikAhIgEAAIjKAQg");
	this.shape.setTransform(-55.9672,-332.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("APkIeIgCAAIhlgKQg7gHg9gPQg7gNg9gUQhCgVg0gVQg0gVg6geIgKgFIgDgCIhLgrIgCgBIghgVIgDgCIgBAAIgIgEIgLgIIgBgBIgvgnIgkgGQghgIgmgNIgJgEIgEgCIgEgBIhCgdIgpgYIgKgKIgQAIQgpATgjAOIgYAJIicAqIiRATQgcADg4ABIgqABIgLgBIidgMIjNgpIiRgsIiqhFQgygWgcgwQgdgvADg5QAFhKA4gxQA4gxBKAFIBFAFIDgAaIDtAuIDMA5IA4AUIC8BNIBlA0IgCgPIgBgaQABgLACgKQABgKAEgLIAFgQIAHgOQACgGAEgGIAQgYIAbgcIADgCIAKgIIAugcIBfgkIC3gyICAgdIgBABIAAAAIACgBIADAAIFchMIAEgCIAZgGIAggJIAdgIQAYgIAagKIAVgJIACgBIAHgEIACgBIACgBIAFgCIAVgNIAKgIIACgCIABAAIAIgIIACgDIAEgDIABABIAAACIAAACIAAAEIgBAKIAAABIBfhDIABgBIAAAAIA6gjIAPgHIABAAIABABIgBACIgdBLIAAABIgBABIAAABIg+CRIAAABIAAAAIgMAZIgIASIgoBKIhOB6Ig6BJIgDACIgBABIAAAAIgCACIgIAJIgBACIgBABIgsAtIg5AxIglAaQBCAWAyAVQAyAUA9AeIAKAFIADACIBLArIACABIBaA+IABAAIABABIBjBTIAoAqIABAAIAAABIACABIAfAnQABAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAIgKADIgoAKIAAAAIgBAAIiEATIikACg");
	this.shape_1.setTransform(-44.5488,-338.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AUlKHIgGgBIhPgMIhSgQIhSgTQgogJgpgMIjuhNIiJg4IgEgCIiYhKIgBgBIg8ghIgEgDIgCgBIgDgBIg3giIgCgBIgHgEIgCgCIgGgCIgZgSIgfgFQgfgFgrgMQgngMgggMIhPglIgQgKIgOgLIgEgDIh/A/IgDABIAAAAIgBABIgkAMIgGACQgZAHgYAEIhOAHIgCAAIgBAAIgCAAIgcAAQgbgBgcgCIjTgXIgDgBIgBAAIhSgMQh4gUiOgcIkmhCIijgsIhtglIgcgOIgCgCIgJgEIgbgUIgOgMQgJgKgJgNQgQgagIgZQgGgUgBgZQgBgfAIgbQANgvAjgiQATgRAVgLQAMgHALgEIAbgIIAagEIAqgBIAEAAIAAAAIiBhWIgCgBIiQhwIgDgCIhBg7IgBAAIAAgBIgCgCIgEgDIghghIgCgCIgKgLIABgBIAHgBIAIAAIAoAAIAJAAIAfABIAxADIARABIADAAICzAXICcAfICdAqQBXAZBZAfQBVAfBcAlQBWAkBYAqQBSAnBSAtICIBQICFBYIABABICMBsIABgJIAHgjIAGgNIANgdIASgaIAWgXIADgDIAEgDIAzgkIBog0IA2gYIDUhMIC1g0IC7gqICsgdIACAAIABgBIABAAIBMgNIAPgHIABgBIAIgCIADAAIACABIABAAIABABIACAAIABABIABABIABABIA2gmIACgBIAAAAIBGgqIADAAIABgBIABAAIAAABIAAACIgIATIgBADIgVA3IgBAAIgBACIgnBfIgCAEIgTAsIAAABIgBAAIgiBHIgxBVIgCACIg3BTIgvA8IgDADIgJAKIg8A/IhUBGIgRALICyAuICWAxIBOAdIBNAgQAlAQApATIBLAlIgZgFIBiAgIAEACIADABIA8AXIADABIBrAvICZBWIAOAJIABABIgBABIgPAGIirAsIi9AaIhoAGg");
	this.shape_2.setTransform(-46,-338.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AUlKHIgGgBIhPgMIhSgQIhSgTQgogJgpgMIjuhNIiJg4IgEgCIiYhKIgBgBIg8ghIgEgDIgCgBIgDgBIg3giIgCgBIgHgEIgCgCIgGgCIgZgSIgfgFQgfgFgrgMQgngMgggMIhPglIgQgKIgOgLIgEgDIh/A/IgDABIAAAAIgBABIgkAMIgGACQgZAHgYAEIhOAHIgCAAIgBAAIgCAAIgcAAQgbgBgcgCIjTgXIgDgBIgBAAIhSgMQh4gUiOgcIkmhCIijgsIhtglIgcgOIgCgCIgJgEIgbgUIgOgMQgJgKgJgNQgQgagIgZQgGgUgBgZQgBgfAIgbQANgvAjgiQATgRAVgLQAMgHALgEIAbgIIAagEIAqgBIAEAAIAAAAIiBhWIgCgBIiQhwIgDgCIhBg7IgBAAIAAgBIgCgCIgEgDIghghIgCgCIgKgLIABgBIAHgBIAIAAIAoAAIAJAAIAfABIAxADIARABIADAAICzAXICcAfICdAqQBXAZBZAfQBVAfBcAlQBWAkBYAqQBKAjBKAoIgCgNIAAgCIAAgCIgBgeIAAgCIAAgBIAAgCIABgUIACgPIAJgvIAPgnIAAgBIAAAAIABgCIAQgeQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAhALIACAAIAAAAIAAAAIAkANIABAAIABABIADABIAkAOIAEACIABAAIAAAAIABABIAWAKIACAAIABAAIABABIAWAKIAAABIABAAIACABIAXAMIABAAIABAAIADACIAPAIIADACIADACIABAAIAFADIALAHIAWAPIAMAHIABABIABABIAvAoQATATARAUIAoA3IABADIARAbIAAABIAAAAIABACIACADIAWAsIABACIABAAIAAABIABAEIAGAPIAEgEIADgDIAEgDIAzgkIBog0IA2gYIDUhMIC1g0IC7gqICsgdIACAAIABgBIABAAIBMgNIAPgHIABgBIAIgCIADAAIACABIABAAIABABIACAAIABABIABABIABABIA2gmIACgBIAAAAIBGgqIADAAIABgBIABAAIAAABIAAACIgIATIgBADIgVA3IgBAAIgBACIgnBfIgCAEIgTAsIAAABIgBAAIgiBHIgxBVIgCACIg3BTIgvA8IgDADIgJAKIg8A/IhUBGIgRALICyAuICWAxIBOAdIBNAgQAlAQApATIBLAlIgZgFIBiAgIAEACIADABIA8AXIADABIBrAvICZBWIAOAJIABABIgBABIgPAGIirAsIi9AaIhoAGg");
	this.shape_3.setTransform(-46,-338.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AUlKHIgGgBIhPgMIhSgQIhSgTQgogJgpgMIjuhNIiJg4IgEgCIiYhKIgBgBIg8ghIgEgDIgCgBIgDgBIg3giIgCgBIgHgEIgCgCIgGgCIgZgSIgfgFQgfgFgrgMQgngMgggMIhPglIgQgKIgOgLIgEgDIh/A/IgDABIAAAAIgBABIgkAMIgGACQgZAHgYAEIhOAHIgCAAIgBAAIgCAAIgcAAQgbgBgcgCIjTgXIgDgBIgBAAIhSgMQh4gUiOgcIkmhCIijgsIhtglIgcgOIgCgCIgJgEIgbgUIgOgMQgJgKgJgNQgQgagIgZQgGgUgBgZQgBgfAIgbQANgvAjgiQATgRAVgLQAMgHALgEIAbgIIAagEIAqgBIAEAAIAAAAIiBhWIgCgBIiQhwIgDgCIhBg7IgBAAIAAgBIgCgCIgEgDIghghIgCgCIgKgLIABgBIAHgBIAIAAIAoAAIAJAAIAfABIAxADIARABIADAAICzAXICcAfICdAqQBXAZBZAfQBVAfBcAlQBFAdBGAgIgWg5QgEgQgDgQIgBgEIAAgCIgBgBIgBgSQgBgEABgEIABgRIABgCIAAgCIABgEIABgCIABgCIABgDIAAgBIABAAIADADIABABIADACIAFAEIADACIADACIAZANIABAAIAAABIABABIA1AUIADACIEYBmIADABIDABbIBwBAIACABIADADIAIAEICGgcIABAAIABAAIACgBIAEAAIAdgIIAIgBIABgBIACAAIBIgYIAYgMIABgBIABAAIAAgBIACAAIAMgIIABgCIACgCIADgCIABgCIABAAIABgBIABgBIAFgGIAKgNIABgCIADgEIACgGIABgCIAFgLIABgCIAEgMIAFgUIABgCIACgLIAAgBIACAAIAJAHIAFAEIAEADIAXAbIAMAVIADAGIABADIABADIACAHIDLg7IC7gqICsgdIACAAIABgBIABAAIBMgNIAPgHIABgBIAIgCIADAAIACABIABAAIABABIACAAIABABIABABIABABIA2gmIACgBIAAAAIBGgqIADAAIABgBIABAAIAAABIAAACIgIATIgBADIgVA3IgBAAIgBACIgnBfIgCAEIgTAsIAAABIgBAAIgiBHIgxBVIgCACIg3BTIgvA8IgDADIgJAKIg8A/IhUBGIgRALICyAuICWAxIBOAdIBNAgQAlAQApATIBLAlIgZgFIBiAgIAEACIADABIA8AXIADABIBrAvICZBWIAOAJIABABIgBABIgPAGIirAsIi9AaIhoAGg");
	this.shape_4.setTransform(-46,-338.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).wait(4));

	// stem
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("AAXIRQgogGgjgbQgigbgQgmQgJgZgFgjIgGg+QgCgVgOhNQgOhFgKhIIgnkgQgHgxgBgUQgDgnADgeQAHhPAtgvQAbgdApgMQAogMAnAJQApAJAhAeQAhAeANApQAIAZAEA7QAIBqAhDSIAlDrIAJBAQAEAlgBAcQgFBLgkAvQgaAhgoAQQgeAMgdAAQgMAAgLgCg");
	this.shape_5.setTransform(-1.7545,5.3306);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AgFL7QgpgGgjgbQgigbgQgmQgJgZgFgjIgGg+QgCgVgOhNQgOhFgKhIIgNhhIgBgBQgNgagGglQgEgYgCgrIgDhRIgFgwQgDgnADgeIABgQIAAgRQgChzAMhAQARhgBAh7QAgg8AXgkQAVgfAPgSQAVgZAXgPQAlgZAwgBQAwgBAnAXQAoAYAWAqQAWArgFAtQgEAxgoA/IhCBqQgqBUABCAIAAAQIAEAsQAIBpAhDSIAlDsIAJBAQAEAlgBAcQgFBLgkAvQgaAhgoAQQgdAMgeAAQgMAAgKgCg");
	this.shape_6.setTransform(1.1382,-18.0703);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006600").s().p("AAVSgQgogGgjgbQgigbgQgnQgJgYgFgkIgGg+QgCgUgOhOQgOhFgKhHIgNhiIgBAAQgNgbgGgkQgEgZgCgrIgDhSIgFgwQgDgmADgfIABgQIAAgQQgChzAMhAQARhfBAh7IAVgmIAAgMQAAgkAMhBIAPhQQANhJABggQABhDgZhLQgTg5gohMQgihDgqhGIgdgyQgPgdgFgYQgLgxATgwQATgwApgcQApgcA0AAQA0AAApAbQAcAUAZAjQARAXAYAtQBLCGAjBKQAdA+ARA1QAlB0gGCUQgEBPgRBvIABACQAWArgFAtQgEAxgoA/IhCBpQgqBUABB/IAAAQIAEAtQAIBqAhDSIAlDrIAJBBQAEAkgBAdQgFBKgkAvQgaAhgoARQgeALgdAAQgMAAgLgBg");
	this.shape_7.setTransform(-1.556,-60.1182);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006600").s().p("AAqYcQgpgGgigbQgigbgQgmQgJgZgFgjIgGg+QgCgVgOhNQgOhFgKhIIgNhhIgBgBQgNgagGglQgEgYgCgrIgDhSIgFgwQgDgnADgeIABgQIAAgRQgChzAMhAQARhgBAh7IAVgmIAAgMQAAgjAMhBIAPhQQANhJABggQABhCgZhMQgTg4gohNQgihCgqhGIgdgyQgPgdgFgZQgFgTABgSQgHgRgFgUQgHgegHg6QgPiQgBhOQgBh7AbhfIAQgzQALggAEgTQAJggAMhEQANg6AZgiQAZgiApgSQAogRAqAEQApAFAkAaQAjAbARAmQAVAugHBBQgDAjgTBPQgUBTgHAVIgMAkQgHAWgEAPQgJAqAEBAQADBDALBGQAMBIABARIABAUQAPAWAVAmQBLCGAjBLQAdA+ARA1QAlB0gGCTQgEBPgRBuIABACQAWArgFAtQgEAxgoA/IhCBqQgqBUABCAIAAAQIAEAsQAIBqAhDSIAlDsIAJBAQAEAlgBAcQgFBLgkAvQgaAhgoAQQgdAMgeAAQgMAAgLgCg");
	this.shape_8.setTransform(-3.6594,-98.1642);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006600").s().p("AB+fKQgqgGgigbQgigbgQgmQgJgZgEgjIgGg+QgCgVgPhNQgNhFgLhIIgNhhIAAgBQgOgagFglQgEgYgCgrIgEhSIgFgwQgDgnADgeIACgQIAAgRQgChzALhAQARhgBAh7IAUgmIAAgMQABgjAMhBIAPhQQAMhKABggQAChCgahMQgSg4gnhNQgjhCgphFIgdgyQgPgdgGgZQgEgTAAgSQgHgRgEgUQgIgegGg6QgQiQgBhOQgBh7AchfIAQgzIAHgXQgCgbABgfQADhGAKhCIAHgzQAEgdABgWQAAhRg1hlQgeg5hEhxQhAh7gViIQgMhQARgyQAPgqAlgeQAlgeAsgFQAtgGArAUQArATAYAlQAUAeAMAwQALA4AHAbQAVBRBWCbQBUCVATBYQARBOgJBzIgFA6IAAAAQAUAugGBBQgEAjgTBPQgUBTgHAVIgMAkQgHAWgDAPQgJAqADBAQADBDAMBGQALBIACARIABAUQAPAWAVAmQBKCGAjBLQAeA9ARA1QAkB0gGCTQgDBQgSBuIABACQAWArgEAtQgEAxgoA/IhDBqQgqBUABCAIAAAQIAFAsQAHBqAhDSIAmDsIAJBAQAEAlgCAcQgEBLgkAvQgaAhgpAQQgdAMgeAAQgLAAgLgCg");
	this.shape_9.setTransform(-12.0059,-141.1537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},5).to({state:[{t:this.shape_7}]},5).to({state:[{t:this.shape_8}]},5).to({state:[{t:this.shape_9}]},5).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-404.1,364.1,462.5);


(lib.face = function(mode,startPosition,loop,reversed) {
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
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(11,1,1).p("AEPgdIAjAAAkxAdQADABAMAAIAqAA");
	this.shape.setTransform(-9.125,-25.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(11,1,1).p("ACzgjIAjAAACUgPIHNAAQgLAehBAAQi6gBhdgBQg0AAgYAJApMADQAxAFA9gDQApgDBGgHQBmgLA0gFQAhgEANgBQAagBAUADQAFAYgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNAXQADABAMAAIAqAA");
	this.shape_1.setTransform(0.075,-25.2682);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(11,1,1).p("ACziBIAjAAACUhtIHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAIAEgBGQABAaAAAOApMhaQAxAFA9gEQApgCBGgIQBmgLA0gFQAhgEANgBQAagCAUAEQAFAZgEAaQhuAOhwgGQgsgChZgGQhPgFg2ADAmNhGQADABAMAAIAqAAAjwBaIAAAo");
	this.shape_2.setTransform(0.075,-15.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAEgiLQABAaAAAOAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAWgGAVAEApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNkYQADABAMAAIAqAAAjwh3IAAAo");
	this.shape_3.setTransform(0.075,5.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAEgiLQABAaAAAOAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAFgBAGgBIDfAAApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNkYQADABAMAAIAqAAAjwh3IAAAoAiqE/IDEAA");
	this.shape_4.setTransform(0.075,5.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAE+iLQABAaAAAOAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAFgBAGgBIDfAAApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAiqh3IAAAoAmNkYQADABAMAAIAqAAAiqE/IDEAA");
	this.shape_5.setTransform(0.075,5.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAGEiLQABAaAAAOAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAFgBAGgBIDfAAApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNkYQADABAMAAIAqAAAh4h3IAAAoAiqE/IDEAA");
	this.shape_6.setTransform(0.075,5.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAGEiLQABAaAAAOAAaE/IDfAAAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAFgBAGgBApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNkYQADABAMAAIAqAAAh4h3IAAAoAiqE/IDEAA");
	this.shape_7.setTransform(3.075,5.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAGEipQABAaAAAOAAaE/IDfAAAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAFgBAGgBApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNkYQADABAMAAIAqAAAh4ifIAAAoAiqE/IDEAA");
	this.shape_8.setTransform(3.075,1.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(11,1,1).p("ACzlTIAjAAACUk/IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJAGEjRQABAaAAAOAAaE/IDfAAAidFHQAGAJAQACQAEABAYAAQAOAAAGABQAMAAAIgDIAVgIQAHgBAOABQAPABAHgBQADgBAPgHQAFgBAGgBApMksQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAmNkYQADABAMAAIAqAAAh4jHIAAAoAiqE/IDEAA");
	this.shape_9.setTransform(3.075,1.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(11,1,1).p("ACzlcIAjAAACUlIIHNAAQgLAfhBAAQi6gBhdgCQg0AAgYAJAGEjaQABAaAAAOAAaEjIDfAAAidE6QAGAaAQAFQAEACAYAAQAOACAGAAQAMABAIgHQAOgRAHgHQAHgEAOAEQAPADAHgDQADgDAPgSQAHgGAEgBApMk2QAxAFA9gDQApgCBGgIQBmgMA0gFQAhgDANgBQAagCAUAEQAFAZgEAaQhuANhwgFQgsgChZgHQhPgEg2ADAh4jQIAAAoAmNkiQADACAMAAIAqAAAiqEjIDEAA");
	this.shape_10.setTransform(3.075,2.0563);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(11,1,1).p("ACUl3IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJACzmLIAjAAAGEkJQABAaAAAOAAaCYIDfAAAidD9QAGBuAQAYQAGAJAIgBQAJgCAFAAQAOAAAagRQAOhJAHgeQAHgPAOAPQAPAPAHgPQADgNAPhOQAHgaAEgEApMlkQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAh4j/IAAAoAmNlQQADABAMAAIAqAAAiqCYIDEAA");
	this.shape_11.setTransform(3.075,6.7014);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(11,1,1).p("ACUl4IHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJACzmMIAjAAAGEkKQABAaAAAOAAaCXIDfAAAidD8QAGBuAQAYQAGAJAIgBQAJgCAFAAQAOAAAagRQBKAKANAJQANAKAIgcQAJgbApgFQAqgEAogGQAogGAYgdQAYgdgKgqQjvggADgPQAHgaAEgEApMllQAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAh4kAIAAAoAmNlRQADABAMAAIAqAAAiqCXIDEAA");
	this.shape_12.setTransform(3.075,6.8415);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(11,1,1).p("ACUmRIHNAAQgLAfhBAAQi6gBhdgBQg0AAgYAJACzmlIAjAAAGEkjQABAaAAAOADmB+IATAAAidDjQAGBuAQAYQAGAJAIgBQAJgCAFAAQAOAAAagRQBKAKANAJQANAKAzAfQAzAeAXgvQAXgvBIALQBIALggg9Qggg+A0iIQgtAJgmAIAgKBtQAIgCAJAFQAJAEAKAKIDMAAQivgKgwgEApMl+QAxAFA9gDQApgDBGgIQBmgLA0gFQAhgEANgBQAagBAUADQAFAZgEAbQhuANhwgGQgsgChZgGQhPgFg2ADAh4kZIAAAoAmNlqQADABAMAAIAqAAAiqB+IDEAA");
	this.shape_13.setTransform(3.075,9.34);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(11,1,1).p("ACUmRIHNAAQgLAfhBAAQi6gBhdgCQg0AAgYAJACzmlIAjAAAGEkjQABAaAAAOADmB9IATAAAgKBsQAIgBAJAEQAJAEAKAKIDMAAAidDjQAGBuAQAYQAGAIAIAAQAJgCAFAAQAOAAAagRQBKAJANAKQANAKAzAfQAzAeAXgvQAXgvBIALQBIAKggg9Qggg9A0iJQgtAKgmAHQivgKgwgEApMl/QAxAFA9gDQApgCBGgIQBmgMA0gFQAhgDANgBQAagCAUAEQAFAZgEAaQhuANhwgFQgsgChZgHQhPgEg2ADAmNlrQADACAMAAIAqAAAh4kZIAAAoAiqB9IDEAA");
	this.shape_14.setTransform(10.875,5.3002);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(11,1,1).p("ACUmRIHNAAQgLAfhBAAQi6gBhdgCQg0AAgYAJACzmlIAjAAAGEkjQABAaAAAOADmB9IATAAAgKBsQAIgBAJAEQAJAEAKAKIDMAAQivgKgwgEAidDjQAGBuAQAYQAGAIAIAAQAJgCAFAAQAOAAAagRQBKAJANAKQANAKAzAfQAzAeAXgvQAXgvBIALQBIAKggg9Qggg9A0iJQgtAKgmAHApMl/QAxAFA9gDQApgCBGgIQBmgMA0gFQAhgDANgBQAagCAUAEQAFAZgEAaQhuANhwgFQgsgChZgHQhPgEg2ADAmNlrQADACAMAAIAqAAAh4kZIAAAoAiqB9IDEAA");
	this.shape_15.setTransform(10.875,2.8002);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(11,1,1).p("ACzmlIAjAAApMl/QAxAFA9gDQApgCBGgIQBmgMA0gFQAhgDANgBQAagCAUAEQAFAZgEAaQhuANhwgFQgsgChZgHQhPgEg2ADAh4kZIAAAoAGEkjQABAaAAAOACUmRIHNAAQgLAfhBAAQi6gBhdgCQg0AAgYAJAidDjQAGBuAQAYQAGAIAIAAQAJgCAFAAQAOAAAagRQBKAJANAKQANAKAzAfQAzAeAXgvQAXgvBIALQBIAKggg9Qggg9A0iJQgtAKgmAHQivgKgwgEAgKBsQAIgBAJAEQAJAEAKAKIDMAAIATAAAmNlrQADACAMAAIAqAAAiqB9IDEAA");
	this.shape_16.setTransform(15.825,2.8002);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(11,1,1).p("ACznMIAjAAAoPmiQAYAAAZgCQApgCBGgIQBmgMA0gFQAhgDANgBQAagCAUAEQAFAZgEAaQhuANhwgFQgsgChZgHQgbgBgZgBQgOAAgNAAQgeAAgYABAh4lAIAAAoAGElKQABAaAAAOACUm4IHNAAQgLAfhBAAQi6gBhdgCQg0AAgYAJAidEKQAGBuAQAYQAGAIAIAAQAJgCAFAAQAOAAAagRQBKAJANAKQANAKAzAfQAzAeAXgvQAXgvBIALQBIAKggg9Qggg9B5jGAgKBFQAIgBAJAEQAJAEAKAKIDMAAQivgKgwgEADmBWIATAAAE5BFQgtAKgmAHAoqmjQANABAOAAAmNmSQADACAMAAIAqAAApMmmQAQACASABAiuCsIDIhW");
	this.shape_17.setTransform(15.825,6.7002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7,p:{y:5.125}}]},4).to({state:[{t:this.shape_7,p:{y:1.125}}]},7).to({state:[{t:this.shape_8}]},4).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},4).to({state:[{t:this.shape_15}]},4).to({state:[{t:this.shape_16}]},3).to({state:[{t:this.shape_17}]},4).wait(8));

	// face
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(11,1,1).p("ANwAAQAAgOkCgLQkBgKltAAQlsAAkCAKQkBALAAAOQAAAPEBALQECAKFsAAQFtAAEBgKQECgLAAgPg");
	this.shape_18.setTransform(-2,-3.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ApuAZQkBgKAAgPQAAgOEBgKQECgLFsAAQFtAAEBALQECAKAAAOQAAAPkCAKQkBALltAAQlsAAkCgLg");
	this.shape_19.setTransform(-2,-3.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(11,1,1).p("ANwAAQAAiVkChqQhrgskMgjQiGgShxgJQhwAJiGASQkMAjhsAsQkBBqAACVQAACWEBBqQEEBqFqAAQFsAAEChqQEChpAAiXg");
	this.shape_20.setTransform(-2,-3.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ApuEAQkBhqAAiWQAAiVEBhqQBsgsENgjQCFgSBwgJQBwAJCHASQEMAjBrAsQECBqAACVQAACXkCBpQkCBqlsAAQlqAAkEhqg");
	this.shape_21.setTransform(-2,-3.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(11,1,1).p("ANwhQQAAnUkClIQg9hOi1gtQingojVAAQjUAAinAoQi1Atg+BOQkBFIAAHUQAAHREBFIQEEFHFqAAQFrAAEDlHQEClIAAnRg");
	this.shape_22.setTransform(-2,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ApuLIQkBlHAAnSQAAnTEBlIQA/hOC0gtQCngoDUAAQDVAACmAoQC1AtA+BOQECFIAAHTQAAHSkCFHQkDFIlrAAQlqAAkElIg");
	this.shape_23.setTransform(-2,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(11,1,1).p("ANwiDQAAr3kCoUQg9h/i1hIQinhCjVAAQjUAAinBCQi1BIg+B/QkBIUAAL3QAALzEBIUQEEIUFqAAQFrAAEDoUQECoUAArzg");
	this.shape_24.setTransform(-2,4.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ApuSEQkBoUAArzQAAr3EBoUQA/h/C0hIQCnhCDUAAQDVAACmBCQC1BIA+B/QECIUAAL3QAALzkCIUQkDIUlrAAQlqAAkEoUg");
	this.shape_25.setTransform(-2,4.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(11,1,1).p("ANwitQAAvlkCq6Qg9ini1heQinhXjVAAQjUAAinBXQi1Beg+CnQkBK7AAPkQAAPgEBK8QEEK6FqAAQFrAAEDq6QECq7AAvhg");
	this.shape_26.setTransform(-2,4.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ApuXvQkBq8AAvgQAAvkEBq7QA/inC0heQCnhXDUAAQDVAACmBXQC1BeA+CnQECK6AAPlQAAPhkCK7QkDK6lrAAQlqAAkEq6g");
	this.shape_27.setTransform(-2,4.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(11,1,1).p("ANwh6QAArBkCntQg9h1i1hDQing9jVAAQjUAAinA9Qi1BDg+B1QkBHuAALAQAAK9EBHuQEEHtFqAAQFrAAEDntQECnuAAq9g");
	this.shape_28.setTransform(-2,4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ApuQxQkBnvAAq8QAArAEBntQA/h2C0hDQCng9DUAAQDVAACmA9QC1BDA+B2QECHsAALBQAAK8kCHvQkDHtlrAAQlqAAkEntg");
	this.shape_29.setTransform(-2,4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(11,1,1).p("ANwhHQAAmdkCkhQg9hFi1gmQingkjVAAQjUAAinAkQi1Amg+BFQkBEhAAGdQAAGaEBEiQEEEgFqAAQFrAAEDkgQECkiAAmag");
	this.shape_30.setTransform(-2,4.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ApuJ1QkBkiAAmaQAAmdEBkhQA/hFC0gmQCngkDUAAQDVAACmAkQC1AmA+BFQECEhAAGdQAAGakCEiQkDEglrAAQlqAAkEkgg");
	this.shape_31.setTransform(-2,4.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(11,1,1).p("AMwhIQgFmch/izQiAizi1gmQingkjTAAQjVAAinAkQi1AmiDC3QiEC3AOGeQANGdCuEWQEEEgFrAAQFqAADmkhQDnkhgEmbg");
	this.shape_32.setTransform(-1.5573,4.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ApyJ1QiukWgNmdQgOmeCEi3QCDi3C1gmQCngkDVAAQDTAACnAkQC1AmCACzQB/CzAFGcQAEGbjnEhQjmEhlqAAQlrAAkEkgg");
	this.shape_33.setTransform(-1.5573,4.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},3).to({state:[{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_25},{t:this.shape_24}]},3).to({state:[{t:this.shape_27},{t:this.shape_26}]},4).to({state:[{t:this.shape_29},{t:this.shape_28}]},3).to({state:[{t:this.shape_31},{t:this.shape_30}]},3).to({state:[{t:this.shape_33},{t:this.shape_32}]},32).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-222.8,187,454.4);


// stage content:
(lib.Kang_flower = function(mode,startPosition,loop,reversed) {
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
		this.flower_cel_mc.addEventListener("click", growFlowerCel);
		this.face_mc.addEventListener("click", showSurprise);
		this.wow_mc.addEventListener("click", sayWow);
		this.ground_mc.addEventListener("click", shakeGround);
		
		var root = this;
		
		function growFlowerCel() {
		    console.log("Flower CEL will grow");
		    root.flower_cel_mc.play();
		}
		
		function showSurprise() {
		    console.log("Face is reacting!");
		    root.face_mc.play();
		}
		
		function sayWow() {
		    console.log("Wow effect activated!");
		    root.wow_mc.play();
		}
		
		function shakeGround() {
		    console.log("Ground is shaking!");
		    root.ground_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// wow
	this.wow_mc = new lib.wow();
	this.wow_mc.name = "wow_mc";
	this.wow_mc.setTransform(283.6,335.65,1,1,0,0,0,28.1,-5);

	this.timeline.addTween(cjs.Tween.get(this.wow_mc).wait(1));

	// face
	this.face_mc = new lib.face();
	this.face_mc.name = "face_mc";
	this.face_mc.setTransform(517.85,495.9,1,1,0,0,0,-2,-4);

	this.timeline.addTween(cjs.Tween.get(this.face_mc).wait(1));

	// flower
	this.flower_cel_mc = new lib.flowercelanimation();
	this.flower_cel_mc.name = "flower_cel_mc";
	this.flower_cel_mc.setTransform(691.8,558.95,1,1,0,0,0,-1.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.flower_cel_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground();
	this.ground_mc.name = "ground_mc";
	this.ground_mc.setTransform(497.4,612.5);

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#0074A7","#FFFFFF"],[0,1],-482.8,0,482.9,0).ss(4,1,1).p("EhLIgynMCWRAAAMAAABlPMiWRAAAg");
	this.shape.setTransform(479.5,319.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0074A7","#FFFFFF"],[0,1],-480.8,0,480.9,0).s().p("EhLIAyoMAAAhlPMCWRAAAMAAABlPg");
	this.shape_1.setTransform(479.5,319.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(418.1,313.9,617.9999999999999,345.80000000000007);
// library properties:
lib.properties = {
	id: '918EC2A821981F43A53F4DD1C1F9A812',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_6.png?1739565987493", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png?1739565987493", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1739565987493", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png?1739565987493", id:"CachedBmp_3"},
		{src:"images/CachedBmp_2.png?1739565987493", id:"CachedBmp_2"}
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
an.compositions['918EC2A821981F43A53F4DD1C1F9A812'] = {
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