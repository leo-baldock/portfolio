//Load jQuery if it is not loaded.
if(!window.jQuery) {
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);
}

//Scroll to href attr for a tags.
$(function() {
  $('a').click(function() {
    var href = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    return false;
  });
});

//Check if element is in the viewport (for animations)
function isElementInViewport(e) {
  var elem = $(e);
  
  //Get the scroll position of the page.
  //var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  
  //Get the position of the element on the page.
  var elemTop = Math.round( elem.offset().top );
  var elemBottom = elemTop + elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

//Check if it's time to start the animation.
function skillsAnimation() {
  var elem = $('.skill-item-value');
  
  //If the animation has already been started
  if (elem.hasClass('show-skill-value')) {
    return;
  }
  
  if (isElementInViewport(elem)) {
    //Start the animation
    elem.addClass('show-skill-value');
  }
}

//Capture scroll events
$(window).scroll(function(){
  skillsAnimation();
});