export const initState = () => {
    try {
        const initialState = localStorage.getItem('comments');
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
        localStorage.setItem('comments', serializedState)
    }
    catch (err) {}
}