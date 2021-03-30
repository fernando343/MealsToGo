import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {RestautantsScreen} from './src/features/restaurants/screens/restaurants.screen'


export default function App() {
  return (
    <>
    <RestautantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

