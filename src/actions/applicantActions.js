import {RETRIEVE_APPLICANT } from '../types';

export const retrieveApplicant = () => async (dispatch) => {
    fetch("/api/applicant")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: RETRIEVE_APPLICANT,
                payload: data
            });
        });
};