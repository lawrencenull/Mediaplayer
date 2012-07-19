/* 
*	@Class:			Mediaplayer.Controlbar
*	@Description:	Mediaplayer.Controlbar initializes the controlbar classes.
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery, Mediaplayer
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	Mediaplayer.Controlbar = function(element, options)
	{
		var playerWrapper   = options.playerWrapper,
			controlbarArea  = playerWrapper.find('.mediaplayer-controls'),
			dataActions 	= controlbarArea.find('[data-action]'),
			dataShows 		= controlbarArea.find('[data-show]'),

		init = function() 
		{
			instantiate(dataActions, 'action');
			instantiate(dataShows, 'show');
		},

		instantiate = function(list, what)
		{
			list.each(function()
			{
				var action = $(this).data(what);

				if(typeof Mediaplayer[action] === 'function')
				{
					$.data(element[0], 'mediaplayer.' + action, new Mediaplayer[action]($(this), element, options));
				}				
			});
		};

		init();
	};

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});