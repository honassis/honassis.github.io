var repos = new XMLHttpRequest();

repos.open("GET", "https://api.github.com/users/honassis/repos", true);
repos.send();
repos.onreadystatechange = function() {
  
	if (repos.readyState == 4 && repos.status == 200) {
		var data = repos.responseText;
        data = JSON.parse(data);
        for(var i =0; i< data.length;i++){
           document.getElementsByClassName("github-list")[0].innerHTML +=   
           `<li><a href="`+data[i].html_url+`"><strong>`+data[i].name+`</strong></a></li>`;
        }
    }

}