import React, { Component } from "react";


class AddGifForm extends Component {
  render() {
    return (
      <form
        className="add-gif-form"
        onSubmit={this.props.handleGifSubmit}
      >
      <input
          id = "search"
          type="text"
          value={this.props.inputTypeValue}
          name="type"
          placeholder="Search here for literally anything"
          onChange={this.props.handleInputTypeChange}
      /><br/>
        <input
          id = "num"
          type="text"
          value={this.props.inputNumberValue}
          name="number"
          placeholder="How many gifs would you like?"
          onChange={this.props.handleInputNumberChange}
        /><br/>

        <button onClick={this.handleOnClick}> Search Gifs!</button>
      </form>
    );
  }
}

export default AddGifForm;


