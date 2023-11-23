export default function MyFirstComponent(props) {
    return (
      <div>
        <p style={{ color: props.color ? props.color : "blue" }}>
          {" "}
          {props.prenom}{" "}
        </p>
      </div>
    );
  }