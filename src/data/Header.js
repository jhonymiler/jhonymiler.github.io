// Dados locais do header
const headerData = {
  headers: [
    { id: 1, link: '#developer-home-hero', text: 'Home' },
    { id: 2, link: '#resumo', text: 'Resumo' }
  ],
  logos: [
    { id: 1, url: '/imgs/JM-logo.svg' },
    { id: 2, url: '/imgs/JM.svg' }
  ]
}

// Hook simplificado que retorna dados locais
export function useHeader() {
  // Retorna dados locais diretamente sem GraphQL
  return {
    data: headerData,
    isLoading: false,
    error: null,
    isError: false,
    isSuccess: true
  }
}
