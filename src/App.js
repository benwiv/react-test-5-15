import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';
import Char from './Char'

class App extends Component {
  
  state = {
    numberChars: 0,
    input: [''],
    showChar: false
  }

  inputChangeHandler = (e) => {
    const input = e.target.value.split('')
    const numberChars = this.state.input.length;
    console.log(input)

    this.setState( {
      numberChars: numberChars,
      input:input
    } );
  }

  charClickHandler = charIndex => {
    const input = [...this.state.input]
    input.splice(charIndex,1)
  }
  
  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    } 

    let characters = null;

    if (this.state.showChar) {
      characters = (
        <div>
          {this.state.input.map((char, index) =>{
            return (
              <Char 
                click={this.charClickHandler(index)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <ol>
          <li> X Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li> X Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li> X Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li> X Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
          <li>input tracker: {this.state.input} </li>
          <li>number of chars tracker: {this.state.numberChars} </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input 
          type='text' 
          placeholder='type here' 
          onChange={this.inputChangeHandler} 
        />
        <Validation 
          inputLength={this.state.numberChars}
        />
        {characters}
        <Char
          style={style}
          inputLtr={this.state.input}
        />
      </div>
    );
  }
}

export default App;
