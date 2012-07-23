/* 
*	@Class:			Mediaplayer.Volume
*	@Description:	Uses range input to show Volume
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Slider.js, Mediaplayer.Controlbar, Mediaplayer.Player
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Volume = function(actionElement, videoElement, options, playerInstance)
	{
		var currentVolume = playerInstance.getVolume(),
		
		init = function()
		{
			actionElement.fancySlider({startPos: currentVolume / 100});
			
			actionElement.on('slide', function(e)
			{
				playerInstance.setVolume(e.position * 100);
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});