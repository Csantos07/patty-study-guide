# Readme

## History
At this point we can move multiple steps right... I have us repeating only up to 5 times
at the moment for purposes of troubleshooting.

Next steps for me would be to create a way to check for asterisks
.. after that, boundaries
.. after that, am i retracing my steps
.. so on

Old News
---------------------------------------------------------------------------------------
At this point we are just creating functions to move one step
as well as som utility functions to print out the location: contents/coordinates

## Next Steps

[x] Create a better defaults for testing...
Ideally I'd probably want to update the defaults to [0,0]
For the time being I'll have it set for testing.

## Need to implement recursion
I imagine the function ends when we are no longer lost.. when E is found

```js
function mazeFinder(param1, param2) {
  if(currentLocationContents === "e") {
    lost = false
    return out of the recursive function
  }

  continue recursion;

}
```

Recursion Video:
https://www.youtube.com/watch?v=6oDQaB2one8
