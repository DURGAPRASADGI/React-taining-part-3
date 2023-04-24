export const child=(details,roomid)=>{
    return{
        connetion (){
            console.log("connected"+details+''+roomid)
        },
        disconnection (){
            console.log("disconnected")

        }
    }
}
