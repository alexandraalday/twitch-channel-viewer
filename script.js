$(document).ready(function(){

	let following = [];
	let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    	targetUrl = 'https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels/'

	$.getJSON(proxyUrl + targetUrl, function(data){
		for (let i=0; i < data.follows.length; i++){
			following.push(data.follows[i].channel.display_name);
		}
		//for testing
		following.push('comster404');
		following.push('brunofin');
		following.push('ESL_SC2');

		for (let i=0; i< following.length; i++){
			let url = 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '/?callback=?';
			$.getJSON(proxyUrl + url).done(function(data2){
				let logo;
				let status;
				let name;
				if (data2.error){
					console.log(data2.error);
					name = data2.message;
					status = data2.error;

					$('#followerInfo').prepend("<div class='row'>" + 
						"<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + 
						"<div class='col-md-4'>" + name + "</div>" +
						"<div class='col-md-4'>" + status + "</div></div>")
				}
			});
		}
		for (let i=0; i< following.length; i++){
			let onlineUrl = 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i];
			$.getJSON(proxyUrl + onlineUrl, function(data3){
					logo = data3.stream.channel.logo;
					name = data3.stream.channel.name;
					status = data3.stream.channel.status;

					$('#followerInfo').prepend("<div class='row'>" + 
						"<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + 
						"<div class='col-md-4'>" + name + "</div>" +
						"<div class='col-md-4'>" + status + "</div></div>")
				}
			});
		}

	});

});