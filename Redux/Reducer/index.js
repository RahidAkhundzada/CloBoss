import {combineReducers} from 'redux';

import {SignIn} from './SignIn';
import {ModalReducer} from './ModalReducer';
import {DrawerReducer} from './DrawerReducer';
import {TagReducer} from './TagReducer';

export const rootReducer = combineReducers({
  Sign: SignIn,
  Modal: ModalReducer,
  Drawer: DrawerReducer,
  Tag: TagReducer,
});
