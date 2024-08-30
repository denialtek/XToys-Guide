---
lang: en-US
title: JavaScript
description: 
---

# JavaScript

XToys Scripts and Triggers can run custom JavaScript. To edit the JavaScript click the JS button in the top toolbar when editing the Script/Tease.

The JavaScript is evaluated immediately when the Script/Tease is started.

## Limitations
* Only ES5 syntax is supported.
* JavaScript is run through an interpretation engine (JS-Interpreter) and thus runs slower than native calls.
* There is no access to the DOM.

## XToys Variables

When XToys Actions or Controls set variables they are stored as XToys variables. To access the variable from JavaScript you must call **getVariable(varname)** to read the variable into your JavaScript.

## Additional Functions

XToys has a few pre-defined functions:
* **getVariable(varname)** - Gets an XToys variable (use the variable name without {})
* **setVariable(varname, value)** - Sets an XToys variable (use the variable name without {})
* **callAction(jsonData[, block])** - Register an XToys Trigger
* **registerTrigger(jsonData, functionReference)** - Calls an XToys Action
* **getXhr(url)** - make GET XMLHttpRequest to the given URL and returns responseText
* **getConnectedBlocks()** - Returns a list of all blocks connected to each connection point of the Script/Tease
* **getConnectedUsers()** - Returns a list of all users currently connected to the online session and whether they have access or control granted to them
* **getFilesInFolder(mediaName)** - Returns a list of all files in the Local Folder specified. Returns the file name, and whether there's an associated funscript or subtitle file. Returned file names can be passed to the set Video or set Pattern Actions
* **sleep(ms)** - Pauses execution of function for the given number of milliseconds
* **console.log(text)** - Same as native function
* **Object.values(obj)** - Same as native function

## callAction(jsonData[, block]) Method

The callAction(jsonData[, block]) method can be used to call XToys Actions from JavaScript. The easiest way of finding out the correct JSON format is to use the 'Add XToys Action' menu item when editing the JavaScript.

Some Tease Actions can be set up to block and not continue to the next line of JavaScript until the Action has finished. If you want this behaviour pass in true for the second parameter.

Actions that can block:
* **Text - Main** - Blocks until the time specified under 'Delay Next Action'
* **User Input** - Blocks until the user makes a selection
* **Timer** - Blocks until time is up (only if 'Block Next Action Until Time is Up' is selected)
* **Speak** - Blocks until speech is finished (only if 'Block Next Action Until Speech is Done' is selected)

### Sample Action Calls

Go to a step called 'Step2' in an active Job called 'Main'.
```json
callAction({
  "type": "updateJob",
  "job": "Main",
  "action": "goTo",
  "step": "Step2"
});
```

Set a toy intensity to 50%. To find out the channel name check the channels: {} portion of the full Script/Tease Export.
```json
callAction({
  "type": "updateComponent",
  "channel": "generic-1-a",
  "action": "setVolume",
  "rampTime": 0,
  "percentVolume": "50"
});
```

Display a text input in a Tease and then read what the user input.
```json
callAction({
    "type":"updateTease",
    "part":"input",
    "inputType":"text",
    "variable":"myvar"
}, true);
console.log(getVariable("myvar"));
```

## registerTrigger(jsonData, functionReference) Method
The registerTrigger(jsonData, functionReference) method can be used to set up an XToys Trigger from JavaScript. The easiest way of finding out the correct JSON format is to use the 'Add XToys Trigger' menu item when editing the JavaScript. The function will be called any time the trigger is fired and will include a map of trigger data.

Sample:
```javascript
registerTrigger({"type":"componentState","channel":"dice-a","eventType":"rolled"}, onRolled);
function onRolled (data) {
  console.log(data['trigger-result'])
}
```

The callback function is also passed the original Trigger JSON in the second paramter if needed.
```javascript
registerTrigger({"type":"variableChange","variable":"var1"}, onVariableChange);
registerTrigger({"type":"variableChange","variable":"var2"}, onVariableChange);
function onTrigger (data, triggerJSON) {
    console.log("Trigger fired because " + triggerJSON.variable + " changed.");
}
```
