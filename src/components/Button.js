import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onClick(this.props.children.toLowerCase())}
          style={{ marginLeft: 30, marginRight: 30 }}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}
export default Button;
