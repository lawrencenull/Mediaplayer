/* 
*	@Class:			Mediaplayer.ToggleMute
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.ToggleMute = function(actionElement, videoElement, options)
	{
		var playerInstance = Mediaplayer.getInstance(videoElement, 'Mediaplayer.Player'),

		init = function()
		{
			actionElement.on('click', onClick);
		},

		onClick = function(e)
		{
			videoElement.trigger('Mediaplayer.toggleMute');
			
			if(playerInstance.getMute())
			{
				actionElement.addClass('muted').removeClass('not-muted');
			}
			else
			{
				actionElement.addClass('not-muted').removeClass('muted');				
			}
		};
		
		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});