import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppError = {
  message: string;
};

export type CommonState = {
  pageTitle: string | null;
  theme: 'light' | 'dark';
  error: AppError | null;
};
const initialState: CommonState = {
  pageTitle: null,
  theme: 'light',
  error: null,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string | null>) => ({
      ...state,
      pageTitle: action.payload,
    }),
    switchTheme: (state) => {
      const theme = state.theme === 'light' ? 'dark' : 'light';

      return { ...state, theme };
    },
    setError: (state, action: PayloadAction<AppError | null>) => ({
      ...state,
      error: action.payload,
    }),
  },
});
