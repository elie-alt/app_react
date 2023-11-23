import { useState } from "react";

export default function MyCheckLike() {
  const [checked, setChecked] = useState(true);
  function Change() {
    setChecked(!checked);
  }

  return (
    <div>
      <input type="checkbox" onChange={Change} defaultChecked={true} />I liked
      this
      <p>{checked ? "like" : "not like"}</p>
    </div>
  );
}