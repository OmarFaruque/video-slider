! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var r = {};
    t.m = e, t.c = r, t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 55)
}({
    42: function(e, t) {
        e.exports = jQuery
    },
    55: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(42),
            i = r.n(n);
        i.a.fn.imagesLoaded = function() {
            var e = function(e, t, r) {
                var n = void 0,
                    o = !1,
                    u = i()(e).parent(),
                    a = i()("<img />"),
                    s = i()(e).attr("srcset"),
                    c = i()(e).attr("sizes") || "100vw",
                    l = i()(e).attr("src"),
                    f = function e() {
                        a.off("load error", e), clearTimeout(n), t()
                    };
                r && (n = setTimeout(f, r)), a.on("load error", f), u.is("picture") && (u = u.clone(), u.find("img").remove().end(), u.append(a), o = !0), s ? (a.attr("sizes", c), a.attr("srcset", s), o || a.appendTo(document.createElement("div")), o = !0) : l && a.attr("src", l), o && !window.HTMLPictureElement && (window.respimage ? window.respimage({
                    elements: [a[0]]
                }) : window.picturefill ? window.picturefill({
                    elements: [a[0]]
                }) : l && a.attr("src", l))
            };
            return function(t) {
                var r = 0,
                    n = i()("img", this).add(this.filter("img")),
                    o = function() {
                        ++r >= n.length && t()
                    };
                return n.each(function() {
                    e(this, o)
                }), this
            }
        }();
        var animatedfunction = function(){
                    var i = 1;
                    var timer = function() {
                        setTimeout(timer, 1000);
                        var animation = jQuery('.slick-active').find('p:nth-child('+i+')').data('animation');
                        
                        if(animation == 'right'){
                            jQuery('.slick-active').find('p:nth-child('+i+')').animate({
                                marginRight: '0px',
                                marginLeft: '0px'
                            }, 1000);
                        }else  if(animation == 'left'){
                            jQuery('.slick-active').find('p:nth-child('+i+')').animate({
                                marginLeft: '0px',
                                marginRight: '0px',
                            }, 1000);
                        }else{
                            jQuery('.slick-active').find('p:nth-child('+i+')').animate({
                                top: '0px',
                            }, 1000);
                            jQuery('.slick-active').find('p:nth-child('+i+')').addClass('bounce');
                        }
                        i++;
                    }
                    timer();
        }


        var interval;
        jQuery(document.body).on('click', '.pbuttononclick .p-button, .sliderController .p-button, .back-to-start, .replay-to-back', function(){
            // if(jQuery(this).closest('slick-slider').hasClass('slider-push')) return false;
            var thissliderbtn =  jQuery(this);
            var t = jQuery(this).closest('.slick-slider');
            var progressbarwidth = t.find('div.progressbar').width();
            var slideIndex = 0;
            
            if(document.getElementById('autoplayaudio') != null && !t.find('.mute-button').hasClass('active'))
            {
                var audionplay = document.getElementById('autoplayaudio');
                if (audionplay.paused) {
                    document.getElementById('autoplayaudio').play();
                    document.getElementById('autoplayaudio').muted = false;
                }
                else if(audionplay.muted){
                    document.getElementById('autoplayaudio').play();
                    document.getElementById('autoplayaudio').muted = false;
                }
                else{
                    audionplay.currentTime = 0;
                }

            } 
            var previousDiv = (jQuery(t).hasClass('slick-initialized')) ?  thissliderbtn.closest('div.pbuttononclick').closest('.slick-slider').find('.wp-block-eedee-block-videoslide') :  thissliderbtn.closest('div.slick-slider').find('.wp-block-eedee-block-videoslide');

            if(jQuery(this).hasClass('back-to-start') || jQuery(this).hasClass('replay-to-back') || jQuery(t).hasClass('slider-push')){
                previousDiv = thissliderbtn.closest('div.slick-slider').find('.wp-block-eedee-block-videoslide');
                jQuery('.slick-initialized .progress_inner').width(0);
                slideIndex = localStorage.getItem('slideindex'); 
            }
            clearInterval(interval);
            
            previousDiv.find('.slide-content').find('p').each(function(k,v){
                if(jQuery(this).data('animation') == 'right'){
                    jQuery(this).css({ 
                        marginRight: '-110%', 
                        marginLeft: '110%'
                    });
                }else if(jQuery(this).data('animation') == 'left' ){
                    jQuery(this).css({ 
                        marginLeft: '-110%',
                        marginRight: '110%'
                    });
                }else{
                    jQuery(this).css({ 
                        transform: 'translateY(-1000px)'
                    });
                }
            });

            var slider = jQuery(t);
            if(jQuery(this).hasClass('back-to-start') || jQuery(this).hasClass('replay-to-back')){
                slider.slick("slickGoTo", 0);
           }
            jQuery(slider).on('init', function(event, slick){
                if(jQuery(t).find('.slick-active').find('video').length){
                   var vplayer = jQuery('.slick-slider').find('.slick-active').find('video').get(0); 
                   vplayer.play();
                }
                animatedfunction();
            });

                if (jQuery(t).hasClass('slick-initialized') || jQuery(t).hasClass('slider-stop')) {
                    // document.getElementById("video_progress").remove();
                    slider.slick('destroy');
                    var newtime = 0;
                    // var dynamicCSS = '.progress_inner:before{-webkit-transition: width '+newtime+'s;transition: width '+newtime+'s; width:0%}';
                    // jQuery('<style>'+dynamicCSS+'</' + 'style>').appendTo(document.body);
                }
                // slider.not('.slick-initialized').slick({
                    slider.not('.slick-initialized').slick({
                    pauseOnFocus: !1,
                    autoplay: false,
                    speed: 500,
                    dots:true,
                    fade: true,
                    arrows:false,
                    pauseOnHover: !1,
                    slide: ".wp-block-eedee-block-videoslide",
                    prevArrow: '<button type="button" class="slick-prev omarleft pull-left"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                    nextArrow: '<button type="button" class="slick-next omarright pull-right"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
                }),
                jQuery(slider).on("beforeChange", function(e) {
                    
                    slider.css('backgroundImage', "url( '' )");
                    thissliderbtn.closest('div.pbuttononclick').prev('.slick-list').find('.wp-block-eedee-block-videoslide').find('.slide-content').find('p').each(function(k,v){
                        if(jQuery(this).data('animation') == 'right'){
                            jQuery(this).css({ 
                                marginRight: '-110%',
                                marginLeft: '110%'
                            });
                        }else if(jQuery(this).data('animation') == 'left' ){
                            jQuery(this).css({ 
                                marginLeft: '-110%',
                                marginRight: '110%'
                            });
                        }else{
                            jQuery(this).css({ 
                                transform: 'translateY(-1000px)'
                            });
                        }
                    })
                }), jQuery(slider).on("afterChange", function(e) {
                    animatedfunction();
                });

            // });
            

            /*
            * Start from bigin 
            */
           
            
            var totaltime = 0;
            var durationList = previousDiv.map(function(index, item) {
                totaltime += parseInt(item.getAttribute('data-duration'));
                return item.getAttribute('data-duration');
            });
            
            // console.log(durationList);
            var indexIncrease = 0;
            window.changeSlide = function(timing) {
                // slideIndex = jQuery('.slick-dots li.slick-active').index();
                // slideIndex = slideIndex++;

                var item = 0;
                window.timeout = setTimeout(function() {
                    // var storeindex = slideIndex;
                    
                    if(!slider.hasClass('slider-push')){
                        if (timing !== 0) {
                            item = (slideIndex == 0) ? +slideIndex + +2 : +slideIndex + +1;
                            item = item;
                            
                            jQuery('.slick-dots li:nth-child('+item+')').find('button').click();
                            localStorage.setItem('slideindex', slideIndex);
                        }
                        console.log(durationList[indexIncrease]);
                        console.log('index increase: ' + indexIncrease);
                        if (slideIndex < durationList.length){ 
                            var changedslider_item = durationList[slideIndex++];
                            changeSlide(changedslider_item);
                            
                        }
                    }
                    
                    localStorage.setItem("start_time", Date.now());
                    
                }, timing);
                indexIncrease = indexIncrease+1;
            }
            
            if(jQuery(this).hasClass('back-to-start') || jQuery(this).hasClass('replay-to-back')){
                clearTimeout(window.timeout);
                window.timeout =  setTimeout(changeSlide, durationList[slideIndex]);
           }
        
            
            window.changeSlide(durationList[slideIndex]);
            localStorage.setItem("start_time", Date.now());

            // progressbar
            window.stopeverything = function(){
                window.cleareverything = setTimeout(function(){
                    var sound = document.getElementById('autoplayaudio');
                    if(sound != null){
                        sound.pause();
                        sound.currentTime = 0;
                    }
                    
                    thissliderbtn.show();
                    thissliderbtn.closest('div.pbuttononclick').show();
                    var vpalyer = thissliderbtn.closest('div#videoSlider').find('div.slick-active').find('video').get(0);
                    if(typeof vpalyer != 'undefined'){
                        vpalyer.pause();
                        if(!slider.hasClass('slider-push')) vpalyer.currentTime = 0;
                    }
                    slider.slick('slickSetOption', {
                        'autoplay': false
                    }, false);
                }, totaltime);
            }


            if(jQuery(this).hasClass('back-to-start') || jQuery(this).hasClass('replay-to-back')){
                clearTimeout(window.cleareverything);
                window.cleareverything =  setTimeout(stopeverything, totaltime);
           }
           stopeverything();
            totaltime = totaltime / 1000;
            localStorage.setItem('totaltime', totaltime);
            
            var tm = 1;
            if(slider.hasClass('slider-push')){
                tm = parseInt(localStorage.getItem("tm"));
            } 
            var timer = function(){
                interval = setInterval(function(){
                    
                if(totaltime <= 0){
                    // totaltime = localStorage.getItem('totaltime');
                    // console.log('total time from get: ' + localStorage.getItem('totaltime'));
                } 
                var eachtimelength = progressbarwidth / totaltime;
                
                // console.log('progressbarwidth: ' + progressbarwidth);
                // console.log('totaltime: ' + totaltime);
                


                var width = 0;
                if(!slider.hasClass('slider-push')) width = eachtimelength * tm;
                if(slider.hasClass('slider-push')) width = parseInt(jQuery('.progressbar div.progress_inner').width());
                
                // console.log('TM: ' + tm);
                // console.log('width: ' + width);
                // console.log('progressbarwidth: ' + progressbarwidth);
                // console.log('inner width: ' + jQuery('.progressbar div.progress_inner').width());
                
                if(tm <= 100 && width <= progressbarwidth ){
                    jQuery('.slick-initialized .progress_inner').animate({width: width+'px'}, 'slow');  
                    jQuery('.display-time-inline').html(tm+'/'+totaltime);
                    //    
                }else{
                    console.log('inside else');
                    // slider.initSlick();
                    // console.log('inside else');
                    slider.addClass('slider-stop');
                    slider.find('div.pbuttononclick .p-button').show();
                    slider.find('.play-button').addClass('p-button').removeClass('push-active');
                    slider.removeClass('slick-initialized');
                } 
                if(!slider.hasClass('slider-push')) tm += 1;
                localStorage.setItem("tm", tm);
            }, 1000 );

        }
        timer();
            // var dynamicCSS = '.slick-initialized:not(.slider-push) .progress_inner:before{-webkit-transition: width '+totaltime+'s;transition: width '+totaltime+'s; width:100%}';
            // jQuery('<style id="video_progress">'+dynamicCSS+'</' + 'style>').appendTo(document.body);
            
        slider.find('.pbuttononclick').find('.p-button').hide();
        if(t.hasClass('slider-push')) t.removeClass('slider-push');
        slider.find('div.pbuttononclick .p-button').hide();
        slider.find('.play-button').addClass('push-active').removeClass('p-button');
        slider.find('div.pbuttononclick').hide();
    }); // Slick slider on click 


    /*
    * Slick push on click
    */
    jQuery(document.body).on('click', '.pButton .play-button.push-active', function() {
        var t = jQuery(this).closest('.slick-slider');
        t.addClass('slider-push');
        var vpalyer = jQuery('div.slick-active').find('video').get(0);
            if(typeof vpalyer != 'undefined'){
                    vpalyer.pause();
            }
            if(document.getElementById('autoplayaudio') != null) document.getElementById('autoplayaudio').muted = true;
            jQuery(this).addClass('p-button');
            jQuery(this).removeClass('push-active'); 
    });


    /*
    * Mute sound
    */
    jQuery(document.body).on('click', 'div.mute-button', function(){
        jQuery(this).toggleClass('active');
        if(jQuery(this).hasClass('active')){
            if(document.getElementById('autoplayaudio') != null) document.getElementById('autoplayaudio').muted = true;
        }else{
            if(document.getElementById('autoplayaudio') != null) document.getElementById('autoplayaudio').muted = false;
        }
    });





    }
});

