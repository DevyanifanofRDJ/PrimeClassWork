const obj={
    name:"Devyani",
    city:"Delhi",
    country: undefined, 
    info:{
        college: "ABES"
    }                        // Null is fixed no default will be assigned in this case but in case of default default value will be assinged
};

// const {city}=obj;

// const {city,country}=obj;
// console.log(city,country);

const {city,country="India"}=obj;

// This is similar to packing and unpacking in python

