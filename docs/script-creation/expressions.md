---
lang: en-US
title: Expressions
description: 
---

# Expressions

Most Actions and Triggers can accept a math expression and the result of that expression will be used.

Use [Math.js](https://mathjs.org/docs/expressions/syntax.html) Syntax for writing an expression.

## Basic Algebra and Randomization

The expression can contain XToys variables and math equations. It can also generate random numbers.

* **{myvar}** - XToys variables
* **+10, -1** - A number with + or - will increment the existing number
* **(20|40|60|80|100)**, **(1|1|1|2|3)** - A random value from a list by | separating the values within ( ) brackets. The same value can be entered multiple times to change the likelyhood certain values will be chosen.
* **(1-5)** - A random number from a range by putting the range in ( ) brackets.

## Math.js Functions

Any [functions available in Math.js](https://mathjs.org/docs/reference/functions.html) can be called in an expression (do not include the '*math.*').

## Other Functions

XToys has a few pre-defined functions:
* **gpsDistance(lat1,lng2,lat2,lng2)** - Returns the distance in meters between the two given GPS coordinates. Lat/lng values should be in decimal degrees and without N/E/S/W designators.
* **getSeconds(timestamp)** - Returns the number of seconds (0-59) according to local time
* **getMinutes(timestamp)** - Returns the number of minutes (0-59) according to local time
* **getHours(timestamp)** - Returns the number of hours (0-23) according to local time

## Define Additional Functions

Additional functions can be defined by clicking the Custom JavaScript button in the top toolbar. Any functions defined in JavaScript that return a number or string can be called within the expression.