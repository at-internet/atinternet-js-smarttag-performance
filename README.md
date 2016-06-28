#Performance plugin
This AT Internet SmartTag plugin intends to add page loading timing, gathered from compatible browsers' `navigation.timing` object (See [w3 specification](https://www.w3.org/TR/navigation-timing/) for more detailed information).

##Loading
Load this file **after** the SmartTag main file in jour HTML page

`<script src="performance.js" type="text/javascript"></script>`

##Action
This plugin will add a new parameter in the AT Internet Tracker hit, called "perf=". This parameter is a JSON serialized to String, built as follows : 
```
{
	"navigationStart":0,
	"unloadEventStart":11,
	"unloadEventEnd":11,
	"fetchStart":0,
	"domainLookupStart":0,
	"domainLookupEnd":0,
	"connectStart":0,
	"connectEnd":0,
	"requestStart":6,
	"responseStart":9,
	"responseEnd":10,
	"domLoading":23,
	"domInteractive":149,
	"domContentLoadedEventStart":149,
	"domContentLoadedEventEnd":149,
	"domComplete":149,
	"loadEventStart":149,
	"loadEventEnd":149
}
```
Each key is a navigation loading event. Its value represents the duration between the first event (`navigationStart`) and its firing.

##Support
This plugin is provided "AS IS". Feel freel to fork, enhance and pull request, but no official support and maintenance will be provided.