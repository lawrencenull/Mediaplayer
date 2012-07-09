/* 
*	@Class:			Mediaplayer.ToggleMute
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.ToggleMute = function(actionElement, videoElement, options, playerInstance)
	{
		var playerId = videoElement.attr('id'),

		init = function()
		{
			actionElement.on('click', onClick);
		},

		onClick = function(e)
		{
			e.preventDefault();
			videoElement.trigger('Mediaplayer.ToggleMute');
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});