import React, { Fragment } from "react";
import Head from "next/head";

import GlobalCSS from "../styles/global";

export default () => (
  <Fragment>
    <Head>
      <GlobalCSS />
    </Head>

    <form method="post" action="">
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p>
          <label className="label" htmlFor="email">
            Email
            <input type="text" id="email" name="email" />
          </label>
        </p>
        <p>
          <label className="label" htmlFor="password">
            Password
            <input
              className="error"
              type="password"
              id="password"
              name="username"
            />
          </label>
        </p>
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>
        <p>
          {/* https://github.com/evcohen/eslint-plugin-jsx-a11y/pull/503 */}
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label className="label" htmlFor="colour">
            Colour
            <select name="colour" id="colour">
              <option value="">Choose colour</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
            </select>
          </label>
        </p>
        <p>
          <span className="label">Animal</span>

          <label htmlFor="bear">
            <input type="checkbox" name="animal" value="bear" id="bear" />
            Bear
          </label>

          <label htmlFor="tiger">
            <input type="checkbox" name="animal" value="tiger" id="tiger" />
            Tiger
          </label>

          <label htmlFor="snake">
            <input type="checkbox" name="animal" value="snake" id="snake" />
            Snake
          </label>

          <label htmlFor="donkey">
            <input type="checkbox" name="animal" value="donkey" id="donkey" />
            Donkey
          </label>
        </p>
        <p>
          <label className="label" htmlFor="tiger_type">
            Type of tiger
            <input type="text" name="tiger_type" id="tiger_type" />
          </label>
        </p>
      </fieldset>

      <fieldset>
        <p>
          <input type="submit" value="Create account" />
        </p>
      </fieldset>
    </form>
  </Fragment>
);
