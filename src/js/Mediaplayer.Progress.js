/* 
*	@Class:			Mediaplayer.Progress
*	@Description:	Uses range input to show progress
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Slider.js, Mediaplayer.Controlbar, Mediaplayer.Player
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Progress = function(actionElement, videoElement, options, playerInstance)
	{
		var duration,
		
		init = function()
		{
			actionElement.fancySlider();
			
			bindPlayerTimeListener();

			actionElement.on('slide', function(e)
			{
				playerInstance.seek(duration * e.position);
			});
		},

		bindPlayerTimeListener = function()
		{
			videoElement.on('Mediaplayer.time', function(e)
			{	
				actionElement.off('slide');

			 	duration = e.duration;
			 	actionElement.trigger({ type: 'slideTo', position: (e.position / duration) });

			 	actionElement.on('slide', function(e)
				{
					playerInstance.seek(duration * e.position);
				});
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});