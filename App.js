

import {  Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'
import Aux from './pages/SubApp';
function App() {
  
  return (
    <StoreProvider store={store}>
      <Aux />
    </StoreProvider>
  );
}

export default App;