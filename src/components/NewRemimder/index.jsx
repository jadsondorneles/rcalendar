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
        setState({ ...state, dialogRemimder: false })
    }

    const handleRemove = () => {
        setState({
            ...state,
            dialogRemimder: false,
            editRemimder: false,
            remimders: state.remimders.filter((remimder) => remimder.id !== state.newRemimder.id)
        })
    }

    const handleSubmit = () => {
        if (validateForm(state, setState))
        {
            setState({
                ...state,
                dialogRemimder: false,
                newRemimder: {
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
                        title: state.newRemimder.title,
                        description: state.newRemimder.description,
                        date: state.newRemimder.date,
                        time: state.newRemimder.time,
                        color: state.newRemimder.color
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
                dialogRemimder: false,
                editRemimder: false,
                remimder: state.remimders.map(remimder => {
                    if (remimder.id === state.newRemimder.id)
                    {
                        remimder.id = state.newRemimder.id
                        remimder.title = state.newRemimder.title
                        remimder.description = state.newRemimder.description
                        remimder.date = state.newRemimder.date
                        remimder.time = state.newRemimder.time
                        remimder.color = state.newRemimder.color
                    }
                    return remimder
                })
            })
        }
    }

    return (
        <Dialog
            open={state.dialogRemimder}
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
                            value={state.newRemimder.title}
                            onChange={e => setState({ ...state, newRemimder: { ...state.newRemimder, title: e.target.value } })}
                            error={state.newRemimder.errorTitle}
                            helperText={state.newRemimder.errorTitleHelperText}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Description"
                            multiline
                            maxRows={5}
                            value={state.newRemimder.description}
                            onChange={e => setState({ ...state, newRemimder: { ...state.newRemimder, description: e.target.value } })}
                            error={state.newRemimder.errorDescription}
                            helperText={state.newRemimder.errorDescriptionHelperText}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={state.newRemimder.date}
                                inputFormat="dd/MM/yyyy"
                                onChange={(newValue) => {
                                    setState({ ...state, newRemimder: { ...state.newRemimder, date: newValue } })
                                }}
                                renderInput={(params) => <TextField 
                                    {...params}
                                    error={state.newRemimder.errorDate}
                                    helperText={state.newRemimder.errorDateHelperText} 
                                />}
                                
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                label="Time"
                                value={state.newRemimder.time}
                                ampm={false}
                                onChange={(newValue) => {
                                    setState({ ...state, newRemimder: { ...state.newRemimder, time: newValue } })
                                }}
                                renderInput={(params) => <TextField 
                                    {...params} 
                                    error={state.newRemimder.errorTime}
                                    helperText={state.newRemimder.errorTimeHelperText}
                                />}
                            />
                        </LocalizationProvider>       
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label className="label-switch-colors">Color</label>
                        <ToggleButtonGroup
                            value={state.newRemimder.color}
                            exclusive
                            onChange={e => setState({ ...state, newRemimder: { ...state.newRemimder, color: e.target.value } })}
                            className="color-switch"
                        >
                            {colors.map(color => (
                                <ToggleButton
                                    key={uuid()}
                                    value={color}
                                    style={{ backgroundColor: color }}
                                    className={state.newRemimder.color === color ? "selected" : ""}
                                />
                            ))}
                        </ToggleButtonGroup>
                        {state.newRemimder.errorColor && (
                            <label className="error-helper-text">{state.newRemimder.errorColorHelperText}</label>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions className="actions-with-remove">
                <Button className="btn-remove" onClick={handleRemove} style={{ visibility: state.editRemimder ? 'visible' : 'hidden' }}>remove</Button>
                <div className="btn-actions">
                    <Button className="btn-cancel" onClick={handleClose}>cancel</Button>
                    <Button className="btn-submit" onClick={() => state.editRemimder ? handleEdit() : handleSubmit()}>save</Button>
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