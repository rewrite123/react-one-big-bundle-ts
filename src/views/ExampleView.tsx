import React from 'react';

import * as coolFlyingAero from '../assets/oldest.gif';

const ExampleView: React.FC = () => {
  const badWord = '[redacted]';
  return (
    <div className='content-container'>
      <div className='content-heading'>
        <h1>Welcome to react-one-big-bundle!</h1>
        <img src={coolFlyingAero} alt='The oldest gif in the world!' className='content-heading-image' />
        <div className='content-heading-caption'>
          Actual image of me flying through the webpack docs
        </div>
        <h3>
          It&apos;s kind of 
          <span className='redacted-text'>{` ${badWord} `}</span>
          to be honest.
        </h3>
        <h3>But, it&apos;s better than ejecting from CRA imo.</h3>
      </div>
      <hr />

      <p className='content-subject'>Here are some scripts you might want to try </p>
      <ul>
        <li>
          <p className='code'>npm run start</p>
          <p>This will start the dev server and serve your content on a webpage at localhost:8080</p>
        </li>
        <li>
          <p className='code'>npm run build</p>
          <p>This will transpile your code into bundle.js inside of the /dist folder in the root of the project. This does (not) include what you have inside of your public folder.</p>
        </li>
      </ul>

      <p className='content-subject'>Additional information</p>
      <p className='content-text'>
        To test that your bundle transpiled correctly after building, you can run the following inside of the /dist folder.
      </p>
      <p className='code'>
        npx serve .
      </p>
      <p className='content-text'>
        Then, copy /index.html to the /dist folder. You should see your webpage running when you go to 
        {' '}
        <a href='http://localhost:5000' target='_blank' rel="noreferrer">localhost:5000</a>
        .
      </p>
      <p className='content-text'>
        An even easier method if you want to keep the original index.html from your public folder is to edit the HtmlWebpackPlugin in /webpack.conf.js so that it does not just run when developing.
      </p>
      <p className='content-text'>
        Please be aware of some pitfalls of this project. This can lead to obscenly large files and does not include all the niceties of other projects like CRA or Expo.
      </p>
      <p className='content-text'>
        That being said, you can easily customize anything you would like from the webpack.conf.js file or the other config files incuded. Nothing is hidden here.
      </p>
      <div className='credits'>
        <h2>
          Isaac Hormel
        </h2>
        <a href='https://github.com/rewrite123/react-one-big-bundle' target='_blank' rel='noreferrer'>Github repo</a>
      </div>
    </div>
  );
};
export default ExampleView;
