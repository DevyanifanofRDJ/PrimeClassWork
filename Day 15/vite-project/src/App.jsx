import React, { useEffect } from "react";
import {useState} from "react";
import Card from "./components/Card";

const AppPage=()=>{
  // const getData=()=>{
  //   const pr1=fetch('https://dummyjson.com/products');
  //   pr1.then((res)=>{
  //     console.log("Response",res);
  //     const pr2=res.json();
  //     pr2.then((data)=>{
  //       console.log("Data",data);

  //     });
  //   }).catch((err)=>{
  //     console.log("Error",err);
  //   });
  // };
  // getData();
  // This above work can be done using another approach.
  // const getData=()=>{
  //     const pr1=fetch('https://dummyjson.com/products');
  //     pr1.then((res)=>{
  //       const pr2=res.json();
  //       return pr2;
  //     }).catch((err)=>{
  //       console.log("Error",err);
  //     }).then((data)=>{
  //       console.log("Data",data);
  //     });
  //   };
  //   getData();  This is called promise Chainning.
  // const getData=()=>{
  //       const pr1=fetch('https://dummyjson.com/products');
  //       pr1.then((res)=> res.json())
  //       .catch((err)=>{
  //         console.log("Error",err);
  //       }).then((data)=>{
  //         console.log("Data",data);
  //       });
  //     };
  //     getData();  
  // There is a much smaller code of the above code.
  const [content,setContent]=useState({});
  const [currPage,setCurrPage]=useState(0);

  const getData=async()=>{
    // we need to do the exception handling to avoid crashing of our code abruptly.
    try{
    const res=await fetch(`https://dummyjson.com/products?limit=10&skip=${currPage}`);
    const data=await res.json();
    console.log("Data",data);
    setContent(data);
  }catch(err){
    console.log(err);
  }
  finally{
    console.log("completed Sucessfully");
  }
  };
  // getData();
  useEffect(()=>{
    getData();
  },[currPage])

  const totalPages=Math.ceil(content.total/content.limit);
  const pages=[];
  for(let i=0;i<totalPages;i++)
  {
    pages.push(i+1);
  }

  return (
    <React.Fragment>
      <h1>hello</h1>
      <p>Something</p>
      {/* {content.map((i)=>{
        return (
          <div key={i.id}>
            <h2>{i.title}</h2>
            <p>{i.price}</p>
          </div>
        )
      })} */}
      {/* <h4>{content.products?.[0].title}</h4> */}
      <select onChange={(e)=>{
        setCurrPage(e.target.value);
      }}>
        {
          pages.map((i)=>{
            return <option>{i}</option>
          })
        }
      </select>
      {content.products?.map((i)=>{
        return <Card key={i.id} title={i.title} price={i.price} thumbnail={i.thumbnail}/>
      })}
    </React.Fragment>
  );
};

export default AppPage;