export default function Footer(){
return (
<footer className="bg-white border-t">
<div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-sm">
<div>
<div className="font-bold text-clinic.primary">Fine Vision Clinic</div>
<p className="mt-2 text-slate-600">Comprehensive eye care • Vision therapy • Sports vision • Contact lenses</p>
</div>
<div>
<div className="font-semibold">Hours</div>
<p className="text-slate-600 mt-2">Monday–Friday: 10.30 am to 1.00 pm<br/>Saturday: 10.30 am to 1.00 pm<br/>Sunday: Closed</p>
</div>
<div>
<div className="font-semibold">Contact</div>
<p className="text-slate-600 mt-2">📍 1, Raghukul Apartments, S.B.Road, Pune, 411016<br/>☎️ 020-25676677<br/>✉️ finevision18@gmail.com</p>
</div>
</div>
<div className="border-t py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Fine Vision of Optometry & Contact Lens Clinic. For demo only.</div>
</footer>
);
}