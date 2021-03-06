$(document).ready(function(){

	var depthChartAPI = "http://students.fscj.edu/~dyalbc/depthChart.json";
	function buildList(data) {
		var listHTML = '<h3>' + data.timeStamp + '</h3>';
		$.each(data.teams, function(i, team) {
				listHTML += '<div class="team_box col-xs-12 col-sm-6 col-md-4">';
				listHTML += '<img src="' + team.icon + '" alt="' + team.name + ' icon">'; 
				listHTML += '<h4 class="col-xs-9">' + team.name + '</h4>';
				listHTML += '<ul col-xs-12>';
				listHTML += '<li>'+ 'QB1: ' + team.qb1 + '</li>';
				listHTML += '<li>'+ 'QB2: ' + team.qb2 + '</li>';
				listHTML += '<li>'+ 'RB1: ' + team.rb1 + '</li>';
				listHTML += '<li>'+ 'RB2: ' + team.rb2 + '</li>';
				listHTML += '<li>'+ 'RB3: ' + team.rb3 + '</li>';
				listHTML += '<li>'+ 'WR1: ' + team.wr1 + '</li>';
				listHTML += '<li>'+ 'WR2: ' + team.wr2 + '</li>';
				listHTML += '<li>'+ 'WR3: ' + team.wr3 + '</li>';
				listHTML += '<li>'+ 'WR4: ' + team.wr4 + '</li>';
				listHTML += '<li>'+ 'TE1: ' + team.te1 + '</li>';
				listHTML += '<li>'+ 'TE2: ' + team.te2 + '</li>';
				listHTML += '<li>'+ 'PK: ' + team.pk + '</li>';
				listHTML += '</ul>';
				listHTML += '</div>';
		});
		
		$('#depth_charts').html(listHTML);
	}

	$.getJSON(depthChartAPI, buildList);

}); 