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


(lib.shapetweensimple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A8502MA5zAAAMAAAAptMg5zAAAg");
	this.shape.setTransform(5,3.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("A85U3MAAAgptMA5zAAAMAAAAptg");
	this.shape_1.setTransform(5,3.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("A8r0ZQMLgLMSgHQMSgIMVAAQEAAAEAABQAGIRAFIUQAIMSAAMWQsMAKsTAHQsSAIsWAAQj/AAj+gBQgHoQgFoTQgHsTAAsWg");
	this.shape_2.setTransform(4.825,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0500C8").s().p("A8YUzQgHoQgFoTQgHsTAAsWQMLgLMSgHQMSgHMVAAIIAAAQAGIRAFIUQAIMRAAMXQsMAKsTAHQsSAIsWAAIn9gBg");
	this.shape_3.setTransform(4.825,3.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("A8dz9QL6gVMJgPQMIgOMQAAQD9AAD9ABQANIHAKINQAPMIAAMQQr7AVsJAOQsJAPsPAAQj9AAj8gBQgNoGgKoNQgPsJAAsQg");
	this.shape_4.setTransform(4.6,3.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0B00C3").s().p("A73UvQgNoGgJoNQgPsJgBsQQL7gVMHgPQMJgOMQAAQD9AAD9ABQANIHAKINQAOMIABMQQr8AVsIAOQsJAPsPAAQj9AAj8gBg");
	this.shape_5.setTransform(4.6,3.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("A8OzgQLoggL/gWQL/gWMJAAQD7AAD7ACQATH9APIHQAWL/AAMJQrqAfr/AWQr/AWsJAAQj6AAj6gCQgTn8gPoHQgWr/AAsJg");
	this.shape_6.setTransform(4.425,2.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1000BF").s().p("A7WUrQgTn8gPoHQgWr/AAsJQLoggL/gWQL/gWMJAAQD7AAD7ACQATH9APIHQAWL/AAMJQrqAfr/AWQr/AWsJAAQj6AAj6gCg");
	this.shape_7.setTransform(4.425,2.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("A8AzEQLXgqL2gdQL1gdMDAAQD5AAD4ACQAaHzAUIBQAdL1AAMCQrZAqr2AdQr1AdsDAAQj4AAj3gCQganygUoBQgdr2AAsCg");
	this.shape_8.setTransform(4.25,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1600BB").s().p("A61UmQganygToAQger1AAsDQLYgqL1gdQL1geMCABQD5AAD5ACQAZH0AVH/QAdL2AAMCQraAqr1AdQr1AdsCAAQj4AAj4gDg");
	this.shape_9.setTransform(4.25,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("A7yyoQLHg0LsglQLrgkL8AAQD3AAD2ADQAgHqAZH5QAlLsAAL8QrIA0rsAlQrsAkr8AAQj2AAj0gDQghnpgZn6QglrsAAr8g");
	this.shape_10.setTransform(4.025,2.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B00B6").s().p("A6TUjQghnpgZn6QglrsAAr8QLHg0LsglQLrgkL8AAQD3AAD2ADQAgHqAZH5QAlLsAAL8QrIA0rsAlQrsAkr8AAQj2AAj0gDg");
	this.shape_11.setTransform(4.025,2.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("A7kyMQK2g+LigsQLigsL2AAQD0AADzAFQAoHfAeHzQAsLiAAL1Qq4A/rjAsQrhAsr2AAQj0AAjygEQgmnfgfnzQgsriAAr3g");
	this.shape_12.setTransform(3.85,2.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2100B2").s().p("A5yUeQgnnegfnzQgrrjgBr2QK3g+LhgsQLigsL2AAQD1AADzAEQAnHgAdHzQAtLigBL1Qq3A+rjAtQrhAsr1AAQj0AAjygFg");
	this.shape_13.setTransform(3.85,2.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("A7VxvQKlhJLYgzQLYg0LvAAQDzAADwAFQAtHWAkHtQAzLYAALvQqmBJrZAzQrYA0rvAAQjyAAjwgGQgtnUgjntQgzrZAArvg");
	this.shape_14.setTransform(3.675,2.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2600AE").s().p("A5SUaQgtnUgjntQgzrZAArvQKlhJLYgzQLYg0LvAAQDzAADwAFQAtHWAkHtQAzLYAALvQqmBJrZAzQrYA0rvAAQjyAAjwgGg");
	this.shape_15.setTransform(3.675,2.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("A7HxSQKUhULPg7QLPg6LoAAQDxAADuAGQAzHLApHnQA6LOAALoQqVBUrPA7QrQA6roAAQjvAAjtgFQg0nLgonnQg7rPAArog");
	this.shape_16.setTransform(3.45,2.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B00A9").s().p("A4wUXQg0nLgonnQg7rPAAroQKUhULPg7QLPg6LoAAQDwAADvAGQAzHLAoHnQA7LOAALoQqVBUrQA7QrOA6roAAQjwAAjtgFg");
	this.shape_17.setTransform(3.45,2.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("A65w2QKDheLGhCQLFhCLiAAQDuAADrAGQA6HCAuHgQBCLFAALiQqFBerFBCQrGBCrhAAQjuAAjqgGQg6nCgungQhCrFAArig");
	this.shape_18.setTransform(3.275,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3100A5").s().p("A4PUTQg6nBgungQhCrGAAriQKDheLGhCQLFhCLiAAQDuAADrAGQA6HDAuHgQBCLEAALiQqFBerFBCQrGBCrhAAQjuAAjqgGg");
	this.shape_19.setTransform(3.275,1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("A6rwaQJyhoK9hJQK7hKLbAAQDsAADpAIQBBG3AyHaQBKK8AALbQp0Boq8BJQq8BKrbAAQjrAAjpgIQhAm3gynZQhKq8AArcg");
	this.shape_20.setTransform(3.1,1.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3600A1").s().p("A3vUOQhAm3gynZQhKq8AArcQJzhoK8hJQK7hKLbAAQDsAADpAIQBAG3AzHaQBJK8ABLbQp0Boq9BJQq7BKrbAAQjrAAjpgIg");
	this.shape_21.setTransform(3.1,1.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("A6cv+QJhhyKyhRQKyhRLVAAQDqAADmAIQBHGuA4HUQBQKyAALUQpiBzqzBRQqyBRrUAAQjpAAjmgIQhHmug3nTQhRqyAArWg");
	this.shape_22.setTransform(2.875,1.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3C009C").s().p("A3NUKQhHmtg3nTQhRqyAArWQJhhyKyhRQKyhRLVAAQDqABDmAHQBHGuA4HUQBQKxAALVQpiByqzBRQqyBRrUAAQjpABjmgJg");
	this.shape_23.setTransform(2.875,1.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("A6OvhQJQh9KphYQKphYLOAAQDnAADkAJQBOGkA8HMQBYKpAALOQpRB9qqBYQqoBYrOAAQjnAAjjgJQhOmjg8nNQhYqpAArOg");
	this.shape_24.setTransform(2.7,1.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#410098").s().p("A2sUGQhOmjg7nNQhZqpAArOQJQh9KphYQKohYLPAAQDnAADkAJQBOGkA7HMQBZKpAALOQpRB9qqBYQqoBYrOAAQjnAAjjgJg");
	this.shape_25.setTransform(2.7,1.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("A6AvFQJAiHKfhgQKehfLIAAQDlAADiAJQBUGaBBHHQBgKfAALHQpBCIqfBfQqfBgrIAAQjkAAjhgKQhUmZhBnHQhgqfAArIg");
	this.shape_26.setTransform(2.525,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#470094").s().p("A2LUCQhUmahBnGQhgqfAArIQJAiHKfhfQKehgLIAAQDlAADiAJQBUGbBBHGQBgKfAALHQpBCIqfBfQqfBgrIAAQjkAAjhgKg");
	this.shape_27.setTransform(2.525,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("A5xuoQIuiSKWhnQKVhnLBAAQDjAADfALQBaGQBGHAQBnKWAALAQovCSqWBnQqVBnrBAAQjjAAjegKQhamQhHnAQhmqWAArBg");
	this.shape_28.setTransform(2.325,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C008F").s().p("A1qT/QhamQhHnBQhmqVAArBQIuiSKWhmQKVhoLBAAQDjAADfALQBaGQBGHAQBnKVAALBQovCSqWBmQqVBorBAAQjjgBjegJg");
	this.shape_29.setTransform(2.325,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("A5juMQIdicKMhuQKMhuK6AAQDhAADdALQBhGGBLG6QBuKLAAK6QoeCdqNBuQqLBuq7AAQjgAAjcgLQhhmGhLm5QhuqMAAq7g");
	this.shape_30.setTransform(2.125,0.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51008B").s().p("A1JT6QhhmGhLm5QhuqMAAq7QIdicKMhuQKMhuK6AAQDhAADdALQBhGGBLG6QBuKLAAK6QoeCdqNBuQqLBuq7AAQjgAAjcgLg");
	this.shape_31.setTransform(2.125,0.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("A5VtwQIMimKDh2QKCh1K0AAQDfAADaALQBnF+BQGzQB2KCAAKzQoOCnqDB2QqCB1q0AAQjeAAjZgMQhnl8hRmzQh1qCAAq1g");
	this.shape_32.setTransform(1.95,0.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#570087").s().p("A0oT2Qhnl8hRmzQh1qDAAqzQINinKCh2QKCh1K0AAQDeAADbAMQBnF9BQGyQB2KDAAKzQoOCmqCB2QqDB2q0AAQjdAAjagMg");
	this.shape_33.setTransform(1.95,0.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("A5HtTQH8ixJ5h9QJ4h9KuAAQDcAADYANQBuFyBVGtQB9J5AAKsQn9Cyp5B9Qp5B9qtAAQjcAAjXgNQhulyhVmtQh9p5AAqtg");
	this.shape_34.setTransform(1.75,0.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5C0082").s().p("A0GTyQhulyhWmtQh9p5AAqtQH8ixJ5h9QJ4h9KuAAQDcAADYANQBtFyBWGtQB9J5AAKsQn9Cyp5B9Qp5B9qtAAQjcAAjWgNg");
	this.shape_35.setTransform(1.75,0.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("A45s3QHri7JwiFQJviEKmAAQDbAADVANQB0FqBaGmQCFJvAAKmQnsC8pwCEQpuCFqoAAQjZAAjVgOQh0lohammQiFpvAAqog");
	this.shape_36.setTransform(1.55,0.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#62007E").s().p("AzmTuQhzlphbmmQiEpvAAqnQHqi7JviEQJviFKnAAQDbABDVANQBzFoBbGnQCEJvABKmQnsC8pwCEQpvCFqnAAQjZAAjVgOg");
	this.shape_37.setTransform(1.55,0.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("A4qsaQHajGJliMQJliLKhAAQDYAADTAOQB6FfBfGgQCMJlAAKgQnbDGpmCMQplCLqgAAQjYAAjSgOQh6lehgmgQiLpmAAqgg");
	this.shape_38.setTransform(1.375,0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#67007A").s().p("AzFTqQh6lehgmgQiLpmAAqgQHajGJliLQJliMKhAAQDYAADTAOQB6FfBfGgQCMJlAAKgQnbDGpmCLQplCMqgAAQjYAAjSgOg");
	this.shape_39.setTransform(1.375,0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("A4cr+QHJjQJciTQJciTKZAAQDWAADRAPQCAFVBlGZQCTJcAAKZQnKDRpcCTQpcCTqaAAQjVAAjPgPQiBlVhlmZQiTpcAAqag");
	this.shape_40.setTransform(1.175,-0.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6D0075").s().p("AyjTmQiBlVhlmZQiTpcAAqaQHJjQJciTQJciTKZAAQDWAADRAPQCAFVBlGZQCTJcAAKZQnKDRpcCTQpcCTqaAAQjVAAjPgPg");
	this.shape_41.setTransform(1.175,-0.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("A4OriQG4jaJTibQJSiaKTAAQDUAADOAQQCHFLBpGTQCbJSAAKTQm5DbpTCaQpSCbqTAAQjTAAjNgQQiIlLhpmTQibpSAAqUg");
	this.shape_42.setTransform(0.975,-0.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#720071").s().p("AyCTiQiIlLhpmTQibpSAAqTQG4jbJTibQJSiZKTgBQDUAADOAQQCHFLBpGTQCbJSAAKTQm5DapTCbQpSCaqTAAQjTAAjNgPg");
	this.shape_43.setTransform(0.975,-0.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("A3/rFQGmjlJJiiQJJihKNAAQDRAADMAQQCNFBBvGNQChJIAAKMQmnDmpKChQpICiqNAAQjRAAjLgQQiOlBhumNQihpIAAqNg");
	this.shape_44.setTransform(0.8,-0.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#77006D").s().p("AxhTeQiPlBhumNQihpIAAqNQGmjlJKiiQJIihKMAAQDSAADLAQQCOFBBuGNQCiJIAAKMQmnDmpKChQpICiqNAAQjRAAjKgQg");
	this.shape_45.setTransform(0.8,-0.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("A3xqpQGWjvI/ipQI/ipKGAAQDQAADJARQCTE3B0GGQCpJAAAKFQmXDwpACpQo+CpqHAAQjOAAjIgRQiVk3hzmGQipo/AAqHg");
	this.shape_46.setTransform(0.6,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7D0068").s().p("AxATaQiUk3h0mGQippAAAqGQGWjvI/ipQI/ipKGAAQDQAADIARQCUE3B0GHQCpI+AAKGQmXDvpACqQo+CpqHAAQjOAAjIgRg");
	this.shape_47.setTransform(0.6,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("A3jqMQGFj6I2iwQI2ixJ/AAQDOAADGASQCaEuB5GAQCwI1AAJ/QmGD6o2CxQo1CwqAAAQjNAAjFgSQibkth4mAQixo1AAqAg");
	this.shape_48.setTransform(0.4,-0.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#820064").s().p("AwfTWQibkth5mAQiwo1AAqAQGGj6I1iwQI2ixJ/AAQDOAADFASQCbEuB5GAQCwI1AAJ/QmGD6o2CxQo1CwqAAAQjMAAjGgSg");
	this.shape_49.setTransform(0.4,-0.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("A3VpwQF1kEIsi4QIsi4J5AAQDLAADEATQChEkB9F5QC4ItAAJ4Ql1EEosC4QouC4p3AAQjLAAjDgSQihkkh+l5Qi4otAAp5g");
	this.shape_50.setTransform(0.2,-1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#88005F").s().p("Av+TTQihkkh+l6Qi3osAAp5QF0kEIsi3QIti5J3AAQDMABDDASQChEkB+F6QC3IsABJ4Ql1EEotC4QosC3p4ABQjKAAjEgSg");
	this.shape_51.setTransform(0.2,-1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("A3GpTQFjkPIji/QIji/JxAAQDJAADBATQCoEaCCFzQC/IjAAJxQlkEPojC/QojC/pxAAQjIAAjBgTQiokZiClzQi/okAApxg");
	this.shape_52.setTransform(0.025,-1.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8D005B").s().p("AvdTOQiokZiClzQi/okAApxQFjkPIji/QIji/JxAAQDJAADBATQCoEaCCFzQC/IjAAJxQlkEPojC/QojC/pxAAQjIAAjBgTg");
	this.shape_53.setTransform(0.025,-1.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("A24o3QFSkZIZjHQIajGJrAAQDHAAC+AUQCuEQCIFtQDGIZAAJrQlTEZoZDHQoaDGpqAAQjHAAi+gUQiukQiIlsQjGoaAAprg");
	this.shape_54.setTransform(-0.175,-1.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#920057").s().p("Au8TKQiukPiIltQjGoaAAprQFSkZIZjHQIajGJrAAQDHAAC+AUQCuEQCIFtQDGIZAAJrQlTEZoZDHQoaDGpqAAQjHAAi+gUg");
	this.shape_55.setTransform(-0.175,-1.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("A2qobQFCkjIPjOQIQjOJkAAQDFAAC8AVQC1EGCMFmQDOIQAAJkQlCEkoQDOQoQDOpkAAQjEAAi7gVQi1kGiNlmQjOoQAAplg");
	this.shape_56.setTransform(-0.375,-1.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#980052").s().p("AuaTGQi1kGiNlmQjOoQAAplQFCkjIPjOQIQjOJkAAQDFAAC8AVQC1EGCMFmQDOIQAAJkQlCEkoQDOQoQDOpkAAQjEAAi7gVg");
	this.shape_57.setTransform(-0.375,-1.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("A2bn+QEwkuIGjVQIGjVJeAAQDDAAC5AWQC7D8CSFfQDUIHAAJdQkwEuoGDVQoHDVpeAAQjCAAi5gVQi7j8iSlgQjUoGAApeg");
	this.shape_58.setTransform(-0.55,-1.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9D004E").s().p("At6TCQi7j8iSlgQjUoGAApeQEwkuIGjVQIGjVJeAAQDCAAC6AWQC7D8CRFfQDVIHAAJdQkxEuoFDVQoHDVpdAAQjDAAi5gVg");
	this.shape_59.setTransform(-0.55,-1.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("A2OniQEgk4H8jdQH9jcJYAAQDAAAC3AWQDBDzCXFZQDdH8AAJYQkhE4n8DdQn9DcpXAAQjAAAi3gWQjBjyiXlZQjdn9AApYg");
	this.shape_60.setTransform(-0.75,-1.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A3004A").s().p("AtYS+QjCjyiXlZQjcn9gBpXQEgk5H9jcQH8jdJYAAQDAAAC3AXQDBDyCXFZQDdH9gBJWQkgE5n8DcQn9DdpXAAQjAAAi2gWg");
	this.shape_61.setTransform(-0.75,-1.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("A1/nFQEPlDHyjkQH0jkJRAAQC+AAC0AYQDIDoCcFTQDjHzAAJQQkPFDnzDkQnzDkpQAAQi+AAi0gXQjJjoiblTQjknzAApRg");
	this.shape_62.setTransform(-0.95,-2.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A80045").s().p("As3S6QjIjoiclTQjknzAApRQEPlDHyjkQHzjkJRAAQC/AAC0AYQDIDoCbFTQDkHzAAJQQkPFDnzDkQnzDkpRAAQi9AAi0gXg");
	this.shape_63.setTransform(-0.95,-2.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("A1xmpQD+lNHpjrQHqjsJKAAQC8AACyAYQDODfChFMQDrHqAAJKQj/FNnpDrQnpDspKAAQi8AAixgYQjPjeihlNQjrnpAApLg");
	this.shape_64.setTransform(-1.125,-2.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AE0041").s().p("AsWS2QjPjeihlNQjrnqAApKQD+lNHpjrQHqjsJKABQC8AACyAYQDODeChFMQDrHqAAJKQj/FNnpDrQnpDspKgBQi8ABixgYg");
	this.shape_65.setTransform(-1.125,-2.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("A1jmNQDtlXHgjzQHgjyJDAAQC6AACwAYQDUDVCmFGQDzHgAAJDQjuFYnfDzQngDypEAAQi5AAivgYQjVjVimlGQjzngAApEg");
	this.shape_66.setTransform(-1.325,-2.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B3003D").s().p("Ar1SyQjVjVimlGQjzngAApEQDtlXHgjzQHgjyJDAAQC6AACwAYQDUDVCmFGQDzHgAAJDQjuFYnfDzQngDypEAAQi5AAivgYg");
	this.shape_67.setTransform(-1.325,-2.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("A1UlwQDcliHWj6QHWj6I9AAQC4AACtAaQDbDLCrE/QD5HWAAI9QjcFinWD6QnWD6o9AAQi3AAitgZQjcjLiqk/Qj6nXAAo9g");
	this.shape_68.setTransform(-1.525,-2.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B80038").s().p("ArUSuQjcjLiqk/Qj6nXAAo9QDcliHWj6QHWj6I9AAQC4AACtAaQDbDLCrE/QD5HWAAI9QjcFinWD6QnWD6o9AAQi3AAitgZg");
	this.shape_69.setTransform(-1.525,-2.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("A1GlUQDLlsHMkBQHNkCI3AAQC1AACrAaQDhDBCwE6QEBHMAAI2QjLFtnNECQnMEBo3AAQi1AAiqgaQjijBiwk5QkBnNAAo3g");
	this.shape_70.setTransform(-1.7,-2.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BE0034").s().p("AqzSqQjijBiwk5QkBnNAAo2QDLltHMkBQHNkBI2AAQC2AACrAaQDhDACwE6QEBHNAAI1QjLFtnNEBQnNEBo2ABQi1gBiqgZg");
	this.shape_71.setTransform(-1.7,-2.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("A04k3QC6l3HDkIQHDkJIwAAQCzAACpAbQDnC3C1EyQEJHEAAIvQi7F3nDEJQnDEIowAAQiyAAiogaQjpi3i0kzQkJnDAAowg");
	this.shape_72.setTransform(-1.875,-2.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C30030").s().p("AqSSmQjpi3i0kzQkJnDAAowQC6l3HDkIQHDkJIwAAQCzAACpAbQDnC3C1EyQEJHEAAIvQi7F3nDEJQnDEIowAAQiyAAiogag");
	this.shape_73.setTransform(-1.875,-2.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("A0qkbQCqmBG5kQQG5kQIqAAQCxAACmAbQDuCuC6EsQEQG5AAIpQiqGCm5EQQm6EQopAAQixAAilgbQjviti6ktQkQm5AAoqg");
	this.shape_74.setTransform(-2.1,-3.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C9002B").s().p("ApwSiQjwiui6ksQkQm5AAoqQCqmBG5kQQG5kQIqAAQCxAACmAcQDuCtC6EsQEPG6AAIoQipGCm5EQQm6EQopAAQixAAikgbg");
	this.shape_75.setTransform(-2.1,-3.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("A0bj/QCYmLGwkXQGwkYIiAAQCvAACkAdQD0CjC/EmQEXGwAAIiQiYGMmwEXQmwEYojAAQiuAAijgcQj1iki/kmQkXmwAAojg");
	this.shape_76.setTransform(-2.275,-3.325);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CE0027").s().p("ApQSeQj1iki/kmQkXmwAAojQCYmLGwkXQGwkYIiAAQCvAACkAdQD0CjC/EmQEXGwAAIiQiYGMmwEXQmwEYojAAQiuAAijgcg");
	this.shape_77.setTransform(-2.275,-3.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("A0NjjQCHmVGmkfQGmkfIdAAQCsAACiAdQD7CaDDEfQEfGnAAIcQiIGWmmEfQmmEfodAAQisAAiggdQj8iajEkfQkemnAAodg");
	this.shape_78.setTransform(-2.45,-3.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D40023").s().p("AovSZQj7iZjFkgQkemmAAodQCHmVGmkfQGnkeIcAAQCtAAChAdQD6CZDEEgQEfGmAAIcQiIGWmmEfQmmEfodAAQisAAiggeg");
	this.shape_79.setTransform(-2.45,-3.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("Az/jFQB3mhGckmQGdkmIWAAQCqAACfAeQEBCPDJEZQEmGdAAIVQh3GhmcEmQmdEmoWAAQiqAAidgdQkDiQjJkZQkmmdAAoVg");
	this.shape_80.setTransform(-2.675,-3.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D9001E").s().p("AoNSWQkDiQjJkZQkmmdAAoWQB3mgGckmQGdkmIWAAQCqAACfAeQEBCPDJEZQEmGdAAIVQh3GhmcEmQmdEmoWAAQiqAAidgdg");
	this.shape_81.setTransform(-2.675,-3.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AzxipQBmmrGTktQGTkuIQAAQCoAACcAfQEHCGDOESQEuGTAAIPQhmGrmTEtQmTEuoPAAQioAAicgeQkJiGjNkTQkumTAAoPg");
	this.shape_82.setTransform(-2.85,-3.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DE001A").s().p("AntSSQkJiGjNkTQktmTgBoPQBmmrGTktQGTkuIQAAQCnAACdAfQEHCGDOESQEuGTgBIPQhlGrmTEtQmUEuoOAAQioAAicgeg");
	this.shape_83.setTransform(-2.85,-3.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AziiNQBUm1GKk1QGJk1IJAAQCmAACZAgQEOB7DTENQE1GKAAIHQhVG2mJE1QmKE1oIAAQimAAiZgfQkPh8jTkMQk0mKAAoJg");
	this.shape_84.setTransform(-3.025,-4.05);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E40016").s().p("AnMSOQkPh8jTkNQk0mJAAoJQBUm1GKk0QGJk1IJAAQCmgBCZAgQEOB7DTENQE1GJAAIIQhVG2mJE0QmKE1oIAAQimAAiZgeg");
	this.shape_85.setTransform(-3.025,-4.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("AzUhxQBEm/F/k8QGAk8IDAAQCkAACXAgQEUByDYEGQE8F/AAICQhDHAmAE8QmAE8oDAAQijAAiWgfQkWhzjYkFQk8mAAAoDg");
	this.shape_86.setTransform(-3.25,-4.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E90011").s().p("AmqSKQkWhzjYkFQk8mAAAoDQBEm/F/k8QGBk8IBAAQClAACWAgQEVByDYEGQE8F/AAICQhEHAl/E8QmBE8oBAAQikAAiWgfg");
	this.shape_87.setTransform(-3.25,-4.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AzGhUQAznKF2lDQF3lEH7AAQCiAACUAhQEbBoDdD/QFEF3AAH6QgzHLl2FEQl3FDn7AAQihAAiUggQkchpjdj/QlEl2AAn8g");
	this.shape_88.setTransform(-3.425,-4.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EF000D").s().p("AmJSFQkchojdkAQlEl1AAn9QAznJF2lEQF3lDH7AAQCiAACUAhQEbBoDdD/QFEF3AAH6QgzHLl2FEQl3FDn7AAQihAAiUghg");
	this.shape_89.setTransform(-3.425,-4.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("Ay4g3QAinVFtlLQFslLH2AAQCfAACSAiQEiBeDiD5QFLFtAAH0QgiHVltFLQltFLn1AAQifAAiSghQkihfjij5QlLlsAAn1g");
	this.shape_90.setTransform(-3.6,-4.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F40009").s().p("AlpSCQkihfjij5QlKltgBn1QAinUFtlLQFtlKH1AAQCfgBCSAiQEiBeDiD5QFLFtAAH0QgjHVlsFLQltFKn1AAQifAAiSggg");
	this.shape_91.setTransform(-3.6,-4.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AypgbQARnfFjlSQFjlSHvAAQCdAACPAiQEoBUDnDzQFSFjAAHtQgRHgljFSQljFSnuAAQidAAiPghQkphVjnjzQlSljAAnug");
	this.shape_92.setTransform(-3.825,-4.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FA0004").s().p("AlHR+QkphVjnjzQlSljAAnuQARnfFjlSQFjlSHvAAQCdAACPAiQEoBUDnDzQFSFjAAHtQgRHgljFSQljFSnuAAQidAAiPghg");
	this.shape_93.setTransform(-3.825,-4.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AScAAQAAHplZFaQlaFZnpAAQnoAAlalZQlZlaAAnpQAAnoFZlaQFalZHoAAQHpAAFaFZQFZFaAAHog");
	this.shape_94.setTransform(-4,-4.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AtCNCQlZlZAAnpQAAnoFZlZQFalaHoAAQHpAAFaFaQFZFZAAHoQAAHplZFZQlaFanpAAQnoAAlalag");
	this.shape_95.setTransform(-4,-4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-130.9,372,268.9);


(lib.shapetween = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AzDj9QgLhHgTi8QgUjMAAg5QAApWE2jzQCVh1Dtg1QDbgxFAAAQB/AADAgBQCOABBQAMQBfAPBNAoQBPApBcBSQChCPCBDgQCCDhAACKQAAA3hXDDQhGCcg/ByAKepHIgKAAIAAhuQAVhXAmhWQBAiTA+AAQA6AABEDlQA7DMAABcQAABfgaAxQgJARhpCQAwtGoQg1i1gPhFQgWhnAAiIQAAsyOsAAQDOAAD9BcQEEBfBuB7Ay5GoIAyAAQAZAEBYAEQBaADAxAHQCSAXAMBVQAAANABALQACAoAHAUQgEAAhHAPQhGAPgZAAQgKAAgHAAQgRgBgCgCQgCgDgIgiQgCgJgCgLIgKAAAzDHQQAABsBRAjQArARBlAAQAWAAARAAQAHAAAGAAQA6gBAKgDQAIgDBrg/APolDQgKBnA6CTQAPAnAgBOQAaBEAJA0IAKAAAGabQQAfhfBBhKQArgwBahGQBmhNAqgqQBPhNAwhhQB3jtAOgdQAzhrAVhJQAWhOAHhmQAGhSAAi2QAAjcgKhjIgKAAAhjD6QAAgDAAgDAkNFOQAHAZAhAZQAcAUAMAAQAgAAAeg5QAagzACguQACgCACgCQA9g/APgnAm9E5QAfAHAjADQAPABCCAAQA8AABLhKAoHEcQAiASAoALQAYgnA4hdQBAhpAvhBQCPjFCNg5AnLFOQAEgGAKgPAuuJwQAHAUAJAUQAiBLA4BHQAtA4BdBjQBNBZAeBTQACADAAADQAAAGAAAFQAAAzAPBvQAEAdAEAXQAKBAAHAWQCxgEA5ieQASgzARhkQAThzAMgqIAKAAAu1JcQADAKAEAKArtIWQAAAIAAAIAkXPsQgDgmAZgiQAZghAhgFQAgAzANAgQAdBAgEA1ApNR3QAiBigLB/QgBANgCANAkhalQABABABABQA7A1B1AjQCSArCgAAQA0AAA2ABQAfAAAPgIQAIgEAggbQAqgkAzgkAlTZYQANAqAlAjAk/XgIAKAAQAUB2AABPAmFWaQA0AwAtAWQA8AeBJAAQBNAAB9g5QCCg8BhgDApDMkQAAB1gKDeAgJESQAqi3Avkc");
	this.shape.setTransform(95,7.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ay1jnQgKhGgSi5QgUjIABg4QACpLEyjvQCThzDpg0QDFgtEYgFQAaAAAbAAQB+AAC8gCQCLABBQAMQBdAOBNAoQBNAnBbBQQB8BuBqCeQAdAsAbAvQCADcACCGQABA2hVC/Qg/CNg4BqQgFAIgEAIAvoGHQgEgRgEgQQgDgygIgjQgLgtgJggQgGgcgGgTQgVhbgHh1QgBgOAAgOQgDhoAMhaQgSh6AyhpQAjhGAwg6QAhgoAmgiQAggbAkgXQBrhDCVgeQCKgbClgFQAdACAkgBQA5gBA9AGQAlAEAgAFQB/AVCUA0QAJADAJADQACABADABQAGADAGACQAFABAEACQAkAOAkAPQBSAkA+AoQAqAbAiAeQAWASASATAK6pXQgFAAgFAAQABg3ABg3QAWhWAmhWQAPgjAPgaQAxhWAwgBQA4gDBADKQAFATABACQAnCJAOBYQAHApAAAeQAABHgNAuQgFAPgGANQgJAUhmCNAjrFLQgGAAgFABQgWAAgQAAQgOABgJgBQgNAAgGAAQgCAAgCAAQgIgBgIgCQgGAAgFgBQgGgBgGgDQgLgCgLgDQgCAEgCACQgBACgBACQgEAHgCADQgEgagRgJQgSgIgQgKQBLAVAFgIQAOgXAUglQAGgMAIgOQADgFADgGQAJgOAJgOQALgUALgRQAIgMAHgMQAjgOAOgcQASgfAQgaQAGgKAGgIQAuhLAxg1QBXhXBLgaAAaDyQAVhaAXhzQANhGAOhQQAIgxAJg2AP9lGQAAABAAABQAGAJAAANQgBAJABAIQAAAVAAAVQACAOACAQQACASAEATQAMAOAEAPQAFANAFAOQAGAQAHARQAJAYAQAsQAHAUAJAZQAGASAEASQAPAvAGApQAGABAEAAAQOk9QgBADAAADQgCAyASA8QARA8AfBHQAEAIAEAJQALAYARAjQAJATAKAWQADAIADAGQgDg2gEgkQgFAAgFAAASKA9QACAFACAEQAXA3AIAuQAEABAFAAAG5a6QAeheBBhIQAqgvBZhFQBphQAlgkQBOhNAwheQA9h5AhhCQAeg8AGgOQAyhoAUhHQACgIACgIQAQg/AHhQQABgIAAgIQADgnABg7QABhCgBhfQAAg3gBguQgBhEgDg1AgLDLQgpA+gCAJQgEAUgIAUQgHARgLARQgfA3gjAAQgOAAgcgVQgSgNgMgMQgOgPgCgKQABAAACgBQCTg/gPANQgQAPgQALQgdAUgbACQgaABgSABAgsDtQAAABAAAAQgCABACgCQAAAAAAAAgAgsDoQAAADAAACQANgMALgMQAFgFAEgFQAOgQAJgNQAKgPAFgMQgWAggQAYAtXLMQgTgfgPggQAHgBAJAAQAZAABFgPQBGgOADgBQgHgUgCgnQAAgLAAgNAtrJsQAjgDgFABQgHACgdABQgJABgMAAQABACAAACQABACAAACQACAGADAIQgKABgDABQgCAAAAgBQACABgCgUQAAgCAAgBIAAAAQgBgBgBABQgMgMgEgFQACAIACAHQAAAAABAAQAHAhACACQACADARABQAVAdATAbAtrJsQgDABgDAAQgMAEgIABQgGABgDgBQgCgBgBgCQACAAABAAQACAAADgBQABAAACAAIAAAAQgCAAgBAAQgDAAgCABQgBgDAAgCAyYGtQAZAAAYAAQAZAEBXADQBYACAwAIQCOAWAOBTQhpA1gvAQAsdMhQgCgDgCgCQgfgngXgpQAfAtAbAoQDoFOAAAFQAAAxAPBtQAEAcAEAWQABgCABgBQACgXABgWQABhBgLg4QgBgiAAgWAjvPXQAGgIABgCQgLApgSBwQgRBhgRAxQgRAxgeAjQg/BIh3ACQgHgVgJhAIAAAAQEFk3AogzQgCgmAZgiQAaggAggFQAOAWALASQANAWAIARQAcA/gDAyAosRjQAAgCAAgCQAJgJAAAAQAFARAFASQAIAvgBA1QAAAMgBANQAAAVgCAXQAAAHgBAHQgBgNgCgPQAAgCgBgCQgBgLgBgLQgBgNgBgNQgDghgBgZQgBgGAAgFQgFgcgJgaQAAgCAAgBQAJjWgJDYQAAgBAAgBQgfhXhLhXQhWhcgsg3AlgWCQAbAXAaARQAbASAZAMQAaALAZAIQAQAFARAAQAWACAXgBQAFAAAFgBQATgBAVgEQALgBANgCQAZgCAagIQAUgFAVgHQARgGARgHQAEgCACgBQARgIAQgHQAMgFANgEQAPgHAOgGQAVgIAWgGQAXgGAVgGQAQgEAPgBAkWXAQAEAAAFgBQAGAnAEAjQADAeACAcQACAfAAAaQAAABAAABQgIgKgFgGQgXgaARAUQADADADADQAKALADADIACABQA6AzB1AiQAFABAGABQBsAfB3AGQAhACAhAAQAXgBAWAAQAeABAfABQAEAAADAAQAagCAMgFQAGgDASgPQAHgFAJgHQApgjAxghAuVJPQAFABAEABQAAAHACAFQAAAFACAFQABADABAEQAPgBAMgBAuhJtQACAAADAAQAAABAAAAQgDgBgCAAQj9gyBPAiQAqAQBjAAQASAAAPAAgAugJeQgDgDACAA");
	this.shape_1.setTransform(89.7232,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ay5jRQgKhFgRi1QgSjEABg5QADo/EvjsQCRhxDlg0QDCgsETgFQAaAAAbgBQB7AAC5gCQCJABBPALQBbAOBMAmQBMAnBZBOQB7BrBpCbQAcArAbAtQB+DXADCDQACA1hSC6QgfBHgeA9QggBFgfA4Au1FkQgDgQgDgPQAKgpgHgkQgKgugIggQgHgcgGgTQgXhagMhzQgBgOgBgOQgGhlAIhZQg4h2AxhrQAhhIAwg7QAfgpAmgiQAfgdAlgWQBphCCZgXQCMgWCigDQAaAFAjgBQA5gDA9AFQAlAEAgAEQCAAVCYAyQAJADAIADQADABADABQAGACAGADQAEABAEACQAkANAlAPQBTAjA/AnQAqAcAkAdQAWASASATALDpmQgFAAgEgBQABg2ACg3QAXhWAnhWQAPgjAPgbQAxhVAwgCQA5gHA/DFQAGATABACQAnCIAOBZQAHAqAAAeQABAZgCAUQgEA/gRAlQgHAYhlCKAjdFSQgUABgOABQgPAAgIAAQgNgBgEAAQgCAAgBAAQgIgBgIgBQgEgBgFgBQgGgBgFgDQgLgDgJgDQgCADgCACQgBACgBACQgDAHgCACQgDgagPgJQgRgKgQgLQBKAUAFgIQANgZATgnQAHgNAHgOQADgGAEgGQAIgOAJgPQANgUAMgTQAIgMAIgMQAxAAALgcQAQghANgbQAGgKAFgJQAnhNAug4QBchcBCgSAArDRQAVhYAWhxQAOhEANhOQAIgwAIg0AQAlJQAAABAAABQAMAHAAAOQAAAIAAAJQgBAUgBAVQABAOAAAPQABASADASQAVAOAEANQAFAOAFALQAGAPAGAPQAJAVANAsQAFAUAHAYQAFASAEATQAOAwAFAsQAGAAAEAAAQhk3QAAADAAADQgBAyAYA7QAXA7AiBGQAEAIAEAJQAMAZAUAjQALATALAWQAGAMAFALQAbA4AIAwQAFAAAEABAHKaXQAehUA7hDQAqguBYhDQBnhPAlgkQBNhLAvhcQA9h4AhhAQAdg6AGgNQAwhmAThEQACgIACgHQAPg/AGhNQABgIABgJQACglABg6QAAhBgBhcQgBg2gBguQgDiHgJhHQgFAAgEAAAAXDEQguBGgCAJQgFAVgJAUQgHAQgNAQQghA1gmAAQgPgBgegUQgTgNgMgNQgLgJgEgHQgEgFAAgEQCUg/gMAOQgQAQgOAMQgbAXgZADQggADgSABAgGDgQAAABAAAAIgGAEQADgCADgDgAgHDbQABADAAACQAJgIAJgIQAGgGAFgGQALgNAIgKQAJgNAEgLQgSAagOAVAooRKQgfhThHhUQhZhfgqg3Qg1hFgghIQAGAAAJAAQAZgBBDgOQBEgPAEAAQgGgUgCgmQgBgLAAgMAjaPBQgBglAaghQAaggAggFQAOAUALASQANAWAIAPQAcA8gDAwAoUUrQEilaAJgQQgKAngSBtQgQBggRAvQgRAwgcAhQg+BGhzADQgHgWgJg9IAAgBQALh6ggheQAAgEABgEQAJjLgIDQQgBgCAAgDAodRDQAAgCAAgCIARgLQAFASAFATQAFAugFAzQAAAMgCAMQgBAUgCAUQAAAHgBAGQgBgQgCgRQgBgLgBgLQAAgOAAgMQgCghABgVQAAglAAgYAuQJpQABAAABAAQAHAhACACQACACARACQFCHPAAAGQABAvAPBqQAEAcAEAWQACgDACgCAj2WjQANAHAMAGQAeAMAaAHQAQAEASgBQAVACAZgEQAEgBAGgBQATgEAVgFQALAAANAAQAXABAbgGQAUgCATgFQAQgFAPgHQAEgBABgBQAQgIANgFQALgFAKgDQAOgHAMgGQASgJAUgIQAWgHATgIQAPgGANgBAj2WjQAFAjADAfQACAdACAcQABAcAAAZQAAACAAACQgngvAUAYQAPAOAEAFQACABAAABQA4AvB1AfQAFACAFABQBsAdB3AGQAhACAhAAQAXAAAWAAQAeABAfABQAEAAADAAQAZgBAMgGQAGgDASgNQAHgFAIgHQAMgKAMgJQAegXAjgXAj9WfQADAAADAAQABACAAACAj9WfQAEACADACAlNVpQAdAXAcASQALAGAKAGQABAAABABAHFakQACgHADgGAuBIsQAEADACADQgDAHABAHQgBAFACAGQABAJACAKQABACABADQAAACABACQABACABADIAAAAQABABAAABQgDABgBABQgFADABACQgBAAAAAAQADACACgHQgNACgCgFQAIAAAHgBQgGAAgHABQgLgLgEgFQgEgEADAAAucJpQjvgvBNAgQApAQBhgBQANAAALAAQAGAAAGAAQAAACAAABQgGgBgGgCgAt2JsQABAAABAAQALgBAJgBQgCABgCAAQgHABgJAAQgBAAgBAAQAAgCAAgDAt3JsIABAAAtkJrQgMAEgHABQAAgCABgCAuTJdQABAHACAFAyJGxQAYAAAYAAQAZAEBVADQBWACAvAHQCMAVANBQQhmA0gtAQQAigDgFABQgHACgaAB");
	this.shape_2.setTransform(86.2724,8.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_3.setTransform(85.19,9.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_4.setTransform(84.084,10.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("A0LieQgJhCgOisQgQi5ADg2QAIofEjjgQCLhsDZgyQC5grEGgGQAYgBAaAAQB2gCCvgCQCCAABLAKQBXAMBIAjQBJAkBVBIQB2BjBlCQQAbAnAbArQB4DIAIB5QABASgJAjQAFAcAEAYQAHAqACAeQACBfgVAzQgCAchEBjIAAAAQAhgBgCARQgBAKAAAJQgBAVgHATQgBANgEAOQgDAQAAARQAtAMAFAKQAEALAFAHQAFAJAFAMQAGAMAFAoQAAASAEAaQACATACAUQAEATADATQAFAfACAgQACAAAAABQgDglgEgbQgBAAgBAAQgEAAgEAAAtiDuQgBgPgCgOQAzgMgDgnQgGgygHgfQgHgbgKgUQgchVgZhwQgDgNgCgNQgPhhgDhUQithoAth0QAfhKArg/QAegtAkgjQAeghAmgUQBjg+CjgDQCUgECbABQANANAjgDQA5gHA+ADQAmACAhADQB+ARCjAvQAJADAJADQADABACACQAGABAHACQADABADACQAhAMArAOQBXAgBCAnQAqAaAoAdQAXASATATAKZqkQgEgBgEAAQAEg3AEg2QAahWAohWQAQgiAQgbQAxhUAvgGQA9gQA9CzQAHASABACQAcBjAQBNQgQA8gvBtQg7CJgzBlAjYFWQgBAAgCABQgOADgIAAQgRACgEgCQgKABgCgBQgBAAgBAAQgFgBgEgBQgDAAgEgCQgFgBgDgEQgIgFgIgFQgCACgBACQAAABAAACQgCAFAAACQABgbgMgLQgNgNgPgQQBGASAEgKQAMgcARguQAGgQAGgQQAEgHADgGQAKgQAKgRQAPgXAOgUQAJgOAKgNQBfAsACggQAJgiAFgfQADgKADgKQAShZAlg+QA2g1AkgaQAmgbAVADAAZBgQAUhTAVhoQAMhAAMhJQABgIABgHQAHgmAGgpAPClhQgMASgOATAQVk1QgBAEAAADQAFAvAqA4QAnA4ArBGQAGAIAFAJQAOAYAeAlQAPATAOAWQAIAMAHAMQAmA6AJA2QAFABAEACAQ4BQQAEAAADAAAHaXmQARgaAVgWQAogsBUg/QBihLAkgiQBKhGAuhYQA7hvAgg9QAbg2AFgMQAshdAQg/QACgHACgGQAMg5AGhHQAAgIAAgHQACgjgBg2QgBg9gDhWQgBgygDgrQgDhLgFg2AAhCmQAAAEABADQgVAPABgBQAMgHALgEQANgLAHgGQACgCABgCQAHgIACgHQgGAKgGAJQg9BbgDAMQgIAZgMARQgJAQgTAOQgmAwgwgDQgTgCgggTQgNgIgLgIQgHgFgGgFQgegTACgHQCOg5gFAOQgNAQgKASQgUAdgVAGQgWAGgKAEApTP5QgchNhAhNQhShagmg1Qgug8gdhBQgBgCgBgDQgBgBgBgCQAFAAAFAAQgEACgEABQgJAEgIADQgOAAgVABQgCgDgCgBQABAEABADQAAABAAABQAFASABACQACACAQAAQEtGxAAAFQABAsAPBiQAEAZADAUQAGgGAFgGQEKk9AHgNQgJAkgQBlQgOBYgPArQgPAsgbAfQg5BAhqABQgGgVgIg5QAAgBAAAAQALh0gchZQAAgIABgHQAJizgGC8QgCgEgBgFgAtsJLQADAAACAAQAXgBBAgOQBAgPADAAQgGgTgBgkQAAgLAAgLAjgNvQACgiAbggQAageAggHQAPATALAOQANAUAIAMQAbA1gBAnAlcUNQAiAYAlASQAPAIANAGQAVAKASAHQAlANAbAHQATAEAUgFQAXgCAagMQAFgCAFgCQAVgKAVgIQAKADAMADQAYALAZAAQATAFAOgBQAMAAAIgDQACgBACgBQALgFAFgDQAGgCAHgDQAIgHAGgHQAJgLAPgLQASgKANgQQAKgLALgDAkDUtQAEAAAEgBQABANABAMQACAUAAASQAAAaABAZQABAXAAATIAAAAQA2AmBxAbQAFABAGABQBoAZB4AGQAhACAhgBQAWAAAWAAQAfABAdABQAEABAEAAQAYgBALgDQAGgCARgMQAGgEAIgGQAfgXAkgVQAHgFAIgEAo4PSQABgCABgBQApgRAAAAQAFAUAEAWQgGAqgOAwQgCALgGALQgCAPgBANQgBAEAAAFQgBgTgBgSQAAgMABgMQACgOADgLQAAgfAIgJQAHgaABgTAj1XIQAAAEgBAEQglgtATAUQAPAOAEADgAGkZPQAUg5AigwAyjGvQAXAAAXgBQAXADBQACQBRACAtAFQACAAABABQCBATANBJQhDAjgqARAuMG3QAAACgBACQgBAEgEAFQgIAMgBAHQgEAIAAAKQAAAMACAQQACALAHAOQgFAKAIALQAAABABABQAQAQARgLAu1JHQgDgEACAAAvNJPQjMgoBGAbQAnAPBbgCQACAAACAAQANAAAMAAQABADABADQgOgDgNgDgAuvJPQACAAAAAAQABABAAACQgBgCgCgBQgEgFgCgDQABAEAAAEQADAAACAAgAuqJbQgBgBAAgBQABAAAAAAQAWgCAOgCQgdAKgHgEgAuGJVQAEAAADAAQgDAAgDAAQgBAAAAAAgAt/JVIANgCIAGAA");
	this.shape_5.setTransform(82.9519,12.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("A0miVQgIhBgOioQgPi1AEg2QAKoTEfjeQCJhpDVgxQC2grEBgHQAYgBAZAAQB1gCCrgCQCAgBBKAKQBWAMBGAiQBIAiBUBHQB0BgBkCMQAQAYARAaQAHgDAHgBQA/gUA8CtQAHASABACQAlCGARBfQAHAqABAfQADBegTA0QgDAhhPByQAlgDgCASQAAAKgBAJQgCAVgJATQAAANgGANQgEAPgBARQA1AMAFAIQAEALAFAEQAFAIAFAKQAFAJACAoQgCASACAaQABATACAVQAJAyADA2QAEABAFAAAtGC/QgBgOAAgOQBAgCgBgpQgFgygIgfQgGgbgLgTQgehVgehuQgDgNgCgNQgThfgGhTQjVhjAsh3QAehMArg/QAdguAjgjQAegjAmgUQBig8CmAEQCWABCZADQAJAQAigEQA5gIA/ABQAlACAiADQB+AQCnAuQAJADAJACQADACACABQAGABAHACQADACADABQAgALAsAOQBYAgBDAmQAqAaApAdQAZASASATAKLrAQgEgBgEgBQAFg2AFg2QAbhWAphVQAQgjAQgbQAqhHAogPQAKAOAKAQQB2DDAJB1QAEAwhHCoQg4CHgxBiAjUFOQgDACgCABQgMADgHACQgRACgDgCQgJAAgBgBIgBAAQgFAAgEgBQgCgBgDgCQgEgBgDgFQgIgFgHgFQgBABgBACQAAABAAABQgBAEgBACQADgagLgMQgLgOgOgRQBEAQAEgKQAMgdAPgxQAGgQAGgRQAEgHAEgGQAKgRAKgRQAPgYAPgVQAKgOAKgOQBuA7gBghQAHgjADgfQACgLACgLQALhcAihAQAigjAbgXQA+g0AWAJABOjuQACgOADgOQAHgsAIgvAOwlxQAAABgBAAQgFAIgGAIAQRk8QAAAEAAAEQAGAuAxA3QArA3AvBGQAGAIAGAJQAOAYAhAmQAQATAQAWQAJAMAHALQAqA8AJA3QAFACAEACAGZYsQAehUA9hCQAogrBSg+QBhhJAkghQBJhFAthWQA7huAgg7QAag1AEgKQArhbAQg9QABgGACgHQAMg2AEhGQABgHAAgIQABghgBg1QgCg8gDhTQgCgxgCgqQgGh7gLhCQgFAAgEAAAATAzQAUhQAVhnQAJgyAJg4AAvCNQABAEAAADQgaASACAAQAMgFALgCQAMgMAGgEQABAAABgBQAGgGABgGQgFAHgEAGQhABfgCAMQgJAagNASQgKAOgUAOQgoAvgzgEQgVgCgggUQgIgEgHgFQgOgIgKgJQgigTADgHQCMg4gDAPQgLARgJATQgSAggTAGQgRAGgIAEApiPVQgbhKg8hKQhQhYglg0Qgtg7gbg+QgPAGgLAEQgOABgVAAQgBgBgBgBQAAADABADIAhgEQgYAJgIgCQAEAOABACQACACAQAAQElGnAAAFQACAqAPBgQAEAYADAUQAGgIAGgHQECk0AHgMQgJAjgPBiQgNBVgPArQgPArgZAdQg3A/hoAAQgGgUgIg4QAAgBAAAAQAMhygchXQABgLAAgJQAKiogFC0QgCgGgDgGgAtdIxQAYgEAugKQA+gOAEgBQgFgTgCgjQAAgKAAgMAjhNNQADgiAbgeQAagfAggHQAPASALAOQANASAIAMQAbAygBAlAj6UfQABAPAAANQgBAZABAYQAAAVgBARQAAAFAAAFQgkgtASATQAQAOACACIABABQA0AiBxAZQAFABAFABQBnAYB6AGQAgABAhAAQAWAAAWAAQAfABAdABQAEABADAAQAYAAALgEQAGgBARgMQAGgDAHgGQAlgaArgXAlgToQAkAXAnATQAOAHANAGAkEUAQAEgBAEAAQABAQABAQQAXALAUAHQApAOAcAGQATAEAVgGQAWgEAcgOQAEgDAGgCQAVgLAUgJQALAEAMAEQAYAOAZABQASAIAMABQALABAGgCQACgBABAAQAKgFACgCQAEgCAFgCQAHgGAFgIQAFgMAOgMQAQgKALgTQAJgNAJgFApAOmQABgCAAgCIAzgSQAEAVAEAWQgJApgSAvQgDAKgGALQgDAOgBAKQgBAEAAAEQgBgUgBgSQABgNABgMQADgOAEgLQABgeAKgGQAJgVABgRAuPGIQgDAIgGAIQgLANgCAIQgBABgBACQAFABAFAAQCBASANBIQgtAXghAPAunGwQgDAIAAAJQgBANACATQACAMAIAQQgDALALAOQAAACABABQATATAWgGAvdI/QACAAABAAQAPAAAMAAQACAAACAAQgEgDgBgDQABADAAADQABAEABADQgRgEgPgDQjAgmBEAaQAlAOBXgCgAu7I/QACAAACAAQABADABADQgEgDgCgDgAuzJOQgDgBgBgCIADAAQAAACABABgAvAI5QgEgEADAAAuTJHIAPgBIALgCAuQJGQgBABgCAAAuEJGQgFAAgHAAAt2I8QgCgFgCgFQAGAAAIAAQAGAAAJgBQgOAGgLAFgAyrGnQAXAAAWgBQAXADBOACQBIABAqAE");
	this.shape_6.setTransform(81.8419,14.3238);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("A1CiKQgHhBgNilQgOixAEg1QAMoJEbjZQCHhnDRgxQCzgrD8gHQAYgBAZAAQBygCCpgDQB9gBBJAJQBUAMBGAhQBGAhBTBFQByBdBjCJQAOAUAPAWQAhgrAhgFQBAgXA7CnQAIASAAACQAlCFARBhQAIApABAfQAEBfgTA0QgBAnhZCAQAngEgCASQgBALgBAJQgCAVgKASQgCANgHAMQgFAPgCAQQA9AMAFAHQAEAKAFADQAFAGAEAJQAEAGgBAmQgDASABAaQAAATABAWQAIAyADA5QADABAFAAAsqCRQAAgOAAgNQBNAHAAgqQgDgzgHgeQgGgbgNgUQgfhUgjhsQgDgNgDgNQgWhdgKhRQj7heAqh6QAdhNAqhBQAcgvAjgkQAdgkAmgTQBhg7CpALQCYAHCXAEQAFATAigEQA5gKA/AAQAmABAiADQB+APCqAtQAJADAJACQADACACABQAGABAHACQADABACACQAgAKAuAOQBZAfBEAmQAqAaAqAdQAZASATASAJ9rcQgEAAgDgBQAFg2AGg2QAchWAphVQARgjAQgbQAPgZAPgSQAMARAMASQB0C+AKByQAFAuhFClQg2CDguBfAkjE8QABgVgIgKQgKgOgOgTQBDAQAEgLQAMgeAOgzQAFgSAHgRQAEgHADgHQALgSAKgRQAQgZAQgVQAKgPALgOQB9BKgEgjQAEgjABggQABgMACgLQADhgAghCQAQgRAPgOQBahWAUATAANAHQAThPAWhkQAEgbAFgcQAGglAGgnQAHgqAIguAOZmAQAEgBADAAAQNlCQAAAEAAAEQAIAtA2A2QAxA3AyBFQAGAIAHAJQAPAYAkAmQASATAQAWQAKAMAIAMQAuA8AJA5QAFADAEACAGOYKQAehTA8hBQAogqBRg8QBfhIAjghQBIhDAthUQA6hrAgg7QAZgzAEgKQAphYAPg6QACgHABgGQALg0AFhEQAAgHAAgIQABgggCg0QgCg6gEhSQgCgvgDgpQgGh4gMhBQgEAAgFAAAA9B1QAAAEABADQgfAWACAAQALgEALgBQANgLAFAAIAAAAQAFgFABgFQgDAFgDAFQhCBggDANQgJAbgOARQgKAPgWAMQgqAug3gFQgWgDghgTQgDgCgCgBQgHADgCADQgJAEgFABQgSADgCgDQgIABAAgBIgBAAQgDgBgDAAQgCgBgCgCQgFgCgCgFQgHgGgGgFQgBAAAAABQgBAAAAABQAAABAAACQgBAFABABQABgGAAgEAjQFGQgVgMgPgLQgmgUAEgHQCKg1AAAPQgKARgIAUQgQAigSAIQgKAFgGAEgAtKIUQATgEAZgFQA9gOAEgBQgGgTgBgiQAAgKAAgMAjjMrQAEghAbgeQAbgeAggHQAOARALANQAOARAIALQAbAwgBAiApiSQQD5kpAGgMQgIAhgOBgQgNBTgOApQgOAqgZAcQg2A9hlgBQgFgTgHg3QAAgBAAAAQALhvgahWQAAgMABgLQAJifgECtQgDgHgCgHQgahHg6hIQhOhXgkgzQgpg3gag5QgDgIgDgIQAGAAAIAAQANgBAagFQgaANgVAJQgUAJgPAFQgNABgWAAIAAAAQgGgGgDgEQgCgCgCgCQgDgEACAAAj8T5QAAAKAAAJQgBAYAAAXQAAATgBAPQAAAGAAAFQgkgsASASQASAPAAAAQA0AfBvAYQAGABAFABQBmAWB5AGQAgACAigBQAWAAAWAAQAeABAdACQAEAAADAAQAYAAALgCQAGgBAQgLQAGgEAHgFQAkgZApgUAkFTTQAEAAADgBQACAUAAATQAaAMAXAIQArAOAcAGQAVAEAVgIQAXgEAcgSQAFgDAFgCQAWgNAUgLQALAFALAGQAZARAXADQASAKALADQAJADAEgBQABgBABAAQAJgFgBAAQADgCAEgBQAEgHADgIQADgNAMgNQAPgLAJgWQAHgOAJgFAllTDQAmAXAqAUQANAGAMAFApJN6QABgCABgCQA6gUAAAAQAFAWAEAXQgNAogVAuQgEAJgHALQgDAMgCAHQAAAEAAADQgCgUAAgTQABgNACgMQADgPAGgLQABgdANgCQALgRABgPAu9JBQADALACABQACACAPABQEeGcAAAFQACApAPBdQAEAXADATQAIgJAHgIAuTFaQgFAJgIAKQgNAOgCAIQgGAKgBAMQAAAGgBAIQAGAAAGABQB+ASANBFQgWALgUAKAu3GnQABAKABAMQACANAJASQgBANANARQAAABABACQAXAXAbgCAvsIwQAEAAAFAAQANAAALgBQACAAABAAQAEAAADAAQABAGABAEQABACAAACIAfgEQgVAIgJAAQgFAAgBgDIAFgBQABACAAACAvLIvQACAFABAEQgTgEgRgEQi2glBCAaQAjAMBRgBAvMIrQABACAAACAuNI3QgFABgKAAQgBABgCAAIASgCIAHAAAyzGgQAWgBAVAAQAXACBNACQBEAAApAE");
	this.shape_7.setTransform(80.7318,16.1987);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_8.setTransform(79.6188,18.0736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("A14h3QgHg/gKieQgNiqAFg0QAPnyEUjSQCChkDKgvQCtgqDzgIQAXgBAYAAQBvgDCjgEQB3gBBHAIQBRALBDAfQBEAfBQBBQBvBYBhCBQAXAiAaAkQAFgMAHgNQARgiAQgbQAyhTAugKQBCgeA6CdQAJAQAAACQAjCEATBkQAIApACAgQAFBegRA1QABAthUB5AryA0QABgNABgNQBpAbACgtQgBg0gHgdQgFgcgQgUQghhSgthpQgEgMgEgNQgchagRhOQlJhUAniAQAchPAnhDQAbgyAigkQAdgnAmgTQBdg3CvAYQCeATCSAHQgDAYAhgFQA5gNBAgBQAmAAAjACQB9ANCxAqQAKADAKACQACACACABQAFABAIACQACABACABQAeAKAyAMQBcAeBGAmQApAZAtAcQAaASAUATAKmwTQABACABABQBwC0AOBsQAGArg/CcQgyB8gqBaAJhsUQgDgBgDAAQAHg2AIg2QAZhJAjhJAjUDZQAJgeALgsQAEgTAGgSQAEgJAEgHQALgSALgTQARgbARgWQAMgPAMgOQCbBlgLgkQAAglgEgiQgBgNAAgMQgLhmAchHQCAiCAGAlAAChSQAShMAVhfQAKg7AKhBQAGgpAHgrAQFlPQAAAFAAAEQAMArBCA0QA8A1A4BFQAHAIAIAJQAQAXAqAnQAVAVASAVQALAMAJAMQA2A+AKA9QAFADAEADANwmgQA8gLgDAVQgBAMgBAJQgDAVgPASQgCAMgKAMQgIANgEAPQBOALAFAFQAEAJAEgBQAFACAEAGQACAAgGAlQgHARgCAaQgCAUAAAXQAGAzABA/QADACAFAAAF5XEQAdhQA7g+QAngoBOg6QBchFAigfQBGhBAthQQA5hmAfg4QAXgwAEgKQAmhSANg3QACgFABgGQAJgxAEhAQAAgHAAgGQAAgfgCgxQgEg3gEhOQgDgtgEgnQgIhygMg+QgFAAgEAAABYBDQABAEABAEQgoAcABABQALgBALADQAMgIABAFQABAAAAAAQACgBAAgCAkXDvQgCgFgDgEQALACAJACQAsAHADgJQADgHACgIQAxgOADAJQgIARgFAZQgLAmgPAKQgDACgCABQgFgCgFgDQgagNgTgNQgBAAgBgBQgBgDgBgDQgHgMgJgQQAIgDAHgCQAfgLAVgGAkFERQgsgWAGgFQALgEAJgDABXBnQhDBjgEAOQgMAdgPAQQgMAOgZALQgtArg9gHQgWgCgcgPQgMAKACAGQgGAFgBACQgTADAAgDQgFAAABAAQgCgBgBgBQAAAAgCgCQgEgCgBgGQgEgGgEgEQgBgCgCgCQAAABAAAAQAAABABABQAAAEABABQABgCAAgCQAFgUgEgNAtDHeQAKgCANgDQA6gOAEgBQgFgSgBghQAAgJAAgLAjnLmQAGgeAcgeQAbgdAggIQAPAPALAMQANAPAJAJQAaArAAAdAkHR5QAEgBADAAQABAbgCAZQAAAAAAABQgDAVAAAWQgBAOgBAMQAAAIAAAGQgjgrARAPQARANABABQAAAAAAAAQAyAYBtAVQAFAAAFABQBkAUB6AFQAgACAhAAQAWAAAWAAQAfAAAcADQAEAAADAAQAXABALgCQAFAAAQgKQAGgDAGgEQAigWAngQAluR4QApAYAwATQAKAFAKAEQAhAOAcAJQAwAPAeAGQAWAEAWgMQAYgGAdgXQAFgDAGgEQAVgRAWgMQAKAHAMAIQAYAYAWAGQARAPAIAGQAHAGgCABQABAAABgBQAFgCgFABQABgHgBgJQgDgPAIgPQANgNAEgbQAFgSAGgGApaMgQABgBABgCIBLgYQAFAYADAYQgUAmgbAsQgFAIgKALQgEAIgBADQgBABAAADQgBgWABgUQABgOAEgMQAEgPAIgKQACgcASAGQAPgJACgNAqBRKQDnkVAHgMQgIAggNBaQgLBOgNAmQgNAngXAbQgyA4hggBQgFgSgGg0QAAgBAAgBQALhrgYhSQABgQAAgNQAKiNgDCfQgDgJgEgJQgYhDg1hDQhIhTgigxQgigvgXgwQgHgOgFgOQAGgBAIAAQAEAAAGgBQAQgCAegHQABAEABAFQgiARgaANQggAOgVAIQgMABgUAAQABACAAADQABACAAACQADAGABABQABABAPABQEQGHAAAFQACAmAPBYQAEAWADASQAKgMAJgKgACFTWQAAAAgBAAIABAAgAuaD+QgIALgMAMQgRARgDAJQgIAMgDAOQgCARACAaQACAPALAUQBqAPATA4AzEGQQAVgBAVgBQAWACBJABQBLABApAEQADAAAEABQAAABABAAQABARASAXQABACACACQAaAaAeAJQAFACAFABAvhIQQAGgBAGAAQABAHACAGQgCAAgCAAQgIgIgDgEgAuyIbQgDACgCABQAZgEgDAAQgEABgNAAgAvhIQIAAAAQAAAAAAgBQgEgEACgBAvhIQQABAFACAFQgZgFgVgEQAKAAAMgBQALAAAKAAgAvhIPIAAABAwMIRQieghA8AWQAfALBDAAgAu3IeQgQAFgJACQgLABgBgEQAGgBAFAAQAPgCALgBg");
	this.shape_9.setTransform(78.4932,19.9694);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_10.setTransform(77.361,21.8441);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("A2vhjQgGg9gJiXQgLijAHgzQASncEMjLQB+hfDCgvQCngpDqgJQAWgBAXAAQBrgECdgEQBzgBBEAHQBOAKBBAdQBCAdBNA9QBsBSBeB6QAYAhAaAkQAQAYAOAYQAAgCAAgBQAghWArhUQASgiARgcQAxhSAvgNQBEgjA5CQQAJAQAAACQAiCCAVBnQAHAqADAgQAGBegPA1QADA0hPB0Aq7goQACgMADgMQCEAvAFgwQABg4gGgcQgGgbgSgVQgkhPg2hmQgFgMgFgMQgihXgYhLQmYhLAliGQAahRAlhFQAZg0AhglQAcgqAngRQBZg1C3AmQCiAeCOAKQgMAeAhgHQA5gPBBgDQAmgBAjABQB+ALC4AoQAJACAKACQACACACACQAFAAAIACQACABACABQAcAJA2AMQBeAcBHAlQAqAYAwAdQAbARAUATAgJisQAQhIAUhaQAJg3AKg/QAGgmAGgoAJFtLQgDgBgDgBQAJg1AJgzQBRCIAOBXQAIAog7CTQgsB1gmBVAByAcQAAgCgCgDQgFglgJglQgCgNgCgNQgZhtAWhMQCKiNgLA1ANHm/QBJgQgDAXQgCANgBAJQgEAVgSARQgDALgNALQgLANgGAOQBeAKAFACQAEAIAFgFQAEgBACADQgBADgKAaQgKAQgEAbQgEAUgCAYQAEA0ABBFQACACAFAAAP9lbQAAAFAAAEQAPAqBPAxQBGAzA+BFQAIAIAJAJQASAXAvAoQAYAVAVAWQANALAKAMQA9BAALBBQAEADAEAEAFjV+QAdhMA5g7QAmgnBLg3QBZhCAigeQBEg+ArhMQA4hiAfg2QAWgtADgIQAjhNAMgyQABgGABgFQAIgtADg8QAAgGAAgHQgBgcgDgvQgFg0gFhKQgEgrgEgkQgJhtgOg6QgFAAgEAAABzARQABAFABAEQgBABgCABQgDACgDACQgnAdAAABQALACAKAHQAKgFgCAMQACACgBAAQhDBjgFAPQgOAfgQAPQgNANgdAKQgxAnhEgIQgSgDgXgJQgLgFgLgGQgBAAgCgBQgagMgUgNQg2gYAIgEQCCguAJAPQgDALgCAOQADgCABgCQAKgjAMg9QAEgVAFgTQAEgJAEgIQAMgUAMgTQASgcATgYQANgQAMgQQCNBjAYACAjkEOQACgMgDgIQgGgSgLgYQAwAIAMgFQgBAKgBALQgGAkgJAOQgCADgDACQgMAPAHAIQgBAGACACQgTAEABgDIABAAQAAgBABgBQABAAgBgDQgDgCAAgHQgEgIgEgHIAAAAQABAAABABQABAEACAAQAFgOABgLgAprLIQABgCABgBQBcgcAAAAQAEAZADAaQgbAkgiAqQgGAHgMAKQgFAEgBgCQgBABAAABQAAgYABgUQACgPAEgMQAGgQAKgJQAEgbAWAOQAUgBACgJAjrKiQAIgdAcgcQAcgcAggJQAPAOALAJQANAOAJAHQAaAmABAXAkJQfQADgBADgBQAAAagEAXQgCAIgBAJQgBAKgBAMQAAAKgBAIQgBAKgBAIQghgqAQAMQAQALABABQABAAABAAQAvARBpASQAGABAFAAQBiASB7AFQAfABAiAAQAVAAAWAAQAfAAAcADQADAAAEABQAWABAKgBQAGABAOgJQAGgCAGgEQAggSAlgNAl4QuQAtAXA1AVQAGACAGADQAqAQAjALQA2AQAeAFQAYAEAYgPQAYgIAegcQAFgFAFgEQAYgVAVgOQAKAJAMAKQAUAaASALQAAgBAAgBQAKgOABghQABgVAFgIAqgQDQDWj/AGgMQgGAdgMBVQgLBJgLAkQgMAkgWAZQgvA1hZgCQgEgSgGgyQAAgBgBgBQAMhmgWhPQABgTABgQQAKh7gDCRQgDgLgEgLQgWg9gwg+QhFhQgfgwQgbgngUgoQgJgUgIgTQAFgBAIAAQAEAAAFgBQAGgBAIgCQAVgEAfgHQA4gOAEgBQgFgRgBggQAAgJABgKAvjIHQABADABAAQACACANAAQECFzAAAEQADAkAOBSQAEAVAEARQAMgOALgOABwRsQAEACADACQAQATAEAKQAEAHgEAEQgBABgBAAIABAAIABgBQgBgBgJADQgEACgBAAQgDgHgEgJQgJgQAEgQgAuiChQgKAOgRAPQgVAUgFAKQgKANgDARQgDATACAeQABASAOAYQAEAVAYAcQABADADACQAAABABAAQAyANAUAaQAFAGADAHQACAAACABAzVGAQAUAAAUgBQAVABBGABQBHAAAoADQAaADAUAFQAaAaAeAQQALAGALAEQAEAHABAIQgRAIgPAIQgsAVgbALQgEABgEABQAYgDgDAAQgDAAgKABQgLAAgRAAQgEAAgFAAQgHgIgDgEQgBgCAAgBQAIAAAHAAQADAJACAGQABADAAACQABACAAABQgQAEgCgFQAKgBAHgBQALgBAIgCQgKAEgIACAwpHyQiKgdA3AUQAcAIA3ABQAPAAARgBQAIAAAIgBAv4HzQACAFABAFQgdgHgXgE");
	this.shape_11.setTransform(76.2543,23.7368);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("A3KhZQgFg8gIiUQgKifAHgyQATnREJjHQB8heC+guQCkgoDlgKQAWgBAWAAQBpgECagFQBxgBBEAHQBLAJBAAcQBBAcBMA7QBqBQBdB1QAXAhAaAiQAhA0AZAtQACAEADAEQAKAUAJASQADACACADAqfhWQADgMADgLQCSA4AGgxQADg4gHgcQgFgcgTgVQgmhOg7hkQgFgMgFgLQgmhWgbhKQm/hGAkiIQAZhSAkhGQAYg2AggmQAcgqAngSQBYgzC5AtQCmAkCKALQgPAhAhgHQA4gRBCgEQAlgCAkABQB+AKC7AnQAKACAKACQACACACACQAFAAAIABQABACACABQAcAIA3ALQBfAcBJAlQApAYAxAcQAYAPATAQQAhBFAKAzQAIAng4CPQgqBxgjBSAgPjYQAQhHAUhXQAJg2AIg9QAHglAGgnAI4tnQgDgBgDgBQAAgDABgDQAKgzAJgxQAhhWArhUQASgiARgcQAyhRAugPQBGgnA3CLQAKAQAAABQAiCCAVBpQAIApACAgQAHBfgOA1QAEA3hMByABzAOQAlAUgJgSQgHgmgMgnQgCgNgDgNQgghxAThNQCPiTgTA9AMznOQBQgTgEAYQgBANgCAKQgFAVgUAQQgDALgPALQgLAMgIANQBmAKAGABQAEAHAEgHQADgBACAAQgEAEgJAVQgNAQgFAbQgFAUgCAZQADA1AABIQABABAGABAP5lhQAAAFAAAFQARAoBVAwQBLAzBBBEQAJAIAJAJQATAYAzAnQAZAVAVAWQAOANALALQBBBAALBDQAEAEAEAEAFYVbQAdhJA5g6QAlgmBKg2QBYhAAhgeQBDg9ArhKQA3hgAfg0QAVgrACgIQAihLALgwQABgFABgFQAHgrADg6QAAgGgBgGQAAgcgEguQgGgygGhIQgEgqgEgjQgKhqgOg4QgEAAgFAAACBgGQABAEACAEQgJAGgIAGQglAbABABQAKADALAJQAIgDgDAOQABAEgCACQhBBhgGAPQgOAggTAPQgNAMgeAKQgyAlhIgJQgSgCgWgJQgEgCgDgBQgJgEgJgFQgegNgVgNQg7gZAJgEQCBgsAMAQQgDAMgCAPQAAAKAAALQgEAfgGAQQgDAHgDAEQgKAQAKAJQABAHADACQgUAEACgEQABABACAAIABAAQABgBACgBQACAAgCgDQgCgCAAgIQgDgJgDgIIABAAQABABABABQACADACgBQAFgMACgJQADgPgDgKQgEgTgLgZQATADANABQAcACACgIQALgkAKhAQAEgVAEgVQAFgJAFgIQALgUANgTQATgeATgYQANgRANgQQBtBQAsAYAp0KcQACgCABgBQBkgeAAAAQAEAaADAbQgeAjgmAoQgHAHgNAKQgFADgBgFQgBAAAAABQAAgZABgVQADgPAFgNQAGgQALgJQAFgaAYASQAWADADgHAjsKAQAJgcAcgcQAcgbAfgJQAQAMAMAJQANANAIAGQAaAkACAUAkRRSQgBALgBAIQgggpAPALQAQAKABAAQABABABAAQAuAOBoAQQAFAAAGABQBhAQB7AFQAfABAiAAQAVAAAWAAQAfABAbACQAEABADAAQAWABALABQAFAAAOgIQAFgCAHgDQAegRAkgKAkOQ4QgBAGAAAGQgBAHgBAHAkKPyQADgBADAAQgBAYgEAVQgEANgBANAl8QJQAuAYA4AUQAEABAEACQAvASAmAMQA4AQAfAFQAZAEAYgRQAZgJAegfQAFgFAGgEQAYgXAWgPQAJAKALALQAMAQALALQALAMALAGQAPAXAEALQACAJgIAFQgBAAgMAEQgGACgCABQgEgHgHgKQgNgRADgTQAFgHACgNQABgMAAgSQAAgXADgIAqwPhQDPj3AFgKQgGAcgLBSQgKBHgLAiQgMAjgUAYQguAzhWgCQgEgSgGgwQAAgCAAgBQAMhjgWhOQACgWABgQQAJhzgBCKQgEgLgEgMQgWg7gtg8QhChOgegvQgZgjgSgkQgLgWgIgWQAFgBAIAAQABAAABgBQASAQAFAVQgKAFgJAEQgxAZgeAMQgKAAgRAAQgFAAgFAAQgHgHgDgEQgDgEABgBAvsH5IABABQACABANABQD7FoAAAEQADAiAOBQQAEAUADAQQANgPAMgOACNR5IAAABIAAAAgAulBzQgMAPgTARQgXAVgFAKQgLAOgEASQgEAVACAgQACATAPAaQAFAXAaAeQACAEADACQAbAcAfASQAWgDArgLQA2gNAEgCQgFgQAAgfQAAgJAAgKAzdF5QATgBAUgBQAVABBEABQBFgBAoADQBHAIAgAbQADAAAEgBQAQAKASAHAw6HiQh9gaA1ASQAZAIAvAAQASAAAWAAQAHgBAGAAQAJgBAJAAQACALACAGQABADABACQABACAAABQgTAGgCgGQALgBAJgCQAKgBAHgBQAVgDgCgBQgCABgJAAQgEABgEACQgJADgHACAwDHmQACAEABAFQghgHgZgG");
	this.shape_12.setTransform(75.1309,25.5868);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("A3lhKQgEg8gIiQQgJibAHgyQAWnGEFjDQB5hcC7gtQChgoDggKQAWgBAVgBQBogECWgFQBvgCBCAHQBKAIA/AbQBAAbBLA5QBoBOBbBxQAXAgAbAhQAIANAIAMQAiATAnAWQAcASAVASAqDiAQAEgLAEgLQCfBCAHgzQAEg5gGgbQgFgbgUgWQgohNg/hjQgGgLgGgLQgohUgfhIQnmhCAiiLQAZhTAihHQAYg3AfgmQAcgtAngQQBWgyC9AzQCoAqCIANQgUAkAhgIQA5gTBBgFQAmgCAkABQB+AJC/AlQAKACAKADQACACACACQAEgBAJACQABABABABQAbAHA5AMQBhAaBJAlQAJAGAKAFQBZCPATBWQAIAmg1CLQgoBuggBPAgVkAQARhFAThVQAIg0AIg7QAGgkAHgmAIqt9QgDgCgCgBQALg1AKg1QAihWAshUQASgiASgcQAxhRAugPQBHgqA3CFQAKAPAAACQAiCBAVBqQAIApADAhQAHBegNA2QAGA6hKBvAB+gDQA9AngMgYQgKgmgOgoQgEgNgDgOQgnh0AQhQQCUiYgcBFAMenZQBXgVgEAZQgBANgCAKQgFAVgWAQQgEALgQAKQgNAMgIAMQBuAJAGAAQABACABABQADABADgGQAEgEACABQgBgKgLASQgDAFgEAHQgOAQgHAbQgFAUgDAZQABA2AABKQABACAFAAAP2liQAAAEAAAFQASAoBbAvQBRAyBEBEQAJAIAKAJQATAXA2AoQAbAWAWAWQAPAMALALQBFBCALBEQAFAFADAEAFOU9QAdhIA3g4QAlglBJg1QBWg/AhgdQBCg7AqhJQA3hdAfgzQATgqADgHQAghIAKguQABgFABgFQAGgoACg5QAAgGAAgGQgBgbgEgsQgGgxgHhGQgEgogFgjQgKhmgPg3QgEAAgEAAAB+gDQgnAcABABQAKAFALAKQAHgBgEARQAAAGgDACQhABggFAPQgQAhgUAPQgNAMggAJQg0AkhLgKQgNgCgPgFQAEgQgDgLQgCgPgGgTQAAAGAAAHQgBAcgEAQQgNgFgPgHQgegNgWgNQg/gbAKgDQB/gqAOAQQgCALgBAPQAAAFAAAGQgCgGgCgGQACAAACABQA1AHADgMQAKglAKhCQADgWAEgVQAFgKAFgIQAMgVANgTQATggAUgYQAOgRAOgRQBfBJAxAfgACPgaQACAFABAEQgLAIgJAGAp8J0QACgBABgCIBsgfQAEAaADAcQgiAigpAnQgHAHgOAJQgGABgBgHQgBgBAAABQAAgaACgVQADgQAFgNQAHgQAMgJQAGgZAaAVQAZAIACgGAjQE1QgBgDABgGQgCgKgDgIQABAAAAgBQACABABAAQACADADgBQAFgLADgJQgGgCgGgCQgDALgEAGQgHARAMALQABACABACQADAEAEABQgWAFAFgFQgBABAFAAQAAAAACAAQABgBACAAQADgBgBgDQAAAAgBgBgAjtJjQAJgbAdgcQAcgaAfgKQAQAMAMAHQANANAIAEQAaAiACASAjMQvQAMAEALADQA7AQAgAGQATACAUgKQAFgDAGgEQAZgLAeghQAGgFAFgFQAZgYAWgRQAIAKAJAKQACACABABQAYAmAUANQAPAZACANQAAABAAABQAGAAAGAAQAVAAAWAAQAfAAAbADQAEABADAAQAVACALAAQAFABAOgHQAFgCAGgCQAegQAigIAkKPKQACgBADgBQgCAXgEAVQgGAQgBASQAAABAAAAQgBAGgBAFQgCAMgBAIQgfgpAPAKQAPAJABABQABAAACABQAbAGAtAHQAhAFAqAGQAFABAFAAQAgAFAkAEQBDAHBPAEQgJgOABgQQAHgQgDglQAAgFgBgFQAAgRACgHAmBPoQAxAYA6AVQACAAACABQAmAPAgAKAq/PDQDGjtAFgKQgFAbgLBPQgJBFgLAgQgLAjgUAXQgrAwhUgCQgEgSgFguQAAgCAAgBQAMhhgVhNQACgXABgSQAKhpgBCDQgEgNgFgNQgUg4grg5QhAhNgdguQgVgfgRggQg4AcghANQgFACgEACQAVgDgCgBQgCAAgIAAQgIABgQgBQABAFABABQAAABABAAQAAAAACABQAEAAAJABQDzFeABADQADAiAOBNQAEATADAQQAOgRANgPgACaRQQAAAJgKAGIAAAAQgCAAgPAFQgIACgDACQgGgHgJgKQgEgEgCgEQADAAADAAQAaABAbAAgAuoBKQgOAQgVASQgZAXgGAKQgMAPgEATQgEAWABAjQACAUAQAcQAHAYAcAhQADAEADADQAcAdAhAVQAVgEAogKQA1gNAEgCQgFgRAAgeQAAgJAAgKAzlF2QATgBATgBQAVABBCAAQBEgBAmADQBIAIAfAbQgDgHgDgHQAGgBAHAAQAEAAAHgBQATALAUAJAuHG+QgJgSgHgSQAQAOAFAUQgDABgCABgAxJHXQAVABAZgBQAGgBAGAAQAJAAAJgBQADAMACAGQgGAAgGAAQgHgHgDgEQACAFABAEQgjgIgbgGQhygYAzARQAWAHApAAgAv2HtQAHgBAGgBQgFACgFACQgYAHgCgGQANgBAKgCgAwOHcQgDgFACgB");
	this.shape_13.setTransform(73.9795,26.971);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("A4BggQgDg7gHiNQgIiXAIgxQAXm7EBjAQB3haC3gsQCegoDcgKQAVgCAVAAQBmgFCTgFQBsgCBBAGQBKAIA9AaQA+AaBKA3QBgBHBXBmQA5AUAwAXQApAXA0AcQAdASAVASApniOQAEgLAFgKQCsBLAJg0QAFg6gGgbQgFgbgVgVQgqhNhDhhQgHgLgGgLQgrhSgjhHQoNg8AhiOQAYhVAhhIQAXg4AfgnQAbgtAogQQBUgxDAA6QCqAwCGAOQgYAnAhgJQA5gTBCgHQAmgCAkAAQB9AIDDAkQAKACAKADQACACACACQAFgBAIABQABACABABQAaAGA7AMQAjAJAgAKQAFAGAFAGQAWAfAaAfQBmCcAWBbQAJAkgyCGQgmBqgeBNAgbkMQAQhEAThSQAIgzAIg5QAGgjAGgkAIct5QgDgBgCgCQAMg1ALg1QAjhVAthUQASgiASgcQAxhQAvgRQBHguA3CAQAKAOAAACQAhCBAWBrQAIAqADAgQAIBegNA3QAIA9hIBtACKAGQBUA6gQgbQgNgngQgpQgEgOgFgOQguh4ANhSQCaidglBMAMKnIQBegYgFAaQgBAOgDAJQgFAWgXAPQgFALgSAJQgOAMgJAMQBjAHAUAAQAEABABgBQAEAGAEgLQAFgGAAAAQgBgNgRAYQgCADgBADQgRAPgHAbQgIAUgCAaQAAA2gBBNQABACAFABAPylIQAAAFAAAFQAUAnBhAuQBWAwBIBEQAKAIAJAJQAVAXA4ApQAdAVAXAVQAPANAMAMQBJBCAMBHQADAFAEAEAusA8QgPASgXATQgcAYgGAKQgNARgFAUQgFAXACAlQACAVARAeQAIAaAfAkQADAEADADQAeAeAiAXQAWAOAXAMAzuGPQATgBATgBQAUAABAAAQBDgBAlACQBrAMAOA2Qg3AcghAOQgIAAgPAAQACADABAAQABABACABQAEgBAEgBQASgDgBgBQgCABgGAAQgFACgEABQgCABgDABQAEAAAEAAQDsFUABADQADAgAOBLQAEASADAPQAPgRAOgRQC/jjAEgJQgFAagKBMQgJBCgKAgQgKAhgUAVQgpAvhRgDQgDgRgGgtQAAgBAAgCQAMhfgThLQACgZABgSQAJhiAAB8QgEgNgFgNQgTg3gpg3Qg+hKgcgtQgkg2gVg5QAFgBAHAAQAGgBAHgBQAUgEAmgKQAzgMAEgDQgEgQAAgdQAAgJAAgKAv8H/QACAAABAAQgeALgCgHQASgDALgBgAwYHvQABAEABAEQgngJgcgGQAXABAdgCQAQgBANAAQAEAOACAGQgGAAgIgBQgGgGgCgEQgEgFACgBAxZHoQhmgWAwAQQAUAFAiABgAFDU7QAdhGA3g4QAkgkBHg0QBVg9AggcQBBg6AqhHQA2hbAfgyQATgoACgGQAfhGAJgsQABgEABgFQAFgmACg4QAAgFgBgGQgBgagFgqQgGgwgHhEQgFgngFgiQgLhjgQg2QgEAAgEAAACdgTQABAFACAFQgMAJgKAGQgpAeAAACQAKAGAKAMQAGABgFAUQgBAHgDAEQg/BegGAPQgQAigVAPQgOALgiAIQg1AjhPgLQgEgBgFgBQAFgPgCgLQgBgVgKgcQA4AIADgNQAKgmAJhFQACgXAFgWQAFgJAEgJQANgWANgTQAUggAVgZQAOgSAOgRQBXBDAzAjAjUEWQgOgFgPgHQgggNgXgNQhCgcALgCQB8gpARARQgDATADAgQAAAZgCAQQgCARgFAHQgFATAPALQAFAHAGACQACAAAAgDQgCgCABgJQgBgKgCgJQABgBABAAQABAAABABQADACAEgBQAGgLACgLQgPgDgQgGgApHJVIA6gRQAEAbADAcQgmAigsAmQgIAGgPAJQgGgBgCgKQAAgBAAAAQgBgbADgVQADgQAGgNQAIgQANgJQABgEACgDgApUJZQAFgHAIADQAIACALAJQAbAMACgEAqFJoQACgBACgBIAtgNAjGFVQABABAAAAQgWAFAGgFQAAABAGAAQABAAABAAQACgBAEAAQABAAAAgBgAjvJhQAKgaAdgbQAdgaAfgLQAPALAMAHQANAMAJAEQAZAfADAPAkMO9QADgBADAAQgDAVgFATQgHAQgBASQAAADgBADQAsAIBkAMQAFAAAFABQAzAHA8AFQApADAvACQAGgRgGgnQgCgWABgKQAAgDAAgCAkuQIQgFgKAIAFQAPAIAAAAQADABACAAQAAACgBACQgCALgCAHQgNgSgFgIQALAEALAEQABAAABAAQA4AVAsANQA+AQAgAFQAaAEAagUQAJgEAJgGQARgNAVgZQAGgFAGgFQATgUASgPQAFgFAFgEQAJAMALANQAXApAUAPQAGAKADAIQAGAPAAAJQgBAMgNAIIAAAAQgCAAgUAHQgJACgFADQgIgHgKgLQgTgSAAgVQAAAAAAgBQAKABAKAAQAdABAgAAQACAAABAAQAVAAAWAAQAgABAaADQAEAAADABQAVABALACQAFABANgHQAFgBAGgDQAdgOAggGAmGPjQApAUAvAR");
	this.shape_14.setTransform(72.85,25.6017);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_15.setTransform(71.7295,24.2459);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_16.setTransform(70.5765,22.8678);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AHztqQgCgCgCgBQAPg1ANg1QAmhVAuhTQATgiATgcQAxhQAugUQBMg3A0BuQALANAAACQAfB/AZBwQAIAqAEAgQAJBegKA4QALBGhABmAouweQA5gDBDgDQBlgDA+AFQBFAGA7AXQALAFAMAFQAyAXA3AoQBgBCBXBjQAVAcAaAcQBgCMAbBRQALAhgrB5QgEAOgFAOQARgJgcArQgSA5gQAtAouweQBMAUA/AJQglAwAggLQA5gYBDgJQAmgEAlgBQAvACA6AFQBiAKCAAUQAKACAKACQACADACACQAEgCAJACQAAABABABQAXAFBBAKQBlAYBNAkQApAWA4AcQAfARAVASAxivUQAdgJAfgHQCVgnDOgMQAUgBAUgBQAxgDA8gCAoTi3QAGgKAHgJQDVBpANg4QAJg+gGgaQgEgagagWQguhJhRhcQgIgLgHgKQg1hNguhDQqCguAeiXQAVhXAdhMQAAAAAAgBQAVg7AdgoQAagxApgPQBPgsDKBPQBZAhBNAVAgrkxQAOg+AUhLQAGguAGg0QAFgfAFghACyAgQCUBxgagjQgUgqgYgsQgGgPgHgOQhDiCAFhZQBehhAWgLQgGASgFAQALNmVQBygfgFAcQgCAQgDAJQgGAWgeAOQgGAKgVAIQgSAKgNAKQBCAEAlAAQgFAIgEAJQgJAVgGAcQgDA3gCBWQgBACAGABAM+kxQArABADgCQAEAEAEgQQADgLAAgFQgEgYgdAdQgOAJgKAPgAPnj5QAAAFAAAGQAZAkBzArQBmAuBRBDQALAIALAJQAXAXBCApQAhAVAaAXQASANANAMQBVBFAMBMQAEAGADAFA5SBfQgCg4gEiCQgGiNAKguQAcmaD2i1QBdhGCDgpAu2ATQgUAWgdAXQgiAcgIAMQgQATgGAXQgGAbABAsQABAYAVAjQANAhAmArQAEAFAEAEQAhAiAmAcQATgEAegIQAvgMAEgDQgEgPAAgbQABgIAAgJA0GHZQARgBASgBQATgBA7AAQA9gCAkABQBiAJAOAwQgtAXgdAMQAAAAAAAAQgJAAgbgBQgEgFgDgDQgEgHACAAAyDIbQhIgQAoAMQANADATABQAbACAogDQAPgBAMgBQAGAVACAAQACABALAAQABACABABIAAAAQABABAAAAQADgBAAAAQgBAAgDAAIAAAAQgFACgFACQgjAOgCgIQAYgDANgDQAIgBADgCQDUExABADQADAcAOBDQAEAQADAOQATgWAQgUQCljFAEgIQgEAWgIBFQgHA7gIAbQgJAdgRATQglAphIgEQgDgQgEgpQAAgCAAgCQAMhYgQhGQADggACgUQgRgwghgvQg3hGgYgrQgggygTg1QAFgBAHAAQAGgBAKgDQAeAXAiASAw5IoQABACABADQgvgLgdgHAr8LjQAJhHABBnQgEgQgGgQgAEjU0QAdhBA0gzQAkgiBDgvQBPg5AggaQA+g2AohCQA1hTAegvQAQgjABgFQAbg+AGglQABgEAAgEQADghABgxQAAgFgBgFQgCgYgGgmQgIgsgJg9QgFgkgGgfQgNhagSgxQgEAAgDAAADHAEQACAFABAFQgNAKgLAIQg1AnABACQAJAKAKASQADAGgKAdQgDANgFAHQg7BZgHAQQgTAmgYAMQgRALgmAGQgoAUg2ABQADgJAAgHQACgYgIghQAzAGADgPQAJgpAGhMQACgaADgXQAGgLAFgJQANgYAOgWQAWgjAWgaQARgTAPgSQBHA5AyAmAo/IqIAygPQAEAeADAeQgxAfg2AiQgKAFgSAIQgIgGgBgRQAAgDAAgCQAAgdAEgXQADgNAFgKIBHgUQABABABABQAiAYADABAqeJFQADgBACgBIATgFQABgEACgDQAKgRAQgIQAIgVAiAhAi5GrQABAAAAAAQABAAADAAQAEgBAGAAQAGAAAAgEQAAgDADgKQABgMAAgKQABgBABgCQACAAACAAQAFACAFgCQAMgUAEgPQgZAAgcgFQgXgDgagJQgNgFgOgGQgigOgbgNQhOgeAOgBQB3gjAXARQABAVAHAlQABAQABANQADAhgDAMQABAXAYANQALAKANADQgCAAgCABQgTAFAIgGQADABAIAAgAj0JdQAOgYAdgaQAegYAegMQAQAJANAEQAMAJAJABQAZAYAEAHAA/PhQAGAAAFAAQAeABAiAAQADAAADAAQAQAgAOAPQANAigFAUQgEARgUALIgCABQgGACgcAJQgPAFgIAEQgNgHgRgMQgcgVgFgYQACgQgHgiQAKgLAMgPQAFgGAFgFgAAWPfQAUABAVABQABgBABgBQAaggAWgUQAJAOALARQAGANAFALQASAAASAAQAgAAAaAEQADABADAAQAUACAKADQAFADAMgFQAFgBAFgBQAagJAdAAAAWPfQgDgPgBgHAAfQGQgCgIgCgKQgDgMgCgJAkNOYQACgBACgBQgFASgHAQQgHAJgDAMQAAADgBADQgFAPgCAHQgcgnANAFQAOAFAAABQAEAAAFAAQAqgBBbAHQAFAAAFAAQBJAIBdAEAmTPVQA4AZBFAVQA/AWAxANQBGARAiAFQAcADAcgYQAQgKAVgX");
	this.shape_17.setTransform(69.4274,21.4694);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_18.setTransform(68.2694,20.072);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AHYtgQgCgCgBgCQAQg0APg0QAohVAvhUQAUghASgdQAyhOAugXQBOg+AyBjQAMANAAACQAeB9AaBzQAJAqAEAhQAKBegHA4QAMBNg7BgAygtLQAcgJAdgHQCPgmDFgNQATgBATgBQBcgGCDgHQBhgDA8AEQBCAGA4AUQA5AVBCAuQBeA9BTBbQAVAaAZAaQBcCCAeBKQAMAeglBwQgaBZgTBAAygtLQARhHAWg/QAUg/AbgoQAag0ApgOQBMgpDQBcQC3BNB6AVQgtA1AggMQA5gbBEgLQAmgFAmgBQB8ACDVAfQAKABALACQABADACACQAEgCAJABQAAABAAABQAWAEBFAKQBnAWBPAkQAoAVA7AbQAgASAWARAnbjTQAIgIAIgIQDwB8APg7QAMhAgFgZQgEgagdgXQgwhGhchZQgIgKgIgKQg7hKg1hAQrQgkAbidQADgQAEgRAg2lJQANg6AUhGQAFgrAGgxQAEgcAFgfADPAxQC8CWgggnQgZgsgdguQgIgQgIgPQhRiJgBhdQCyi4hPB0AKllzQCAgkgGAfQgDAQgDAKQgHAWghANQgHAJgZAHQgUAJgPAJQA5ADAlAAQgKAUgGAaQgFA4gEBbQgCADAHABAMMkWQBDABAEgFQAEADAEgUQADgOAAgHQgHgegiAbQgZAMgOAdQgBACgBACgA6IC0QgBg2gCh8QgEiEALguQAfmEDviuQBZhBB9goAu9gHQgXAXggAaQgnAfgJANQgSAUgHAaQgIAeACAwQABAaAXAnQAQAkArAxQAEAFAFAFQAkAlApAgQAQgEAZgHQAsgMAEgDQgCgPAAgaQAAgHABgJA0WILQAQgBARgBQASgBA4gBQA6gDAiAAQBdAIAOAsQgkASgYALQgCABgCAAQgFAAgggBQgDgEgCgDQgFgHACgBAyfI+QgzgMAiAJQAIACAJABQAdACAwgEQAOgBALgBQAGATACAAQACABAKAAQACAEADADQDEEaABACQAEAZAOA+QADAPAEAMQAVgZASgWQCTivAEgIQgDAUgHA+QgGA2gGAZQgIAbgPARQgiAlhDgFQgCgPgDgnQAAgCAAgCQAMhTgOhDQADglADgUQgPgrgdgsQgzhCgVgpQgegwgQgyQAFgBAGgBQAHgBANgDQAjAbAoAYAxOJOQABACAAABQg2gNgcgGAo9IOIAxgOQADAgADAgQg4Acg9AgQgLAEgUAIQgJgKgBgWQAAgEAAgDQAAgfAFgYQAAAAAAgBQAFgRAIgNQALgRASgIQALgUAoArQADADACACQAhAcADAEAwtJaQAJgCAAgCIAAAAQgFACgEACQgmAPgCgIQAcgEAMgDgAsXLhQAIg2ACBYQgEgRgGgRgAquIuQACgBACgBIALgDIBigbAPgjEQgBAFAAAGQAeAjB/ApQBwAsBXBCQANAIAMAJQAYAWBHArQAkAWAdAWQATANAOANQBdBGANBQQADAHADAGAEOUwQAcg9A0gxQAiggBAgtQBNg2AegZQA9gzAng9QA0hQAdgsQAPggAAgEQAYg4AFgiQAAgDAAgDQACgdAAguQAAgFgBgEQgDgVgHglQgJgogKg6QgGghgHgdQgOhUgTguQgEAAgDAAADjAUQACAGACAFQgNAKgLAIQg/AuABACQAIANAKAVQABAKgMAjQgFAQgHAKQg4BVgHARQgWAogZAMQgSAKgrAEQgbAMghAEQAAgDABgCQAEgagGgjQAvADADgPQAJgsAEhQQABgcADgZQAGgLAFgKQAOgZAOgXQAXglAZgbQARgTAQgTQA/AyAxAnAjzFvQgMgEgMgGQglgNgcgNQhWggAQAAQBzgfAcARQADAVAJApQACALACAJgAhbGCQgrAEg1gIQgbgFgdgKQAHAugBAPQAFAZAeAPQAPAKAQAEQgCABgCABQADAAADAAQACAAADAAQAGgBAIAAQAHgBABgDQAAgDAEgMQADgNABgLQACgCACgCQACAAACAAQAGAAAFgCQAUgbAEgVgAivHkQgUAFAKgHQAEABAGABgAj3JaQAQgWAdgYQAfgYAegNQAQAHANADQAMAHAKgBQAYAUAFABABuOrQAHABAHgBQALAAANAAQACAFADAFQAXA5AQAYQAMAngHAYQgHATgZANIgDABQgJAEgiALQgRAGgMAGQgQgIgUgNQgjgWgIgbQAAgKgEgRQACgCABgCQAagRAkgxQAGgIAGgHQANgRANgPgAkfOhQAogFBRADQAFAAAFABQBaAHB+ADQAYACAagBQAMgOAMgMQAGANAIANQAJAAAJAAQAgABAZAEQADAAADABQAUADAKAEQAEADAMgEQAEAAAFAAQAYgGAaAEAAHQgQgEgTgHgcQgKgkgEgNAmbPMQA6AZBLAWQBEAWAzANQBMASAjAFQAcADAbgYAkLN+QgBACAAABQgGAOgIALQgDADgCAEQgGAIgBAJQgGANgDAEQgbgmANADQANADAAAAQAHgBAKgB");
	this.shape_19.setTransform(67.1217,18.6525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AHKtaQgBgCgCgCQARg1ARg0QAohUAwhUQAUghATgdQAyhOAtgYQBPhBAyBdQAMAMAAACQAeB9AaB1QAJApAEAiQALBdgGA5QAOBQg6BeAyvsLQgEgNACgOQAShbAbhPQATg/AbgpQAZg2ApgNQBKgoDTBjQC6BSB4AXQgxA4AfgNQA5gcBEgMQAngFAmgCQB8ABDYAeQALABALACQABADACACQAEgCAJABQAAABgBABQAWADBGAKQBoAVBQAjQApAVA8AcQAgARAWASAyvsLQATgGAVgFQCMgmDAgNQATgBASgBQBagHCBgGQBdgEA7ADQBBAGA3ATQA4AUBBAsQBcA6BTBYQATAZAaAYQBaB+AeBHQAOAcgjBsQgYBVgQA9Am/jgQAJgIAIgIQD+CGAQg8QANhAgFgZQgEgbgdgWQgyhGhghXQgJgKgJgKQg+hIg4g+Qq0gdgoiHAg8lUQANg5AThDQAFgqAFgvQAFgbAFgdADdA5QDRCpgkgpQgbgsgfgwQgJgPgJgRQhYiMgEheQC4i+hYB7ALzkIQgIAQgFAUQgGA5gEBeQgCACAHABAKRlhQCGgngGAgQgDARgDAJQgIAXgjAMQgHAJgaAGQgWAJgPAJQA0ACAlAAQBQABAEgGQAEACADgVQAEgQgBgJQgIghglAaQgaAMgQAdQgEAHgDAIA6jDfQAAg1gCh5QgDiAAMgtQAhl5DqiqQBdhECFgoAvAgUQgYAZgjAbQgpAggJANQgUAWgHAbQgIAeABAzQABAcAYAoQARAmAvAzQAEAGAFAFQAlAnArAhQAPgEAWgHQArgLAEgEQgCgOAAgZQAAgHABgJA0eIlQAQgBAQgCQASgBA2gBQA4gDAhgBQBaAHAPAqQgfAQgWAJQC8EPAAACQAFAYANA7QAEAOADAMQAXgbATgXQCLimADgHQgCATgHA8QgFA0gGAXQgHAagPAQQggAjg/gGQgCgPgDglQAAgCAAgCQAMhRgNhBQAEgoADgTQgOgpgcgqQgwhAgUgpQgcgugPgyQAEAAAGgBQAIgBAOgEQAmAeAqAaAxYJjQABAAAAABQg7gOgagHQAcADA1gEQANgBAMgBQAFASACAAQACABAKAAQADAEADADQgFACgDACQgEACgEABQgmAQgCgIQAdgFALgDAwxJqQAAAAAAgBQgEAAgfgBQgCgDgCgCQgGgJADAAAysJPQgpgKAfAJQAFABAFAAgAqpIfQAAgFABgEQAFgTAJgOQAMgRAUgHQALgUAqAvQAFAFAEAEIAwgNQADAgADAhQg7AbhBAfQgLADgWAHQgJgKgBgZQAAgFAAgEQAAgaAEgUIBtgeQAgAcADAGAq2IjQACgBACgBIAJgCAskLhQAIguACBRQgEgSgGgRgAPcipQAAAGAAAGQAfAhCFAoQB2ArBaBCQANAIAMAJQAZAXBKAqQAmAXAdAWQAUANAPAMQBhBIANBSQAEAHADAGAEDUuQAdg7AygvQAiggA/grQBLg0AegZQA8gxAng8QAzhNAdgrQAOgfAAgDQAWg2AEgfQAAgDAAgDQABgbAAgsQgBgFgBgEQgDgUgHgjQgKgogKg3QgHgggHgcQgPhRgTgtQgDAAgEAAADxAdQACAFACAGQgNAJgLAIQhEAyABADQAJAOAJAXQAAAMgOAlQgGASgGALQg3BUgIARQgXApgaALQgTAKgsAEQgUAIgXAEQAFgbgGgjQAuACADgQQAIgsADhTQABgcADgaQAGgMAEgJQAPgaAPgYQAYgmAZgcQASgTARgUQA7AwAvAmAj7GBQgLgEgLgFQglgNgdgNQhbghARABQBxgeAfASQAEAVALAqQABAIACAIgAiqIAQAEABAFgBQACAAADAAQAHAAAJAAQAHgBACgEQAAgDAFgMQADgNACgMQACgCACgCQADgBACAAQAGAAAGgCQAXgfAEgYQAAAAABgBQgzAIhDgLQgegFgfgLQAKAzAAARQAIAbAgAQQASALASAEQgDABgCAAQgUAGALgHQAEABAFAAgAj4JZQAQgVAegYQAfgXAegNQAQAGANACQANAGAJgCQAYASAGgCACGORQAHAAAIgBQAGANAHAOQAXA8AQAaQAMAqgJAZQgIAVgbAOIgEABQgKAEglANQgTAGgNAGQgSgHgWgOQglgWgJgcQgBgIgDgMQgFgWgLgkQgLgmgFgNACGORQAFgGAFgGQACAGADAFQAFAAAFAAQAgABAZAEQADABADABQATACAKAFQAEADALgDQAFABAEAAQAYgFAYAHAkaOKQAngGBHACQAFAAAFAAQBZAGB+AEQAeABAiAAQAIAAAJAAAgEQqQALgHAMgLQAagTAlg0QAGgIAGgHQAVgdATgUAmgPIQA9AZBNAXQBGAVA1AOQBPASAjAFQATABASgJAkaOKQgBABgBABQgMAJgCANQgGAMgDACQgaglAMACQANABAAABQAKgDAQgCgAkMNyQgBACgBABQgFALgHAK");
	this.shape_20.setTransform(65.97,17.2087);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_21.setTransform(64.8107,15.7786);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AGvtPQgBgCgBgDQATg0ASgzQArhVAxhTQAUghATgdQAyhOAtgaQBShHAwBRQANAMAAACQAdB7AbB4QAJApAFAiQAMBegFA5QAQBWg0BZAw3qrQiWgtAKhHQAQhdAYhRQAShCAZgqQAZg4AqgNQBGgkDaBwQC/BeBzAaQg5A9AfgOQA4gfBGgNQAmgHAngCQB7gCDgAcQALABALACQABADABACQAEgCAKABQgBAAgBABQAUADBKAIQBrAUBRAjQApAUA/AcQAhARAXARAw3qrQBQgNBdgHQARgCASgBQBXgHB5gHQBZgEA5ACQA+AFA0ARQA2ASA+AoQBZA1BRBQQATAXAZAWQALAPAKAOQAGgVAHgXQAEgmAEgrQAEgZAEgbAmGj6QAKgHAJgHQEZCZATg/QAQhCgFgYQgEgbgfgXQg2hDhphUQgKgJgJgKQhFhEg/g8QndgMjFg7Ag0mzQBFBfAdA4QAPAagdBjQgUBOgMA3AhHlrQAIgiALgmALUkSQgIAEgMAEQgIAIgdAFQgYAIgSAIQAuABAiAAQBpABAFgIQAEABADgaQADgTgCgLQgJgngqAYQgLAEgJAGQAAABgBACQgGAQgVAKgAJpk+QCUgsgHAiQgCAPgEAKQgQALgMASQAAABAAAAQgLAQgIAVQgDAIgCAIQgIA6gGBjQgCADAHABA7YE1QAAgzAAhyQgBh6ANgqQAkljDjijQBmhLCYgoQBCgSBOgMAvGgtQgcAbgmAdQgtAjgLAOQgWAXgIAeQgJAhABA3QABAeAaArQAVArAzA4QAFAGAGAGQAnApAuAlQANgEASgFQAngMAFgDQgCgOAAgXQABgHAAgIA0uJYQAPgBAPgCQASgCAzgCQA1gDAfgBQBUAFAPAlQgWALgSAIQg6AcgCgKQAtgIAAgEQgDgBgcgCQgCgCgBgCQiHgiAyAMQAbAEA6gGQANgBAKgBQAGAQACAAQABABAKAAQAEAFADAFQCtD3AAACQAFAVANA2QAEANADAKQAZgdAVgZQB6iTADgFQgCAQgFA3QgEAvgFAUQgGAXgNAPQgcAfg6gHQgCgOgCgiQAAgDAAgCQAMhMgLg+QAFgwAEgQQgNglgXglQgsg9gSgnQgZgsgNgvQAEgBAGgBQAIgCARgEQArAjAxAfAxtKJQgGgJADAAQACAFABAEgAq9IKQACgRADgNQAFgUAKgNQAOgSAVgHQANgSAvA3QAIAIAIAIIAvgNQADAiACAiQhCAZhHAdQgNACgYAHQgJgOgBgeQgBgGABgFQAAgPABgNICDgjQAdAeAEAIArHINQADgBADgBIAEgBAs+LgQAHgdADBCQgDgSgHgTgAPVhzQAAAGAAAGQAjAgCRAmQCAAoBgBCQAOAJAOAJQAaAWBRArQAoAXAgAWQAVAOAQAMQBoBJAOBWQAEAIACAHAEOAuQACAGACAGQgMAJgLAIQhOA5ABADQAIARAJAbQgDAPgQArQgHAVgIAOQg1BQgIASQgYArgdALQgUAJgvACQgFABgFACQAEgXgEgdQAqABADgRQAHgvAChXQAAgeACgcQAHgMAFgKQAPgbAQgYQAZgoAbgeQATgVARgTQA2ArAsAlQD5DNgrgtQgfgtglgyQgKgQgLgRQhmiTgJhjQDBjJhpCLADvUrQAcg4AxgsQAhgeA8gpQBIgxAdgXQA6gvAmg4QAyhJAdgoQAMgcgBgCQAUgwACgbQAAgDAAgDQgBgXgBgoQAAgEgCgEQgDgSgJghQgLgkgLgzQgHgegIgaQgQhLgUgqQgEAAgDAAAkLGkQgIgDgIgDQgngNgfgNQhigjATACQBtgaAjASQAGAWAOAtQABADAAADQAQBBAEAUQAMAeAmARQAAABABAAQAVALAVAEQgCABgCABQgXAGAOgIQAEABAFABQAGAAAHAAQADAAADAAQAJgBAKAAQAJAAACgEQABgEAGgMQAEgLACgKQABgDABgEQADgCACgDQADgBADAAQAHgBAHgDQAZgfAHgaQACgIABgIQhBAShhgRQgjgGgkgNgAj7JYQATgUAegXQADgCADgCQAcgUAbgMQARAFANAAQAIADAHgBQAEAAADgCQAXANAHgHAkONaQAigGA1AAQAEAAAFAAQBXADB/ADQAeABAhAAQAVAAAVAAQAgAAAZAFQADABADABQATADAJAGQAEADAKgBQAEABAFAAQAVgBAWALAgfQrQACAAADAAQAfADAgggQAagVAmg5QAGgIAGgIQAdgqAXgZQAIATAKAXQAXBCAOAeQALAvgMAcQgLAYggAQIgEACQgNAFgrAPQgWAIgQAHQgVgIgagOQgrgYgNgfQgCgJgEgOgAmoPAQBAAZBTAXQBLAXA3ANQBPASAlAFQgHgYgOglQgNgqgIgOAkONaQgBACgBACQgHAJgJAIQgNAHgDAMQgHAJgDAAQgZgkALgBQAMAAAAAAQAQgIAegEg");
	this.shape_22.setTransform(63.625,14.3239);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_23.setTransform(62.375,12.8687);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_24.setTransform(61.125,11.4002);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AGKs+QgBgDAAgCQAVg0AUgzQAuhUAyhTQAVghAUgdQAyhMAtgeQBWhRAtBAQAOAKAAACQAbB6AeB8QAJAqAGAiQANBdgCA7QAUBfgtBSAhMmsQgcgVgggVQgLgJgLgJQhOg/hKg3Qu6gIATiuQAOhgAUhUQAQhGAYgrQAXg9ArgKQBBghDkCFQDGBvBsAeQhFBGAegQQA4gjBHgQQAngIAngEQB7gEDrAXQALACALABQABADABADQAEgEAKABQgBABgCABQARABBQAIQBuARBUAiQApATBDAbQAjARAXARA8nG4QADgxAChoQAChvAOgqQAqlADXiYQBghFCMgmQB9gjCpgQQAQgBARgCQBQgIBxgIQBRgEA2AAQA5ADAxAPQAzAOA6AjQBTAtBNBEQASAUAZATQAOASANAQQA8BMAgAtQAQAWgVBWQgMBCgFAwAkvkhQAMgGAMgFQAhASAdAQQEFCNAUg8QAThGgEgXQgDgagkgXQgpguhLg3AhUmNQADgPAFgQQAJgjAMglQADghADgnQADgVAEgXAKAjSQgKADgPACQgcAFgUAGQAmABAgAAQCLABAFgMQAEgBADgfQACgYgDgPQgMgwgyAVQgMADgKAGQgVAKgOAUQgRAWgLAfgAK/klQAUABgDANQgEATgEAKQgJAXgtAKQgFAEgNADQAAABAAABQgCAHgBAIQgKA5gGBfQgEADAHABAIvkIQBsghAkAEArWHrQABglAGgYQAHgVAMgOQAPgSAZgGQAPgQA1BCQAOAPALANIAwgNQACAkACAlQhNAWhRAZQgOABgbAGQgMgUgBglQAAgIABgGQAAgBAAAAICfgqQAcAgADALAvNhUQggAggtAiQgzAmgNAPQgYAagKAhQgLAlABA9QABAiAeAwQAYAwA7BBQAGAHAHAHQArAtAxApQA0ArA6AnA1DKlQAOgCAOgBQAQgDAugCQAvgFAdgCQBNADAOAfQgJAFgJAEQhDAggCgKQApgJACgEQgDgBgYgCQgCgDgCgDQhygfAsAIQAZADA1gGQALgCAKgCQAFAPACgBQACABAIgBQAGAIAFAIQCTDTABACQAFARANAtQAEALAEAJQAcgiAXgbQAAgDAAgDQAMhGgHg4QAHg9AGgGQgKghgTghQglg4gOglQgVgogLgrQAEgBAFgBQAKgDATgGQAKgDALgEQAkgLAEgEQgBgMABgWQAAgGABgHAyNLBQgDgHACAAQACAEACAEQgBAAgCgBgArcHsQADAAADgBAthLkQAFgHADArQgDgSgFgSgAtzOrQBih1ABgEQAAAMgEAvQgCAogDAQQgEATgLAMQgYAZgxgIQgBgNgBgdgAPOgiQgBAHAAAHQAoAcCkAjQCPAnBqBBQAQAIAOAJQAdAWBZAtQAtAXAjAWQAYAOARAMQB0BMAPBcQADAIADAIAE7BIQACAGADAGQgMAJgKAHQhdBFAAAEQAHAVAJAgQgFAVgVA0QgKAagKARQgwBMgJASQgcAvgfAJQgMAEgWACQADgUgCgYQAmgDACgSQAHgygBhfQAAghABgdQAHgNAFgLQAQgdARgaQAcgrAcgfQAVgWATgWQAtAmAnAhQE1EFg0gyQgogvgrg1QgNgRgNgSQh7ifgShpQDRjZiDCjAkOM3QgBABgBABQgIAHgMAFQgQADgDAJQgIAHgEgEQgWgjAKgEQAKgDAAAAQAggcBegFQAFAAAFgBQBTAACBADQAdABAigBQAUAAAVAAQAhABAXAFQADABADAAQASAFAIAHQAEAFAKAAQADABAEADQATADASARADSUnQAcgyAvgpQAfgbA4glQBDgtAdgVQA3grAkgzQAxhBAbglQAKgXgCgBQAQgoAAgVQgBgCgBgBQgCgSgCgiQgBgEgBgDQgFgQgKgcQgMgggNgtQgIgagJgXQgShCgXgmQgDAAgDAAAkiHaQACAEABAFQAYBMAIAYQADAGAEAFQAVgPAbgUQAggVAegOQARACANgDQAMACAKgHQAXAGAIgRQg+AFhVgPQgsgIgsgPQgDgBgCgBQgrgOgigNQhugmAWAEQBngUArASQAIAVAQAsgAj8JWQACgCACgCQAUAaAmAQQAbAOAbAEQgCABgCABQAKABALAAQADAAAEAAQAMgBANAAQALAAADgFQACgDAIgPQAHgQAFgOQADgEADgDQADgBADgBQAJgCAJgEQAdggAJgbQAGgOACgRQgSACgXAAQgSAFgVACAiMKQQgYAIARgKQAEABADABgAhPQWQA0AKAZADQAiACAhglQAcgYAohBQAGgKAHgJQAdgvAXgcQAIAWAKAaQAWBNANAiQAKA2gSAiQgOAcgnAUIgGACQgSAIgyARQgcAKgTAIQgbgIgfgPQg0gagSgiQgGgRgOgjQgIgTgJgYQgSgvgLgQAmyO1QBFAZBbAYQBSAXA8AOQAdAHAYAE");
	this.shape_25.setTransform(59.875,9.9174);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_26.setTransform(58.625,8.4076);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_27.setTransform(57.375,6.8941);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_28.setTransform(56.15,5.3387);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_29.setTransform(54.9,3.7797);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_30.setTransform(53.65,2.2127);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_31.setTransform(52.4,0.6166);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_32.setTransform(51.15,-0.9916);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_33.setTransform(49.925,-2.6225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AEYsBQABgDABgDQAdgzAcgxQA2hUA3hRQAXghAWgeQAzhJArgoQBhhvAnAMQAQAIABACQAWB0AjCKQAKApAIAjQATBdAGA/QAeB7gXA8AhopCQzJAcAHjDQAGhqAKhdQAJhSASgvQAVhIAtgGQAxgTEBDBQDdCkBYAqQhrBgAcgWQA4gvBLgZQAngNAqgHQB4gOENANQANABAMABQAAADAAAEQADgFAKAAQABAAABAAQgDAAgEABQABgBAEAAQAUgCBQAEQB5AKBcAhQAoAPBPAaQAoAQAZARAgpmMQARgCASgBQG6ENAjhPQAehPgCgTQgCgagvgYQhIg2ihhBQgPgHgPgHQhqgwhpgqQgoABgoABAh+noQAIggAQghQgBgMgBgNQAAgIAAgJQABgLACgMAJIg4QBbgHAEgOQAEgHABgvQACgogHgbQgUhLhLANQgzAFghAgQgbAXgQAnQgHAVgHAdQCrgygJAnQgFAXgGALQgNAYg9AGQgOAEgvAAQgNAAgNABQgXAAgTABQAWAAAUAAQgGAngEAvQgHAFAIABAGBhZQABgCAAgCQAfgKAagIQgFAagFAgQAAAAAAABQBZAAA5gEQARgQgMAQQgRAVhHBPAJDg4QADAAACAAAvii8QguArg/AuQhGAzgSATQgjAhgOArQgJAcgEApQAZgDAagEQA8gGAsgEQAsgBAnAGQAoAFAuARQBEAVBCAjQAOAKAYAJQADADADACQATgNAbgDQAWgJBKBkQAcAlATAbIA1gOQACAsABArQhtANhvAPQgUgDglADQgIgSgEgYQgEgXAAgdQAAgNABgMQACgtAJgdQAKgYAQgPQAFgEAFgEQA7AzAyAYQAWAKADAuQADALADAKIAxgNQAbApAEATAsfGVQACAAACgBQACAAADAAICzguQAHAWALARAzlB0QgCAcABAhQAAArAnBAQAmBCBSBYQAJAKAKAKQA1A3A8A2QARgIAEgEQABgKACgPQABgEABgFAv0OnQAAgEAAgEQANgxACgqQARhRAMAnQABglgNgmQgQgogDgdQgJgegCggQADgBADgBQALgGAYgKQADgCADgBQBNBDBYBCAzoN0Qg7gXAfgBQATgDAjgIQAHgCAHgDQAEAIADgCQABAAAFgBQBeCFABABQAHAFAMAVQAEAFADAEQAvg4AXgbQAWgbgBgBQAEADACAWQADASADAFQAAAHgEADQgIAJgYgNQABgJACgRAzoN0QAAgBABgBQACACABACQgCgBgCgBgAznN7QgBgFAAgCA2DOXQAKgDAJgCQANgFAfgFQAhgGAVgGQAXgCAQABQATABAJAHQgxAYAAgIQAcgKAFgHQABgDgNgDQAAAAAAgBEggRANIQAHgpAKhKQAJhNAUgkQA5jeC1h4QBMgzBpghQBiggCAgTQAMgCANgCQAsgHA0gIAO2DcQgBAIAAAIQA4AWDaAZQC/AfCGA/QAUAIATAKQAjAUB1AwQA6AYAsAXQAeAPAXANQCWBTASBtQADALABAMAHCCgQADAIADAHQgIAGgHAGQiOBoAAAGQAFAiAIAxQgPAlghBNQgQAmgOAbQgBgtgEg7QgDgogBgkQAIgQAGgMQATgjAUgeQAhg0AjgkQAagaAXgaQAYAVAWAUQCjCPBkBYQDFCug3gqQg9g1hCg/QgIgIgHgIQgNgNgMgNQi7i+grh+QBnhrAbgZAB8UlQAbgjAogdQAcgTArgaQA1gfAZgPQAugfAhgiQArgsAagaQACgKgFAEQADgPgIgDQgBABgCAAQgKAAgFgSQgBgBgDgCQgHgHgOgQQgRgTgRgbQgMgQgLgNQgZgngbgZQgDAAgCAAAiVIoQAKgGAJgFQASgGANgKQAMgGALgPQAVgQAMgpAkBJaQAfgKAggQQAYgMAVgMQA1gDBEABQAbAAAhAAQATAAAVgBQAhABAVAHQADABACABQAQAGAHANQADAHAGAGQACAEACAGQAJAPAGAdQABAFABAEAllKIIAEgJQAWg5BWgUQAFgBAEgBQAlgGAygCAkMLdQgBgCgBgCQgPgEgUgFQgWgHgFACQgCAAgCgBQAmBTATAdQAmAuBIAbQAuASArAHQgBAAgBABQghAMAcgNQADAAACABQAUACAVAAQAFAAAGAAQATAAAUAAQARAAAHgGQAFgEAMgTQAOgWALgSQAFgGAFgGQAFgCAFgCQANgFANgHQAqgiAUgjQAXgoACg4QAYgMACgWQABgdgBgrQgBADgCACQglA9gMAUIAAAAQgjA5goAFQgcAFhGgGQhWADiRgcQg7gLg1gQQgMgDgLgDQgHgCgGgCQAEAIAFAKQAAgGACgFIACgDAlpKWQAIAPAJAUQAEAJAEAIQgJgEgFgNQgLgVAAgOgAlyKEQgfgIgbgJQiSguAfAIQBWgEA/AVQALAOANAYgAnQOdQBUAZB0AbQALADALADQBYAUBBAOQB1AXAqACQAqABAogzQAdghAuhZQAHgNAHgNQAihAAYglQAGAfAJAkQAVBqAIAzQAFBMgfAxQgbApg7AdQgKAFgBAAQgfANhLAbQgrAPgfANQgqgIgwgUQhRgggggsQgWghguheQgGgLgFgKQgXgtgRgT");
	this.shape_34.setTransform(48.675,-4.2835);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AELr5QABgDACgDQAdgzAdgxQA3hUA4hRQAXghAWgeQAzhIArgpQBihyAnAGQAQAHABACQAVBzAlCMQAKApAIAkQATBcAHBAQAgB+gWA5Ag0sFQADAAADgBQAXgCBLAEQB6AKBdAgQAoAPBRAaQApAQAZARAg0sFQgBABgBAAQACgBAGgBAhso9QzMAdAFjDQAFhrAJheQAJhTARgvQAVhKAtgGQAwgSEEDIQDfCqBWAsQhwBjAcgXQA5gxBKgaQAogNAqgHQB4gPERAMQAMABANAAQAAAEAAAEQACgFAHgBAISj2QARgxgBgOQgCgZgxgZQhJg1img/QgPgHgPgHQhtguhugpQg7ACg4ABAiCnxQAHgeAQgfQgBgHAAgIQgBgLgBgNQABgJACgLAgMmWQARgCASgBQFEDFBwASQgNARgKAXQgJAagIAmQC3g2gKApQgFAXgGALQgNAYg/AFQgPAEgwAAQgRAAgPAAQgVABgSAAQAUAAATAAQgFAjgEAsQgIAFAJABAJcgrQA9gHADgLQADgIACgxQABgqgHgcQgVhOhOAMQgVACgRAGQgcAJgVATQgMAKgKAOQAuAHALgYQAIgTAGgQAFuhFQABgCAAgCQAcgJAYgIQgFAZgEAdQAAABAAAAQB/gBBAgHQAJgIgGAIQgMARhUBcAJZgrQACAAABAAAvkjHQgwAthBAvQhIA1gTATQgjAjgPArQgQAxABBUQAAADAAAEQAJgCAKgBQA5gHArgEQAqgBAmAEQAnAEAtAPQBCATBBAfQANAKAZAHQAFAEAGAFQADgSAFgOQAKgZARgPQAWgUAjgEQAXgIBMBnQAeAoATAdIA2gOQACAsABAsQhHAIhIAIQgqAFgqAFQgUgDgnACQgHgQgEgWQACgBADAAQBGgSA1gOQACAIABAJQAJAbAOASQADAEADAEAsmGMQACAAACAAQgFgaAAgiQAAgOABgMQABgYADgTQA2ArAwAUQATAGAHAbQBHgSApgKQAcAqAEATAzxC3QADAqAmA+QAnBDBVBbQAJAKAKALQA2A4A+A3QAMgHAEgEQABgJACgOQABgFABgFAwCOnQAAgEAAgEQANguADgoQARhOANAjQACgkgLgkQgPgngBgcQgHgdgBgfQACgBADgBQALgGAWgKQAFgCAFgCQBPBGBbBEAzxOJQAAgBAAAAQACACACABQgCgBgCgBQg2gWAdgCQASgEAigIQAHgCAGgDQAEAHADgCQABAAAFgBQBXB7AAABQAIADAMATQAEAEADADQA0g9AUgZQANgQgBAAQAFABACAUQAEAPADADQABAHgDACQgHAGgVgNQACgJACgQAznOWQgCgCgIgCQgBgHABgCAznOWQAIABAFADQguAWABgHQAbgKAFgHQABgBgBgBgEggrAN1QAIgoAKhGQAKhJAVgkQA6jTCyh0QBKgxBlggQBfggB7gUQAMgCAMgCQA3gKBFgJA2KOzQAJgDAJgCQANgFAdgFQAfgHAVgHQAhgDASADAOzD5QAAAJAAAIQA5AVDgAYQDFAeCJA+QAUAJATAKQAkAUB4AwQA8AZAtAWQAfAPAXANQCaBUASBvQADAMABAMAHRCrQADAIADAIQgHAFgGAFQiVBsABAHQAEAkAIAyQgQAngiBQQgLAYgJAVQgCgngEgwQgDgpgBgkQAIgRAGgMQAUgkAUgfQAig0AkglQAagbAYgaQAVATAVASQCKB6BfBUQD6Deg/gwQg/g1hEhAQgVgVgVgWQgIgHgGgHQi1i5gth6QByh3AWgUAByUmQAbghAngcQAcgSAqgZQAzgdAZgPQAtgdAgggQArgqAZgZQACgIgFAFQABgNgJgBQgBABgCABQgLACgFgRQgCgBgCgBQgIgGgOgPQgSgSgRgZQgMgOgMgNQgHgJgGgIQAGAlAEAZQAFBPghAyQgcArg+AeQgKAFgBAAQggAOhOAcQgsAPghAOQgsgIgygUQhUghgigtQgXgigwhgQgIgQgHgNQgWgpgQgSAhhIOQAdgBAiABQAbAAAhAAQATgBAVAAQAhABAVAHQACABADABQAPAHAHANQADAHAFAHQADAEABAGQAKATAFAmAllKeQgJgWAEgNIAGgOQAVg8BVgVQAFgBAEgBQA3gKBZgCAkCJcQAggJAhgQQAigRAegSQASgGANgMQABAAAAAAQALgHALgQQAVgSANgrAkMLUQgBgCgBgDQgPgEgVgGQgXgJgFACQgNgEgGgRQgDgGgBgFQgMgDgLgDQgcgIgagHQiWgwAgAJQBTgCBCAVQALANAMAWQAOAYAQAiQAuBkAWAgQAoAwBLAcQAwASAtAHQgBAAAAAAQgiANAdgNQACAAADAAQAUAEAWgBQAGAAAGAAQAUAAAVABQARgBAIgGQAFgEANgUQAPgWALgSQAGgHAFgGQAFgCAFgCQAOgGANgHQAsgiAVgkQAYgpADg5QAWgNABgXQACgkgCg4QgIAPgGANQgkA7gMAUQglA6gpAFQgcAFhIgHQhYABiUgcQg8gMg2gQQgKgCgJgDAnUObQBXAaB2AbQABAAABABQBnAYBKAPQB4AXAqACQArABAog0QAegjAvhbQAHgOAHgMQAihCAYgnQAGAgAJAmQALA5AHAqQgTgZgVgRQgDAAgCAA");
	this.shape_35.setTransform(47.425,-5.965);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_36.setTransform(46.175,-7.7001);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("ADyroQACgDABgEQAggyAegxQA5hUA5hQQAXghAXgfQAzhHAqgsQBlh4AlgGQARAHABACQAVByAlCOQAKAqAJAkQAUBcAJBAQAiCFgQA0AAtmrQAUgBATAAQD6CaCEA1QB6AwASgoQACgGADgFQAdhIgBgRQgCgZgygZQhNgzivg8QgQgGgQgGQh0gsh1glQhiADhdADQzOAdADjCQAEhtAGhhQAHhVARgwQAUhNAtgFQAsgOELDVQDlC1BQAvQh3BoAbgXQA4g0BMgcQAngOAsgIQB3gREYAJQANABANABQAAADgBAFQACgGAJgBQACAAACgBQAYgDBMADQB8AIBfAgQAoAOBTAbQAqAPAaARAhHrqQgDAAgCABQACgCAHAAAh5oxQACgDABgCQgCgQgDgRQABgHACgIAiMoCQAGgZANgWAFIgbQAAgDABgCQAWgIAVgGQDNg/gKAsQgFAYgHALQgMATgsAHQCNgHAGgTQADgJABg1QABgtgIgfQgKglgWgTQgcgYguAGQgpADgeASQgMAGgKAJQgeAYgSApQgOAkgKA7QgEAVgDAZQBNgBA5gDQgMACgNABQgPACgzgBQgXAAgUAAQgFAdgDAjQgIAFAJABAFtAAIAAAAQgSAAgPAAQAQAAARAAgAvojbQgzAvhGAyQhNA4gUATQgkAlgQAtQgRA0AABZQAAAvArBFQAGAIAFAKQAhgCAfACQAmACAqALQA/ANA+AXQAMAIAYAFQA5ApA5APQAYAFALAiQAPAZAXAPAswF7QgHgfAAgrQAAgPAAgOQADgwALgdQAKgaATgQQAYgUAlgDQAYgHBQBvQAhAtAVAgIA4gOQABAtABAuQh4AKh5AMQgVgEgpABQgGgOgEgSQACAAADAAID6hAQAbAsAFAVAs0F8QACAAACgBEghgAPRQAJgmANg/QALhCAWgjQA9i9CrhsQBFguBegfQBZgeBygVQALgCALgCQA7gMBJgMQA1gHApgFQAFAAAFAAQAqBBBPBUQAKALALALQA3A6BAA5QAGgEADgDQAAgJADgMQABgFABgEAwgOvQABgHABgHQANgqAEglQAShFAPAYQADghgHghQgKgjAAgbQgDgbAAgcQADgBACgBQAKgGATgKQAJgEAGgEQBVBMBjBLAwgOvQADADACAJQAFALAFAAQABAEgBAAQgDADgPgOQABgGACgKgA0FO0QgqgUAbgEQAQgFAdgJQAHgDAFgCQAEAFADgCQABgBAEgBQBIBnABAAQAJABALANQAEADADACQBIhWgBAAQACgBACACA0FO0IABAAQABABABABQgBgBgCgBgA0EPJQADgDACgCQABgEgIgDQAAgHABgCA2ZPsQAJgDAIgDQAMgFAZgGQAdgIASgHQAfgFARACQAHAAAEABQglASABgGQARgHAIgGAOuE1QAAAJAAAIQA8ATDtAWQDPAcCPA+QAVAJAUAKQAmAUB9AxQA/AZAvAWQAhAPAYANQCiBWASBzQAEAMABANAHvDCQADAIAEAIQgHAEgGAFQifB1ABAHQAEAmAIA2QgTArglBVQgBACgBADQgCgZgCgcQgEgrgCglQAJgSAHgMQAUglAUggQAkg3AlglQAbgcAZgbQARAPAQAPQBhBVBMBEQFlE+hMg5QhEg2hJhDQgXgVgXgXQg0gygqguQh+iKgnhiQEOkZjpD/ABfUoQAbgdAlgZQAbgRAngWQAwgaAZgOQArgaAfgdQAqglAZgWQAAgFgGAFQgCgHgKAEQgCABgCABQgMAGgGgNQgCAAgCgBQgJgFgPgMQgDgCgCgCQgJAegQAYQgeAthDAhIgLAGQgkAPhUAeQgvAQgjAPQgvgIg2gVQhagjgmgvQgagkg0hlQgNgZgLgSQgTgigPgPAgsP9QBkASAmACQAtAAApg3QAfglAwhhQAHgOAHgNQAjhGAYgpQAGAiAIAoQAVB0AGA3QACAugJAmQgRgOgQgSQgMgMgNgKQgagegdgUQgCAAgDAAAg4HeQAFAAAFAAQAcAAAgAAQATgBAUAAQAiABAUAHQADACACABQAPAHAGAOQADAIAFAIQACAFABAHQAIAVACArAkLLCQgBgCgCgDQgRgHgWgIQgYgLgGAAQgNgGgHgUQgNgcAFgTIAFgQQAThDBTgYQAEgBAFgBQBDgQCAABQAKgTAIgcAkCJfQAhgHAigPQAigPAdgTQATgIAOgOQAMgIAKgSQAJgKAIgPAmQLBQgYgHgWgGQifgxAiAJQBQACBHAWQAJALALASgAEdI4QgTAsgQAeQghA4gNAVQgnA8gqAEQgeAEhLgIQhcgCiageQg/gNg4gPQgcgHgZgHQARAaAUApQAzBpAZAiQAtAyBQAeQAYAJAXAHQAbAHAbAEQgBAAgBAAQgjAOAggOQABAAACAAQAKACAJABQAOABAPgBQAGAAAGAAQAVAAAYABQASgBAIgGQAGgFAPgUQAQgYAMgTQAGgHAGgGQAGgDAFgCQAPgGAOgIQAvgjAWglQAbgsAEg7QAUgPAAgYQACgwgGhVgAksPGQATAEAUAEQBSATBAAOQAWAEATAEQAQADAOADAnaOZQBLAWBjAX");
	this.shape_37.setTransform(44.95,-9.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_38.setTransform(43.7,-11.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_39.setTransform(42.45,-12.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_40.setTransform(41.2,-14.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_41.setTransform(39.975,-16.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_42.setTransform(38.725,-18.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_43.setTransform(37.475,-19.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_44.setTransform(36.225,-21.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_45.setTransform(35,-22.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_46.setTransform(33.75,-21.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("ABzrJQCOitB7ieQDDj9AohWIAUAAQAQBtAtChQBsGCALAsAFPpHQAaADAaAEQATALAJAMAi4qXQAAgLB4ABQCHAABoAeQAnAKBhAaQAxAPAbAQQCvAaCmAgQF5BLAAA8QAAAOgvBbQgzBigCAHAi4qXQAHAAAHAAQgOAAgCAJgAkII0QgagXghgXQgggWgIgIQgfgdAAhLQAAh+BagrQA8gdCMAAQAnAAA6gCQAoABAPANQASAOACAoQABAmgOBUACHB+QAAgEABgEQATitAmhIQA4hqCDAAQCbAAAADcQAABGgDAPQgIApgnAXABzB0QAKABALABQArAGA4AGQBBAGAUAAQBWAAASgaQAJgLAGgdQAOg6ACgGAOTIqIAAAUQBOALEpALQEsAWC5BMQAtATCcA0QCFAuBIAhQDgBpAACbAKFD+QAFANAIAOQE/lOgMkYAG7I3QALgVAIgOQBAh4BFhEQAhggAegfQBPCaEWDsQCCBtB5BQQB+BTBJAVAG7I3QAFAsAHAzQAUCVAABJQAABsg0BHQgtA8hZAsQgGADgIAEQgzAWhxAoQhAAXgvAUQAkAFAiAAQAmAAAqABQAZAAAMgIQAJgGAUgZQAigrAZgdAGzGoQAAA7AIBUAkII+QB5AEA6hUQAegtAfh9An9NYQBsAbCWAeQFcBHBOAAQA1AAAwhHQAhgwA2h7QAzhyAdg9An9NYQAiAfAxBWQBICAAoArQA2A7B5AqQBJAZBCAJQgrATgfAQA2QlXQAAiHgKjuQgFh4gFhrQAAhiAKg0QARhaAwAAQAbAAErEZQD+DvA5A9QAogTAugMQB6geFUAAAwAl1QhGA+hfBDQhZA/gaAYQgwAtgUA6QgWBAAABvQAAB2DhDwQCvC6DwC9AuSmxQBChzB0g2QAFAFADAEAtzD0QgVg5AAhbQAAhXATgrQAghFBUAAQAgAABnCUQBlCTAJA0AtzD0QA0ABAbAJIE2AAIAAhsAt+D0QAGAAAFAAAtqEIQgFgJgEgLAoMNMQAHAEAIAIAreMQQA/AgCiAoAzSM4QkJBEgeAJQjKA3iWA6QmrCjhgDPAwAJ6Qh3C0hcB4QiQC8h9Bw");
	this.shape_47.setTransform(32.5,-21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-176.9,483,369);


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


(lib.bluecircle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AI1AAQAADqilCmQimCljqAAQjpAAimilQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("AmPGQQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpQAADqilCmQimCljqAAQjpAAimilg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecircle, new cjs.Rectangle(-57.5,-57.5,115,115), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-19.2,regY:-33,x:30.1,y:79.25},0).wait(1).to({x:84,y:48.4},0).wait(1).to({x:138,y:20.5},0).wait(1).to({x:192.1,y:-4.5},0).wait(1).to({x:246.3,y:-26.6},0).wait(1).to({x:300.65,y:-45.7},0).wait(1).to({x:355.05,y:-61.95},0).wait(1).to({x:409.6,y:-75.3},0).wait(1).to({x:464.3,y:-85.75},0).wait(1).to({x:519.05,y:-93.25},0).wait(1).to({x:573.95,y:-97.85},0).wait(1).to({x:628.95,y:-99.55},0).wait(1).to({x:684.1,y:-98.35},0).wait(1).to({x:739.35,y:-94.2},0).wait(1).to({x:794.7,y:-87.15},0).wait(1).to({x:850.2,y:-77.2},0).wait(1).to({x:905.8,y:-64.35},0).wait(1).to({x:961.55,y:-48.6},0).wait(1).to({x:1017.45,y:-29.95},0).wait(1).to({x:1073.45,y:-8.35},0).wait(1).to({x:1129.55,y:16.2},0).wait(1).to({x:1185.8,y:43.65},0).wait(1).to({x:1242.25,y:74.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-158,1535.9,331.6);


(lib.circlingcircle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// orbiting_circle
	this.instance = new lib.bluecircle();
	this.instance.setTransform(0,-183.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:38.6077,y:-180.2076},0).wait(1).to({x:73.7694,y:-173.869},0).wait(1).to({x:105.4923,y:-164.9367},0).wait(1).to({x:133.7836,y:-153.4118},0).wait(1).to({x:158.6486,y:-139.2943},0).wait(1).to({x:180.0913,y:-122.5831},0).wait(1).to({x:198.1141,y:-103.276},0).wait(1).to({x:212.7178,y:-81.3695},0).wait(1).to({x:223.9018,y:-56.8589},0).wait(1).to({x:231.6638,y:-29.7384},0).wait(1).to({x:236,y:0},0).wait(1).to({x:234.7031,y:34.2952},0).wait(1).to({x:230.0643,y:65.4926},0).wait(1).to({x:222.0869,y:93.5979},0).wait(1).to({x:210.7733,y:118.6167},0).wait(1).to({x:196.1242,y:140.5535},0).wait(1).to({x:178.1393,y:159.4117},0).wait(1).to({x:156.817,y:175.1933},0).wait(1).to({x:132.1545,y:187.8996},0).wait(1).to({x:104.1477,y:197.5302},0).wait(1).to({x:72.7912,y:204.0839},0).wait(1).to({x:38.0784,y:207.5584},0).wait(1).to({x:0,y:207.95},0).wait(1).to({x:-36.8281,y:206.3083},0).wait(1).to({x:-70.5695,y:201.8112},0).wait(1).to({x:-101.2292,y:194.462},0).wait(1).to({x:-128.8128,y:184.263},0).wait(1).to({x:-153.3243,y:171.2155},0).wait(1).to({x:-174.7669,y:155.3196},0).wait(1).to({x:-193.1423,y:136.5743},0).wait(1).to({x:-208.4515,y:114.9778},0).wait(1).to({x:-220.694,y:90.5269},0).wait(1).to({x:-229.8682,y:63.2174},0).wait(1).to({x:-235.9715,y:33.0443},0).wait(1).to({x:-239,y:0},0).wait(1).to({x:-234.1383,y:-29.1636},0).wait(1).to({x:-226.5373,y:-55.8008},0).wait(1).to({x:-216.1998,y:-79.9163},0).wait(1).to({x:-203.1279,y:-101.5147},0).wait(1).to({x:-187.3224,y:-120.6},0).wait(1).to({x:-168.7831,y:-137.175},0).wait(1).to({x:-147.509,y:-151.2416},0).wait(1).to({x:-123.4977,y:-162.8007},0).wait(1).to({x:-96.746,y:-171.8525},0).wait(1).to({x:-67.2498,y:-178.396},0).wait(1).to({x:-35.0036,y:-182.4295},0).wait(1).to({x:0,y:-183.95},0).wait(1));

	// middle_circle
	this.instance_1 = new lib.bluecircle();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.5,-241.4,590,506.9);


// stage content:
(lib.Kang_movieClips = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paperPlane_mc
	this.instance = new lib.paperPlane_flying();
	this.instance.setTransform(-83.7,292.6,1,1,0,0,0,26,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// motion_tween_circle_mc
	this.orbiting_mc = new lib.circlingcircle();
	this.orbiting_mc.name = "orbiting_mc";
	this.orbiting_mc.setTransform(472.6,165,1,1,0,0,0,0,-92);

	this.timeline.addTween(cjs.Tween.get(this.orbiting_mc).wait(1));

	// shape_tween_mc
	this.instance_1 = new lib.shapetween();
	this.instance_1.setTransform(662.65,273.75,1,1,0,0,0,32.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shape_tween_simple_mc
	this.instance_2 = new lib.shapetweensimple();
	this.instance_2.setTransform(588.95,283.45,1.912,1.8396,0,0,0,5.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(208.4,336.1,735.1,193.69999999999993);
// library properties:
lib.properties = {
	id: '9158CE5B2471C544B271B5925C975DDA',
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
an.compositions['9158CE5B2471C544B271B5925C975DDA'] = {
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