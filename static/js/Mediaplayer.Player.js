/* 
*	@Class:			Mediaplayer.Player
*	@Description:	This file embeds and initializes jwplayer. It also listenes to any events from teh controlbar
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Player = function(element, options)
	{
		var playerOpts = {},
			player = element[0],

		init = function() 
		{
			createPlayerOptions();
			setUpPlayer();
			assignListeners();
		},
		
		createPlayerOptions = function()
		{
			var levels = [];
			
			element.find('source').each(function()
			{
				levels.push({'file': $(this).attr('src')});
			});
			
			playerOpts.width = element.outerWidth();
			playerOpts.height = element.outerHeight();
			playerOpts.levels = levels;
			playerOpts.controlbar = options.controlbar;
			
			playerOpts.modes = 
			[
				{type: 'html5'},
				{type: 'flash', src: options.flashplayer}
			];

			playerOpts.events = 
			{
				onReady: function()
				{
					element.trigger('Mediaplayer.ready');
				}
			}
		},
		
		setUpPlayer = function()
		{
			jwplayer(element[0]).setup(playerOpts);
		},

		assignListeners = function()
		{
			element.on('Mediaplayer.TogglePlay', togglePlay);
			element.on('Mediaplayer.ToggleMute', toggleMute);
		},

		togglePlay = function()
		{
			jwplayer(player).play();
		},

		toggleMute = function()
		{
			jwplayer(player).setMute();
		},

		getDuration = function()
		{
			return jwplayer(player).getDuration();
		};

		init();

		return {
			getDuration: getDuration
		}
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});