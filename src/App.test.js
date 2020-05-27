import React from "react";
import App from "./App";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const unexpected = require("unexpected");
const unexpectedDom = require("unexpected-dom");
const unexpectedReaction = require("unexpected-reaction");

global.expect = unexpected.clone().use(unexpectedDom).use(unexpectedReaction);

describe("App", () => {
  it("renders App", () => {
    return expect(
      <App />,
      "when mounted",
      "to satisfy",
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
  });
});
