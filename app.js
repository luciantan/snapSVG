var s = Snap(1500, 1500); 

var rect = s.rect(20,20,40,40).attr({fill:"#3579e8", stroke:"green"}).transform("s 1.25");
var circle = s.circle(60,150,50).attr({fill:"#ff2626", stroke:"#ff2626"});
var circle2 = s.circle(150, 120, 20).attr({fill:"#ff2626", stroke:"#ff2626"});

var box1 = s.path("M 70 70 h 30 v 10 h 10 v -10 h 10 v 20 h -10 v 10 h -10 v -10 h -30 v -20").attr({fill:"#29ff26", stroke:"#25ed96"}).transform( 's 1.5' );
var box2 = s.path("M 70 70 h 30 v 10 h 10 v -10 h 10 v 20 h -10 v 10 h -10 v -10 h -30 v -20").attr({fill:"#29ff26", stroke:"#25ed96"}).transform( 's 1.5' );
var box3 = s.path("M 70 70 h 30 v 10 h 10 v -10 h 10 v 20 h -10 v 10 h -10 v -10 h -30 v -20").attr({fill:"#29ff26", stroke:"#25ed96"}).transform( 's 1.5' );
var box4 = s.path("M 70 70 h 30 v 10 h 10 v -10 h 10 v 20 h -10 v 10 h -10 v -10 h -30 v -20").attr({fill:"#29ff26", stroke:"#25ed96"}).transform( 's 1.5' );
var box = s.path("M808.5,328.5c-19.2,0-38.3,0-57.5,0c2,20.4-14.4,36-29.5,35c-14-0.9-27.6-16.2-25.4-35c-129.2,0-258.4,0-387.6,0c-1.5,0-9.3-0.1-15.6-6.4c-4-4-6.4-9.5-6.4-15.6v-59c0-6.1,2.5-11.6,6.4-15.6c5.4-5.4,12.8-6.2,15.6-6.4c15-1.5,172.2-1.4,386.6,0c-2.8,19.2,11.8,34.9,26.4,35c14.7,0.1,29.8-15.6,27-35c2.4-0.2,40-2.5,60,0c4.7,0.6,10.9,1.8,15.6,6.4c4,4,6.4,9.5,6.4,15.6v59C830.5,318.7,820.7,328.5,808.5,328.5");
box.attr({fill:"#3579e8", stroke:"green"});

var move = function(dx,dy) {
        this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                });
}

var start = function() {
        this.data('origTransform', this.transform().local );
        console.log('started dragging');

}
var stop = function() {
        console.log('finished dragging');
        console.log(this.getBBox().x);

}

rect.drag(move, start, stop );
circle.drag(move, start, stop );
box1.drag(move, start, stop);
box2.drag(move, start, stop);
box3.drag(move, start, stop);
box4.drag(move, start, stop);

box.drag(move, start, stop);
circle2.click(function(e) {
    this.minified = !this.minified;
    circle2.animate({
        r: !this.minified ? 100 : 10
    }, 1500);
}).drag();

var array = {};
var select = s.selectAll();
select.forEach(function(el){
	var p = el.select('path');
	array[el.attr("id")] = p.attr('d');
});
// console.log(select, array);

// console.log(box4.getSubpath(0, box.getTotalLength()));

// console.log(Snap.path.isPointInsideBBox(box4.getSubpath(0, box.getTotalLength()), circle.attr("cx"), circle.attr("cy")));



   