/* 
*	@Class:			Mediaplayer.ToggleMute
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.TotalTime = function(actionElement, videoElement, options, playerInstance)
	{
		var playerId = videoElement.attr('id'),

		init = function()
		{
			console.log(playerInstance.getDuration());
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});