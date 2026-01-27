// Event delegation
// When building an application, sometimes you’ll need to attach event listeners to buttons, 
// text, or images on the page in order to perform some action when the user interacts with the element.

// If we take a simple todo list as an example, 
// the interviewer may tell you that they want an action to occur when a user clicks one of the list items. 
// And they want you to implement this functionality in JavaScript assuming the following HTML code:

//html
<ul id="todo-list">
   <li class="item">Walk the dog</li>
  <li class="item">Pay bills</li>
  <li class="item">Make dinner</li>
  <li class="item">Code for one hour</li>
</ul>

//js
const todoUl = document.getElementById("todo-list");
todoUl.addEventlistener("click", (event)=>{
    if(event.target && event.target.nodeName === 'LI')
    {
        let item = event.target;
        alert('you clciked item:', item);
    }
})
//this is the most efficient way -> do not add event to each item 