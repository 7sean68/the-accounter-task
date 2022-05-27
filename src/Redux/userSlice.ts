import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultBaseApi } from "../Apis/BaseApi";
import RequestGroup from "../Apis/RequestGroup";
import User from "../Types/User";

const requestGroup = new RequestGroup();

interface UserState {
  loggingIn: boolean;
  loginError?: Error;
  user?: User;
}

interface LoginParams {
  contact: string;
  password: string;
}

const initialState: UserState = {
  loggingIn: false,
  loginError: undefined,
  user: undefined,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ contact, password }: LoginParams, thunkApi) : Promise<User> => {
    const { access_token, ...user } = await requestGroup.postUserLogin(
      contact,
      password
    );
    defaultBaseApi.authorise(access_token, () => {
      thunkApi.dispatch(userSlice.actions.logoutCompleted);
    });
    return user;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginCompleted: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logoutCompleted: (state) => {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loggingIn = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loggingIn = false;
      state.user = payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.loggingIn = false;
    });
  }
});

// Action creators are generated for each case reducer function
export const { logoutCompleted } = userSlice.actions;

export default userSlice.reducer;
