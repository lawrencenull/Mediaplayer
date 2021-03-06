/* 
*	@Class:			Mediaplayer.Base
*	@Description:	This file initializes the Mediaplayer and the controlbar.
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Base = function(element, options)
	{
		var defaults = { autostart: 'false' },
			options = $.extend(true, defaults, options),
		
		init = function() 
		{
			options.playerWrapper = element.parent();
			
			$.data(element[0], 'Mediaplayer.Player', new Mediaplayer.Player(element, options));

			element.on('Mediaplayer.ready', function()
			{
				$.data(element[0], 'Mediaplayer.Controlbar', new Mediaplayer.Controlbar(element, options));
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});