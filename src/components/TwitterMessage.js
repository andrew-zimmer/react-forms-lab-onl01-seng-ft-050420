import React from "react";

class TwitterMessage extends React.Component {
  constructor({ maxChars }) {
    super();

    this.state = {
      message: "",
      maxChars: maxChars,
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div>
          <p>
            Remaining Characters:{" "}
            {this.state.maxChars - this.state.message.length}
          </p>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
