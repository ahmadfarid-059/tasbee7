const fontReducer = (state = 14, action) => {
    switch (action.type) {
        case 'CHANGE_FONT': 
        return action.payload
        default:
            return state
    }
}

export default fontReducer