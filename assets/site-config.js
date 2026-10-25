// ─────────────────────────────────────────────────────────────────────────────
// Onyx Tracker website – the ONLY place you need to edit before publishing.
// Fill in your details, save, then upload the whole "site" folder.
// ─────────────────────────────────────────────────────────────────────────────
window.ONYX_SITE = {
  // Your full name (shown as the responsible person in the privacy policy)
  owner: 'Eugen77c',
  // Postal address for the privacy policy (required in the EU; leave '' to hide)
  address: '',
  // Contact e-mail shown on the website and in the privacy policy
  email: 'kelm.eu@icloud.com',
  // Link to your GitHub repository, e.g. 'https://github.com/yourname/onyx-tracker'
  repoUrl: 'https://github.com/Eugen77c/onyx-tracker',
  // Date of the privacy policy, e.g. '2026-10-26'
  policyDate: '2026-10-26',
  // Where the Riot proxy runs, e.g. 'Hetzner, Germany' (shown in the privacy policy)
  proxyHosting: 'to be announced'
}

// Fills every element that has a data-site="key" attribute.
document.addEventListener('DOMContentLoaded', () => {
  const s = window.ONYX_SITE
  const unset = s.owner === 'YOUR NAME' || s.email === 'you@example.com'
  document.querySelectorAll('[data-site]').forEach((el) => {
    const v = s[el.getAttribute('data-site')]
    if (v) el.textContent = v
    else el.closest('[data-optional]')?.setAttribute('hidden', '')
  })
  document.querySelectorAll('[data-site-href="repo"]').forEach((el) => {
    if (s.repoUrl) el.setAttribute('href', `${s.repoUrl.replace(/\/$/, '')}/releases`)
    else el.setAttribute('hidden', '')
  })
  const banner = document.getElementById('setup-banner')
  if (banner) banner.hidden = !unset
})
