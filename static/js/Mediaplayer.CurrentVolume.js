/* 
*	@Class:			Mediaplayer.CurrentVolume
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.CurrentVolume = function(actionElement, videoElement, options)
	{
		var playerInstance = Mediaplayer.getInstance(videoElement, 'Mediaplayer.Player'),

		init = function()
		{
			actionElement.text(playerInstance.getVolume() + '%');
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});