import Header from "./Header"
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import DogFacts from "./DogFacts"

function App() {

  return (
    <>
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
      </Switch>
    </>

  );
}

export default App;
