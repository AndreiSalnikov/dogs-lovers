import Header from "./Header"
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import DogFacts from "./DogFacts"
import DogPrediction from "./DogPrediction";

function App() {

  return (<>
      <Header>
      </Header>
      <Switch>
        <Route exact path="/">
          <Main
          />
        </Route>
        <Route path="/fact">
          <DogFacts
          />
        </Route>
        <Route path="/ball">
          <DogPrediction
          />
        </Route>
      </Switch>
    </>

  );
}

export default App;
