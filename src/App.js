
import React from 'react';

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      word: '',
      nums: nums
    }
  }

    handleName = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    handleWord = (event) => {
      this.setState({
        word: event.target.value
      });
    }

    handleSelect = (event) => {
      if(event.target.value === 'even'){
        let newNums = nums.filter(num => num % 2 === 0);
        this.setState({ nums: newNums });
      }
      else if(event.target.value === 'odd'){
        let newNums = nums.filter(num => num % 2 !== 0);
        this.setState({ nums: newNums });
      }
      else{
        this.setState({ nums: nums })
      }
    }

    handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
        submitName: event.target.name.value,
        submitWord: event.target.name.value,
        submitSelected: event.target.name.value
      });
    }

  render() {

    let listItems = this.state.nums.map(listItem => (
      <li>{listItem}</li>
    ))

    return (
      <>
        <h1>In-FORM-Ed {this.state.name}</h1>
        <h3>{this.state.word}</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>

            <legend>Deep Ponderings</legend>

            <label>Name
              <input name="name" type="text" onInput={this.handleName} />
            </label>

            <label htmlFor="word">Word</label>
            <input name="word" id="word" type="text" onChange={this.handleWord} />

            <select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
            <button type="submit">Submit</button>
          </fieldset>
        </form>

        <ul>
          {listItems}
        </ul>
      </>
    );
  }
}
export default App;
