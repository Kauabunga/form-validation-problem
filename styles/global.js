import React from "react";

export default () => (
  <style>
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

    h1, h3 {
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
        border-radius: .25em;
    }

    label {
        vertical-align: middle;
    }
    /*
        Note: Don't change font-family on password inputs,
        unless you want tiny •••• bullets :)
    */
    input[type='text'],
    input[type='submit'] {
        font-family: sans-serif;
    }

    input[type='text'],
    input[type='password'],
    input[type='submit'],
    select {
        font-size: 1em;
        border-radius: .25em;
        -webkit-appearance: none;
    }

    input[type='text'],
    input[type='password'] {
        border: solid 1px #ddd;
        padding: .5em .5em;
        color: #555;
        width: 16em;
    }

    input[type='submit'] {
        border: solid 1px transparent;
        background: #0B77DB;
        color: #fff;
        font-size: .875em;
        padding: .75em 1em;
        cursor: pointer;
    }

    input[type='submit']:hover {
        background: #3C9AA7;
    }

    input[type='submit']:focus {
        background: #3D6EAC;
    }




    input[type='text']:focus,
    input[type='password']:focus,
    input[type='submit']:focus {
        outline: none;
        border-color: #0B77DB;
        box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
    }

    input[type='submit']:active {
        background: #333;
        border-color: #333;
    }




    label + input[type=checkbox] {
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

    .label {
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
    .error > input,
    .error > label {
        color: red;
    }

    .error > input {
        border-color: red;
    }

  `}
  </style>
);
