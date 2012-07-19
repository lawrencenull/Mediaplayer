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
		var defaults = 
			{
				controlbar: {'position': 'none'},
				flashplayer: '/static/flash/player.swf' 
			},
			
			options = $.extend(true, defaults, options),
		
		init = function() 
		{
			options.playerWrapper = element.parent();
			
			$.data(element[0], 'mediaplayer.player', new Mediaplayer.Player(element, options));

			element.on('Mediaplayer.ready', function()
			{
				$.data(element[0], 'mediaplayer.controlbar', new Mediaplayer.Controlbar(element, options));
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});