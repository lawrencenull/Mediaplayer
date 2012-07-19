/* 
*	@Class:			Mediaplayer.Progress
*	@Description:	Uses range input to show progress
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Slider.js, Mediaplayer.Controlbar, Mediaplayer.Player
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Progress = function(actionElement, videoElement, options)
	{
		var init = function()
		{
			actionElement.slider();
			
			/*
			actionElement.on('slide', function(e)
			  {
				  videoElement.trigger({type: 'Mediaplayer.seek', seconds: e.position * 100});
			  });
			  */

			  videoElement.on('Mediaplayer.time', function(e)
			{	
				actionElement.trigger({ type: 'slideTo', position: (e.position / e.duration) });
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});