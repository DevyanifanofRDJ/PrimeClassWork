import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Card = ({name,email,githubLink})=>{
    const [data,setData]=useState({});
    const res=githubLink.split("/");
    const userId=res[3];
    const getData=async()=>{
        const resp=await fetch(`https://api.github.com/users/${userId}`);
        const temp=await resp.json();
        setData(temp);
    };

    useEffect(()=>{
        getData();
    },[]);
    return (
        <div>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <a href={githubLink} target='_blank'>View Profile</a>
            <img width="125" src={data?.avatar_url} alt='profile photo'/>
        </div>
    );
};

export default Card;