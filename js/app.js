var app = {
	attachDivs: function(data, parentDiv) {
		var arr = data.new_sales;
		for (var i = 0; i < arr.length; i++) {
			var link = this.createItem(arr[i]);

			parentDiv.append(link);
		}
		return parentDiv;

	},
	createItem: function(item) {
		//figure is the cell enclosure
		var figure = jQuery('<figure/>', {
			id: 'cell_' + item.id,
			class: 'cell',
			href: item.url,
			rel: 'external'
		});

		var img = jQuery('<img/>', {
			id: item.id + '_0',
			src: item.photos.medium_half
		});
		var caption1 = jQuery('<figcaption/>', {
			class: 'captionTitle',
			text: item.name
		});
		var caption2 = jQuery('<figcaption/>', {
			class: 'captionTagline',
			text: item.tagline
		});
		var link = jQuery('<a/>', {
			class: 'itemLink',
			href: item.url
		});

		//figure contains image, title, and tagline
		figure.append(img);
		figure.append(caption1);
		figure.append(caption2);

		return link.append(figure);
	}
};