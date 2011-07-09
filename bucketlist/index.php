<?php
$section = "bucket_list";
$additional_headers = <<<EOD
<style type="text/css">
 .bl_item { font-weight: bold; }
</style>
EOD;
include_once("../header.php");
?>
<p>Everyone has said it once in their life: "I'd really like to go here", or "I'd like to do this before I die".  Instead of trying to keep track of these things and lose great ideas, we created <strong>Bucket List</strong>.</p>
<p><strong>Bucket List</strong> is a way for you to create your own "todo list" that you'd like to do before you kick the bucket.  So feel free to try it out, and have fun!</p>
<form>
  <div style="padding: 10px; margin-bottom: 10px;" class="toolbar ui-widget-content ui-corner-all ui-helper-clearfix">
    <table>
      <tr>
        <td><label>I'd like to...</label></td>
        <td><input type="text" id="bl_title" name="bl_title" size="100" value="" /></td>
        <td><button id="add_bl_item" title="Add to my Bucket List"><span class="ui-icon ui-icon-circle-plus"></span></button></td>
      </tr>
    </table>
  </div>
</form>
<div style="padding: 10px;" class="toolbar ui-widget-content ui-corner-all ui-helper-clearfix">
  <div style="height: auto; overflow: hidden; width: 100%;">
    <h3 style="float: left;">My Bucket List</h3>
    <div style="float: right; height: auto; overflow: hidden;">
      <strong style="color: #c0c0c0; font-size: 11px;">1 of 4 Bucket List Items Completed (25% Completion)</strong>
      <div id="bl_progress" style="height: 15px; width: 350px;"><!-- --></div>
    </div>
  </div>
  <div id="myBucketListView"> 
    <table id="myBucketList" class="lists" cellpadding="0" cellspacing="1" width="100%">
      <thead> 
        <tr>
          <th><strong>Title</strong></th>
          <th><strong>Popularity</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr id="bl_item1">
          <td valign="top">
            <p class="bl_item">Go to Myrtle Beach (Completed on June 24, 2011!) <img style="display: inline; width: 14px; height: 14px; background: transparent;" src="/images/checkmark.png" /></p>
            <div class="bl_actions">
              <button class="mark_completed" title="Mark Item as Completed!"><span class="ui-icon ui-icon-check"></span></button><button class="share_notes" title="Write about your experience!"><span class="ui-icon ui-icon-document"></span></button><button class="schedule_item" title="Schedule a date to do this!"><span class="ui-icon ui-icon-calendar"></span></button><button class="invite_someone" title="Invite someone to do this with you"><span class="ui-icon ui-icon-person"></span></button><button class="email_item" title="Email this Bucket List Item to a friend"><span class="ui-icon ui-icon-contact"></span></button><button class="view_comments" title="View all comments for this Bucket List Item"><span class="ui-icon ui-icon-comment"></span></button><button class="edit_item" title="Edit this Bucket List Item"><span class="ui-icon ui-icon-wrench"></span></button><button class="delete_item" title="Delete Bucket List Item"><span class="ui-icon ui-icon-close"></span></button>
            </div>
          </td>
          <td>
            <ul class="rating fourstar"> 
              <li class="one"><a href="#" title="1 Star">1</a></li> 
              <li class="two"><a href="#" title="2 Stars">2</a></li> 
              <li class="three"><a href="#" title="3 Stars">3</a></li> 
              <li class="four"><a href="#" title="4 Stars">4</a></li> 
              <li class="five"><a href="#" title="5 Stars">5</a></li> 
            </ul>
          </td>
        </tr>
        <tr id="bl_item2">
          <td>
            <p class="bl_item">Meet Stephen King</p>
            <div class="bl_actions">
              <button class="mark_completed" title="Mark Item as Completed!"><span class="ui-icon ui-icon-check"></span></button><button class="share_notes" title="Write about your experience!"><span class="ui-icon ui-icon-document"></span></button><button class="schedule_item" title="Schedule a date to do this!"><span class="ui-icon ui-icon-calendar"></span></button><button class="invite_someone" title="Invite someone to do this with you"><span class="ui-icon ui-icon-person"></span></button><button class="email_item" title="Email this Bucket List Item to a friend"><span class="ui-icon ui-icon-contact"></span></button><button class="view_comments" title="View all comments for this Bucket List Item"><span class="ui-icon ui-icon-comment"></span></button><button class="edit_item" title="Edit this Bucket List Item"><span class="ui-icon ui-icon-wrench"></span></button><button class="delete_item" title="Delete Bucket List Item"><span class="ui-icon ui-icon-close"></span></button>
            </div>
          </td>
          <td>
            <ul class="rating nostar"> 
              <li class="one"><a href="#" title="1 Star">1</a></li> 
              <li class="two"><a href="#" title="2 Stars">2</a></li> 
              <li class="three"><a href="#" title="3 Stars">3</a></li> 
              <li class="four"><a href="#" title="4 Stars">4</a></li> 
              <li class="five"><a href="#" title="5 Stars">5</a></li> 
            </ul>
          </td>
        </tr>
        <tr id="bl_item3">
          <td>
            <p class="bl_item">Write a Novel</p>
            <div class="bl_actions">
              <button class="mark_completed" title="Mark Item as Completed!"><span class="ui-icon ui-icon-check"></span></button><button class="share_notes" title="Write about your experience!"><span class="ui-icon ui-icon-document"></span></button><button class="schedule_item" title="Schedule a date to do this!"><span class="ui-icon ui-icon-calendar"></span></button><button class="invite_someone" title="Invite someone to do this with you"><span class="ui-icon ui-icon-person"></span></button><button class="email_item" title="Email this Bucket List Item to a friend"><span class="ui-icon ui-icon-contact"></span></button><button class="view_comments" title="View all comments for this Bucket List Item"><span class="ui-icon ui-icon-comment"></span></button><button class="edit_item" title="Edit this Bucket List Item"><span class="ui-icon ui-icon-wrench"></span></button><button class="delete_item" title="Delete Bucket List Item"><span class="ui-icon ui-icon-close"></span></button>
            </div>
          </td>
          <td>
            <ul class="rating nostar"> 
              <li class="one"><a href="#" title="1 Star">1</a></li> 
              <li class="two"><a href="#" title="2 Stars">2</a></li> 
              <li class="three"><a href="#" title="3 Stars">3</a></li> 
              <li class="four"><a href="#" title="4 Stars">4</a></li> 
              <li class="five"><a href="#" title="5 Stars">5</a></li> 
            </ul>
          </td>
        </tr>
        <tr id="bl_item4">
          <td>
            <p class="bl_item">Streak in a Marathon</p>
            <div class="bl_actions">
              <button class="mark_completed" title="Mark Item as Completed!"><span class="ui-icon ui-icon-check"></span></button><button class="share_notes" title="Write about your experience!"><span class="ui-icon ui-icon-document"></span></button><button class="schedule_item" title="Schedule a date to do this!"><span class="ui-icon ui-icon-calendar"></span></button><button class="invite_someone" title="Invite someone to do this with you"><span class="ui-icon ui-icon-person"></span></button><button class="email_item" title="Email this Bucket List Item to a friend"><span class="ui-icon ui-icon-contact"></span></button><button class="view_comments" title="View all comments for this Bucket List Item"><span class="ui-icon ui-icon-comment"></span></button><button class="edit_item" title="Edit this Bucket List Item"><span class="ui-icon ui-icon-wrench"></span></button><button class="delete_item" title="Delete Bucket List Item"><span class="ui-icon ui-icon-close"></span></button>
            </div>
          </td>
          <td>
            <ul class="rating nostar"> 
              <li class="one"><a href="#" title="1 Star">1</a></li> 
              <li class="two"><a href="#" title="2 Stars">2</a></li> 
              <li class="three"><a href="#" title="3 Stars">3</a></li> 
              <li class="four"><a href="#" title="4 Stars">4</a></li> 
              <li class="five"><a href="#" title="5 Stars">5</a></li> 
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div id="dialog" title="Confirm Delete">
  <p>Are you sure you want to delete this Bucket List Item?</p>
</div>
<?php
$additional_js = <<<EOD
<script type="text/javascript" src="/bucketlist/js/pageManager.min.js"></script>
EOD;
include_once("../footer.php");
?>