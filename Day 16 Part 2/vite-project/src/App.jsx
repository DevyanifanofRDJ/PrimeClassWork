import { useState } from "react";
import Card from "./components/Card";
import P from "papaparse";

const App=()=>{
  const [profile,setProfile]=useState([]);
  const handleData=(res)=>{
    const {data,errors}=res;
    if(errors.length>0)
      alert("Error in Parsing");
    else
      setProfile(data);
  }
  const handleChange=(e)=>{
    const file=e.target.files[0];
    P.parse(file,{
      header: true,
      complete: handleData,
    });
  };

  return (
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleChange} />
      </div>
      <div>
        {
          profile.map((ele)=>{
            return <Card 
              name={ele.name}
              email={ele.email}
              githubLink={ele.githubLink}
            />
          })
        }
      </div>
    </div>
  );
};

export default App;