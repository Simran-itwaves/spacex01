import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import moment from "moment";
import {
  fetchQueryLaunchesAPI,
  fetchOneLaunchAPI,
} from "../../Acitons/launches";

export const fetchQueryLaunchesData = createAsyncThunk(
  "launches/fetchLaunchesData",
  fetchQueryLaunchesAPI
);

export const fetchOneLaunchData = createAsyncThunk(
  "launches/fetchOneLaunchData",
  fetchOneLaunchAPI
);

const initialState = {
  loading: false,
  launches: [],
  launch: {},
  query: {},
  totalPages: 0,
  page: 0,
};
const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      const { query } = current(state);
      if (action.payload) {
        state.query = { ...query, $text: { $search: action.payload } };
      } else {
        const { $text, ...rest } = state.query;
        state.query = rest;
      }
    },
    filterDateQuery: (state, action) => {
      const { query } = current(state);
      if (action.payload === "all") {
        const { date_utc, ...rest } = state.query;
        state.query = rest;
      } else {
        state.query = {
          ...query,
          date_utc: {
            $gte: moment().subtract(1, `${action.payload}`).format(),
            $lte: moment(),
          },
        };
      }
    },
    filterStatusQuery: (state, action) => {
      const { query } = current(state);
      if (action.payload === "all") {
        const { success, ...rest } = state.query;
        state.query = rest;
      } else {
        state.query = { ...query, success: action.payload };
      }
    },
    filterUpcomingQuery: (state, action) => {
      const { query } = current(state);
      if (action.payload) {
        state.query = { ...query, upcoming: action.payload };
      } else {
        const { upcoming, ...rest } = state.query;
        state.query = rest;
      }
    },
  },
  extraReducers: {
    [fetchQueryLaunchesData.pending]: (state) => {
      state.loading = true;
    },
    [fetchQueryLaunchesData.fulfilled]: (state, action) => {
      state.loading = false;
      state.launches = action.payload.docs;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
    },
    [fetchQueryLaunchesData.rejected]: (state) => {
      state.loading = false;
    },
    // [fetchOneLaunchData.pending]: (state) => {
    //   state.loading = true;
    // },
    [fetchOneLaunchData.fulfilled]: (state, action) => {
      state.launch = action.payload;
    },
    // [fetchOneLaunchData.rejected]: (state) => {
    //   state.loading = false;
    // },
  },
});
export const {
  searchQuery,
  filterDateQuery,
  filterStatusQuery,
  filterUpcomingQuery,
} = launchesSlice.actions;
export default launchesSlice.reducer;
