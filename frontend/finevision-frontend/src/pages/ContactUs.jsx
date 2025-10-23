import { useState } from "react";

export default function ContactUs(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  function submit(e){
    e.preventDefault();
    localStorage.setItem("demo_contact", JSON.stringify({name,email,message, at:new Date().toISOString()}));
    alert("Message stored (demo). Email hook later.");
    setName(""); setEmail(""); setMessage("");
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <form className="mt-4 space-y-3" onSubmit={submit}>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required/>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <textarea className="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required/>
          <button className="bg-clinic.primary text-white px-5 py-2 rounded-lg">Send</button>
        </form>
        <div className="mt-6 text-lg text-slate-700">
          Phone: +91-7820869736<br/> Email: finevision18@gmail.com
        </div>
      </div>
      <div className="bg-white border rounded-xl p-2 shadow-sm">
       <iframe
        title="Map"
        className="w-full h-full min-h-[320px] rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06ed8b3%3A0x1d9f123abc!2sFine%20Vision%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      />

      </div>
    </div>
  );
}
