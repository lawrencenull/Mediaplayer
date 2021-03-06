/* 
*	@Class:			Mediaplayer.Fullscreen
*	@Description:	Makes the player go fullscreen
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Slider.js, Mediaplayer.Controlbar, Mediaplayer.Player
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Fullscreen = function(actionElement, videoElement, options, playerInstance)
	{
		var init = function()
		{
			actionElement.on('click', goFullScreen);
		},

		goFullScreen = function()
		{
			playerInstance.setFullscreen();
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});