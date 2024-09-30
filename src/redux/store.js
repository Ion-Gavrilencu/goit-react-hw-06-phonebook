import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

// Configurația persistReducer pentru salvarea în localStorage
const persistConfig = {
  key: 'contacts',
  storage,
};

// Reducer-ul persist
const persistedReducer = persistReducer(persistConfig, contactsReducer);

// Configurarea store-ului
const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };

