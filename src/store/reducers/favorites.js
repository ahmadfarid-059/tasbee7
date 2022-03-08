const initialState = [
    "أذكار الصباح",
    "أذكار المساء",
    "أذكار النوم"
]

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_DATA': 
        return action.payload
        case 'ADD_FAVORITE': 
        return [
            ...state,
            action.payload
        ]
        case 'REMOVE_FAVORITE': 
                return state.filter(ele => ele !== action.payload)
        default:
            return state
    }
}

export default favoritesReducer