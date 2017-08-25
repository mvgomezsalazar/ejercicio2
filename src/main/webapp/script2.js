function readOS () {
  var txt = "";
  txt += "<p>Platform: " + navigator.platform + "</p>";
  txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
  document.getElementById("result2").innerHTML = txt; 
  console.log(txt);
return txt;
};