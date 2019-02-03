import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style global="true" jsx>
            {`
              /*
          -------------------------------------------------------------------
          Page prettiness
          -------------------------------------------------------------------
          */
              body {
                font-family: sans-serif;
                line-height: 1.5;
                color: #333;
                background: #ddd;
                margin: 2em;
              }

              h1,
              h3 {
                color: #576774;
              }

              h1:first-child {
                margin-top: 0;
              }

              /*
          -------------------------------------------------------------------
          Form styles
          -------------------------------------------------------------------
          */
              form {
                background: #fff;
                padding: 1em 1.25em;
                border: solid 1px #ccc;
                border-radius: 0.25em;
              }

              label {
                vertical-align: middle;
              }

              input[type="text"],
              input[type="email"],
              input[type="submit"] {
                font-family: sans-serif;
              }

              input[type="text"],
              input[type="email"],
              input[type="password"],
              input[type="submit"],
              select {
                font-size: 1em;
                border-radius: 0.25em;
                -webkit-appearance: none;
              }

              input[type="text"],
              input[type="email"],
              input[type="password"] {
                border: solid 1px #ddd;
                padding: 0.5em 0.5em;
                color: #555;
                width: 16em;
              }

              input[type="submit"] {
                border: solid 1px transparent;
                background: #0b77db;
                color: #fff;
                font-size: 0.875em;
                padding: 0.75em 1em;
                cursor: pointer;
              }

              input[type="submit"]:hover {
                background: #3c9aa7;
              }

              input[type="submit"]:focus {
                background: #3d6eac;
              }

              input[type="text"]:focus,
              input[type="email"]:focus,
              input[type="password"]:focus,
              input[type="submit"]:focus {
                outline: none;
                border-color: #0b77db;
                box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
              }

              input[type="submit"]:active {
                background: #333;
                border-color: #333;
              }

              label input[type="checkbox"] {
                margin-left: 1em;
              }

              select {
                width: 17em;
              }

              fieldset {
                border: none;
                padding: 0;
              }

              fieldset + fieldset {
                border-top: solid 1px #eee;
              }

              .label span {
                width: 10em;
                display: inline-block;
              }

              /*
          -------------------------------------------------------------------
          Error states
          -------------------------------------------------------------------
          
          An error class to forms that fail your validation:
          
          <p class='error'>
          <label for='field'></label>
          <input id='field' type='text' value='foo'>
          </p>
          */

              .error input,
              .error label,
              .error .label {
                color: red;
              }

              .error input,
              .error select {
                border-color: red;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
