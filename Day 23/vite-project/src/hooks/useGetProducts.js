import {useState,useEffect} from "react";

const useGetProducts=()=>{
    const [products, setProducts] = useState([]);
    const [loading,setLoading]=useState(false);
    const getData=async()=>{
        try{
            setLoading(true);
        const resp=await fetch("http://localhost:2200/api/v1/products",{
            method:"GET",
        });
        const data=await resp.json();
        setProducts(data.data.products);
        console.log(":Data",data);
        }catch(err){
        console.log(err.message);
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        getData();
    },[]);

    return {products,loading};
};

export {useGetProducts};