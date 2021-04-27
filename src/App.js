import { Grid } from '@material-ui/core';
import ShoppingBascket from "./ShoppingBascket";

function App() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>
          <ShoppingBascket />

        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>
    </Grid>
  );
}

export default App;
