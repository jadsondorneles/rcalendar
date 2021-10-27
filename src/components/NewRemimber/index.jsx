import { forwardRef } from 'react'

import { connect } from "react-redux"
import { setState } from "../../actions"

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker'
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { v4 as uuid } from 'uuid'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const NewRemimber = ({ state, setState }) => {
    
    const handleClose = () => {
        setState({ ...state, dialogRemimber: false })
    }

    const handleRemove = () => {
        setState({
            ...state,
            dialogRemimber: false,
            editRemimber: false,
            remimbers: state.remimbers.filter((remimber) => remimber.id !== state.newRemimber.id)
        })
    }

    const validateForm = () => {
        
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

    const handleSubmit = () => {
        if (validateForm())
        {
            setState({
                ...state,
                dialogRemimber: false,
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
                    ...state.remimbers,
                    {
                        id: uuid(),
                        title: state.newRemimber.title,
                        description: state.newRemimber.description,
                        date: state.newRemimber.date,
                        time: state.newRemimber.time,
                        color: state.newRemimber.color
                    }
                ]
            })
        }
    }

    const handleEdit = () => {
        if (validateForm()) {
            let editRemimber = []
            state.remimbers.map(remimber => editRemimber.push(remimber))
            let remimberIndex = editRemimber.findIndex((remimber => remimber.id === state.newRemimber.id))
            editRemimber[remimberIndex].id = state.newRemimber.id
            editRemimber[remimberIndex].title = state.newRemimber.title
            editRemimber[remimberIndex].description = state.newRemimber.description
            editRemimber[remimberIndex].date = state.newRemimber.date
            editRemimber[remimberIndex].time = state.newRemimber.time
            editRemimber[remimberIndex].color = state.newRemimber.color

            setState({   
                ...state,
                dialogRemimber: false,
                editRemimber: false,
                remimber: state.remimbers.map(remimber => {
                    if (remimber.id === state.newRemimber.id)
                    {
                        remimber.id = state.newRemimber.id
                        remimber.title = state.newRemimber.title
                        remimber.description = state.newRemimber.description
                        remimber.date = state.newRemimber.date
                        remimber.time = state.newRemimber.time
                        remimber.color = state.newRemimber.color
                    }
                    return remimber
                })
            })
        }
    }

    return (
        <Dialog
            open={state.dialogRemimber}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-new-remimber"
            id="dialog-new-remimber"
        >
            <DialogTitle>Add New Remimber</DialogTitle>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            id="textfield-title"
                            label="Title"
                            variant="outlined" 
                            value={state.newRemimber.title}
                            onChange={e => setState({ ...state, newRemimber: { ...state.newRemimber, title: e.target.value } })}
                            error={state.newRemimber.errorTitle}
                            helperText={state.newRemimber.errorTitleHelperText}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Description"
                            multiline
                            maxRows={5}
                            value={state.newRemimber.description}
                            onChange={e => setState({ ...state, newRemimber: { ...state.newRemimber, description: e.target.value } })}
                            error={state.newRemimber.errorDescription}
                            helperText={state.newRemimber.errorDescriptionHelperText}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={state.newRemimber.date}
                                inputFormat="dd/MM/yyyy"
                                onChange={(newValue) => {
                                    setState({ ...state, newRemimber: { ...state.newRemimber, date: newValue } })
                                }}
                                renderInput={(params) => <TextField 
                                    {...params}
                                    error={state.newRemimber.errorDate}
                                    helperText={state.newRemimber.errorDateHelperText} 
                                />}
                                
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                label="Time"
                                value={state.newRemimber.time}
                                ampm={false}
                                onChange={(newValue) => {
                                    setState({ ...state, newRemimber: { ...state.newRemimber, time: newValue } })
                                }}
                                renderInput={(params) => <TextField 
                                    {...params} 
                                    error={state.newRemimber.errorTime}
                                    helperText={state.newRemimber.errorTimeHelperText}
                                />}
                            />
                        </LocalizationProvider>       
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label className="label-switch-colors">Color</label>
                        <ToggleButtonGroup
                            value={state.newRemimber.color}
                            exclusive
                            onChange={e => setState({ ...state, newRemimber: { ...state.newRemimber, color: e.target.value } })}
                            className="color-switch"
                        >
                            <ToggleButton value="#c8e6c9" style={{ backgroundColor: '#c8e6c9' }} className={state.newRemimber.color === "#c8e6c9" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#f5dd29" style={{ backgroundColor: '#f5dd29' }} className={state.newRemimber.color === "#f5dd29" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#ffcc80" style={{ backgroundColor: '#ffcc80' }} className={state.newRemimber.color === "#ffcc80" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#ef9a9a" style={{ backgroundColor: '#ef9a9a' }} className={state.newRemimber.color === "#ef9a9a" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#cd8de5" style={{ backgroundColor: '#cd8de5' }} className={state.newRemimber.color === "#cd8de5" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#5ba4cf" style={{ backgroundColor: '#5ba4cf' }} className={state.newRemimber.color === "#5ba4cf" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#29cce5" style={{ backgroundColor: '#29cce5' }} className={state.newRemimber.color === "#29cce5" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#6deca9" style={{ backgroundColor: '#6deca9' }} className={state.newRemimber.color === "#6deca9" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#ff8ed4" style={{ backgroundColor: '#ff8ed4' }} className={state.newRemimber.color === "#ff8ed4" ? "selected" : ""}></ToggleButton>
                            <ToggleButton value="#bcaaa4" style={{ backgroundColor: '#bcaaa4' }} className={state.newRemimber.color === "#bcaaa4" ? "selected" : ""}></ToggleButton>
                        </ToggleButtonGroup>
                        {state.newRemimber.errorColor && (
                            <label className="error-helper-text">{state.newRemimber.errorColorHelperText}</label>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions className="actions-with-remove">
                <Button className="btn-remove" onClick={handleRemove} style={{ visibility: state.editRemimber ? 'visible' : 'hidden' }}>remove</Button>
                <div className="btn-actions">
                    <Button className="btn-cancel" onClick={handleClose}>cancel</Button>
                    <Button className="btn-submit" onClick={() => state.editRemimber ? handleEdit() : handleSubmit()}>save</Button>
                </div>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = (data, props) => ({
    state: data.state,
    props
})

const mapDispatchToProps = {
    setState
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRemimber)