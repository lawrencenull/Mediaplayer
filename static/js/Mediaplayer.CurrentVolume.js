/* 
*	@Class:			Mediaplayer.CurrentVolume
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.CurrentVolume = function(actionElement, videoElement, options, playerInstance)
	{
		var init = function()
		{
			actionElement.text(playerInstance.getVolume() + '%');
			
			videoElement.on('Mediaplayer.volume', function(e)
			{
				actionElement.text(e.volume + '%');
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});