
import NotiState from './Context/notifications/NotiState';
import Aux from './pages/SubApp';
import 'react-native-gesture-handler'
function App() {
  
  return (
    <NotiState>
      <Aux />
    </NotiState>
    
  );
}

export default App;