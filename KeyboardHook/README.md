Based on: https://stackoverflow.com/a/57710850/3153116

Usage:

```
private GlobalKeyboardHook _globalKeyboardHook;

static void Main()
{
    //_globalKeyboardHook = new GlobalKeyboardHook(); // hook all keys
    _globalKeyboardHook = new GlobalKeyboardHook(new Keys[] { Keys.Insert, Keys.Escape }); // hook only Insert and Escape
    _globalKeyboardHook.KeyboardPressed += OnKeyPressed;
}

private void OnKeyPressed(object sender, GlobalKeyboardHookEventArgs e)
{
    if (e.KeyboardState == GlobalKeyboardHook.KeyboardState.KeyDown)
    {
        Keys loggedKey = e.KeyboardData.Key;
        int loggedVkCode = e.KeyboardData.VirtualCode;
        // do some work
    }
}
```