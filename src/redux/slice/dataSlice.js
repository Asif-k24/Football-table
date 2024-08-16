import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CalculateLeagueTable from "../../components/CalculateLeagueTable";

export const fetchData = createAsyncThunk('datafetchData', async () => {
    const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json');
    const data = await response.json();
    // console.log({data})
    return data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        data: [],
        processedData: [],
        error: '',
    },
    reducers: {
        // empty, can add addtional synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                //call function here
                state.processedData = CalculateLeagueTable(action.payload)
                state.error = '';
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;