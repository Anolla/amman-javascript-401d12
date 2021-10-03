let initialState = {
    candidates: [
        { name: 'Tareq', votes: 0 },
        { name: 'Suhaib', votes: 0 },
        { name: 'Ibrahim', votes: 0 },
    ],
    totalVotes: 0,
}

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            let totalVotes = state.totalVotes + 1;
            let candidates = state.candidates.map(candidate => {
                if (candidate.name === payload) {
                    return { name: candidate.name, votes: candidate.votes + 1 }
                }
                return candidate;
            });
            return { totalVotes, candidates };
        case 'RESET':
            return initialState;
        default:
            return state;
    };
}

// we will add the action here, but idealy we need to separate them into their own files
export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
};

export const decrement = (name) => {
    return {
        type: 'DECREMENT',
        payload: name
    }
};

export const reset = () => {
    return {
        type: 'RESET'
    }
};
