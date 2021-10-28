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
import { colors } from '../../utils'
import { validateForm } from './utils'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const NewRemimder = ({ state, setState }) => {
    
    const handleClose = () => {
        setState({ ...state, dialogRemimber: false })
    }

    const handleRemove = () => {
        setState({
            ...state,
            dialogRemimber: false,
            editRemimber: false,
            remimders: state.remimders.filter((remimder) => remimder.id !== state.newRemimber.id)
        })
    }

    const handleSubmit = () => {
        if (validateForm(state, setState))
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
                remimders: [
                    ...state.remimders,
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
        if (validateForm(state, setState)) 
        {
            setState({   
                ...state,
                dialogRemimber: false,
                editRemimber: false,
                remimder: state.remimders.map(remimder => {
                    if (remimder.id === state.newRemimber.id)
                    {
                        remimder.id = state.newRemimber.id
                        remimder.title = state.newRemimber.title
                        remimder.description = state.newRemimber.description
                        remimder.date = state.newRemimber.date
                        remimder.time = state.newRemimber.time
                        remimder.color = state.newRemimber.color
                    }
                    return remimder
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
            aria-describedby="alert-dialog-slide-new-remimder"
            id="dialog-new-remimder"
        >
            <DialogTitle>Add New Remimder</DialogTitle>
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
                            {colors.map(color => (
                                <ToggleButton
                                    key={uuid()}
                                    value={color}
                                    style={{ backgroundColor: color }}
                                    className={state.newRemimber.color === color ? "selected" : ""}
                                />
                            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewRemimder)