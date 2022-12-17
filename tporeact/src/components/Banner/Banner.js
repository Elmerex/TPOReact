import React from "react";

//declaration export
export let msg="Hello Bannerrrrrr" 


//Esto es un componente de react
export function Banner (){
    return <div className="banner">Hello Banner</div>
}

//export default-
//esto es solo una funcion
export default function Mensaje (){
    alert(msg);
}


//Componente funcional con props
export function Banners (props){
    return <div className="banner">{ props.msg }</div>
}
