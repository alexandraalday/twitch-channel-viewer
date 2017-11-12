$(document).ready(function() {
  const titleArr = [
    "freecodecamp",
    "ThijsHS",
    "tomchen60229",
    "habathcx",
    "RobotCaleb",
    "thomasballinger",
    "noobs2ninjas",
    "food",
    "Nightblue3",
    "beyondthesummit",
    "a541021"
  ];
  let client_id = config.MY_KEY;
  let streams = "streams/";
  let channels = "channels/";
  const url = "https://api.twitch.tv/kraken/";
  $(".media-list").empty();
  titleArr.forEach(function(title) {
    $.getJSON(url + streams + title + "?client_id=" + client_id, function(
      json_stream
    ) {
      let stream_type;
      if (json_stream.stream === null) {
        stream_type = "offline";
      } else {
        stream_type = "live";
      }
      $.getJSON(
        url + channels + title + "?client_id=" + client_id,
        function(json_channel) {
          let logo;
          if (json_channel.logo == null) {
            logo =
              "https://pbs.twimg.com/profile_images/509073338191183872/fYdty6yd.png";
          } else {
            logo = json_channel.logo;
          }
          let html =
            "<li class='media " +
            stream_type +
            "'><div class='media-left media-middle'><img class='media-object img-circle' src='" +
            logo +
            "' alt='logo'></div><div class='media-body'><a href='" +
            json_channel.url +
            "' target='_blank'><h3 class='media-heading text-capitalize'>" +
            json_channel.name +
            "</h3></a><strong> </strong>" +
            json_channel.status +
            " <br ><strong><i class='fa fa-gamepad' aria-hidden='true'></i> </strong>" +
            json_channel.game +
            "<br ><strong><i class='fa fa-eye' aria-hidden='true'></i> </strong>" +
            json_channel.views + " viewers" +
            " <br ><strong><i class='fa fa-users' aria-hidden='true'></i> </strong>" +
            json_channel.followers + " followers" +
            "</div><div class='media-right media-middle text-uppercase'><span>" +
            stream_type +
            "</span></div></li>";
          $(".media-list").append(html);
        }
      );
    });
  });
  $("#btn_all").click(function() {
    $(".offline").removeClass("hidden");
    $(".live").removeClass("hidden");
  });
  $("#btn_live").click(function() {
    $(".live").removeClass("hidden");
    $(".offline").addClass("hidden");
  });
  $("#btn_offline").click(function() {
    $(".offline").removeClass("hidden");
    $(".live").addClass("hidden");
  });
});
