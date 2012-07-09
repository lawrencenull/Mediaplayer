/* 
*	@Class:			Mediaplayer.Base
*	@Description:	This file initializes the Mediaplayer and the controlbar.
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery
---------------------------------------------------------------------------- */


(function($)
{
	Mediaplayer = function(element, options)
	{
		var defaults = 
			{
				controlbar: {'position': 'none'},
				flashplayer: '/static/flash/player.swf' 
			},
			
			options = $.extend(true, defaults, options),
			playerInstance, controlbarInstance,
		
		init = function() 
		{
			options.playerWrapper = element.parent();

			playerInstance = new Mediaplayer.Player(element, options);
			
			element.on('Mediaplayer.ready', function()
			{
				controlbarInstance = new Mediaplayer.Controlbar(element, options, playerInstance);	
			});
		};

		init();
	};

})(jQuery);