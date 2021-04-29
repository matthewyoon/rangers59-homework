import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        color: "white",
        engine: "4-Cylinder",
        fuel: "Gas",
        make: "Honda",
        model: "Civic",
        msrp: 17000.00,
        price: 19000.00,
        vehicle_type: "car",
        year: "2020"
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, } = rootSlice.actions;