import Avatar from "./Avatar.js";

export default class Charater extends Avatar {
  render() {
    return (
      <div>
        {this.props.infos.map((info) => (
          <li key={info.id}>
            {info.name}
            {info.house}
          </li>
        ))}
      </div>
    );
  }
}