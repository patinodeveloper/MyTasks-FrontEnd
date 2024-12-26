export const taskReducer = (state = [], action) => {

    switch (action.type) {
        case "loadTasks":
            return action.payload;
        case "addTask":
            return [...state, action.payload];
        case "updateTask":
            return state.map((task) =>
                task.id === action.payload.id ? action.payload : task 
            );
        case "removeTask":
            return state.filter((task) => 
                task.id !== action.payload
            );
        default:
            return state;
    }
}