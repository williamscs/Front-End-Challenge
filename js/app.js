var app = {
	createDivs: function(data) {
		var arr = data.new_sales;
		var tmp;
		var parentDiv = jQuery('<div/>');
		for (var i = 0; i < arr.length; i++) {
			tmp = arr[i];
			var figure = jQuery('<figure/>', {
							id: 'cell_' + tmp.id,
							class: 'cell',
							href: tmp.url,
							title: data.name,
							rel: 'external'
						});

			var img = jQuery('<img/>', {
						id: tmp.id + '_0',
						src: tmp.photos.medium_wide,
						//title: data.tagline,
						//rel: 'external',
						//text: 'Go to Google!'
					});
			var caption1 = jQuery('<figcaption/>', {
								text: tmp.name
							});
			var caption2 = jQuery('<figcaption/>', {
								text: tmp.tagline
							});

			parentDiv.append(figure.append(img).append(caption1).append(caption2));
		}
		return parentDiv;

	},
	processJson: function(data) {

	}
};