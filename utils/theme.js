export const toggleDarkMode = () => {
  if(window) {
    document.body.classList.toggle('dark')
  }
  return
}