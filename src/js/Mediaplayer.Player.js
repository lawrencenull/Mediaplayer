/* 
*	@Class:			Mediaplayer.Player
*	@Description:	This file embeds and initializes jwplayer. It also listenes to any events from teh controlbar
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Player = 
	{
		togglePlay = function()
		{
			Throw('The togglePlay() function is mandatory');
		},

		seek = function(seconds)
		{
			Throw('The seek() function is mandatory');
		},

		toggleMute = function()
		{
			Throw('The toggleMute() function is mandatory');
		},

		getDuration = function()
		{
			Throw('The getDuration() function is mandatory');
		},

		getVolume = function()
		{
			Throw('The getVolume() function is mandatory');
		},

		setVolume = function(volume)
		{
			Throw('The setVolume() function is mandatory');
		},
		
		getMute = function()
		{
			Throw('The getMute() function is mandatory');
		},
		
		getState = function()
		{
			Throw('The getState() function is mandatory');
		};
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});