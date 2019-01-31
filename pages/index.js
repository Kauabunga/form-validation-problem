import React, { Fragment } from "react";

import "../style.css";

export default () => (
  <Fragment>
    <form method="post" action="">
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p>
          <label className="label" htmlFor="email">
            <span>Email</span>
            <input type="text" id="email" name="email" />
          </label>
        </p>
        <p>
          <label className="label" htmlFor="password">
            <span>Password</span>
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
            <span>Colour</span>
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
          <span className="label">
            <span>Animal</span>
          </span>

          <label htmlFor="bear">
            <input type="checkbox" name="animal" value="bear" id="bear" />
            <span>Bear</span>
          </label>

          <label htmlFor="tiger">
            <input type="checkbox" name="animal" value="tiger" id="tiger" />
            <span>Tiger</span>
          </label>

          <label htmlFor="snake">
            <input type="checkbox" name="animal" value="snake" id="snake" />
            <span>Snake</span>
          </label>

          <label htmlFor="donkey">
            <input type="checkbox" name="animal" value="donkey" id="donkey" />
            <span>Donkey</span>
          </label>
        </p>
        <p>
          <label className="label" htmlFor="tiger_type">
            <span>Type of tiger</span>
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
