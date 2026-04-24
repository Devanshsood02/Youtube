import { useState } from 'react'
import { Link } from 'react-router'

/* ─── Eye toggle icon ────────────────────────────────────────── */
const EyeIcon = ({ open }) =>
  open ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-[18px] h-[18px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-[18px] h-[18px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  )

/* ─── Underline input field ──────────────────────────────────── */
const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-0 group/field">
    <label
      htmlFor={id}
      className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#8B7355] mb-2 transition-colors duration-200 group-focus-within/field:text-[#1d1b18]"
    >
      {label}
    </label>
    {children}
    {/* Animated underline */}
    <div className="h-px bg-[#d1c4b9] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1d1b18] translate-x-[-100%] group-focus-within/field:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]" />
    </div>
  </div>
)

const inputCls =
  'w-full bg-transparent text-[#1d1b18] placeholder-[#c4b89e] pb-2.5 pt-1 text-[15px] tracking-wide outline-none caret-[#8B7355] leading-none'

/* ─── Register Page ──────────────────────────────────────────── */
const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    contact: '',
    isSeller: false,
  })
  const [showPw, setShowPw] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Register payload →', form)
  }

  return (
    <div
      className="min-h-screen w-full flex"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F5F0EA' }}
    >
      {/* ══════════════════ LEFT — Editorial Image ════════════════════ */}
      <div className="hidden lg:block lg:w-[48%] xl:w-[52%] relative overflow-hidden flex-shrink-0">
        <img
          src="/editorial-hero.png"
          alt="SNITCH — Define Your Style"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(29,27,24,0.55) 0%, rgba(29,27,24,0.08) 50%, transparent 100%)' }}
        />
        {/* Bottom brand statement on image */}
        <div className="absolute bottom-10 left-10 right-10">
          <p
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#dfc29f] mb-2"
          >
            New Collection
          </p>
          <h2
            className="text-white leading-tight mb-3"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: '2.4rem', fontWeight: 600 }}
          >
            Define<br />Your Style
          </h2>
          <p className="text-[13px] text-[#cec5be] tracking-wide">
            Modern Menswear for Every Occasion
          </p>
        </div>
      </div>

      {/* ══════════════════ RIGHT — Form Panel ═══════════════════════ */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-16 bg-[#F5F0EA] overflow-y-auto">
        <div className="w-full max-w-[400px]">

          {/* ── Brand ── */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              {/* Needle + thread SVG motif */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B7355]">
                <path d="M12 2C10.9 2 10 2.9 10 4C10 4.74 10.4 5.38 11 5.73V8H13V5.73C13.6 5.38 14 4.74 14 4C14 2.9 13.1 2 12 2Z" fill="currentColor" opacity="0.5"/>
                <path d="M11 8H13L20 20H4L11 8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
                <circle cx="12" cy="4" r="1.2" fill="currentColor"/>
              </svg>
              <span
                className="text-[22px] font-black tracking-[0.32em] text-[#1d1b18]"
                style={{ letterSpacing: '0.32em' }}
              >
                SNITCH
              </span>
            </div>
            {/* Thin rule */}
            <div className="h-px bg-[#d1c4b9] mb-5" />
            {/* Decorative italic quote */}
            <p
              className="text-[12px] text-[#8B7355] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontStyle: 'italic', letterSpacing: '0.02em' }}
            >
              "Style is a way to say who you are without having to speak."
            </p>
            {/* Page headline */}
            <h1
              className="text-[#1d1b18] mb-1.5"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: '2rem', fontWeight: 600, lineHeight: 1.15, letterSpacing: '0.01em' }}
            >
              Create Account
            </h1>
            <p className="text-[13px] text-[#8B7355] tracking-wide">
              Join the future of fashion
            </p>
          </div>

          {/* ── Form ── */}
          <form
            id="register-form"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-7"
          >
            {/* Full Name */}
            <Field id="reg-fullname" label="Full Name">
              <input
                id="reg-fullname"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                className={inputCls}
              />
            </Field>

            {/* Email */}
            <Field id="reg-email" label="Email Address">
              <input
                id="reg-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={inputCls}
              />
            </Field>

            {/* Password */}
            <Field id="reg-password" label="Password">
              <div className="relative">
                <input
                  id="reg-password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                  className={`${inputCls} pr-8`}
                />
                <button
                  type="button"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-0 bottom-2.5 text-[#8B7355] hover:text-[#1d1b18] transition-colors duration-200"
                >
                  <EyeIcon open={showPw} />
                </button>
              </div>
            </Field>

            {/* Contact Number */}
            <Field id="reg-contact" label="Contact Number">
              <input
                id="reg-contact"
                name="contact"
                type="tel"
                value={form.contact}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                autoComplete="tel"
                className={inputCls}
              />
            </Field>

            {/* isSeller checkbox */}
            <div className="flex items-center gap-3 pt-1">
              <div className="relative flex-shrink-0">
                <input
                  id="reg-isSeller"
                  name="isSeller"
                  type="checkbox"
                  checked={form.isSeller}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <label
                  htmlFor="reg-isSeller"
                  className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer border border-[#8B7355] bg-transparent transition-all duration-200 peer-checked:bg-[#1d1b18] peer-checked:border-[#1d1b18] peer-focus-visible:ring-1 peer-focus-visible:ring-[#8B7355] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#F5F0EA]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-2.5 h-2.5 text-[#F5F0EA] transition-opacity duration-150 ${form.isSeller ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                </label>
              </div>
              <span
                className="text-[13px] text-[#4d453c] tracking-wide cursor-pointer select-none"
                onClick={() => setForm((p) => ({ ...p, isSeller: !p.isSeller }))}
              >
                Register as a{' '}
                <span className="text-[#1d1b18] font-semibold underline underline-offset-2 decoration-[#8B7355]">
                  Seller
                </span>
              </span>
            </div>

            {/* CTA */}
            <button
              id="reg-submit"
              type="submit"
              className="w-full mt-4 py-4 px-6 text-[11px] font-bold tracking-[0.22em] uppercase text-[#F5F0EA] bg-[#1d1b18] cursor-pointer transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-[#8B7355] active:scale-[0.985]"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center mt-8 text-[13px] text-[#8B7355] tracking-wide">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#1d1b18] font-semibold underline underline-offset-4 decoration-[#8B7355] hover:text-[#8B7355] transition-colors duration-200"
            >
              Sign In
            </Link>
          </p>

          {/* Bottom editorial tag */}
          <div className="flex items-center gap-2 mt-12 justify-center opacity-40">
            <div className="h-px w-8 bg-[#8B7355]" />
            <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#8B7355]">
              Est. 2020 · Premium Menswear
            </span>
            <div className="h-px w-8 bg-[#8B7355]" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register