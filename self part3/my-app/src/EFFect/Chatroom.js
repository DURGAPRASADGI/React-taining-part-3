export const craeteconnection=()=>{
    let conectioncallback;
    let timeout
   
    return{
        
        connetion (){
            timeout=setTimeout(()=>{
                if(conectioncallback){
                    console.log("its not a your problem")
                    conectioncallback()
                }

            },2000)
        },
        v(even,callback){
            if(even!=='conected'){
                console.log("please check conected")

            }
            if(conectioncallback){
                console.log("it will notification")



            }
            conectioncallback=callback;

        },
        disconnection (){
            clearTimeout(timeout)

        }
    }
}