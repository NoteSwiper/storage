function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  var content_url = getParam("url") || "https://noteswiper.github.io/dalp/welcome.txt";
  var width = getParam("width") || 1080;
  var height = getParam("height") || 720;
  
  document.getElementById('output').contentWindow.location.replace(content_url);
  document.getElementById('output').width = width;
  document.getElementById('output').height = height;