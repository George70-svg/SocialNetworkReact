import { createSelector } from 'reselect'

export const getInitialized = (state) => {
    return state.app.initialized
}
