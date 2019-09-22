import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//SCREENS
import Recipe from './components/Recipe';
import RecipeArticle from './components/RecipeArticle';

const RecipeStack = createStackNavigator(
  {
    Recipe: Recipe,
    RecipeArticle: RecipeArticle,
  },
  {
    initialRouteName: 'Recipe',
    defaultNavigationOptions: () => ({
      title: 'Recipe',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#111',
      headerBackTitle: 'Back',
    }),
  },
);

// const rootRouter = 

export default createAppContainer(createSwitchNavigator({App: RecipeStack}));

// export default rootRouter;
