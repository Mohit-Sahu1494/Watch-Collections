import React from 'react'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9039149403"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[90] rounded-full bg-[var(--gold)] px-6 py-3 font-medium text-white shadow-[0_12px_34px_rgba(0,0,0,0.35)] transition hover:brightness-110"
    >
      Chat on WhatsApp
    </a>
  )
}

export default WhatsAppButton