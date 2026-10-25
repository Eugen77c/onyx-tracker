// ─────────────────────────────────────────────────────────────────────────────
// Onyx Tracker website – contact and publishing details shown on the pages.
// ─────────────────────────────────────────────────────────────────────────────
window.ONYX_SITE = {
  // Responsible person (shown in the privacy policy)
  owner: 'Eugen77c',
  // Postal address for the privacy policy (leave '' to hide)
  address: '',
  // Contact e-mail shown on the website and in the privacy policy
  email: 'kelm.eu@icloud.com',
  // GitHub repository (the download button links to its releases)
  repoUrl: 'https://github.com/Eugen77c/onyx-tracker',
  // Date of the privacy policy
  policyDate: '2026-10-25',
  // Where the Riot proxy runs (shown in the privacy policy)
  proxyHosting: 'to be announced'
}

// Fills every element that has a data-site="key" attribute.
document.addEventListener('DOMContentLoaded', () => {
  const s = window.ONYX_SITE
  document.querySelectorAll('[data-site]').forEach((el) => {
    const v = s[el.getAttribute('data-site')]
    if (v) el.textContent = v
    else el.closest('[data-optional]')?.setAttribute('hidden', '')
  })
  document.querySelectorAll('[data-site-href="repo"]').forEach((el) => {
    if (s.repoUrl) el.setAttribute('href', `${s.repoUrl.replace(/\/$/, '')}/releases`)
    else el.setAttribute('hidden', '')
  })
})
