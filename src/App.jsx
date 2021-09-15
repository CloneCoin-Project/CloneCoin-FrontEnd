import { BrowserRouter } from 'react-router-dom';
import RenderRouter from '@routes';

import 'antd/dist/antd.css';

const App = () => {
  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  );
};

export default App;
