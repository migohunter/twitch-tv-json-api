$(document).ready(function() {
  
  $.ajax({
    type:"GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp/",
    headers:{
      'Client-ID': 'o7ueg5g0yi9av4qswwpxvecdjkfucq'
    },
    success: function(data1) {
      if (data1.stream==null) {
        $("#fccStatus").html("Free Code Camp is currently OFFLINE");
      } else {
        $("#fccStatus").html("Free Code Camp is currently LIVE");
      }
    }
  });
  
  $.ajax({
    type:"GET",
    url: "https://api.twitch.tv/kraken/users/megidolaonforeveryone/follows/channels/",
    headers:{
      'Client-ID': 'o7ueg5g0yi9av4qswwpxvecdjkfucq' 
    },
    success: function(data2) {
      for(var i=0; i < data2.follows.length; i++) {
        //gets displayName
        var displayName = data2.follows[i].channel.display_name;
        var logo = data2.follows[i].channel.logo;
        var status = data2.follows[i].channel.status;
        if (logo == null) {
          logo = "http://vignette4.wikia.nocookie.net/althistory/images/4/44/Circle-with-slash.png/revision/latest?cb=20111129234310";
        }
        
        if (data2.stream==null) {
          $("#followerInfo").prepend("<div class = 'row'>" + "<div class = 'col-md-4'>" + "<a href='https://twitch.tv/" + displayName + "' target = 'blank'>" + "<img src='" + logo +"'>'" + "</div>" + "</a>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>Offline</div></div>");          
        }
        else { 
          $("#followerInfo").prepend("<div class = 'row'>" + "<div class = 'col-md-4'>" + "<a href='https://twitch.tv/" + displayName + "' target = 'blank'>" + "<img src='" + logo +"'>'" + "</div>" + "</a>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
        }
      }
    }
  });
  
 /* var deletedFollowers=['brunofin/','comster404/'];
  for(var i=0;i<deletedFollowers.length;i++) {
    $.ajax({
      type: "GET",
      url: "https://api.twitch.tv/kraken/streams/"+deletedFollowers[i],
      headers:{
        'Client-ID': 'o7ueg5g0yi9av4qswwpxvecdjkfucq'
      },
      success: function(data3) {
        var logo="http://vignette4.wikia.nocookie.net/althistory/images/4/44/Circle-with-slash.png/revision/latest?cb=20111129234310";
        var displayName = data3.statusText;
        var status = data3.status;
          $("#followerInfo").prepend("<div class = 'row'>" + "<div class = 'col-md-4'>" + "<img src='" + logo +"'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }
      
    });
  }   */
});