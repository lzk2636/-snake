(function ($) {
    var that;
    var Game = function (food, snake) {
        this.food = $.getFood;
        this.snake = $.getSake;
        that = this;
    }

    Game.prototype.star = function () {
        this.food.Render();
        this.snake.Render();
        animation();
        keydown();


    }
    function animation() {

        var timeId = setInterval(function () {
            this.snake.moving(this.food);
            if (this.snake.data[0].x < 0 || this.snake.data[0].x >= $('div').width() / this.snake.width
                || this.snake.data[0].y < 0 || this.snake.data[0].y >= $('div').height() / this.snake.height) {
                alert('game over');
                clearInterval(timeId);
                return;
            }
            this.snake.Render();
        }.bind(that), 500)
    }
    function keydown() {
        $(document).on('keydown', function (e) {
            // console.log(e.keyCode)
            switch (e.keyCode) {
                case 38:
                    if (this.snake.direction != 'bottom') this.snake.direction = 'top';
                    break;
                case 40:
                    if (this.snake.direction != 'top') this.snake.direction = 'bottom';
                    break;
                case 37:
                    if (this.snake.direction != 'right') this.snake.direction = 'left';
                    break;
                case 39:
                    if (this.snake.direction != 'left') this.snake.direction = 'right';
                    break;
            }
        }.bind(that))

    }



    $.getGame = new Game();




}(jQuery))