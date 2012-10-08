Mediaplayer
============

We needed a uniform controller for different video player implementations.
This Mediaplayer is basically a shell around any videoplayer implementation.
It acts as a front-end to jwplayer or mediaelement.js for example.
It provides a simple API across different video player implementations.

At this moment only jwplayer has been implemented.

TODO
----

* General options handler
* Audio
* LiveStream
* Playlists
* Subtitles

How to embed
--------------

The mediaplayer-wrapper <div> is the basic embed you need to get going. The <noscript> is optional.
```html
<div class="mediaplayer-wrapper">
	<video controls="controls" id="mediaplayer" poster="<poster>">
		<source src="<mp4_source>" type="video/mp4" />
		<source src="<ogg_source>" type="video/ogg" />
		<source src="<webm_source>" type="video/webm" />
	</video>
	<noscript>
		<style>.mediaplayer-controls, #mediaplayer{display:none;}</style>
		<object type="application/x-shockwave-flash" data="/static/player.swf" width="<width>" height="<height>">
			<param name="movie" value="/static/player.swf" />
			<param name="flashVars" value="controlbar=over&amp;image=<poster>&amp;file=<mp4_source>" />
			<img alt="" src="<poster>" width="<width>" height="<height>" title="No video playback capabilities" />
		</object>
	</noscript>
	<div class="mediaplayer-controls"></div>
</div>
```

Inside the mediaplayer-controls div you can add your own buttons and controls
```html
<button data-action="togglePlay">play / pause</button>
<button data-action="toggleMute">mute / unmute</button>
<span data-show="totalTime">00:00:00</span>
<span data-show="currentTime">00:00:00</span>
<span data-show="currentVolume">0%</span>
```