    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice=createSlice({

        name:'myca',

        initialState:{
            cart:[]
        },

        reducers:{
            addToCart:(state,actions)=>{
            
                const cartData=state.cart.filter(e=>e.id==actions.payload.id)

                if(cartData.length>=1){
                    alert('product is already added')
                } else{
                    state.cart.push(actions.payload)
                    alert('added')
                }
            },

            quantyIncrease:(state,actions)=>{
                const item=state.cart.find(e=>e.id===actions.payload.id)

                if(item){
                    item.qnty++;
                }
            },

            quantyDecreae:(state,actions)=>{

                const item=state.cart.find(e=>e.id===actions.payload.id)

                if(!item){
                    return
                }
                if(item.qnty>1){
                    item.qnty--
                } else{
                    state.cart=state.cart.filter(e=>e.id !== actions.payload.id)
                }
            },
            productRemove:(state, actions)=>{
                state.cart=state.cart.filter(e=>e.id!=actions.payload.id)
            },
            cartEmpty:(state)=>{
                state.cart=[];
            }

        }

    })
    export const{addToCart,quantyDecreae,quantyIncrease,productRemove,cartEmpty}=cartSlice.actions

    export default cartSlice.reducer
