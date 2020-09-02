import { RETRIEVE_APPLICANT } from '../types';

const applicantReducer = (
    state = { applicant: JSON.parse(localStorage.getItem("applicant") || "[]") },
    action) => {
    switch (action.type) {
        case RETRIEVE_APPLICANT:
            return { 
                applicant: action.payload };
        default:
            return state;
    }
}
export { applicantReducer };