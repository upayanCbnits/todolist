import './App.css';
import DashBoard from './components/dashBoard';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#EB5757'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <DashBoard />
    </MuiThemeProvider>
  );
}

export default App;
