---
lang: en-US
title: Definitions and Details
description: 
---

# Script Definitions and Details

## Variables

XToys variables are variables containing either a number or a string. Variables can be defined or updated with the Variable Action. They can then be used in place of a number or string in any other Action or Trigger. When referencing a variable in an Action or Trigger use { } brackets around the variable name ex. **{myvar}**.

There are a few pre-defined variables:
* **{trigger-}** - Some triggers create variables starting with 'trigger'. These variables are only available to connected Actions and are then destroyed.
* **{queue-}** - When adding a Job to a Queue you can pass in 'queue' variables. These variables will only be available to that specific instance of the Job.
* **{timestamp}** - This variable will always have the current unix timestamp.
* **{time-elapsed}** - This variable will always have the milliseconds elapsed since the script was started.

## Expressions

Most Actions and Triggers can accept a math expression and the result of that expression will be used.

Use [Math.js Syntax](https://mathjs.org/docs/expressions/syntax.html) for writing an expression.

In addition XToys also supports:
* **{myvar}** - XToys variables
* **+10**, **-1** - A number with + or - will increment the existing number
* **(20|40|60|80|100)**, **(1|1|1|2|3)** - A random value from a list by | separating the values within ( ) brackets. The same value can be entered multiple times to change the likelyhood certain values will be chosen.
* **(1-5)** - A random number from a range by putting the range in ( ) brackets.

## Actions

Actions send commands to connected blocks like Toys and Tools, or run Script related things like starting a Job or changing the Step a Job is on. The available Actions will depend on what blocks the Script is configured to connect to.

Actions that have a text field can accept a variable or an expression.

## Triggers

Triggers make Actions run only if a specific condition is true. Triggers can be based on a certain state a connected Toy or Tool is in, how much time has elapsed, or the state of a variable.

Triggers that have a text field can accept a variable or an expression.

::: warning Triggering Multiple Times
Most triggers will not fire a second time until the Trigger condition has changed back to false. So for example a Trigger that fires when the toy is at 100% intensity will fire once right when the toy hits 100% intensity and then will not fire again unless the toy intensity changes away from 100%.
:::

## Jobs

Jobs allow you to run a sort of state engine and have Actions fire or Triggers be active based on the current state.

* Jobs are not started automatically. You must call an Action to start the Job
* Jobs are composed of a number of Steps
* A Job can only be in one Step at a time
* When a Step starts the Actions for that Step are immediately run
* To change steps have a Trigger from the current Step call an Action to change the Step
* Triggers will only fire if they're part of the current Step
* Multiple Jobs can be active at the same time
* The **START** Step will always be the first Step that is triggered when a Job is started
* An Action can Go To the same Step that a Job is already on and it will re-run the Steps Actions

::: tip Use Cases
When you want toys to react in some timed fashion you can create a Job, have a timed trigger to go to the next step, run the next action and have another timed trigger, etc, etc.
:::

## Queues

Jobs can be added to a Queue which will cause the Jobs to be executed sequentially.

* The next Job in the Queue will not start until the previous Job has called the Stop Action on itself
* Jobs started by a Queue cannot start other Jobs
* Variables scoped only to that specific instance of the Job can be passed in when the Job is queued. So you can have a Job that is generalized (ex. turn on toy for {queue-seconds}), and add the same Job multiple times to the queue with a different value for {queue-seconds} for each


::: tip Use Cases
Having toys react to cam site tips or Discord messages where you want to ensure every event is reacted to one at a time.
:::

## Controls

Controls set and reflect the state of a variable in the script.

Controls can be:
* Text Input
* Regular slider or Range slider
* Dropdown
* Button group
* Toggle button
* Push button (goes back to off when the mouse is released)