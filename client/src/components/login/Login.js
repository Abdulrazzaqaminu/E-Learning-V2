import {useState} from 'react';
// import {Link} from 'react-router-dom';
import Form from '../form/Form';
import Button from '../button/Button';
import TextInput from './TextInput';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();


    // const github = () =>{
    //     window.open("http://localhost:3001/auth/github", "_self");
    // }
    return(
        <Form style={{height: "300px", margin:"100px 0"}}>
            <TextInput 
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput 
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button disabled={loading} type="submit">
                <span>Login</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account have an account? <a href="/signup">Sign up</a> instead.
            </div>
        </Form>
    )
}

export default Login;