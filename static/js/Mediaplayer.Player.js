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
				onError: function(data) { element.trigger({type: 'Mediaplayer.error', message: data.message}); },
				onMute: function(data) { element.trigger({type: 'Mediaplayer.mute', mute: data.mute}); },
				onPlay: function(data) { element.trigger({type: 'Mediaplayer.play', oldstate: data.oldstate}) },
				onPause: function(data) { element.trigger({type: 'Mediaplayer.pause', oldstate: data.oldstate}) },
				onBuffer: function(data) { element.trigger({type: 'Mediaplayer.buffer', oldstate: data.oldstate}) },
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
			element.on('Mediaplayer.togglePlay', togglePlay);
			element.on('Mediaplayer.toggleMute', toggleMute);
			element.on('Mediaplayer.seek', seek);
		},

		togglePlay = function()
		{
			jwplayer(player).play();
		},

		seek = function(e)
		{
			jwplayer(player).seek(e.seconds);
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
		},
		
		getMute = function()
		{
			return jwplayer(player).getMute();			
		},
		
		getState = function()
		{
			return jwplayer(player).getState();
		};

		init();

		return {
			getDuration: getDuration,
			getVolume: getVolume,
			getMute: getMute,
			getState: getState
		}
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});