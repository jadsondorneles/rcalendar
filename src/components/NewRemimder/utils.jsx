export const validateForm = (state, setState) => {
    if (state.newRemimber.title === "")
        {
            setState({
                ...state,
                newRemimber: {
                    ...state.newRemimber,
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

        if (state.newRemimber.date === null)
        {
            setState({
                ...state,
                newRemimber: {
                    ...state.newRemimber,
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

        if (String(state.newRemimber.date) === "Invalid Date")
        {
            setState({
                ...state,
                newRemimber: {
                    ...state.newRemimber,
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

        if (state.newRemimber.time === null)
        {
            setState({
                ...state,
                newRemimber: {
                    ...state.newRemimber,
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

        if (String(state.newRemimber.time) === "Invalid Date")
        {
            setState({
                ...state,
                newRemimber: {
                    ...state.newRemimber,
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

    if (state.newRemimber.color === "")
    {
        setState({
            ...state,
            newRemimber: {
                ...state.newRemimber,
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