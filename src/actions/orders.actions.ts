import { orderConstants } from '../constants/order.constants';
import { orderService } from '../services/order.service';
import { alertActions } from '../actions/alert.actions';

export const ordersActions = {
    getOrdersById
};

function getOrdersById(userid: any) {
    return (dispatch: any) => {
        dispatch(request({ userid }));

        orderService.getOrdersById(userid)
            .then(
                order => { 
                    dispatch(success(userid));         
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(order: any) { return { type: orderConstants.GETBYID_REQUEST, order } }
    function success(order: any) { return { type: orderConstants.GETBYID_SUCCESS, order } }
    function failure(error: any) { return { type: orderConstants.GETBYID_FAILURE, error } }
}