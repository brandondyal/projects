$(document).ready(function () {

	$('#flickr_search').submit(function (evt) {
		evt.preventDefault();
		var $searchTerm = $('#flickr_search_input').val();
		var $submitButton = $('#flickr_search_button');

		$submitButton.attr("disabled", true).text("SEARCHING...");

		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var flickrOptions = { 
		tags: $searchTerm,
		format: "json"
	};

	function displayPhotos(data) {
		if ($.isEmptyObject(data.items) === false) {
			var photoHTML = '<ul>';
			$.each( data.items,function(i, photo) {
				photoHTML += '<li class="col-sm-4">';
				photoHTML += '<a href=" ' + photo.link + ' ">';
				photoHTML += '<img src=" ' + photo.media.m + ' "></a></li>';
			});
			photoHTML += '</ul>';
			$('#flickr_photos').html(photoHTML);			
		} else {
			$('#flickr_photos').html('<h2>' + 'Sorry, ' + $searchTerm +  ' returned no results. Please try a different subject.' + '</h2>'); 
		}
		$submitButton.attr("disabled", false).text("SEARCH AGAIN");	
	}

	$.getJSON(flickerAPI, flickrOptions, displayPhotos); 

	});

});	 






