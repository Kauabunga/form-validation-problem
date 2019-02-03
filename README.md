[![CircleCI](https://circleci.com/gh/Kauabunga/form-validation-problem.svg?style=svg)](https://circleci.com/gh/Kauabunga/form-validation-problem)

[https://carsonbruce-form-validation-problem-9kt9kh16e.now.sh/](https://carsonbruce-form-validation-problem-9kt9kh16e.now.sh/)

# Carson Bruce - SpringLoad form validation problem

## Problem goals / Assumptions

- Introduction to Next.js + Now
- Introduction to React 16.7 hooks
- Setup basic pipelines, linting, and test frameworks as if it was a real project

## Software dependencies

- [Git](https://try.github.io/levels/1/challenges/1)
- [Nodejs v8](https://nodejs.org/)

## Getting your own local environment up and running

1. Open a terminal
2. Clone git repository `git@github.com:Kauabunga/form-validation-problem.git`
3. Go into repository dir `cd form-validation-problem`
4. Make sure you are on the develop branch `git checkout develop`
5. Check node version is 8.X.X `node --version`
6. Check npm version is 6.X.X `npm --version` `npm i -g npm`
7. Install dependencies `npm install`
8. Run all the unit tests `npm test`
9. Start development server `npm run dev`

## Technology used

- Next.js (Universal React framework)
- React (Web component library)
- Node (Javascript runtime)
- Git (Source version control)
- Now (Serverless deployment service)

## Deployment to now

- `npm i -g now`
- `now`

# [Form validation problem](https://springload.github.io/form-validation-problem/)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Springload](https://www.springload.co.nz/) feel free to submit it too. We're always on the lookout for skilled developers.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

- `Email` must be a valid email address.
- `Password` must be longer than 8 characters.
- `Colour` must be selected.
- At least two `Animal`s must be chosen.
- If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
  <label for="field"></label>
  <input id="field" type="text" value="foo" />
</p>
```

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

## Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.
