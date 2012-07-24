/* 
*	@Class:			Mediaplayer.loading
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Slider.js, Mediaplayer.Controlbar, Mediaplayer.Player
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Loading = function(actionElement, videoElement, options, playerInstance)
	{
		var init = function()
		{
			videoElement.on('Mediaplayer.bufferChange', function(e)
			{
				actionElement.text('loaded: ' + e.bufferPercent + '%');
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});