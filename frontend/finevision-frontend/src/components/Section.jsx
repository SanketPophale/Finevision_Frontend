export function Section({id, title, subtitle, children}){
return (
<section id={id} className="py-14">
<div className="max-w-6xl mx-auto px-4">
{title && (
<div className="mb-8">
<h2 className="text-3xl font-bold text-clinic.dark">{title}</h2>
{subtitle && <p className="text-slate-600 mt-2">{subtitle}</p>}
</div>
)}
{children}
</div>
</section>
);
}