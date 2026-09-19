import { useState } from 'react';
import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from '../ui/sonner.js';

export default function Contact() {
  const sectionRef = useSectionAnimation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }
    setSubmitted(true);
    toast.success('Thanks! We\'ll be in touch.');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-testid="contact-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="scroll-fade-up mb-10">
          <p className="font-body text-sm text-nxAccent font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100"
            data-testid="contact-title"
          >
            Get in Touch
          </h2>
          <p className="mt-4 font-body text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Ready to build something remarkable? Leave your email and let's talk.
          </p>
        </div>

        <div className="scroll-fade-up" data-testid="contact-form-container">
          {submitted ? (
            <div className="nx-card rounded-xl p-12 text-center" data-testid="contact-form-success">
              <CheckCircle className="w-12 h-12 text-nxAccent mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl text-zinc-900 dark:text-zinc-100 mb-2">
                Thank you!
              </h3>
              <p className="font-body text-sm text-zinc-600 dark:text-zinc-400">
                We'll review your inquiry and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
              data-testid="contact-form"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="contact-input-email"
                className="flex-1 px-4 py-3 bg-white dark:bg-[#10131C] border border-zinc-900/10 dark:border-white/10 rounded-lg font-body text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-nxAccent/50 focus:outline-none focus:ring-1 focus:ring-nxAccent/20 transition-colors"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                data-testid="contact-form-submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-nxAccent text-white font-body font-medium text-sm rounded-lg btn-glow hover:bg-[#1565C0] transition-colors duration-300 justify-center"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
