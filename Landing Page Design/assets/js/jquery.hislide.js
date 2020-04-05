(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 800,
            interval: 400,
            
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 70, height: 60, top: 37, left: 40, $opacity: 0.0, $text:'Best Hospital Design Award' },
            { $zIndex: 2, width: 90, height: 80, top: 28, left: 70, $opacity: 0.2 , $text:'Best Healing Environment Award'},
            { $zIndex: 3, width: 100, height: 104, top: 15, left: 100, $opacity: 0.3 , $text:'Australian Council on Healthcare Standards International'},
			{ $zIndex: 4, width: 120, height: 115, top: 10, left: 125, $opacity: 0.8 , $text:'Saudi Arabian General Investment Authority Award'},
            { $zIndex: 5, width: 120, height: 130, top: 0, left: 155, $opacity: 1 , $text:'Best Hospital Design Award'},
			{ $zIndex: 4, width: 120, height: 115, top: 10, left: 185, $opacity: 0.8 , $text:'Makkah Award for Excellence'},
            { $zIndex: 3, width: 100, height: 104, top: 15, left: 235, $opacity: 0.3, $text:'Global Reporting Initiative (GRI) Report' },
            { $zIndex: 2, width: 90, height: 80, top: 28, left: 275, $opacity: 0.2, $text:'King Khalid Award for Responsible Competitiveness' },
            { $zIndex: 1, width: 70, height: 60, top: 37, left: 325, $opacity: 0.0 , $text:'Joint Commission International (JCI) Accreditation'}
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        })/* .on('mouseleave', function() {
            autoPlay();
        }); */

        move();
        //autoPlay();

        function move() {
			
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
				$(".setText").text(state.$text);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    // 找到要轮播的轮播图的根标签，调用 slide()
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
