export const LOADED = "APP_LOADED";
export const START_FETCHING = "START_FETCHING";
export const STOP_FETCHING = "STOP_FETCHING";

export function appLoaded() {
    return {
        type: LOADED
    };
}

export function startFetching() {
    return {
        type: START_FETCHING
    };
}

export function stopFetching() {
    return {
        type: STOP_FETCHING
    };
}
