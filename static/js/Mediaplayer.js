/* 
*	@Class:			Mediaplayer
*	@Description:	Holds static functions
*	@Author:		Tim Benniks <tim.benniks@akqa.com>
*	@Dependencies:	jQuery
---------------------------------------------------------------------------- */


(function($, Mediaplayer)
{
	$.extend(Mediaplayer,
	{
		getInstance: function(element, instance)
		{
			return element.data(instance);
		},

		formatTime: function(seconds)
		{
			var start = new Date(1970, 1, 1, 0, 0, 0, 0).getTime(),
    			end = new Date(1970, 1, 1, 0, 0, seconds, 0).getTime(),
    			duration = new Date(end - start);
    		
    		duration.setMinutes(duration.getMinutes() + duration.getTimezoneOffset());
    		
    		return duration.toString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
		}
	});

})(jQuery, window.Mediaplayer = window.Mediaplayer || {});