# Quick Description

- This Safari extension provides a contextual menu to open a link in the [Wayback Machine](https://archive.org/web/).
- The menu is displayed only when right-clicking a HTML link.
- The extension has a setting to choose whether to open the Wayback Machine in the current tab or in a new tab.

# Installation

Since I do not have a developer account at Apple, I cannot sign this Safari extension, and therefore it cannot be installed by a simple double-click. However it can be installed with the Extension Builder bundled with Safari, which is the tool I used to develop this extension in the first place. Here is how to do it:

1. First, enable the Develop menu (you need to do this only once): in Safari Preference panel, go to the tab "Advanced", and tick the button labelled "Show Develop menu in menu bar". It is located at the very bottom of the panel.

2. In the "Develop" menu, choose "Show Extension Builder".

3. You will now add this extension (you need to do this only once). Click on the "+" button at the bottom left of the Extension Builder window and choose "Add Extension…". Then select the folder "WaybackMachine.safariextension" where you have cloned this repository. A new item will appear on the left panel of Extension Builder, with the title "Wayback Machine" and the following icon (this icon will also appear in Safari preference panel, in the tab dedicated to extensions):
![](Icon-64.png)

4. Select "Wayback Machine" in the left pane of Extension Builder and click "Install" (the button is in the top left corner) of the window. You will need to install this extension every time you restart Safari unfortunately. This is another drawback for not being able to sign it.

# Licencing

I make use of an icon made by [Freepik](http://www.freepik.com) from [www.flaticon.com](http://www.flaticon.com) licensed under [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/). I converted the original SVG icon to a 64x64 PNG which is one format recognised by Safari extensions.
