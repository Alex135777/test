import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#757781',
    },
    primary: {
      main: '#3286d4',
    }
  },
});

function App() {

  const submitHandle = (e) => {
    console.log(e.target);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='root-container'>
        <div className='background'>
          <div className='sign-in'>
            <h2 className='title'>
              Sign in
            </h2>
            <form onSubmit={submitHandle} autoComplete='off'>
              <TextField
                placeholder='USER NAME'
                margin='normal'
                fullWidth
                name='email'
                InputProps={{
                  classes: {
                    root: 'input',
                  },
                  startAdornment: <PersonIcon className='icon' color='secondary'/>,
                }}
              />
              <TextField
                placeholder='PASSWORD'
                margin='normal'
                fullWidth
                name='password'
                type='password'
                InputProps={{
                  classes: {
                    root: 'input'
                  },
                  startAdornment: <LockIcon className='icon' color='secondary'/>,
                }}
              />
              <Grid container className='links'>
                <Grid item xs>
                  <Link href='#' color='primary'>Forgot password?</Link>
                </Grid>
                <Grid item>
                  <span>Don't have an account? </span>
                  <Link href='#' color='primary'>Sign Up</Link>
                </Grid>
              </Grid>
              <Button
                type='submit'
                variant='outlined'
                color='primary'
                className='submit'
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
