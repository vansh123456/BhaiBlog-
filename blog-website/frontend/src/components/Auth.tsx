import { useState } from "react";
import { Link } from "react-router-dom"
import { SignupInput } from "@vansh123456/medium-common";

export const Auth =({type} : {type: "signup" | "signin"}) => {

    const [postInputs,setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <div className="pt-10">
        <div className="text-4xl font-bold">
                Create an Account
        </div>
        <div className="flex" >
         <div className=" text-slate-500">
            {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                <Link className="underline pl-1" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign up" : "Sign in"}</Link>
                </div>
        </div>
        <div>
       <LabelledInput label="Name" placeholder="John" onChange={(e) => {
            setPostInputs({
                ...postInputs, //...postInputs directly just copies previous values to new values and 
                name: e.target.value //nai values ko update kardeta hai
            })
        }}/> 
        </div>
        <div><LabelledInput label="Username" placeholder="john@1234" onChange={(e) => {
            setPostInputs({
                ...postInputs, //...postInputs directly just copies previous values to new values and 
               username: e.target.value //nai values ko update kardeta hai
            })
        }}/></div>
        <div><LabelledInput label="Password" type = {"password"} placeholder="passkey123" onChange={(e) => {
            setPostInputs({
                ...postInputs, //...postInputs directly just copies previous values to new values and 
                password: e.target.value //nai values ko update kardeta hai
            })
        }}/></div>
        </div>
        </div>
    </div>
}

interface LabelledInputType {
    label : string;
    placeholder:string;
    onChange: any;
    type? : string;
}
function LabelledInput({label,placeholder,onChange,type} : LabelledInputType){
return <div>
    <div>
            <label onChange= {onChange} for="title" class="block mb-2 text-sm font-bold text-black-500 mt-5">{label}</label>
            <input id="first_name" type= {type || "text"} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />

        </div>
</div>
}