/* 
*	@Class:			Mediaplayer.TogglePlay
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.TogglePlay = function(actionElement, videoElement, options, playerInstance)
	{
		var init = function() 
		{
			actionElement.on('click', onClick);
			videoElement.on('Mediaplayer.play', setPlaying);
			videoElement.on('Mediaplayer.pause', setPaused);
		},

		onClick = function(e)
		{
			playerInstance.togglePlay();

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