import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class startButton extends React.Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
    const theme = createMuiTheme({
      overrides: {
        // Style sheet name ⚛️
        MuiButton: {
          // Name of the rule
          text: {
            // Some CSS
            background: 'linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 20,
            border: 0,
            color: 'black',
            height: 50,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
        },
      },
    });
    
    
    theme.spacing(2) // = 4 * 2
    return <startButton onClick={() => this.handleClick()}>Start Tracking</startButton>;
  }
  
}






export default startButton;