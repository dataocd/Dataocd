var notifyMessage=function(b){var c={title:"Notice",message:"Action Successful",notifyType:"info",delay:4000};if(b){jQuery.extend(c,b)}var a;switch(c.notifyType){case"warning":a="/images/warning.png";break;case"info":a="/images/info.png";break;default:a="/images/info.png";break;}var d='<div class="notice"><div class="notice-body"><img src="'+a+'" alt="" /><h3>'+c.title+"</h3><p>"+c.message+'</p></div><div class="notice-bottom"></div></div>';jQuery(d).purr({usingTransparentPNG:true,removeTimer:c.delay});return false;};
      /**
 * jquery.purr.js
 * Copyright (c) 2008 Net Perspective (net-perspective.com)
 * Licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * @author R.A. Ray
 * @projectDescription  jQuery plugin for dynamically displaying unobtrusive messages in the browser. Mimics the behavior of the MacOS program "Growl."
 * @version 0.1.0
 *
 * @requires jquery.js (tested with 1.2.6)
 * @param fadeInSpeed           int - Duration of fade in animation in miliseconds
 *                           default: 500
 *  @param fadeOutSpeed          int - Duration of fade out animationin miliseconds
 *                           default: 500
 *  @param removeTimer          int - Timeout, in miliseconds, before notice is removed once it is the top non-sticky notice in the list
 *                           default: 4000
 *  @param isSticky             bool - Whether the notice should fade out on its own or wait to be manually closed
 *                           default: false
 *  @param usingTransparentPNG   bool - Whether or not the notice is using transparent .png images in its styling
 *                           default: false
 *
 *  @edit Jonathon Hibbard, Triton Digital Media, 04-06-2011
 *  Compressed original source with YUI.  Also added param for overriding icons with custom images.
 */
(function(a){a.purr=function(e,c){e=a(e);if(!c.isSticky){e.addClass("not-sticky")}var b=document.getElementById("purr-container");if(!b){b='<div id="purr-container"></div>'}b=a(b);a("body").append(b);d();function d(){var g=document.createElement("a");a(g).attr({className:"close",href:"#close",innerHTML:"Close"}).appendTo(e).click(function(){f();return false});e.appendTo(b).hide();if(jQuery.browser.msie&&c.usingTransparentPNG){e.show()}else{e.fadeIn(c.fadeInSpeed)}if(!c.isSticky){topSpotInt=setInterval(function(){if(e.prevAll(".not-sticky").length==0){clearInterval(topSpotInt);setTimeout(function(){f()},c.removeTimer)}},200)}}function f(){if(jQuery.browser.msie&&c.usingTransparentPNG){e.css({opacity:0}).animate({height:"0px"},{duration:c.fadeOutSpeed,complete:function(){e.remove()}})}else{e.animate({opacity:"0"},{duration:c.fadeOutSpeed,complete:function(){e.animate({height:"0px"},{duration:c.fadeOutSpeed,complete:function(){e.remove()}})}})}}};a.fn.purr=function(b){b=b||{};b.fadeInSpeed=b.fadeInSpeed||500;b.fadeOutSpeed=b.fadeOutSpeed||500;b.removeTimer=b.removeTimer||4000;b.isSticky=b.isSticky||false;b.usingTransparentPNG=b.usingTransparentPNG||false;this.each(function(){new a.purr(this,b)});return this}})(jQuery);


(function($) {
  $(document).ready(function() {
    $('input[type=button], button').button();
  });
})(jQuery);
