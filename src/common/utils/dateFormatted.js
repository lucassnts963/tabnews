import dayjs from 'dayjs'

export function timestamp(dateString) {
  const now = dayjs()
  const publishedAt = dayjs(dateString)

  const days = now.diff(publishedAt, 'days')
  const hours = now.diff(publishedAt, 'hours')
  const minutes = now.diff(publishedAt, 'minutes')
  const seconds = now.diff(publishedAt, 'seconds')

  if (days === 1) {
    return `há ${days} dia`
  }


  if (days > 1) {
    return `há ${days} dias`
  }

  if (hours === 1) {
    return `há ${hours} hora`
  }

  if (hours > 1 && hours < 24) {
    return `há ${hours} horas`
  }

  if (minutes === 1) {
    return `há ${minutes} minuto`
  }

  if (minutes > 1 && minutes < 60) {
    return `há ${minutes} minutos`
  }

  if (seconds === 1) {
    return `há ${seconds} minuto`
  }

  if (seconds > 1 && seconds < 60) {
    return `há ${seconds} segundos`
  }
}