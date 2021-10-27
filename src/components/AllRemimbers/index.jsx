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
import Remimber from '../Remimber'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const AllRemimbers = ({ state, setState }) => {
    const handleClose = () => {
        setState({ ...state, 
            dialogAllRemimbers: false 
        })
    }

    let remimbers = state.remimbers.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    })

    return (
        <Dialog
            open={state.dialogAllRemimbers}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-all-remimbers"
            id="dialog-all-remimbers"
        >
            <DialogTitle>All Remimbers</DialogTitle>
            <DialogContent>
                <RCalendar.DayContent id="RCalendar_DayContent">
                    {state.remimbers.length > 0 && (
                        remimbers.map((dateIn, index) => {
                            const dateInFormat = new Date(dateIn.date)
                            const dateSelected = new Date(state.currentDateSelected)
                            if (dateInFormat.toLocaleDateString() === dateSelected.toLocaleDateString())
                            {   
                                return <Remimber key={uuid()} data={dateIn} moreButton={false} />
                            }
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

export default connect(mapStateToProps, mapDispatchToProps)(AllRemimbers)