# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

AUTOMATED TEST EXAMPLE!!

const getFullName = ( firstName, lastName ) => { return
`${ firstName } ${ lastName }` }

const actualFullName = getFullName( 'Jane', 'Doe' ) const expectedFullName =
'Jane Doe'

if ( actualFullName !== expectedFullName ) { throw new Error(
`Expected ${ expectedFullName } but got ${ actualFullName }` ) }

// an automated test is code that throws an error when the expected value does
not match the actual value

WHAT TO TEST IN REACT???!!!

- Test component renders
- Test component renders with props 
- Test component renders in different states
- Test component reacts to events

WHAT NOT TO TEST IN REACT???!!!

- Implementation details
- Third party code
- Code that is not important from a user point of view

THE getByRole METHOD SHOULD BE YOUR GO-TO TESTING METHOD FOR JUST ABOUT EVERYTHING!!!

Popular getByRole Options:

- name
- level
- hidden
- selected
- checked
- pressed
- disabled
- expanded

Priority Order for Queries:

- getByRole
- getByLabelText (very good for form fields)
- getByPlaceholderText 
- getByText (good for divs, spans and paragraphs)
- getByDisplayValue (good for filled in form fields)
- getByAltText (not recommended)
- getByTitle (not recommended)
- getByTestId (last resort)

RTL Queries:

- getBy & getAllBy
- queryBy & queryAllBy
- findBy & findAllBy
- Manual Queries (not recommended) - 
  You can use the regular querySelector DOM API to find elements.
  const {container} = render(<MyComponent />)
  const foo = container.querySelector('[data-foo="bar"]')

CHECK OUT "Testing Playground" CHROME EXTENSION!!!

ACT - act():

The act() function is a part of the React Testing Library and it's used to wrap code that updates state or causes side effects. It ensures that all updates related to these "actions" have been processed and applied to the DOM before you make any assertions on the output.
      
In other words, act() is used to mimic the behavior of real user interactions that cause updates to the DOM. It batches multiple updates together to simulate a single update cycle, ensuring that all updates are flushed before your test continues execution. This makes your tests run closer to how they would in a real browser environment. 

The name act() comes from the Arrange-Act-Assert (AAA) pattern. The Arrange-Act-Assert (AAA) pattern is a common way to structure unit tests. It divides tests into three distinct steps:

   - Arrange: This step involves setting up the conditions for the test. It includes creating objects, initializing variables, and preparing the environment for the test. This step should not involve any actions that affect the outcome of the test.

   - Act: This is where the actual functionality being tested is executed. It typically involves calling a function or method, triggering an event, or executing a piece of code. The goal here is to isolate the behavior that you want to test.

   - Assert: This final step involves verifying the outcome of the test. It checks whether the output or state of the system matches the expected result. If the actual result matches the expected result, the test passes; otherwise, it fails.
