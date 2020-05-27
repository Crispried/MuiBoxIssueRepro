import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Grid container>
      <Grid item xs>
        <Box>
          <p>Hello</p>
        </Box>
      </Grid>
      <Grid item xs>
        <Container>
          <p>World</p>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
