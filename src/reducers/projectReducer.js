export const projectReducer = (state = [], action) => {

    switch (action.type) {
        case "loadProjects":
            return action.payload;
        case "addProject":
            return [...state, action.payload];
        case "updateProject":
            return state.map((p) =>
                p.id === action.payload.id ? action.payload : p 
            );
        case "removeProject":
            return state.filter((p) => 
                p.id !== action.payload
            );
        default:
            return state;
    }
}