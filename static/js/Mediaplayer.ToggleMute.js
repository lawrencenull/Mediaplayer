/* 
*	@Class:			Mediaplayer.ToggleMute
*	@Description:	
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer, Mediaplayer.Controlbar
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.ToggleMute = function(actionElement, videoElement, options, playerInstance)
	{
		var init = function()
		{
			actionElement.on('click', onClick);
		},

		onClick = function(e)
		{
			playerInstance.toggleMute();
			
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