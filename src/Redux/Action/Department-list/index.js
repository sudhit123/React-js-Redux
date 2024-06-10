import axios from "axios";
import {DEPARTMENT_DATA_PENDING, DEPARTMENT_DATA_REJECTED, DEPARTMENT_DATA_FULLFIELD} from  "../../Type/index"

export function DepartmentData()  {
    return async (dispatch) => {
        try {
            dispatch({type: DEPARTMENT_DATA_PENDING});
            const response = await axios.get("https://taxcrmtesting.taxfile.co.in/api/Master/DepartmentList?CustId=TAX541&CompanyId=267", {
                headers: {
                    "Authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTVURISVQiLCJHSUQiOiJiMWUzNDllZi04Y2EyLTQxNDMtOTYwZC1lNDRkNGFmMGViMzMiLCJqdGkiOiIxNjc5NTEyNi01MGE3LTQ3YmMtYWI5ZC05N2NhY2ZmZjU2MjciLCJpZCI6IjIwMSIsImN1c3RpZCI6IlRBWDU0MSIsImZpcnN0bmFtZSI6IlNVREhJVCIsImxhc3RuYW1lIjoiR0hPR0hBUkkiLCJlbWFpbCI6IkFkbWluMTIyMTIxMkBnbWFpbC5jb20iLCJDb21wYW55SWQiOiIyNjciLCJyb2xlIjoiVXNlciIsIlVSb2xlIjoiVXNlciIsImxvZ2ludGltZSI6IjI4LTA1LTIwMjQgMTU6NDk6MTgiLCJJUEFkZHJlc3MiOiIxNTAuMTA3LjI0MS4xOTgiLCJleHAiOjE3MTk1Njk5NTgsImlzcyI6Imh0dHA6Ly9UYXhmaWxlQ3JtR1NULmNvbSIsImF1ZCI6Imh0dHA6Ly9UYXhmaWxlQ3JtR1NULmNvbSJ9.qjqHPfA_sgL3xBxnQDhyaHBns7cOktquHmuW4DHc4n4`
                }
            })
            console.log("response", response)
            if(response) {
                dispatch({type: DEPARTMENT_DATA_FULLFIELD, payload: response.data})
                return;
            }
        } catch (error) {
            dispatch({type: DEPARTMENT_DATA_REJECTED, payload: error})
        }
    }
}