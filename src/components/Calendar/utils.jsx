export const daysOfTheMonth = (year, month) => {
    const firstDay = new Date(year, month).getDay()
    const days = 32 - new Date(year, month, 32).getDate()

    let date = 1
    let daysInMonth = []
    let weekNum = days => {
        return Math.ceil((days + firstDay) / 7)
    }

    for (let i = 0; i < weekNum(days); i++) {
        let week = []
        let day = {
            date: ""
        }
        
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                week.push(day)
            } else if (date > days) {
                week.push(day)
            } else {
                week.push({ ...day, date })
                date++
            }
        }

        daysInMonth.push(week)
    }
    return daysInMonth
}