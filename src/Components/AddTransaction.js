import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction=()=>{
    const[text,setText] =useState('');
    const[amount,setAmount]=useState(0);
    const {addTransaction} = useContext(GlobalContext)

    const changeAmount=(e)=>{
        setAmount(e.target.value)
        // console.log(e.target.value);
    }

    const ChangeText=(e)=>{
        setText(e.target.value)
        // console.log(e.target.value);
    }

    const onSubmit= e=>{
        e.preventDefault();

        const newTransaction ={
            id:Math.floor(Math.random()*1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)

    }

    return(
        <>
       <h3>Add new transaction</h3>
       <form onSubmit={onSubmit }> 
           <div className="form-control">
               <label htmlFor="text">Text</label>
               <input type='text'value={text} onChange={ChangeText} placeholder="Enter text..."/>
           </div>

           <div className="form-control">
               <label htmlFor="amount">Amount<br/>
               (negative - expense, positive - income)</label>
               <input type='number' value={amount} onChange={changeAmount} placeholder="Enter Amount..."/>
           </div>
           <button className="btn">Add transaction</button>
       </form>
      
        </>
    )

}

export default AddTransaction;