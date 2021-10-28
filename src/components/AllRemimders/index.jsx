import { forwardRef } from 'react'

import { connect } from "react-redux"
import { setState } from "../../actions"

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { v4 as uuid } from 'uuid'
import { RCalendar } from "../Calendar/styles"
import Remimder from '../Remimder'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const AllRemimders = ({ state, setState }) => {
    const handleClose = () => {
        setState({ ...state, 
            dialogAllRemimders: false 
        })
    }

    let remimders = state.remimders.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    })

    return (
        <Dialog
            open={state.dialogAllRemimders}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-all-remimders"
            id="dialog-all-remimders"
        >
            <DialogTitle>All Remimders</DialogTitle>
            <DialogContent>
                <RCalendar.DayContent id="RCalendar_DayContent">
                    {state.remimders.length > 0 && (
                        remimders.map((dateIn, index) => {
                            const dateInFormat = new Date(dateIn.date)
                            const dateSelected = new Date(state.currentDateSelected)
                            if (dateInFormat.toLocaleDateString() === dateSelected.toLocaleDateString())
                            {   
                                return <Remimder key={uuid()} data={dateIn} moreButton={false} />
                            }
                            return null
                        })
                    )}
                </RCalendar.DayContent>
            </DialogContent>
            <DialogActions>
                <Button className="btn-cancel" onClick={handleClose}>close</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllRemimders)