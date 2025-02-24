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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkOmZIjZADIGQp9IHOJxIjVADAj+GkIAFEGIIMAAIgilPIhPr6ImwAGIAQM9Io6JwIZxgZIpIqg");
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


// stage content:
(lib.Kang_Rocket = function(mode,startPosition,loop,reversed) {
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
		this.rocket_mc.addEventListener("click", blastoff);
		
		var root=this;
		
		function blastoff(){
			console.log("rocket will take off");
			root.rocket_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// rocket
	this.rocket_mc = new lib.rockettween();
	this.rocket_mc.name = "rocket_mc";
	this.rocket_mc.setTransform(473.85,473.85,1,1,0,0,0,82.5,104.4);

	this.timeline.addTween(cjs.Tween.get(this.rocket_mc).wait(1));

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EBLHAXuMiVoAAAIglAAMAAAgk6QFOhYFMhJUAiTgH9AgogAD");
	this.shape.setTransform(478.25,568.3375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("EBKiAXuMiVoAAAMAAAgk6QE8hUE4hNUAiUgH9AgngADUAg4gACAfKAIBQEwBIEsBaMAAAAk6g");
	this.shape_1.setTransform(482,568.337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// sky
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(209,209,209,0)").ss(0.1,1,1).p("EhKzgx5MCVnAAAMAAABjzMiVnAAAg");
	this.shape_2.setTransform(480.125,320.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0023DB","#FFFFFF"],[0,1],-478.8,0,478.8,0).s().p("EhKzAx6MAAAhjzMCVnAAAMAAABjzg");
	this.shape_3.setTransform(480.125,320.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(476.6,320.3,486.1,400.8);
// library properties:
lib.properties = {
	id: '4EBD51882926A04CAD39CDDC1A88AB64',
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
an.compositions['4EBD51882926A04CAD39CDDC1A88AB64'] = {
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