import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return { ...prevValue, fName: value };
      } else if (name === "lName") {
        return { ...prevValue, lName: value };
      } else if (name === "email") {
        return { ...prevValue, email: value };
      }
    });
  }

  //   setContact(prevValue => {
  //     return {
  //       ...prevValue, [name]: value
  //      };
  //   });
  // }

  // tento kod kratky funguje, pretože [name] v hranatých prenáša do objektu nie novú položku "name", ale toString, čo je v nej ako v premennej; to je nová funkcionalita ES6; ak by to nebolo v [], tak je to nová položka name; a išlo by to len kódom, ktorý som napísal hore a ten tiež funguje;

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
