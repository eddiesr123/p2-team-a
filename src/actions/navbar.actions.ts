// Definition of actions as constants
export const navbarTypes = {
    CARTCOUNT_UPDATE: 'CARTCOUNT_UPDATE'
};

// Define what the action is composed of
// Action has a type and a payload.  The type defines the kind of action
// that has taken place, and is used by reducers to indicate how they should
// react to the action.  The payload holds data that the reducers may need
// to do their job.

export const updateCartCount = (amount: number) => (dispatch: any) => {
    dispatch({
        payload: {
            amount
        },
        type: navbarTypes.CARTCOUNT_UPDATE
    })
}