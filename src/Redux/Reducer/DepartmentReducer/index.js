const initialState = {
    data : null,
    isLoading : false,
    IsError : false
}

const departmentListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "DEPARTMENT_DATA_PENDING":
            return {
                ...state,
                isLoading : true
            }
        case "DEPARTMENT_DATA_FULLFIELD":
            return {
                ...state,
                data : action.payload,
                isLoading : false
            }
        case "DEPARTMENT_DATA_REJECTED":
            return {
                ...state,
                isLoading : false,
                IsError : true
            }
        default:
            return state;
    }
}

export default departmentListReducer;