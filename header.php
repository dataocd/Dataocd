<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US"> 
<head profile="http://gmpg.org/xfn/11"> 
<meta name="viewport" content="width=device-width; initial-scale=1.0" /> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<meta http-equiv="content-language" content="en" />
<meta name="google-site-verification" content="4O0K92zsrvr3WTffNT4HyHwemN5Gs-eR8RzI25Nau2Y" />
<meta charset="utf-8" />

<title>DataOCD</title>
<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/redmond/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="/css/style.css" />
<?php
if(isset($additional_headers)) {
  echo $additional_headers;
}
?>
</head> 
<body> 
  <div id="wrapper">
    <div id="header">
      <h1 style="padding: 5px; margin: 0; margin-bottom: 0px; font-size: 48px;"><span style="color: #FFFFBD;">.:Data</span><span style="color: #fff;">OCD:.</span></h1>
      <h3 style="padding: 5px; margin:0; font-size: 16px; color: #FFFFBD;">Keeping data neat like a roided up house maid.</h3>
    </div>
    <div id="navigation">
      <div class="wrap">
        <ul>
<?php
$navigation_items = array("home"        => array("display_name" => "Home", 
                                                 "url"          => "http://www.dataocd.com",
                                                ),
                          "bucket_list" => array("display_name" => "Bucket List",
                                                 "url"          => "/bucketlist/",
                                                ),
                          "about"       => array("display_name" => "About",
                                                 "url"          => "http://www.dataocd.com/about/"
                                                ),
                         );
foreach($navigation_items as $navigation_item => $navigation_properties) {
  echo "<li><a href=\"{$navigation_properties['url']}\"" . (isset($section) && $navigation_item == $section ? " class=\"active\"" : "") . ">{$navigation_properties['display_name']}</a></li>";
}
?>
        </ul>
        <div style="float: right; margin-top: -30px; margin-right: 30px;">
          <span>Username:</span> <input type="text" name="dataocd_username" id="dataocd_username" value="" />
          <span>Password:</span> <input type="password" name="dataocd_password" id="dataocd_password" value="" />
          <button id="dataocd_login">Sign In</button>
        </div>
      </div>
    </div>
    <div id="wrapper_container">
      <div style="height: auto; overflow: hidden; width:90%; max-width: 90%;">
