# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./Screenshot%202022-11-14%20at%2016.08.54.png)

## My process

Built with React framework.
I implemented a state containing an array of the todos at the highest level of the app so that changes would filter down throughout the project.
In order to add and remove todos I simply created a new state from a manipulated copy of the original.
For the sorting preferences I referenced another state that determined whether a todo would be rendered depending on the user's sorting preference and the todo's complete attribute, which is set upon clicking the check box.

The drag and drop was the most challenging aspect. To do this I added onDrag and onDragEnter event listeners that updated a higher-order-component's state containing all of the todo sub-components. The higher-order-component had states referencing the indexes of both the component being dragged and the one being dragged over. Upon changes in these indexes I reordered the main state.

### What I learned

I learned a lot through implementing the drag and drop functionality of this app. I had to alter my approach when it came to filtering which todos were visible upon the user's sorting preferences being changed. Initially I applied a filter to the array in the higher-order-component containing the todo components. This led to difficulties when attempting to reorder the main state during drag and drop in the filtered list because the index values didn't correspond to the main state.
I rectified this by referencing the sort preference state in the todo component and rendering it based on this.

I also tried to pass the todo's id and access the index in the main state using findIndex(). This led to problems because I was attempting to access the array before it had been initialised.
