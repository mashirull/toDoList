import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddModal : false,
    showEditModal : false,
    showDeleteModal : false
}

const modalSlice = createSlice({
    name : "modal",
    initialState ,
    reducers : {
        setShowAddModal : (state , action) => {
            state.showAddModal = action.payload
        },

        setShowEditModal : (state , action) => {
            state.showEditModal = action.payload
        },
        setShowDeleteModal : (state , action) => {
            state.showDeleteModal = action.payload
        }
    }
});

export const {setShowAddModal , setShowEditModal , setShowDeleteModal} = modalSlice.actions;
export default modalSlice.reducer
