🐛 Debugging with Nodemon in VSCode
You can use Visual Studio Code to debug your server with nodemon support.

**Prerequisites**
Ensure nodemon is installed as a development dependency:

## `npm install nodemon --save-dev`

**Starting the Debugger**

1. Open the Project in VSCode
2. Open Visual Studio Code.
3. Open the project folder (the one containing your server.js file).
4. Select the Debug Configuration
5. Click on the Run and Debug icon on the sidebar or press Ctrl+Shift+D (Cmd+Shift+D on macOS).
6. In the top dropdown, select "Launch via Nodemon".
7. Start Debugging
8. Press F5 or click the green Start Debugging button.
   **Note: The server will start with nodemon, and you can now set breakpoints, inspect variables, and step through your code.**

**Using Breakpoints**

1. Setting Breakpoints:

- Click on the left margin next to the line numbers in your code to set breakpoints.

2. Inspecting Variables:

- Hover over variables to see their current values.
- Use the Variables panel to watch variables.

3. Step Through Code

- Use the debug toolbar to step over, step into, or step out of functions.

4. Automatic Restarts

- When you make changes to your code and save, nodemon will automatically restart the server.
- The VSCode debugger will reattach to the new process, allowing continuous debugging.

📚 Learn More
To learn more about Express.js, check out the [Express Documentation](https://expressjs.com/), a fast, unopinionated, minimalist web framework for Node.js.
Learn about automatic server restarts with [Nodemon Documentation](https://nodemon.io/).
For a comprehensive guide to debugging in VSCode, see the [Visual Studio](https://code.visualstudio.com/docs/editor/debugging) Code Debugging documentation.
