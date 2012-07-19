/* 
*	@Class:			Mediaplayer.ToggleMute
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.TotalTime = function(actionElement, videoElement, options)
	{
		var duration,

		init = function()
		{
			videoElement.on('Mediaplayer.time', function(e)
			{
				if(!duration)
				{
					duration = e.duration;
					actionElement.text(Mediaplayer.formatTime(duration));
				}
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});