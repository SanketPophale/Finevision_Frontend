import { useState } from "react";

export default function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function submit(e){
    e.preventDefault();
    localStorage.setItem("demo_registered", JSON.stringify({name,email}));
    alert("Registered (demo). Connect to backend later.");
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form className="space-y-3" onSubmit={submit}>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required/>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button className="w-full bg-clinic.primary text-white rounded-lg py-2">Create account</button>
        </form>
      </div>
    </div>
  );
}
