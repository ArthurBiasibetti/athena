import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import index from './pages/Main';

const Routes = createAppContainer(createSwitchNavigator({
    index
})
);

export default Routes;