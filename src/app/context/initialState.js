export const initialState = {
    task: JSON.parse(localStorage.getItem("task")) || [],
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
}