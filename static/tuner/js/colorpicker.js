/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 //little options to make default color onload
 */
jQuery(window).load(function() {
	$("body").append('<div id="settingMenu"><div class="color-panel"><!-- color change --><div class="color-version"><p>color version</p><div id="colorSelector"></div><div id="colorSelector2"></div></div><!--/color change --><!-- layout change --><div class="layout-version"><p>layout version</p><div class="boxed-button them-button"><span>Boxed</span></div><div class="widescreen-button them-button active"><span>Widescreen</span></div>	</div>	<!--/layout change -->	</div><!-- 	 --><div class="setButton"><img src="img/set-button.png" alt=""></div></div>');
	$(".setButton").click(function(){
	    var but=($("#settingMenu"));
	    if ( but.hasClass("slideOn") ) {
	      but.removeClass( "slideOn" );
	    }
	    else{
	      but.addClass( "slideOn" );
	    }
	  });
	  $(".them-button").click(function(){
	    if($(this).hasClass("boxed-button")){
	      $('.pc').addClass('page-boxed');
	      $(this).addClass("active").siblings().removeClass("active");
	      var width_sticky = $(".sticky").parent().innerWidth();
		  $("head .width-sticky").remove();
		  $("head").append("<style class='width-sticky'>.page-boxed .sticky{width:"+width_sticky+"px; margin: 0 auto;}</style>")
	    }
	    if($(this).hasClass("widescreen-button")){
	      $('.pc').removeClass('page-boxed');
	      $(this).addClass("active").siblings().removeClass("active");
	    }
	  });
	$('#colorSelector').ColorPicker({
    color: '00e7b4',
    
    onShow: function (cp) {
       $(cp).fadeIn(500);
      return false;
    },
    onSubmit: function(hsb, hex, rgb) {
      $('#colorpickerField').val(rgb);
    },
    onHide: function (cp) {
      $(cp).fadeOut(500);
      return false;
    },
    onChange: function (hsb, hex, rgb) {
        
        $('#colorSelector').css('backgroundColor', '#'+hex);
        $('.active-link').css('color', '#'+hex);
        $("head style[id='button-hover']").remove();
        $("head").append("<style id='button-hover' type='text/css'>#comments .meta time,.large-team .circle i,.widget-latest-news .widget-subscribe .button-send,.widget-latest-news .latest-news-item p span,.list-type.list-type-angle li:before,.accordions .content-title:hover, .toggles .content-title:hover,.accordions .content-title.active, .toggles .content-title.active,.woocommerce .product .product_meta .tagged_as a:before,.woocommerce .products-carousel .carousel-nav span,.woocommerce .products-carousel .carousel-nav .prev i, .woocommerce .products-carousel .carousel-nav .next i,.pagination a:first-child,.pagination a:last-child,.woocommerce .products .product .price,.woocommerce .shipping-calculator-form>:first-child:before,.woocommerce .cart-collaterals .cart_totals tr td strong span,.woocommerce .cart-collaterals .cart_totals tr td,.woocommerce .shipping_calculator .shipping-calculator-button,.woocommerce .quantity.buttons_added:before, .woocommerce .quantity.buttons_added:after,.woocommerce .title div a:hover,.widget-calendar .ui-datepicker-header,#categories ul li a:hover, #meta ul li a:hover, #archives ul li a:hover,.widget-twitter span.tweet_time,#tag_cloud-2 .tagcloud ul li:before,.widget-twitter .tweet_even .pic,#calendar table thead,#calendar table thead,.widget-recent-comments ul li:before,#categories ul li:before, #meta ul li:before, #archives ul li:before,.list-type.list-type-splash li i:before, .list-type.list-type-splash li i:after,.carousel-button .next:hover>i, .carousel-button .prev:hover>i, .scroll-down div i, dt:before, .button, .nav>ul>li>a:after,blockquote.blog-quote h2:before, .title .slash-icon, .counter-block, .team-item>p, .portfolio .portfolio-filter .active,.portfolio .portfolio-filter a:hover,.rectangle i,.post-info span i,.years:hover,.grid-contact>i, .contact-page .contacts>div>i,.footer #copyright span,.pc .sticky .nav>ul>li:hover>a,.nav a:hover,.portfolio-hover .portfolio-social .contact-round i,.link-cont a,.subscribe .button-send,.scroll-top{color:#"+hex+";}</style>");
        $("head style[id='background-color-0.8']").remove();
        $("head").append("<style id='background-color-0.8' type='text/css'>.background-color, .subscribe {background-color:rgba("+rgb['r']+","+rgb['g']+","+rgb['b']+",0.8);}</style>");
        $("head style[id='background-color-0.95']").remove();
        $("head").append("<style id='background-color-0.95' type='text/css'>#flickr-badge li a,.portfolio-hover,.team-item .overflow-block {background-color:rgba("+rgb['r']+","+rgb['g']+","+rgb['b']+",0.95);}</style>");
        $("head style[id='background-color']").remove();
        $("head").append("<style id='background-color' type='text/css'>#text-2 .textwidget input[type='submit']:hover,.round-button:hover,.rectangle-button:hover,.mobile .sticky .nav ul li:hover,.widget_pages>ul>li,.widget-latest-news .widget-subscribe,.accordions .content,.round-button.green,.tabs-btn,.toggles .content,.woocommerce .product .woocommerce-tabs .tabs>li,.price_slider .ui-slider-range,.woocommerce #list-or-grid>div.active,.woocommerce table thead,blockquote,hr.divider-green,#search>form>input,.list-type.list-type-splash li i, .rectangle-button.green, .scroll-down, .pc .sticky .nav ul ul a:hover, .pc .sticky .nav ul ul li:hover>a, .line, .picture>.hover-effect, .project-item>.hover-effect, .media-block>.hover-effect,.circle {background-color:rgba("+rgb['r']+","+rgb['g']+","+rgb['b']+",1);}</style>");
        $("head style[id='border-color']").remove();
        $('head').append("<style id='border-color' type='text/css'>.woocommerce .product .woocommerce-tabs,.woocommerce .cart-collaterals .shipping-calculator-form .form-row, .woocommerce .cart-collaterals .cart_totals tr,.woocommerce .shipping_calculator .shipping-calculator-button,.woocommerce table tbody .cart_item>*,.woocommerce table tbody .cart_item,.woocommerce table thead,#search .search-field,.widget-twitter .tweet_even .pic,.carousel-button .next:hover, .carousel-button .prev:hover, .big-window-tab .inform-item .item-name {border-color:rgba("+rgb['r']+","+rgb['g']+","+rgb['b']+",1);}")
    }   
  });
  $('#colorSelector2').ColorPicker({
    color: 'ff4a81',
    onShow: function (cp) {
       $(cp).fadeIn(500);
      return false;
    },
    onSubmit: function(hsb, hex, rgb) {
      $('#colorpickerField2').val(rgb);

    },
    onHide: function (cp) {
      $(cp).fadeOut(500);
      return false;
    },
    onChange: function (hsb, hex, rgb) {
        
        $('#colorSelector2').css('backgroundColor', '#'+hex);
        $("head style[id='button-second-color']").remove();
        $("head").append("<style id='button-second-color' type='text/css'>.woocommerce .product .summary .main-features .features>div i,.pagination .active,.price_slider .ui-slider-handle:before,#text-2 .textwidget input[type='submit'],.widget_pages>ul>li:after,.widget_pages ul>li>a:hover,.widget-latest-news .widget-subscribe .button-send,.round-button,.rectangle-button,.accordions .content-title:after, .toggles .content-title:after,#search input[type='submit']:hover,td.ui-datepicker-current-day:before, .circle:hover, .rectangle-button.green:hover, .skill-bar .bar span, .contact-round:hover, .subscribe .button-send, .link-cont a:hover, .portfolio-hover .portfolio-social .contact-round:hover, .item-example:hover .circle, .item-example:hover .line,.blog .item .date-round {background-color:#"+hex+";}</style>");
        $("head style[id='button-second-color-text']").remove();
         $("head").append("<style id='button-second-color' type='text/css'>.woocommerce .products-carousel .carousel-nav .prev i:hover,.item-example:hover i, .woocommerce .products-carousel .carousel-nav .next i:hover,.summary .price,.pagination a i,.widget_shopping_cart_content .buttons .button i,.star-rating>span:before, .comment-form-rating .stars .stars-active,.woocommerce .shipping_calculator h2 a:after,.woocommerce table tbody .product-remove .remove:before,.tabs-btn.active,.list-type.list-type-round li:before,.button.reply:after, .widget-calendar .ui-datepicker-header .ui-datepicker-title,.blog.full-width .item .date, .blog.with-sidebar .item .date, .button:hover{color:#"+hex+";}</style>");
    }   
  });
  $("head style[id='data-a-color-hover']").remove();
  $('#colorSelector2').css('background-color', '#ff4a81')
  $('#colorSelector').css('background-color', '#00e7b4')

})

  //little options to make default color onload
var onloadColor = function(loadColor){
	var hex = loadColor;
	$('#colorSelector').css('backgroundColor', '#'+hex);
        /* style in head*/
        $("head style[id='data-a-color-hover']").remove();
        $("head").append("<style id='data-a-color-hover' type='text/css'>body a:hover {color:#"+hex+";}</style>");
        /* bg-color-hover-active*/
        $("head style[id='data-bg-color-hover-active']").remove();
        $("head").append("<style id='data-bg-color-hover-active' type='text/css'>body .cp-bg-color-hover.active{background-color:#"+hex+"!important;}</style>");
        /* border-color-hover-active */
        $("head style[id='data-border-color-hover-active']").remove();
        $("head").append("<style id='data-border-color-hover-active' type='text/css'>body .cp-border-color-hover.active{border-color:#"+hex+"!important;}</style>");
        /* color-hover-active */
        $("head style[id='data-color-hover-active']").remove();
        $("head").append("<style id='data-color-hover-active' type='text/css'>body .cp-color-hover.active{color:#"+hex+"!important;}</style>");
        /* bg-color*/
        $("head style[id='data-bg-color']").remove();
        $("head").append("<style id='data-bg-color' type='text/css'>body .cp-bg-color{background-color:#"+hex+";}</style>");
        // change border color
        $("head style[id='data-border-color']").remove();
        $("head").append("<style id='data-border-color' type='text/css'>body .cp-border-color{border-color:#"+hex+";}</style>");
        // change font color
        $("head style[id='data-color']").remove();
        $("head").append("<style id='data-color' type='text/css'>body .cp-color{color:#"+hex+";}</style>"); 
        // change bg-color-hover
        $("head style[id='data-bg-color-hover']").remove();
        $("head").append("<style id='data-bg-color-hover' type='text/css'>body .cp-bg-color-hover:hover{background-color:#"+hex+" !important;}</style>");
        // change border color-hover
        $("head style[id='data-border-color-hover']").remove();
        $("head").append("<style id='data-border-color-hover' type='text/css'>body .cp-border-color-hover:hover, body .cp-border-color-hover.active {border-color:#"+hex+" !important;}</style>");
        // change font color-hover
        $("head style[id='data-color-hover']").remove();
        $("head").append("<style id='data-color-hover' type='text/css'>body .cp-color-hover:hover, body .cp-color-hover.active {color:#"+hex+" !important;}</style>");
};

(function ($) {

	var ColorPicker = function () {

		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				onLoad: function () {},
				color: '#000000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
					//little options to make default color onload
					onloadColor((HSBToHex(opt.color)))
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery)

