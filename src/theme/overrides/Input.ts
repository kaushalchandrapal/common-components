import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
  console.log(theme);
  
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': {
              color: theme.palette.text.disabled,
            },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
          '&:after': {
            borderBottomColor: theme.palette.text.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${alpha(theme.palette.grey[700], 0.16)}`,
          backgroundColor: alpha(theme.palette.grey[100], 0),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[100], 0),
          },
          '&.Mui-focused': {
            backgroundColor: alpha(theme.palette.grey[100], 0),
            border: `1px solid ${alpha(theme.palette.grey[700], 0.16)}`,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before, :after': {
            display: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.grey[500], 0.32),
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
              borderColor: theme.palette.text.primary,
            },
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
