jQuery.noConflict();

jQuery(document).ready(function(){
  
  var path = window.location.pathname;
  
  if (path.match(/^\/dashboard$/)) {
    jQuery('.permalink').each(function(){
      url = jQuery(this).parent().attr('href');
      post = jQuery(this).parents('li.post');
      info = post.find('.post_info')
      if (info.length) {
        info.children('a:first').attr('href', url)
      } else {
        user = post.prevAll(':not(.same_user_as_last):first .post_info a:first').html();
        post.find('.post_controls').after('<div class="post_info"><a href="'+url+'">'+user+'</a>:</div>');
      }
    });
  }
  
  jQuery('li.post.new_post + li.post.same_user_as_last').removeClass('same_user_as_last');
  
  if (path.match(/^\/tumblelog\/([^\/]+)$/)||path.match(/^\/dashboard$/)) {
    if (path.match(/^\/dashboard$/)) { path = ''; }
    jQuery('#right_column .dashboard_nav_item:last').after('<div style="position:relative;"> \
      <a id="dashboard_post_blog_menu_current" href="#" onclick="return false;">New</a>\
      <div id="dashboard_post_blog_menu_wrapper" style="display:none"><div id="dashboard_post_blog_menu">\
        <a id="dashboard_post_blog_menu_header" href="#" onclick="return false;">New</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/text">Text</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/photo">Photo</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/quote">Quote</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/link">Link</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/chat">Chat</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/audio">Audio</a>\
        <a class="dashboard_post_blog_menu_item" href="'+path+'/new/video">Video</a>\
      </div></div></div>');
  }

  jQuery('#dashboard_switch_blog_menu_current').live('click', function(){
    jQuery('#dashboard_post_blog_menu_wrapper').hide();
  })

  jQuery('#dashboard_post_blog_menu_current').live('click', function(){
    jQuery('#dashboard_post_blog_menu_wrapper').show();
  });
  
  jQuery('#dashboard_post_blog_menu_header').live('click', function(){
    jQuery('#dashboard_post_blog_menu_wrapper').hide();
  });
    
});
