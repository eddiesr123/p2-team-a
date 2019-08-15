import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, GET_PRODUCTS, RESET_STATE } from '../actions/action-types/cart-actions';
import { ICartState } from '.';


const initState: ICartState = {
    items: [],
    addedItems:[],
    total: 0,
    totalItems: 0,
    checkedBox: false,
    stateCheck: false,

}
const cartReducer= (state = initState, action: any)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem: any = state.items.find((item: any)=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find((item: any)=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price,
                 totalItems: state.totalItems + 1,
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price
            let newTotalItems = state.totalItems + 1
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                totalItems: newTotalItems
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove: any= state.addedItems.find((item: any)=> action.id === item.id)
        let new_items: any = state.addedItems.filter((item: any)=> action.id !== item.id)
        let addedItem: any = state.items.find((item: any)=> item.id === action.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        let newTotalItems = state.totalItems - itemToRemove.quantity
        console.log(itemToRemove)
        addedItem.quantity = "";
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            totalItems: newTotalItems
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem: any = state.items.find((item: any)=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          let newTotalItems = state.totalItems + 1
          return{
              ...state,
              total: newTotal,
              totalItems: newTotalItems
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem: any = state.items.find((item: any)=> item.id === action.id) 

        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter((item: any)=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            let newTotalItems = state.totalItems - 1
            addedItem.quantity = "";
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalItems: newTotalItems
            }
        } 

        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            let newTotalItems = state.totalItems - 1
            return{
                ...state,
                total: newTotal,
                totalItems: newTotalItems
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6,
              checkedBox: true
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6,
            checkedBox: false
        }
    }

    if(action.type=== GET_PRODUCTS) {
        return {
            ...state,
            items: action.items,
            stateCheck: true
        }
    }

    if(action.type=== RESET_STATE) {
        return {
            ...initState,
        }
    }
    
  else{
    return state
    }
    
}

export default cartReducer
