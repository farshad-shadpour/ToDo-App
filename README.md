# A web application to create a to-do list

<img width="600" alt="image" src="https://github.com/user-attachments/assets/5820dcae-343c-4921-89e8-34fe1e2c7882" />

## Figma URL

[ToDo App](https://www.figma.com/design/R15fIXXOUjFVZd3uBHJSiR/ToDo-Buddy?m=auto&t=gBUtwYVu0Osp2Lms-6)

## Steps

#### State Variable

In App.jsx, set up a state variable called items using the useState hook.

#### Form Component

Create a Form component that contains an input field and a submit button. When the user submits the form, the handleSubmit function is called.

In the handleSubmit function, prevent the default form submission behavior using event.preventDefault(). If the form is submitted with an empty value, log a message and return.

#### Add Item

If the form is submitted with a value, create a new item object that includes a name (taken from the form input), a completed property (default value false), and a unique id (generated using a library like uuid or nanoid).

Add the new item to the items state variable using the setItems function.

#### Render List

Create two new components: Items and SingleItem. In Items, iterate over the list of items and render each one in a SingleItem component. For now, only render the name of the item.

#### SingleItem

In SingleItem, set up a state variable called isChecked with a default value of the item's completed property. Render a checkbox and add inline styles to add or remove the text-decoration: line-through property based on the isChecked value. Set up functionality to toggle the isChecked state variable when the checkbox is clicked.

#### Remove Item

In App.jsx, create a removeItem function and pass it down to the SingleItem component. In SingleItem, add a button that, when clicked, removes the item from the list.

#### Local Storage

Set up local storage functionality to persist the list of items across page reloads.
More info below.

#### Global Edit

Instead of 'local' value, set completed 'globally' (in the list) and save result in the local storage.

#### React-Toastify

Implement the react-toastify library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

Overall, the flow of the application should look something like this:

- In App.jsx, set up a state variable called items using the useState hook.
- Create a Form component that contains an input field and a submit button, and set up the handleSubmit function to add new items to the list.
- Create two new components: Items and SingleItem, and use them to render the list of items.
- Set up local storage functionality to persist the list of items across page reloads.
- Implement the react-toastify library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

#### Local Storage

localStorage is a built-in object in web browsers that allows web applications to store key-value pairs locally within the user's browser.

to set local storage I used this line of code: 
- localStorage.setItem('todoList', JSON.stringify(items))

to retrieve data from local storage:
- JSON.parse(localStorage.getItem('todoList'))




