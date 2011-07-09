/**
 * @author Jonathon Hibbard
 */
// $.extend({}, blSettings, {"someParam" : "someValue"}),
// $.ajaxSetup({'async': false});
// $.ajaxSetup({'async': true});
// methods.displayUILink();
// $(el).append('<span id="featured_image_popup"><img border=0 id="featured_image_trigger" src="/common/images/icons/32x32/shadow/photo_scenery.png" /></span>');
(function($) {
  var el,
      blSettings = {
        // some object properties go here...
        title: '',
        rating: 0,
        scheduled_date: 0
      },
      methods = {
        //Bucket List constructor...
        init : function(options) {
          el = this;
          return this.each(function() {
            if(options) {
              $.extend(blSettings, options);
            }
          });
        },
        saveItem : function(data) {
          if(data) {
            $.extend(data, blSettings);
            $.getJSON("action_file.php", data, function(rsp) {
              if(!rsp || rsp.ERROR) {
                notifyMessage({
                  title : 'Bucket List: Failure',
                  message : 'Unable to save your Bucket List Item!  Error: ' + rsp.ERROR,
                  notifyType : "Error"
                });
              } else {
                notifyMessage({
                  title : 'Bucket List',
                  message : 'Your Bucket List Item has been saved successfully.'
                });
              }
            });
          }
        },
        setupFancyBoxUI : function(options) {
          var fancySettings = {
        		'type'            : 'ajax',
        		'href'            : 'action_file_here?' + $.param(blSettings),
        		'title'           : 'Bucket List Popup',
        		'titlePosition'   : 'inside',
        		'transitionIn'	  : 'fade',
        		'transitionOut'	  : 'fade',
        		'scrolling'       : 'no',
            'onComplete'      : function() {
                                  $("#fancybox-title").css({'top':'0px', 'bottom':'auto'});
                                }
          };

          if(options) {
            $.extend(fancySettings, options);
          }

          $("#bucket_list_popup_trigger").fancybox(fancySettings);
        },
        callback : function(data) {
          if(data) {
            if(data.somePK && data.somePK > 0) {
              $("#someIdentifier").val(data.somePK);
            }
            $.extend(blSettings, data);
          }
        },
        selectorExists : function(obj_name) {
          return $(obj_name).length > 0;
        }
      };

  $.fn.bucketList = function(method) {
    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.bucketList');
    }
  };
})(jQuery);