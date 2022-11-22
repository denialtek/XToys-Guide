---
lang: en-US
title: Functions
description: 
---

# Functions

When evaluating Expressions in Scripts and Teases you can also call helper functions. These functions can also be called from Custom Javascript Actions. Javascript must be written in ES5 syntax.

## Math.js Functions

Any [functions available in Math.js](https://mathjs.org/docs/reference/functions.html) (do not include the '*math.*').

## Default Functions

XToys has a few pre-defined functions:
* **gpsDistance(lat1,lng2,lat2,lng2)** - Returns the distance in meters between the two given GPS coordinates. Lat/lng values should be in decimal degrees and without N/E/S/W designators.
* **getSeconds(timestamp)** - Returns the number of seconds (0-59) according to local time
* **getMinutes(timestamp)** - Returns the number of minutes (0-59) according to local time
* **getHours(timestamp)** - Returns the number of hours (0-23) according to local time
* **getVariable(varname)** - Gets an XToys variable (use the variable name without {})
* **setVariable(varname, value)** - Sets an XToys variable (use the variable name without {})
* **callAction(jsonData)** - Register an XToys Trigger
* **registerTrigger(jsonData, functionReference)** - Calls an XToys Action
* **getXhr(url)** - make GET XMLHttpRequest to the given URL and returns responseText
* **getConnectedBlocks()** - Returns a list of all blocks connected to each connection point of the Script/Tease
* **getConnectedUsers()** - Returns a list of all users currently connected to the online session and whether they have access or control granted to them
* **sleep(ms)** - Pauses execution of function for the given number of milliseconds
* **console.log(text)** - Same as native function
* **Object.values(obj)** - Same as native function

## callAction(jsonData) Method

The callAction(jsonData) method can be used to call XToys Actions from Javascript. The easiest way of finding out the correct JSON format is to use the 'Add XToys Action' menu item when editing the Javascript.

## registerTrigger(jsonData, functionReference) Method
The registerTrigger(jsonData, functionReference) method can be used to set up an XToys Trigger from Javascript. The easiest way of finding out the correct JSON format is to use the 'Add XToys Trigger' menu item when editing the Javascript. The function will be called any time the trigger is fired and will include a map of trigger data.

Sample:
```javascript
registerTrigger({"type":"componentState","channel":"dice-a","eventType":"rolled"}, onRolled);
function onRolled (data) {
  console.log(data['trigger-result'])
}
```

### Sample Action Formats

Go to a step called 'Step2' in an active Job called 'Main'.
```json{
  "type": "updateJob",
  "job": "Main",
  "action": "goTo",
  "step": "Step2"
}
```

Set a toy intensity to 50%. To find out the channel name check the channels: {} portion of the full Script/Tease Export.
```json{
  "type": "updateComponent",
  "channel": "generic-1-a",
  "action": "setVolume",
  "rampTime": 0,
  "percentVolume": "50"
}
```

## Define Additional Functions

Additional functions can be defined by clicking the three dots when editing a Script and selecting Define Custom Functions.