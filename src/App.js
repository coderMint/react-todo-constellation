// template specific deps
import './App.scss';
import TodoItemComponent from './components/TodoItemComponent/TodoItemComponent';
import AddTodoButtonComponent from './components/AddTodoButtonComponent/AddTodoButtonComponent';

// db imports 
import db from './firebase-config';
import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';

// ui imports 
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

const auth = getAuth();

const signInWithGoogle = () => {
  let provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

const SignIn = () => {
  return (
  <main>
    <button onClick={signInWithGoogle}>Sign in with google</button>
  </main>
  )
};

signOut(auth).then(() => {
  // sign out successful
}).catch((error) => {

})

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  
  // return user ? <Todos /> : <SignIn />;
  return (
    <Container maxWidth="sm">

      <form noValidate>

        {/* <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Enter ToDo"
          name="todo"
          autoFocus
          value={input}
          onChange={event => setInput(event.target.value)}
        /> */}

        {/* <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={addTodo}
          disabled={!input}
          startIcon={<AddCircleOutlineRounded />}
        >
          Add Todo
      </Button> */}

        <Box display="flex" 
          justifyContent="center" 
          alignItems="center"
          flexWrap='wrap'
          p={1}>
          <TodoItemComponent />
          <AddTodoButtonComponent />
        </Box>

      </form>


    </Container >
  )
}

export default App;