import './polyfills'; // <- musí být opravdu PRVNÍ import

import { registerRootComponent } from 'expo';
import App from './App'; 
// (pokud máš App v kořeni jako App.tsx)

registerRootComponent(App);
