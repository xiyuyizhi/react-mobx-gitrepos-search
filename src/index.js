import React from 'react';
import { render } from 'react-dom';
import Scroll from "./component/scroll"
import Search from "./component/search"
import List from "./component/list"
import SearchGitStore from "./model/searchGitStore"
import {
  styles_app
} from "./style.js"



const searchGitStore = new SearchGitStore()


const App = () => (
  <div style={styles_app}>
    <Scroll store={searchGitStore}>
      <Search store={searchGitStore}></Search>
      <List store={searchGitStore}></List>
    </Scroll>
  </div>
);

render(<App />, document.getElementById('root'));
