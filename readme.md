# This is an app for downloading audio from YouTube via .txt file.



**Running the app**

1. The script requires node environment to function properly.

2. The app requires node modules, to install them move to server directory and type in console 

   `npm install`

3. From the same folder run the server by typing in console: 

   `node index.js`

4. Then run the `index.html`  file.

5. Browse button shows an interface with file selection, upload button downloads the audio file.

   **Few things to keep in mind while working with an app:**

   *  There has to be whitespace before URL in .txt file, otherwise the download won't start.
   * Script works only for one video, i.e. only one video can be converted per .txt file.

**The way app works**

Function from `script.js` called `sendURL` delivers URL from .txt file to node server which then compiles it. The server works with express framework and uses cors module in order to get data of a YouTube video. HTML structure uses classes from bootstrap framework.  

