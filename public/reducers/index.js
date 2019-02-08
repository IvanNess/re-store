
const initialState = {
    books: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'BOOKS_LOADED':
            return {
                books: payload
            }
        default:
            return state;
    }
}

export default reducer;