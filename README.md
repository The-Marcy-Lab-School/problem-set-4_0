# Unit 4 Lesson 0 Problem Set
## Understanding Objects

### Short Response Section
Answer short response questions directly in this markdown file. Answer questions in 2 - 3 sentences. Be sure to format your responses appropriately.

**1. What is encapsulation? Why do we use it? How do objects enable it?**
- Encapsulation is making sure a piece of a program is kept private, meaning it should not be touched by anyone, versus making it public so that others can interact with this piece of code. This can be useful if you want the users to interact with this part of the code in a specific way, and make sure they input the right things to ensure an accurate computation of the data. Object methods like get and set, as well as an underscore, can influence the way we read these objects, and how to go about interacting with this data.
**2. How do objects encapsulate state? How do they encapsulate behavior?**
- If you want the data to be in a specific state, the object methods can specify this. By making strict data comparisons and guiding the data to a specific state, you can avoid results that will show errors or come out inaccurately. As with behavior, or methods, they make things strict by calling on methods that specify whether data is private or public, which can influence its access.
**3. How do we create _private data_ within JavaScript objects? What is the role of _accessor properties_?**
- To create private data, simply add an underscore in front of a key or method. Accessor proprties specify to the user whether the data is being set, or being gotten, which can influence how the data is used or manipulated.
**4. What are factory functions and why are they useful?**
- They add more flexibility to objects by allowing you to create as many objects as you want with a few parameters, much like creating a factory. It can save time and make it easy to create objects.
### Coding Practice
Answer the questions in this section in the `exercises.js` file in this directory. Test are included. Install with `npm install`. Test with `npm test`. Lint with `npx eslint exercises.js`

#### Create a Cell Phone Object
1. Create an object called `cellphone`. Add a `phoneNumber` property that holds a 10-digit string as a value.

2. Add a `model` property that holds a string that represents the type of phone it is (e.g. `Samsung Galaxy Note`)

3. Add a `contacts` property with a value of an empty array. 

4. Add a contact to the `contacts` property. The contact should be an object containing a `name` property and a `phoneNumber` property.

5. Let's create an abstraction on top of the `contacts` property so that we don't have to call array methods directly on the property. Instead, let's add an `addContact` method. This method should take two arguments - a `name` and a `phoneNumber` - and it should add an object to the `contacts` array with the passed arguments as values. This method should return `<<name>> successfully added.`

6. Test your method out by adding three different phone numbers to your `cellphone` object.

7. Add a method to your object called `numberOfContacts`. It should return the total number of `contacts`. Test your method by calling it on your object. It should return `4` if you've been following along correctly 😉.

9. Add a method called `lookUp` which takes a string argument that represents the name of a contact. This method should return the `phoneNumber` of the contact with the given `name`. If no such contact is present, it should return `'Contact not found.'`

8. Add a method called `deleteContact`. It should take a string argument that represents a name. It should delete the contact with the matching `name` and return `<<name>> successfully deleted.`. If no matching `name` is found, it should return `Contact not found.`

9. Add a method called `call` which takes a string argument and returns `"Calling <<name>> at <<phoneNumber>>..."` if the contact is found. **Note: This string argument can be a name OR a phone number.** If there is no contact with a `name` or `phoneNumber` that matches the given argument, it should return `'Contact not found'`. 
      ```javascript
      cellphone.call('Reuben Ogbonna'); // 'Calling Reuben Ogbonna at 9196219388' (if contact is found)
      cellphone.call('9196219388'); // 'Calling Reuben Ogbonna at 9196219388' (if contact is found)

      cellphone.call('lakjsdfasdl'); // 'Contact not found.'
      ```

10. Lastly, create a _factory function_ called `makeCellPhone`. This function should return an object with all of the properties and methods that we defined above. This function should take two string arguments such that the resulting cellphone object should be initialized with a `phoneNumber` and a `model`. 

