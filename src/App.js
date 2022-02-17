import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlID="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onInput={this.handleName} />
          </Form.Group>

          <Form.Group controlID="word">
            <label htmlFor="word">Word</label>
            <input name="word" id="word" type="text" onChange={this.handleWord} />
          </Form.Group>

          <Form.Group controlID="selected" onChange={this.handleSelect}>
            <Form.Select>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>

        </Form>

        <ListGroup>
          {listItems}
        </ListGroup>
      </>
    );
  }
}
export default App;
