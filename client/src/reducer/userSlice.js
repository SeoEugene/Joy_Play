import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "",
        uid: "",
        accessToken: "",
    },
    reducers: {
        // 로그인하면 이 함수가 초기값으로 저장
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
        },
        // 로그아웃하면 이 함수가 초기값으로 저장
        clearUser: (state) => {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;