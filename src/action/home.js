
 const home = {
    namespaced:true,
     state:{
         list:['jia','ji','wen']
     },
     mutations:{
       changelist(state,action){
          state.list.push(action.type)
       }
     },
     actions:{
       async change(ctx,action){
                ctx.commit('changelist',action)
         }
     }
    }

    export default home;