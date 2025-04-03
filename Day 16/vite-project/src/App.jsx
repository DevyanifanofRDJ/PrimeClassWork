import { useState } from "react";

const App=()=>{
  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // const [flag,setFlag]=useState(false);
  // const handleClick=()=>{
  //   if(flag==false)
  //     setFlag(true);
  //   else  
  //     setFlag(false);
  // }
  // if(flag==false){
  // return (
  //   <div>
  //     <section>
  //       <div>
  //         <label>Name</label>
  //         <input placeholder="Type Here...." onChange={(e)=>setName(e.target.value)}></input>
  //       </div>
  //       <div>
  //         <label>Email</label>
  //         <input placeholder="Type Here...." onChange={(e)=>setEmail(e.target.value)}></input>
  //       </div>
  //       <button onClick={handleClick}>Submit</button>
  //     </section>
  //     </div>
  // );
  //   }
  //   else{
  //     return (
  //      <div>
  //         <section>
  //           <h2>Name: {name}</h2>
  //           <h4>Email: {email}</h4>
  //         </section>
  //       </div>
  //     );
  //   }

  // The above code shows the controlled component and the below code shows the uncontrolled component.

  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // const [flag,setFlag]=useState(false);
  // const handleClick=(e)=>{
  //   setName(e.target[0].value); //setName(e.target.name.value); Both works fine
  //   setEmail(e.target[1].value);
  //   if(flag==false)
  //     setFlag(true);
  //   else  
  //     setFlag(false);
  //   e.preventDefault();
  // }
  // if(flag==false){
  // return (
  //   <div>
  //     <form onSubmit={handleClick}>
  //       <div>
  //         <label>Name</label>
  //         <input name="name" placeholder="Type Here...."></input>
  //       </div>
  //       <div>
  //         <label>Email</label>
  //         <input name="email" placeholder="Type Here...."></input>
  //       </div>
  //       <button>Submit</button>
  //     </form>
  //     </div>
  // );
  //   }
  //   else{
  //     return (
  //      <div>
  //         <form>
  //           <h2>Name: {name}</h2>
  //           <h4>Email: {email}</h4>
  //         </form>
  //       </div>
  //     );
  //   }

  // Lets handle multiple input values

  const [user,setUser]=useState({
    name:"Raj",
    email:"rag@gmail.com"
  });
  const [flag,setFlag]=useState(false);
  const handleClick=(e)=>{
    if(flag==false)
      setFlag(true);
    else  
      setFlag(false);
    e.preventDefault();
  }
  console.log(user);
  if(flag==false){
  return (
    <div>
      <section>
        <div>
          <label>Name</label>
          <input name="name"  placeholder="Type Here...."
            onChange={(e)=>{
              const val=e.target.value;
              const newItem=user;
              newItem.name=val;
              setUser({ ...newItem});
            }}
            value={user.name}>
          </input>
        </div>
        <div>
          <label>Email</label>
          <input name="email" placeholder="Type Here...."
            onChange={(e)=>{
              const val=e.target.value;
              const newItem={...user};
              newItem.email=val;
              setUser(newItem);
            }}
            value={user.email}>
          </input>
        </div>
        <button onClick={handleClick}>Submit</button>
      </section>
      </div>
  );
    }
    else{
      return (
       <div>
          <section>
            {Object.entries(user).map(([key,val],idx)=>{
              return (
                <h3 key={key}>
                  {idx}.{key}::{val}
                </h3>
              );
            })}
            {Object.entries(user).map((ele,idx)=>{
              return (
                <h3 key={ele[0]}>
                  {idx}.{ele[0]}
                </h3>
              )
            })}
          </section>
        </div>
      );
    }
};

export default App;