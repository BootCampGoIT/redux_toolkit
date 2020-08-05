import { createAction } from "@reduxjs/toolkit";


const addNewPost = createAction("ADD_NEW_POST");
const deletePost = createAction("DELETE_POST");
const getFilterValue = createAction("FILTER_DATA");

export { addNewPost, deletePost, getFilterValue }

// const addNewPost = (post) => {
//     return {
//         type: "ADD_NEW_POST",
//         payload: post
//     }
// }

// const deletePost = (id) => {
//     return {
//         type: "DELETE_POST",
//         payload: id
//     }
// }

// const getFilterValue = (string) => {
//     return {
//         type: "FILTER_DATA",
//         payload: string
//     }
// }

