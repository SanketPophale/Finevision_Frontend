import { useState } from "react";

export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  function submit(e){
    e.preventDefault();
    localStorage.setItem("demo_user", JSON.stringify({email}));
    alert("Logged in (demo). Backend comes later.");
  }
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form className="space-y-3" onSubmit={submit}>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button className="w-full bg-clinic.primary text-white rounded-lg py-2">Login</button>
        </form>
        <p className="text-sm mt-3 text-slate-600">No account? <a className="text-clinic.primary" href="/register">Register</a></p>
      </div>
    </div>
  );
}
