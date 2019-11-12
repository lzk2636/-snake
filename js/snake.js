(function ($) {
    var list = [];
    var Snake = function (width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || 'right'
        this.data = [{
            x: 3,
            y: 2,
            background: 'red'
        },
        {
            x: 2,
            y: 2,
            background: 'pink'
        },
        {
            x: 1,
            y: 2,
            background: 'yellow'
        },

        ]
    }
    Snake.prototype.Render = function () {
        var span;
        removePre(list);
        for (var i = 0; i < this.data.length; i++) {
            span = $('<span></span>').css({
                position: 'absolute',
                display: 'block',
                width: this.width,
                height: this.height,
                left: this.data[i].x * this.width,
                top: this.data[i].y * this.height,
                backgroundColor: this.data[i].background
            }).appendTo($('div'));
            list.push(span)
        }
        // console.log(list)


    }
    function removePre(list) {
        for (var i = 0; i < list.length; i++) {
            list[i].remove()

        }

    }
    Snake.prototype.moving = function (food) {
        for (var i = this.data.length - 1; i > 0; i--) {
            this.data[i].x = this.data[i - 1].x;
            this.data[i].y = this.data[i - 1].y;
        }
        switch (this.direction) {
            case 'right':
                this.data[0].x++;
                break;
            case 'left':
                this.data[0].x--;
                break;
            case 'top':
                this.data[0].y--;
                break;
            case 'bottom':
                this.data[0].y++;
                break;
        }


        //吃蛇 用蛇头判断
        // console.log(this.data[0].x * this.width)
        //console.log(food.x*this.width)
        // console.log(food.x)
        var oldData=this.data[this.data.length-1]

        if (this.data[0].x*this.width == food.x  && this.data[0].y*this.height == food.y) {

         this.data.push({
             x:oldData.x,
             y:oldData.y,
             background:getColor()
         })
          food.Render()
        }






    }

    function getColor(){
        var r=Math.floor(Math.random()*255);
        var g=Math.floor(Math.random()*255);
        var b=Math.floor(Math.random()*255);
        return 'rgb('+r+','+g+','+b+')'
        
    }




    $.getSake = new Snake()



}
    (jQuery))