import { combineReducers } from "redux"
import { v4 as uuid } from 'uuid'

const initialState = {
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    today: new Date(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    currentDateSelected: null,
    dialogRemimber: false,
    dialogAllRemimbers: false,
    editRemimber: false,
    newRemimber: {
        id: uuid(),
        title: '',
        errorTitle: false,
        errorTitleHelperText: '',
        description: '',
        errorDescription: false,
        errorDescriptionHelperText: '',
        date: new Date(),
        errorDate: false,
        errorDateHelperText: '',
        time: new Date(),
        errorTime: false,
        errorTimeHelperText: '',
        color: '',
        errorColor: false,
        errorColorHelperText: '',        
    },
    remimbers: [
        {
            id: uuid(),
            title: 'Meeting on changing requirements',
            description: 'Change of requirements upon final alignment with the customer',
            date: 'Tue Oct 26 2021 13:21:13 GMT-0300 (Horário Padrão de Brasília)',
            time: 'Tue Oct 26 2021 13:21:13 GMT-0300 (Horário Padrão de Brasília)',
            color: '#cd8de5'        
        },
    ]
}

export const state = (data = initialState, action) => {
    switch (action.type)
    {
        case "STATE":
            return action.state
        case "TODAY":
            return { ...data, today: action.today }
        case "CURRENTMONTH":
            return { ...data, currentMonth: action.currentMonth }
        case "CURRENTYEAR":
            return { ...data, currentYear: action.currentYear }
        case "CREATEREMIMBER":
            return { ...data, dialogRemimber: action.dialogRemimber }
        case "NEWREMIMBER":
            return { ...data, newRemimber: action.newRemimber }
        case "REMIMBERS":
            return { ...data, remimbers: action.remimbers }
        default:
            return data
    }
}

export const reducers = combineReducers({
    state
})