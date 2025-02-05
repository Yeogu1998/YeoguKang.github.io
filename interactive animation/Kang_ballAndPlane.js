(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Kang_ballAndPlane_atlas_1", frames: [[0,0,540,238],[0,240,540,170]]}
];


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
	this.initialize(ss["Kang_ballAndPlane_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Kang_ballAndPlane_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-157.5,-91.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-157.5,-91.35,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ATHn9QgRgCgkgBQgjgCgUAAQgNAAhgAHQhgAGgNAAQgNAAhaAKQhaAJgNAAQgNAAhQAGQhQAHgNAAQgOAAg1AHQg1AHgNAAQgNAAh8AJQh8AIgNAAQgNAAhIAGQhGAGgNAAQgNAAgxAGQgwAGgOAAQgNAAglAGQglAHgOAAQgNAAhUAJQhVAIgNAAQgNAAg6AJQg6AIgNAAQgNAAgrAJQgqAIgNAAQgNAAg6AKQg6AJgNAAQgNAAgiAIQgiAJgOAAQgRAAhvAhQheAdg0ASQASAoAxAAQANAAANAMQAMAMANAAQANAAARAKQARALANAAQAOAAAKAIQALAIANAAQACAAAlAXQAmAXADAAQAEAABIA4QBJA2ARAAIAsAkQArAjAMAAQANAAgFAJQgEAIANAAQAFAAAUAVQAUAVANAAQANAAgFAJQgGAIANAAQARAAADANQABAQACAEAmOC4QAUAeAIAHQAKAHAVAAQANAAgFAJQgFAIANAAQANAAABALQABAKANAAQAOAAA3AsQA4ArAWAAQAGAEAHAFQANAJAMAAQAOAAACALQACAKANAAQANAAAAALQABAKANAAQANAAgDAMQgDANANAAQADAAAfAmQAfAnAOAAQAHAAA/ggQA/ggAAgDQBHgqBHgrQCNhYAAgVQAAgFAfgcQAegdAAgCQAAgVBDhCQBDhBAAgLQAAgNALgBQAKgBAAgNQAAgNALgBQALgBAAgOQAAgNAMgBQALgBAAgNQAAgCAiglQAiglAAgCQAAgCAigkQAigkAAgCQAAgNALgBQAKgCAAgNQAAgNAMgBQALgCAAgNQAAAAAigfQAighAAgNQAAgSAWgPQAVgQAAgJQAAgDABgCQABgHAGAEQAGAFACgIQAAgCAAgDQAAgOAMgFQAVgJAIgHAP/mdIAIgDIDgheAP4maIAHgDAo0D+ICmhGIWGpS");
	this.shape.setTransform(-8.875,-39.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-93.5,276.7,121);


(lib.ball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AGzAAQAAC0h/CAQiAB/i0AAQizAAiAh/Qh/iAAAi0QAAizB/iAQCAh/CzAAQC0AACAB/QB/CAAACzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AkzE0Qh/iAAAi0QAAizB/iAQCAh/CzAAQC0AACAB/QB/CAAACzQAAC0h/CAQiAB/i0AAQizAAiAh/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-44.5,-44.5,89,89), null);


// stage content:
(lib.Kang_ballAndPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Plane
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-225.95,254.05,1,1,0,0,0,-22.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-19.2,regY:-33,rotation:-0.0187,x:-222.45,y:253},0).wait(1).to({rotation:-0.0613,x:-221.85,y:252.85},0).wait(1).to({rotation:-0.0969,x:-220.4,y:252.55},0).wait(1).to({rotation:-0.1232,x:-217.45,y:251.95},0).wait(1).to({rotation:-0.1438,x:-212.3,y:250.85},0).wait(1).to({rotation:-0.1626,x:-204,y:249.05},0).wait(1).to({rotation:-0.1809,x:-192.7,y:246.65},0).wait(1).to({rotation:-0.1929,x:-184.15,y:244.85},0).wait(1).to({rotation:-0.207,x:-173.55,y:242.6},0).wait(1).to({rotation:-0.2231,x:-161.45,y:240},0).wait(1).to({rotation:-0.2406,x:-148.7,y:237.35},0).wait(1).to({rotation:-0.2619,x:-134.3,y:234.25},0).wait(1).to({rotation:-0.2874,x:-119,y:230.95},0).wait(1).to({rotation:-0.3227,x:-100.95,y:227.05},0).wait(1).to({rotation:-0.3948,x:-81.4,y:222.85},0).wait(1).to({rotation:-0.3766,x:-67.7,y:219.95},0).wait(1).to({rotation:-0.3672,x:-45.6,y:215.1},0).wait(1).to({rotation:-0.36,x:-24,y:210.45},0).wait(1).to({rotation:-0.3515,x:-1.15,y:205.55},0).wait(1).to({rotation:-0.3386,x:23.2,y:200.3},0).wait(1).to({rotation:-0.3104,x:49.5,y:194.65},0).wait(1).to({rotation:-0.1382,x:73.35,y:189.55},0).wait(1).to({rotation:0.1129,x:101.3,y:183.75},0).wait(1).to({rotation:0.2243,x:130.55,y:177.75},0).wait(1).to({rotation:0.3141,x:160.8,y:171.55},0).wait(1).to({rotation:0.4036,x:192.25,y:165.2},0).wait(1).to({rotation:0.5037,x:224.95,y:158.65},0).wait(1).to({rotation:0.6265,x:258.85,y:151.9},0).wait(1).to({rotation:0.7919,x:294,y:145.05},0).wait(1).to({rotation:1.0472,x:330.5,y:138},0).wait(1).to({rotation:1.5581,x:369,y:130.9},0).wait(1).to({rotation:2.5911,x:406.25,y:124.6},0).wait(1).to({rotation:3.2393,x:447.1,y:118.2},0).wait(1).to({rotation:3.7649,x:488.75,y:112.2},0).wait(1).to({rotation:4.357,x:531.8,y:106.4},0).wait(1).to({rotation:5.1889,x:576.3,y:100.9},0).wait(1).to({rotation:6.7428,x:622.05,y:96.3},0).wait(1).to({rotation:23.0589,x:665.5,y:97.85},0).wait(1).to({rotation:31.9697,x:714.35,y:112.45},0).wait(1).to({rotation:41.9124,x:759.75,y:134.15},0).wait(1).to({rotation:49.1746,x:800.9,y:163.25},0).wait(1).to({rotation:26.8499,x:846.6,y:182.6},0).wait(1).to({rotation:24.8294,x:899.5,y:195.5},0).wait(1).to({rotation:23.1492,x:953.15,y:207.05},0).wait(1).to({rotation:21.7704,x:1008.3,y:217.3},0).wait(1).to({rotation:20.8869,x:1064.65,y:226.65},0).wait(1).to({rotation:19.3033,x:1122.4,y:235.15},0).wait(1));

	// staticBall
	this.instance_1 = new lib.ball();
	this.instance_1.setTransform(869,72.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// ball
	this.movingBall_mc = new lib.ball();
	this.movingBall_mc.name = "movingBall_mc";
	this.movingBall_mc.setTransform(75.05,78.05);

	this.timeline.addTween(cjs.Tween.get(this.movingBall_mc).wait(1).to({x:86.2,y:251.3215},0).wait(1).to({x:97.35,y:424.593},0).wait(1).to({x:192.6532,y:301.0814},0).wait(1).to({x:310.5,y:245.442},0).wait(1).to({x:366.6676,y:263.5735},0).wait(1).to({x:407.0769,y:287.65},0).wait(1).to({x:437.158,y:316.9367},0).wait(1).to({x:458.9954,y:351.8256},0).wait(1).to({x:473.0487,y:393.8093},0).wait(1).to({x:478.05,y:446.682},0).wait(1).to({x:500.322,y:395.456},0).wait(1).to({x:530.3426,y:347.274},0).wait(1).to({x:563.7155,y:318.791},0).wait(1).to({x:593.9,y:313.558},0).wait(1).to({x:621.7302,y:330.5836},0).wait(1).to({x:638.9834,y:354.0554},0).wait(1).to({x:649.6291,y:382.6095},0).wait(1).to({x:654.527,y:416.8392},0).wait(1).to({x:652.4,y:459.911},0).wait(1).to({x:662.1432,y:442.4717},0).wait(1).to({x:672.4055,y:426.6826},0).wait(1).to({x:683.1976,y:413.1876},0).wait(1).to({x:694.5328,y:402.634},0).wait(1).to({x:706.4271,y:395.6818},0).wait(1).to({x:718.9,y:393.012},0).wait(1).to({x:736.6436,y:396.7248},0).wait(1).to({x:752.4421,y:403.1249},0).wait(1).to({x:766.302,y:411.9204},0).wait(1).to({x:778.2289,y:422.8226},0).wait(1).to({x:788.2261,y:435.5449},0).wait(1).to({x:796.2955,y:449.8026},0).wait(1).to({x:802.4373,y:465.3119},0).wait(1).to({x:806.65,y:481.79},0).wait(1).to({x:817.4204,y:480.0742},0).wait(1).to({x:827.6312,y:478.8014},0).wait(1).to({x:837.284,y:477.971},0).wait(1).to({x:846.3803,y:477.5825},0).wait(1).to({x:854.922,y:477.6355},0).wait(1).to({x:862.9102,y:478.13},0).wait(1).to({x:870.3462,y:479.0658},0).wait(1).to({x:877.231,y:480.443},0).wait(1).to({x:883.5655,y:482.2619},0).wait(1).to({x:889.3503,y:484.5228},0).wait(1).to({x:894.5859,y:487.2264},0).wait(1).to({x:899.2727,y:490.3731},0).wait(1).to({x:903.4107,y:493.964},0).wait(1).to({x:907,y:498},0).wait(1));

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990099").s().p("EA3QAFPQpYgixGiGQyuiTxGiQIkPglIixgbIiygaQk9gqnqgZQpfggphgHQlFgEjRAHQkkAKjvAjQkEAmi6BFQhxAqh8BDQhiA1iABQQhvBHh5BUQgLgaApgcQDOiSCdhWQDMhyC8g6QCVgtDIgcQE6gtGIgHQD9gEHIAMQE6AIDQAJQEdALDsASQF1AbHeA7QDMAZKEBYQPICEPuB5QPEB1I0AhQNNAxKshHICRgPQBTgHA/AAQgNAOgXAHQgPAEgbAEQnpA/o5AAQkyAAlKgSg");
	this.shape.setTransform(524.2825,497.9342);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(119.1,309.7,1146.9,232.8);
// library properties:
lib.properties = {
	id: '85F4C71EF0AC6A4CA9F558A23633DDF3',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Kang_ballAndPlane_atlas_1.png?1738154374717", id:"Kang_ballAndPlane_atlas_1"}
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
an.compositions['85F4C71EF0AC6A4CA9F558A23633DDF3'] = {
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