/* 
*	@Class:			Mediaplayer.TogglePlay
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.TogglePlay = function(actionElement, videoElement, options)
	{
		var playerId = videoElement.attr('id'),

		init = function() 
		{
			actionElement.on('click', onClick);
		},

		onClick = function(e)
		{
			e.preventDefault();
			videoElement.trigger('Mediaplayer.TogglePlay');
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});