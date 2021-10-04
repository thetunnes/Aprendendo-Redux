import { Provider } from 'react-redux'

import SideBar from "./components/SideBar";
import Video from "./components/Video";

import store from './store'

import GlobalStyle from './styles'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
    <Provider store={store} >
    <SideBar />
    <Video />
    </Provider>
    </div>
  );
}

export default App;
