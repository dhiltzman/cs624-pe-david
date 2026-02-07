# PE03 - Todos
CS624 Full-Stack Development - Mobile App  
Term: Winter 2026  
Author: David Hiltzman
**Note:** I accidentally completed both Part 1 and Part 2 of this assignment together before realizing they were meant to be done separately after HOS03 and HOS04 respectively. The implementation includes both the basic add functionality and the tab bar filtering system. I thought the Tabs were actually a challenge based on what we were building.

# Input
The application accepts user input through a TextInput component where users type new todo items. A Submit button (TouchableHighlight) captures the input and adds it to the todos array. In Part 2, a TabBar with three tabs (All, Complete, Active) allows users to filter todos. Each todo item has Done and Delete buttons for toggling completion status and removing items.

# Process
I used React component state to manage three values: a todos array, inputValue string, and type filter. When users type, inputChange updates the state via onChangeText. On Submit, submitTodo validates the input and creates a todo object with title, todoIndex, and complete status, then adds it to the array using the spread operator. I implemented toggleComplete to flip completion status and deleteTodo to remove items by filtering the array. For Part 2, I added a TabBar with setType to update the filter. The getVisibleTodos function uses a switch statement to return all todos, only completed ones, or only active items based on the selected tab type.

# Output
The app displays a heading, text input field, Submit button, scrollable list of todos, and filter tabs. Each todo shows its title with Done and Delete buttons. The Done button turns bold and green when complete. Console logs display added todos for debugging. The filtered list updates dynamically based on tab selection, showing all todos, only completed ones, or only active items.

# Analysis
Building this React Native todo app helped me understand core mobile development concepts including component-based architecture, state management, and event handling. I learned how TouchableHighlight and TextInput components capture user interactions, and how setState triggers UI re-renders. Implementing the filtering system taught me about array methods like filter and map for data manipulation. The modular component structure (App, TodoList, Todo, TodoButton, TabBar) demonstrated how to break complex UIs into reusable pieces. Debugging with logs essential for tracking state changes. This hands-on experience reinforced my understanding of React Native's declarative approach where UI automatically updates when state changes, making mobile development more intuitive than traditional imperative programming.

# References
1. React Native Documentation - https://reactnative.dev/
2. Expo Documentation - https://docs.expo.dev/
3. GitHub Codespaces - https://docs.github.com/en/codespaces
4. Dabit, N. (2019). React Native in Action. Manning Publications. (ISBN 9781617294051)