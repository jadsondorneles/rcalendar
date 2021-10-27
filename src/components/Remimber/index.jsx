import { connect } from "react-redux"
import { setState } from "../../actions"

import Button from "@mui/material/Button"
import { Rb } from './styles'

const Remimber = ({ state, setState, data, moreButton }) => {
    const handleEdit = () => {
        setState({
            ...state,
            dialogRemimber: true,
            dialogAllRemimbers: false,
            editRemimber: true,
            newRemimber: {
                id: data.id,
                title: data.title,
                errorTitle: false,
                errorTitleHelperText: '',
                description: data.description,
                errorDescription: false,
                errorDescriptionHelperText: '',
                date: new Date(data.date),
                errorDate: false,
                errorDateHelperText: '',
                time: new Date(data.time),
                errorTime: false,
                errorTimeHelperText: '',
                color: data.color,
                errorColor: false,
                errorColorHelperText: '',        
            }
        })
    }

    const handleAllRemimbers = () => {
        setState({
            ...state, 
            dialogRemimber: false,
            dialogAllRemimbers: true,
            currentDateSelected: data.date
        })
    }
    
    return (
        moreButton
        ?
            <Rb.ListItem id="Rb_ListItem">
                <Button className="btn-remimber-item btn-remimber-more" onClick={() => handleAllRemimbers()}>
                    <Rb.Title id="Remimber_Title">+3 more</Rb.Title>    
                </Button>
            </Rb.ListItem>
        :
            <Rb.ListItem id="Rb_ListItem">
                <Button className="btn-remimber-item" onClick={() => handleEdit()} style={{ backgroundColor: data.color }}>
                    <Rb.Time id="Remimber_Time">{new Date(data.time).toLocaleTimeString().slice(0, -3)}</Rb.Time> - <Rb.Title id="Remimber_Title">{data.title}</Rb.Title>    
                </Button>
            </Rb.ListItem>
    )
    
}

const mapStateToProps = (data, props) => ({
    state: data.state,
    props
})

const mapDispatchToProps = {
    setState
}

export default connect(mapStateToProps, mapDispatchToProps)(Remimber)