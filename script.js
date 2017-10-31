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
			let url = proxyUrl + 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '/?callback=?';
			$.getJSON(url).done(function(data2){
				let logo;
				let status;
				let name;
				if (data2.error){
					console.log(data2.error);
				}
			});
		}

	});

});