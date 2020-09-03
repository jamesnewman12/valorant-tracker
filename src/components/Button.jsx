import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(10deg, #000000 30%, #000000 90%)',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
});

function OverridesCss() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Start Tracking</Button>
    </ThemeProvider>
  );
}

export default OverridesCss;