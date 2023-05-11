import { useTheme } from '@mui/material/styles';
import { Box, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Demo = () => {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  
  return (
    <>
      <Helmet>
        <title>Demo</title>
      </Helmet>
      <Typography variant='h1' color={theme.palette.primary.main}>Demo</Typography>
      <Box>
        <TextField
          placeholder="Name"
          label="Name"
          variant="filled"
        />
        <TextField
          placeholder="Name"
          label="Name"
        />
      </Box>
    </>
  )
}

export default Demo