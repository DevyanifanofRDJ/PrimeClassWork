import {useState} from "react";
import { useGetProducts } from "../hooks/useGetProducts";

const SearchPage=()=>{
    const [searchText, setSearchText] = useState("");
    const {products,loading}=useGetProducts();
    return (
        <div className="p-4">
            <div className="gap-4 flex">
                <input className="py-1 px-3 border-1 border-solid border-red-700 rounded-lg" 
                type="text" 
                value={searchText} 
                onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded-lg">Search</button>
            </div>
            <div>
                {
                    loading ? (
                        <div>Loading</div>
                    ):(
                        <div>
                            <h1 className="text-purple-500 my-6 text-xl">Products</h1>
                            <div className="grid grid-cols-3 items-center justify-center gap-4 ">
                                {products.map((item)=>{
                                return(
                                    <div className="border-blue-800 border rounded-lg p-4" key={item._id}>
                                        <h1>{item.title}</h1>
                                    <h1>{item.description}</h1>
                                    <h1>{item.price}</h1>
                                    <h1>{item.stock}</h1>
                                </div>
                            )
                            })
                        }</div>
                        </div>      
                            )
                        }
            </div>
        </div>
    );
};

export {SearchPage};