import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export const humanFirendlyDate = (date) => {
    return format(date, "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'", { locale: ptBR })
    // return new Intl.DateTimeFormat(
    //     'pt-BR',
    //     {
    //         weekday: 'long',
    //         hour: 'numeric',
    //         minute: 'numeric',
    //         month: 'long',
    //         day: '2-digit',
    //         year: 'numeric'
    //     }
    // ).format(new Date(date))
}

export const publishedDateRelativeToNow = (date) => {
    return formatDistanceToNow(date, { locale: ptBR, addSuffix: true })
}