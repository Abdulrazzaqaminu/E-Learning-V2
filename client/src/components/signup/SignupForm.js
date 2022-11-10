import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Checkbox from "../check-box/checkbox";
import Form from "../form/Form";
import TextInput from "./TextInput";
import Axios from 'axios';

export default function SignupForm() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_Password, setConfirmPassword] = useState("");
  // const [checked, setChecked] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  async function handleSubmit(e) {
    // e.preventDefault();
    // do validation
    if (password !== c_Password) {
      return setError("Passwords don't match!");
    }
    return;
  }

  const signUp =  () =>{
    Axios.post("http://localhost:3001/userSignup", {
      first_name,
      last_name,
      email,
      password,
      c_Password,
    }).then((response) =>{
      alert("Submitted");
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <Form style={{ height: "550px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="First Name"
        // icon="person"
        required
        name="first_name"
        value={first_name}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <TextInput
        type="text"
        placeholder="Last Name"
        // icon="person"
        required
        name="last_name"
        value={last_name}
        onChange={(e) => setLastname(e.target.value)}
      />

      <TextInput
        type="email"
        placeholder="Email"
        // icon="alternate_email"
        required
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Password"
        // icon="lock"
        required
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Confirm password"
        // icon="lock_clock"
        required
        name="c_Password"
        value={c_Password}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {/* 
      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={checked}
        onChange={(e) => setChecked(e.target.value)}
      /> */}

      <Button onClick={signUp} >
        <span>Sign up</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <a href="/login">Login</a> instead.
      </div>
    </Form>
  );
}
