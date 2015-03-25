var app = {
	createDivs: function(data, parentDiv) {
		var arr = data.new_sales;
		var tmp;
		for (var i = 0; i < arr.length; i++) {
			tmp = arr[i];
			var figure = jQuery('<figure/>', {
							id: 'cell_' + tmp.id,
							class: 'cell',
							href: tmp.url,
							title: tmp.name,
							rel: 'external'
						});

			var img = jQuery('<img/>', {
						id: tmp.id + '_0',
						src: tmp.photos.medium_half
					});
			var caption1 = jQuery('<figcaption/>', {
								class: 'captionTitle',
								text: tmp.name
							});
			var caption2 = jQuery('<figcaption/>', {
								class: 'captionTagline',
								text: tmp.tagline
							});
			var link = jQuery('<a/>', {
								class: 'itemLink',
								href: tmp.url
							});

			parentDiv.append(link.append(figure.append(img).append(caption1).append(caption2)));
		}
		return parentDiv;

	}
};