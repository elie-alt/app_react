import React from "react";

export default class Avatar extends React.Component {
  render() {
    return (
      <div>
        {this.props.infos.map((info) => (
          <img src={info.img} />
        ))}
      </div>
    );
  }
}