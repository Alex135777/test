import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import logo from './spotify-logo.svg';
import './App.css';

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

const EnhancedTextField = ({ Icon, ...props }) => {
  return (
    <TextField
      margin='normal'
      fullWidth
      InputProps={{
        classes: {
          root: 'input',
        },
        startAdornment: <Icon className='icon' color='secondary'/>,
      }}
      {...props}
    />
  )
}

function App() {

  const submitHandle = () => {
    console.log('submitHandle');
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='background'>
        <div className='container'>
          <img src={logo} className='logo' alt='logo' />
          <div className='sign-in'>
            <h2 className='title'>
              Sign in
            </h2>
            <form onSubmit={submitHandle} autoComplete='off'>
              <EnhancedTextField
                placeholder='USER NAME'
                name='email'
                Icon={PersonIcon}
              />
              <EnhancedTextField
                placeholder='PASSWORD'
                name='password' type='password'
                Icon={LockIcon}
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
