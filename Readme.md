1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:

•	getElementById selects a single element by its unique ID. It returns a single element object. If no element with the specified ID exists then it returns null. 
•	getElementsByClassName selects all elements with a given class which returns a live HTMLCollection that automatically updates itself when the DOM changes.
•	querySelector returns the first matching single element.
•	querySelectorAll returns all matches as a static NodeList. A static NodeList does not update itself when the DOM changes. This can be an advantage or disadvantage.
getElementById() and getElementsByClassName() were faster than querySelector() and querySelectorAll().
________________________________________
2. How do you create and insert a new element into the DOM?
Ans:
To create and insert a new element we first use document.createElement('tagName') to create the element in memory. Here tagName is specifying the type of tag we want like div or p or li. We can also modify its properties like textContent or className before insertion. Then we can use a method like parentElement.appendChild(newElement) to insert it as the last child of a parent node or parentElement.insertBefore(newElement, referenceElement) to insert it at a specific position. Then we can use the insertAdjacentHTML() method to insert an HTML string at a specified position relative to an existing element.
________________________________________
3. What is Event Bubbling and how does it work?\
Ans:

Event Bubbling is the process where an event triggered on a child element propagates upward through its parent elements, continuing until it reaches the root element.
________________________________________
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:

Event Delegation is a technique where instead of adding event listeners to multiple child elements, a single event listener is added to a parent element. The parent handles the events as they bubble up from the children.
Benefits of Event Delegation:
•	Reduces the number of event listeners, improving performance.
•	Works for dynamically added elements.
•	Keeps code cleaner and easier to manage.
________________________________________
5. What is the difference between preventDefault() and stopPropagation()?
Ans:

•	preventDefault(): Stops the default action of an event (e.g., stopping a link from navigating or preventing a form from submitting).
•	stopPropagation(): Stops the event from bubbling or propagating to parent elements.
