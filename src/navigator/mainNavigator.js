import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile104883Navigator from '../features/UserProfile104883/navigator';
import Maps104864Navigator from '../features/Maps104864/navigator';
import Settings104842Navigator from '../features/Settings104842/navigator';
import Settings104827Navigator from '../features/Settings104827/navigator';
import NotificationList104826Navigator from '../features/NotificationList104826/navigator';
import Maps104825Navigator from '../features/Maps104825/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile104883: { screen: UserProfile104883Navigator },
Maps104864: { screen: Maps104864Navigator },
Settings104842: { screen: Settings104842Navigator },
Settings104827: { screen: Settings104827Navigator },
NotificationList104826: { screen: NotificationList104826Navigator },
Maps104825: { screen: Maps104825Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
