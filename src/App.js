import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
  paragraphInitialContent() {
    return [
              "This is the initial contents for the paragraph. Not sure how much content is needed, but here is some text. Now here is some more text. Also some more text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            ];
  }

  state = {
    paragraphs: this.paragraphInitialContent(),
    userName: "Bob"
  }

  usernameChangeHandler = (event) => {
    this.setState(
      { userName: event.target.value }
    )
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>&#10004; Create TWO new components: UserInput and UserOutput</li>
          <li>&#10004; UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>&#10004; Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>&#10004; Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>&#10004; Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>&#10004; Add a method to manipulate the state (=> an event-handler method)</li>
          <li>&#10004; Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>&#10004; Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>&#10004; Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>&#10004; Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <hr />
        <div>
          <UserInput
            value={this.state.userName}
            changed={this.usernameChangeHandler}
          />
          <UserOutput 
            userName={this.state.userName} 
            heading="User Output 1"
            content={this.state.paragraphs} 
          />
          <UserOutput 
            userName={this.state.userName}
            heading="User Output 2"
            content={this.state.paragraphs}
          />
          <UserOutput 
            userName={this.state.userName}
            heading="User Output 3"
            content={this.state.paragraphs}
          />
        </div>
      </div>
    );
  }
}

export default App;
