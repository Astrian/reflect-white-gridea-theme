changeColorScheme()
function changeColorScheme(pref) {
  if (pref) localStorage.setItem('rw-colorscheme', pref)
  else pref = localStorage.getItem('rw-colorscheme')
  if (!pref){
    localStorage.setItem('rw-colorscheme', 'system')
    pref = 'system'
  }
  switch (pref) {
    case 'system': {
      let systemColorscheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      if (systemColorscheme === 'dark') document.getElementsByTagName("body")[0].setAttribute("class", "darkscheme")
      else document.getElementsByTagName("body")[0].setAttribute("class", "" )
      document.getElementById('colorSchemeSystem').style['font-weight'] = 'bold'
      document.getElementById('colorSchemeDark').style['font-weight'] = 'normal'
      document.getElementById('colorSchemeLight').style['font-weight'] = 'normal'
      break
    }
    case 'dark': {
      document.getElementsByTagName("body")[0].setAttribute("class", "darkscheme")
      document.getElementById('colorSchemeSystem').style['font-weight'] = 'normal'
      document.getElementById('colorSchemeDark').style['font-weight'] = 'bold'
      document.getElementById('colorSchemeLight').style['font-weight'] = 'normal'
      break
    }
    case 'light': {
      document.getElementsByTagName("body")[0].setAttribute("class", "")
      document.getElementById('colorSchemeSystem').style['font-weight'] = 'normal'
      document.getElementById('colorSchemeDark').style['font-weight'] = 'normal'
      document.getElementById('colorSchemeLight').style['font-weight'] = 'bold'
      break
    }
  }
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  changeColorScheme()
})