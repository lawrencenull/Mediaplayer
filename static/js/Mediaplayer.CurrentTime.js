/* 
*	@Class:			Mediaplayer.CurrentTime
*	@Description:	Shows CurrentTime
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.CurrentTime = function(actionElement, videoElement, options, playerInstance)
	{
		var init = function()
		{
			videoElement.on('Mediaplayer.time', function(e)
			{
				actionElement.text(Mediaplayer.formatTime(e.position));
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});