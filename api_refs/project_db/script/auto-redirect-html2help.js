/* From Innovasys - April 2015
 * Added by Yael Eliraz
 * Use this JS script to automatically open the full Help 
 * instead of just an HTML page when a customer clicks a
 * URL link
*/


$(document).ready(function() {

  if (!(window.self !== window.top)) {
        // Not running in a frameset

        // Get the page name
        var pageName = location.href.substring(location.href.lastIndexOf("/") + 1);
    if (pageName.indexOf('#') != -1) {
          pageName = pageName.substring(0, pageName.indexOf('#'));
        }
        // Append to webframe.html
        var framePage = "webframe.html#" + pageName;
        location.href = framePage;
  }

});
