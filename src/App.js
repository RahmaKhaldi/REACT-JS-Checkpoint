import {Form,Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div style={{ display: 'block', 
    width: 700, 
    padding: 30 }}>
<h4>REACT JS Checkpoint</h4>
<Form>
<Form.Group>
<Form.Label>Enter your full name:</Form.Label>
<Form.Control type="text" 
          placeholder="Enter your full name" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Form.Group>
<Form.Group>
<Form.Label>Enter your age:</Form.Label>
<Form.Control type="number" placeholder="Enter your age" />
</Form.Group>
<br/>
<Button variant="primary" type="submit">
Click here to submit form
</Button>
</Form>
</div>
    
 

 
  );
}

export default App;
