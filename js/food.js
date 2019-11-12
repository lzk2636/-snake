; (function ($) {

    var list = [];
    var Food = function (x, y, color, width, height) {
        this.x = x || 20;
        this.y = y || 20;
        this.color = color || 'green';
        this.width = width || 20;
        this.height = height || 20;


    }
    Food.prototype.Render = function () {
        removeList(list);
        this.x = Math.floor(Math.random() * $('div').width() / this.width) * this.width;
        this.y = Math.floor(Math.random() * $('div').height() / this.height) * this.height;
        var p = $('<p></p>').css({
            position: 'absolute',
            width: this.width,
            height: this.height,
            left: this.x,
            top: this.y,
            backgroundColor: this.color
        }).appendTo($('div'))
        list.push(p);
        // console.log(x)
        // console.log(y)
    }
    function removeList(list){
        for(var i=0;i<list.length;i++){
            $(list[i]).remove()
        }
       
    }
    $.getFood = new Food()
}(jQuery));


