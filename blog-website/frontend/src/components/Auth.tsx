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
            Already have an account?  <div className="pl-2"><Link to={"/signin"}>Login</Link></div>
            
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
        <div><LabelledInput label="Password" placeholder="passkey123" onChange={(e) => {
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
}
function LabelledInput({label,placeholder,onChange} : LabelledInputType){
return <div>
    <div>
            <label onChange= {onChange} for="title" class="block mb-2 text-sm font-bold text-black-500 mt-5">{label}</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />

        </div>
</div>
}