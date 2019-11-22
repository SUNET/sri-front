export const LOADED = "APP_LOADED";
export const START_FETCHING = "START_FETCHING";
export const STOP_FETCHING = "STOP_FETCHING";
export const IAM = "IAM";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

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

export function iam(user) {
    return {
        type: IAM,
        payload: {
            user: user
        }
    };
}

export function updateProfile(profile) {
    console.log("actions");
    return {
        type: UPDATE_PROFILE,
        payload: {
            profile: profile
        }
    };
}
