export const sendMessageWhatsapp = () => {
  if (typeof window === 'undefined') return
  const body = {
    message: `Olá, Leandro! Tudo bem? Cheguei até você através do seu portfólio. Será que você teria alguns minutos para conversarmos?`,
    phone: '5585988413190',
  }
  window.open(
    `https://api.whatsapp.com/send?phone=${body.phone}&text=${body.message}`,
  )
  return {}
}
