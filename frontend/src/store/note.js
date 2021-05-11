import { fetch } from "./csrf.js";
const initialState = {};

const LOAD_NOTES = 'notes/LOAD_NOTES';

const getUserNotes = (notes) => ({
    type: LOAD_NOTES,
    payload: notes,
})

export const getNotes = (userid) => async (dispatch) => {
    const { data: notes } = await fetch(`/api/users/${userid}/notes`, { method: 'GET'});

    dispatch(getUserNotes(notes));
}

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case LOAD_NOTES:
            newState = Object.assign({}, state);
            newState.notes = action.payload;
            return newState;
            default:
                return state;
    }
}

export default reducer;