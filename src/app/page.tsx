import { AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <section className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <AlertTriangle className="h-8 w-8" aria-hidden="true" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
            Hosting Expired
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            This website is currently unavailable
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
            The hosting plan for this website has expired. Access to all website
            pages has been temporarily disabled until hosting is renewed.
          </p>

          <div className="mt-8 rounded-md border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
            Please contact the website owner or hosting administrator to restore
            access.
          </div>
        </div>
      </section>
    </main>
  );
}
