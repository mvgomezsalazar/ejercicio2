function readBrowserProperties () {
  var txt = "";
  txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
  txt += "<p>Browser Name: " + navigator.appName + "</p>";
  txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
  txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
  txt += "<p>Browser Language: " + navigator.language + "</p>";
  txt += "<p>Browser Online: " + navigator.onLine + "</p>";
  document.getElementById("result1").innerHTML = txt; 
  console.log(txt);
return txt;
};