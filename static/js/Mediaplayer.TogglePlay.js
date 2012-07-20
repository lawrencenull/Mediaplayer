/* 
*	@Class:			Mediaplayer.TogglePlay
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.TogglePlay = function(actionElement, videoElement, options)
	{
		var playerInstance = Mediaplayer.getInstance(videoElement, 'Mediaplayer.Player'),

		init = function() 
		{
			actionElement.on('click', onClick);
			videoElement.on('Mediaplayer.play', setPlaying);
			videoElement.on('Mediaplayer.pause', setPaused);
		},

		onClick = function(e)
		{
			videoElement.trigger('Mediaplayer.togglePlay');
			
			if(playerInstance.getState() === 'PLAYING')
			{
				setPlaying();			
			}
			else
			{
				setPaused();
			}
		},
		
		setPlaying = function()
		{
			actionElement.addClass('playing').removeClass('paused');				
		},
		
		setPaused = function()
		{
			actionElement.addClass('paused').removeClass('playing');
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});