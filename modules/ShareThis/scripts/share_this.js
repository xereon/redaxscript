/**
 * @tableofcontents
 *
 * 1. share this
 * 2. startup
 *
 * @since 2.0.2
 *
 * @package Redaxscript
 * @author Henry Ruhs
 */

(function ($)
{
	'use strict';

	/* @section 1. share this */

	$.fn.shareThis = function (options)
	{
		/* extend options */

		if (r.modules.shareThis.options !== options)
		{
			options = $.extend({}, r.modules.shareThis.options, options || {});
		}

		var links = $(this),
			urlParameter = '?url=' + r.baseURL;

		/* request data */

		$.ajax(
		{
			url: options.url + urlParameter,
			dataType: 'json',
			success: function (data)
			{
				/* handle data */

				if (typeof data === 'object')
				{
					for (var i in data)
					{
						var counter = data[i],
							type = i.toLowerCase();

						/* facebook fallback */

						if (type === 'facebook')
						{
							counter = data[i].share_count;
						}

						/* filter by type */

						links.filter('[data-type="' + type + '"]').attr('data-counter', counter);
					}
				}
			}
		});

		/* return this */

		return this.each(function ()
		{
			/* open popup */

			links.on('click', function (event)
			{
				var link = $(this),
					url = link.attr('href'),
					height = link.data('height') || options.popup.height,
					width = link.data('width') || options.popup.width;

				if (typeof url === 'string')
				{
					window.open(url, options.popup.name, 'height=' + height + ', width=' + width + ', menubar=' + options.popup.menubar + ', resizable=' + options.popup.resizable + ', status=' + options.popup.status + ', scrollbars=' + options.popup.scrollbars + ', toolbar=' + options.popup.toolbar);
					event.preventDefault();
				}
			});
		});
	};

	/* @section 2. startup */

	$(function ()
	{
		if (r.modules.shareThis.startup)
		{
			$(r.modules.shareThis.selector).shareThis(r.modules.shareThis.options);
		}
	});
})(window.jQuery || window.Zepto);