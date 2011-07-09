var urlParams = {},
refreshBucketList = function() {
  (function($) {
    $("#myBucketList").trigger("update");
    $("#myBucketList").trigger("appendCache");
  })(jQuery);
},

addBucketListRow = function(bl_data) {
  (function($) {
    var settings = {
        title : '',
        rating: '0',
        scheduled_date: '0'
      },
    html  = '<tr id="bucket_list_item_id_' + bl_data.bucket_list_item_id + '">',
    starRating = 'nostar';

    if(bl_data) {
      $.extend(settings, bl_data);
    }

    if(settings.rating > 0) {
      switch(settings.rating) {
        case '1':
          starRating = 'onestar';
        break;
        case '2':
          starRating = 'twostar';
        break;
        case '3':
          starRating = 'threestar';
        break;
        case '4':
          starRating = 'fourstar';
        break;
        case '5':
          starRating = 'fivestar';
        break;
        default:
          starRating = 'nostar';
      }
    }

    html += '<td><p class="bl_item">' + bl_data.title + '</p><div class="bl_actions">              <button class="mark_completed" title="Mark Item as Completed!"><span class="ui-icon ui-icon-check"></span></button><button class="share_notes" title="Write about your experience!"><span class="ui-icon ui-icon-document"></span></button><button class="schedule_item" title="Schedule a date to do this!"><span class="ui-icon ui-icon-calendar"></span></button><button class="invite_someone" title="Invite someone to do this with you"><span class="ui-icon ui-icon-person"></span></button><button class="email_item" title="Email this Bucket List Item to a friend"><span class="ui-icon ui-icon-contact"></span></button><button class="view_comments" title="View all comments for this Bucket List Item"><span class="ui-icon ui-icon-comment"></span></button><button class="edit_item" title="Edit this Bucket List Item"><span class="ui-icon ui-icon-wrench"></span></button><button class="delete_item" title="Delete Bucket List Item"><span class="ui-icon ui-icon-close"></span></button></div></td>';
    html += '<td><ul class="rating ' + starRating + '"><li class="one"><a href="#" title="1 Star">1</a></li><li class="two"><a href="#" title="2 Stars">2</a></li><li class="three"><a href="#" title="3 Stars">3</a></li> <li class="four"><a href="#" title="4 Stars">4</a></li> <li class="five"><a href="#" title="5 Stars">5</a></li> </ul></td>';
    html += '</tr>';

    $("#myBucketList > tbody").append(html);
    $("#bucket_list_item_id_" + bl_data.bucket_list_item_id).effect("highlight", {}, 3000);
    $('input[type=button], button').button();
  })(jQuery);
};

//insertBucketListItem = function(title, rating, scheduled_date) {
//  db.transaction(function(tx) {
//    tx.executeSql('INSERT INTO bucket_list_item (title, rating, scheduled_date) VALUES (?, ?, ?)', [title, rating, scheduled_date]);
//  });
//},
//renderBucketList = function(title) {
//  db.transaction(function(tx) {
//    if(!(title === undefined)) {
//      tx.executeSql('SELECT * FROM bucket_list_item WHERE title = ?', [title], renderResults1);
//    } else {
//      tx.executeSql('SELECT * FROM bucket_list_item', [], renderResults);
//    }
//  });
//},
//renderResults = function(tx, rs) {
//  (function($) {
//    var bucketList = $('#myBucketList'),
//    x = rs.rows.length,
//    row;
//    for(var i = 0; i < x; i++) {
//      row = rs.rows.item(i);
//      addBucketListRow({
//        title: row['title'],
//        rating: row['rating'],
//        scheduled_date: row['scheduled_date']
//      });
//    }
//    refreshBucketList();
//  })(jQuery);
//};
//
//try {
//  if(window.openDatabase) {
//    db = window.openDatabase("bucket_list", "", "My Bucket List", 1024*1000);
//    if(!db) {
//      notifyMessage({
//        title : 'Database Failure',
//        message : 'Failed to open the database on disk.  This is probably because the version was bad or there is not enough space left in this domain\'s quota',
//        notifyType : "warning"
//      });
//    }
//  } else {
//    notifyMessage({
//      title : 'Database Failure',
//      message : 'Your browser does not appear to support SQLite.  Cannot continue!',
//      notifyType : "warning"
//    });
//  }
//} catch(err) {
//    notifyMessage({
//      title : 'Browser Error',
//      message : 'Your Browser has reported the following error: ' + err.message + '.  Cannot Continue!',
//      notifyType : "warning"
//    });
//}

(function() {
  var e,
  a = /\+/g,  // Regex for replacing addition symbol with a space
  r = /([^&;=]+)=?([^&;]*)/g,
  d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
  q = window.location.search.substring(1);

  while(e = r.exec(q)) urlParams[d(e[1])] = d(e[2]);
})();

(function($) {
  $(document).ready(function() {
    $("#save_bucketItem").button({
      primary:'ui-icon-circle-add'
    });

    $("#dialog").dialog({
      modal: true,
      autoOpen: false,
      buttons: {
                 'Yes': function() {
                   $(this).dialog("close");
                 },
                 'No': function() {
                   $(this).dialog("close");
                 }
               }
    });
    $(".delete_item").click(function() {
      $("#dialog").dialog('open');
    });

    $('#myBucketList').tablesorter({
    }).addClass('tablesorter');

//    $('#tabs').tabs();
//
//    db.transaction(function(tx) {
//      tx.executeSql('CREATE TABLE IF NOT EXISTS bucket_list_item(bucket_list_item_id SMALLINT UNSIGNED PRIMARY KEY, title varchar, rating tinyint unsigned, scheduled_date integer unsigned)', []);
//    });

//    renderBucketList();

    $('#add_bl_item').click(function(e) {
      e.preventDefault();
//      insertBucketListItem($("#bl_title").val(), 0, 0);
      addBucketListRow({
        title: $("#bl_title").val(), 
        rating: 0, 
        scheduled_date: 0
      });
      $("#bl_title").val("");
      notifyMessage({
        title : 'Action Status',
        message : 'Save Complete!',
        notifyType : "info"
      });
    });
    $("#bl_item1").addClass("bl_completed");

    $("#bl_progress").progressbar({ value: 25 });
  });
})(jQuery);