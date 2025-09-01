import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionType"
import { api } from "../../config/apiConfig";
 export const createPayment =(orderId)=> async(dispatch)=>{
 dispatch({type:CREATE_PAYMENT_REQUEST})
 try {
    const {data} = await api.post(`/api/payments/${orderId}`,{});
if(data.approvalUrl){
   window.location.href = data.approvalUrl;
}
 } catch (error) {
    dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
 
 }
} 


 export const updatePayment =(reqdata) =>async (dispatch) =>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try {
       const {data} = await api.get(`/api/payments?paymentId=${reqdata.paymentId}&PayerID=${reqdata.payerId}&orderId=${reqdata.orderId}`);
              dispatch({ type: "UPDATE_PAYMENT_SUCCESS", payload: data });
    } catch (error) {
     dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message});   
    }
 }
 