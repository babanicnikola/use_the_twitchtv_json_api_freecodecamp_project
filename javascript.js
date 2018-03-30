var usersList = ["ESL_SC2", "OgamingSC2", "freecodecamp", "noobs2ninjas"];
var link = 'https://wind-bow.glitch.me/twitch-api/streams/';

$(document).ready(function() {
	getAll();
});

function getAll(){
	$(".list").html("");
	for (var i=0; i<usersList.length; i++){
		getStream(usersList[i]);
	}
}

function getStream(user) {
	$.ajax({
    	url: link+user, success: function (result) {
			if (result.stream==null) {
				addToOffline(user, "", "offline","","","");
			}
			else {
			addToList(result.stream.channel.display_name, result.stream.channel.status, result.stream.stream_type, result.stream.game, result.stream.preview.medium, result.stream.viewers, result.stream.channel.url);
			}		
		}
  })
}

function addToList(name, desc, status, game, preview, viewers, loc) {
	$('.list').append(
		"<a  target='blank' href='"+loc+"'><div class='on'><p id='titl'>" + name+ "</p>" +desc+ "<hr width='50%'>"+status+ "<br>" +game+ "<img class='img-responsive' src='" +preview+ "'<br>Viewers: " +viewers+ "</div></a>");
}

function addToOffline(name, desc, status, game, preview, viewers, loc) {
		$('.list').append("<div class='off'><b><h3> "+ name + "</h3></b>Offline<br></div>");
}
