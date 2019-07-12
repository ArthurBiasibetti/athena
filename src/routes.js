import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Aluno from './pages/Aluno';

const Routes = createAppContainer(createSwitchNavigator({
    Main,
    Aluno
})
);

export default Routes;