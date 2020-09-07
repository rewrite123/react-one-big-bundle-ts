# react-one-big-bundle-ts
This repo is to act as starter code for a react project where you can only compile the code into one big bundled js file. I like using this for small applets, as there is no chunking and it allows for you to add chunks of code to an existing site pretty easily. 

![Flying airplane gif](https://github.com/rewrite123/react-one-big-bundle/blob/master/src/assets/oldest.gif)
Actual image of me flying through the webpack docs

It's kind of **[redacted]** to be honest.
But, it's better than ejecting from CRA imo.
# 
### Here are some scripts you might want to try
* `
npm run start
`
This will start the dev server and serve your content on a webpage at localhost:8080
* `
npm run build
`
This will transpile your code into bundle.js inside of the /dist folder in the root of the project. This does (not) include what you have inside of your public folder.

### Additional information

To test that your bundle transpiled correctly after building, you can run the following inside of the /dist folder.
`
npx serve .
`
Then, copy /index.html to the /dist folder. You should see your webpage running when you go to localhost:5000.

An even easier method if you want to keep the original index.html from your public folder is to edit the HtmlWebpackPlugin in /webpack.conf.js so that it does not just run when developing.

Please be aware of some pitfalls of this project. This can lead to obscenly large files and does not include all the niceties of other projects like CRA or Expo.

That being said, you can easily customize anything you would like from the webpack.conf.js file or the other config files incuded. Nothing is hidden here.
