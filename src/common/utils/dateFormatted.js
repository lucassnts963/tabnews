import dayjs from 'dayjs'

export function timestamp(dateString) {
  const now = dayjs()
  const publishedAt = dayjs(dateString)

  const days = now.diff(publishedAt, 'days')
  const hours = now.diff(publishedAt, 'hours')
  const minutes = now.diff(publishedAt, 'minutes')
  const seconds = now.diff(publishedAt, 'seconds')

  if (days === 1) {
    return `${days} dia`
  }


  if (days > 1) {
    return `${days} dias`
  }

  if (hours === 1) {
    return `${hours} hora`
  }

  if (hours > 1 && hours < 24) {
    return `${hours} horas`
  }

  if (minutes === 1) {
    return `${minutes} minuto`
  }

  if (minutes > 1 && minutes < 60) {
    return `${minutes} minutos`
  }

  if (seconds === 1) {
    return `${seconds} minuto`
  }

  if (seconds > 1 && seconds < 60) {
    return `${seconds} segundos`
  }
}