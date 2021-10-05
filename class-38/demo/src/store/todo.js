const axios = require('axios');

const initialState = {
    count: 1,
    results: [{
        complete: false,
        text: 'Sample Item',
        difficulty: 2,
        assignee: 'Nobody'
    }]
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_TODO':
            return payload;
        default:
            return state;
    }
}

// move this to a different file
export const getTodo = () => async (dispatch, state) => {
    const response =
        await axios.get('https://api-js401.herokuapp.com/api/v1/todo');

    const date = response.data;
    dispatch(actualGet(date));
    // dispatch({
    //     type: 'GET_TODO',
    //     payload: data
    // });
}

function actualGet(data) {
    return {
        type: 'GET_TODO',
        payload: data
    }
}