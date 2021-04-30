export const initState = () => {
    try {
        const initialState = localStorage.getItem('token');
        if (initialState === null) {
            return undefined;
        }
        return JSON.parse(initialState);
    }
    catch (err) {
        return undefined;
    };
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('token', serializedState)
    }
    catch (err) {}
}
