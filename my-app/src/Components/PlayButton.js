import './PlayButton.css'

// u can send the function as parameter also
function Button(){
  
   function EventHandler(onClick){
    return(
     onClick()
    );
   }
   
    return (
     <>
     <button  className="Button" onClick={EventHandler}>message</button>
     </>
    );
}

export default Button;