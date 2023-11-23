import { useState } from "react";

export default function MyForm() {
  const [form, setForm] = useState({
    firstName: "Lea",
    lastName: "Dupont",
    email: "Lea.dupont@gmail"
  });

  function Changefn(e) {
    setForm({
      ...form,
      firstName: e.target.value
    });
  }

  function Changeln(e) {
    setForm({
      ...form,
      lastName: e.target.value
    });
  }

  function Changem(e) {
    setForm({
      ...form,
      email: e.target.value
    });
  }

  return (
    <div>
      First name : <input onChange={Changefn} value={form.firstName} />
      Last name : <input onChange={Changeln} value={form.lastName} />
      Email : <input onChange={Changem} value={form.email} />
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </div>
  );
}