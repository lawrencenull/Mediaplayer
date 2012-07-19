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
				onReady: function() { element.trigger('Mediaplayer.ready'); },
				onError: function(message) { element.trigger({type: 'Mediaplayer.error', message: message}); },
				onMute: function(mute) { element.trigger({type: 'Mediaplayer.mute', mute: mute}); },
				onPlay: function(oldstate) { element.trigger({type: 'Mediaplayer.play', oldstate: oldstate}) },
				onPause: function(oldstate) { element.trigger({type: 'Mediaplayer.play', oldstate: oldstate}) },
				onBuffer: function(oldstate) { element.trigger({type: 'Mediaplayer.buffer', oldstate: oldstate}) },
				onSeek: function(position, offset){ element.trigger({type: 'Mediaplayer.seek', position: position, offset: offset }) },
				onIdle: function(oldstate) { element.trigger({type: 'Mediaplayer.idle', oldstate: oldstate}) },
				onComplete: function(){ element.trigger('Mediaplayer.complete'); },
				onTime: function(data) { element.trigger({type: 'Mediaplayer.time', duration: data.duration, position: data.position}); },
				onVolume: function(data) { element.trigger({type: 'Mediaplayer.volume', volume: data.volume}) }
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
		},

		getVolume = function()
		{
			return jwplayer(player).getVolume();
		};

		init();

		return {
			getDuration: getDuration,
			getVolume: getVolume
		}
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});