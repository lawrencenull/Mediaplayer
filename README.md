Media Player
============

Why
---

We need a uniform controller for different video players on different platforms.
We created a simple JS interface which has default play / pause / scrub / volume 
functions that are translated to the selected platform.
The controller fires events to these functions and is maintained in HTML and CSS.
For now jwplayer is the only player that has been wrapped by this script as it handles 
HTML5 audio and video, flash audio and video, livestreaming, playlists, subtitles and youtube.

TOTO
----

* General options handler
* Controlbar styling
* Audio
* LiveStream
* Playlists
* Subtitles

The Embed HTML
--------------

```html
<div class="mediaplayer-wrapper">
	<video controls="controls" id="mediaplayer" poster="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg">
		<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
		<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" type="video/ogg" />
	</video>
	<noscript>
		<object type="application/x-shockwave-flash" data="http://player.longtailvideo.com/player.swf" width="<width>" height="<height>">
			<param name="movie" value="http://player.longtailvideo.com/player.swf" />
			<param name="flashVars" value="controlbar=over&amp;image=http%3A%2F%2Fsandbox.thewikies.com%2Fvfe-generator%2Fimages%2Fbig-buck-bunny_poster.jpg&amp;file=http%3A%2F%2Fclips.vorwaerts-gmbh.de%2Fbig_buck_bunny.mp4" />
			<img alt="Big Buck Bunny" src="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg" width="<width>" height="<height>" title="No video playback capabilities, please download the video below" />
		</object>
	</noscript>
	<div class="mediaplayer-controls">
		<button data-action="togglePlay">play / pause</button>
		<button data-action="toggleMute">mute / unmute</button>
		<span data-show="totalTime">00:00:00</span>
		<span data-show="currentTime">00:00:00</span>
		<span data-show="currentVolume">0%</span>
	</div>
</div>
```