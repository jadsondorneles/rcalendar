export const validateForm = (state, setState) => {
    if (state.newRemimder.title === "")
        {
            setState({
                ...state,
                newRemimder: {
                    ...state.newRemimder,
                    errorTitle: true,
                    errorTitleHelperText: 'This field cannot be blank',
                    errorDescription: false,
                    errorDescriptionHelperText: '',
                    errorDate: false,
                    errorDateHelperText: '',
                    errorTime: false,
                    errorTimeHelperText: '',
                    errorColor: false,
                    errorColorHelperText: '',  
                }
            })

            return false
        }

        if (state.newRemimder.date === null)
        {
            setState({
                ...state,
                newRemimder: {
                    ...state.newRemimder,
                    errorDate: true,
                    errorDateHelperText: 'This field cannot be blank',
                    errorTitle: false,
                    errorTitleHelperText: '',
                    errorDescription: false,
                    errorDescriptionHelperText: '',
                    errorTime: false,
                    errorTimeHelperText: '',
                    errorColor: false,
                    errorColorHelperText: '',  
                }
            })

            return false
        }

        if (String(state.newRemimder.date) === "Invalid Date")
        {
            setState({
                ...state,
                newRemimder: {
                    ...state.newRemimder,
                    errorDate: true,
                    errorDateHelperText: 'The date entered is not valid',
                    errorTitle: false,
                    errorTitleHelperText: '',
                    errorDescription: false,
                    errorDescriptionHelperText: '',
                    errorTime: false,
                    errorTimeHelperText: '',
                    errorColor: false,
                    errorColorHelperText: '',  
                }
            })

            return false
        }

        if (state.newRemimder.time === null)
        {
            setState({
                ...state,
                newRemimder: {
                    ...state.newRemimder,
                    errorTime: true,
                    errorTimeHelperText: 'This field cannot be blank',
                    errorTitle: false,
                    errorTitleHelperText: '',
                    errorDescription: false,
                    errorDescriptionHelperText: '',
                    errorDate: false,
                    errorDateHelperText: '',
                    errorColor: false,
                    errorColorHelperText: '',  
                }
            })

            return false
        }

        if (String(state.newRemimder.time) === "Invalid Date")
        {
            setState({
                ...state,
                newRemimder: {
                    ...state.newRemimder,
                    errorTime: true,
                    errorTimeHelperText: 'The time entered is not valid',
                    errorTitle: false,
                    errorTitleHelperText: '',
                    errorDescription: false,
                    errorDescriptionHelperText: '',
                    errorDate: false,
                    errorDateHelperText: '',
                    errorColor: false,
                    errorColorHelperText: '',  
                }
            })

            return false
        }

    if (state.newRemimder.color === "")
    {
        setState({
            ...state,
            newRemimder: {
                ...state.newRemimder,
                errorColor: true,
                errorColorHelperText: 'Please select some color',
                errorTitle: false,
                errorTitleHelperText: '',
                errorDescription: false,
                errorDescriptionHelperText: '',
                errorDate: false,
                errorDateHelperText: '',
                errorTime: false,
                errorTimeHelperText: '',
            }
        })

        return false
    }

    return ( true )
}