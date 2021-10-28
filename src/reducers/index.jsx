import { combineReducers } from "redux"
import { v4 as uuid } from 'uuid'

const initialState = {
    today: new Date(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    currentDateSelected: null,
    dialogRemimber: false,
    dialogAllRemimders: false,
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
    remimders: [
        {
            id: uuid(),
            title: 'Meeting on changing requirements',
            description: 'Change of requirements upon final alignment with the customer',
            date: new Date(),
            time: new Date(),
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
            return { ...data, remimders: action.remimders }
        default:
            return data
    }
}

export const reducers = combineReducers({
    state
})