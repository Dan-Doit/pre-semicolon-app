import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TabNavigation from './TabNavigation';
import PhotoNavigation from './PhotoNavigation';
import MessageNavigation from './MessageNavigation';


const MainNavigation = createStackNavigator({
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
},
{
    headerMode: "none",
    // ios에서 아래에서 올라오게 하는구문
    mode:"modal"
}

);

export default createAppContainer(MainNavigation);