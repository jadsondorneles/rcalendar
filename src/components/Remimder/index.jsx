import { connect } from "react-redux"
import { setState } from "../../actions"

import Button from "@mui/material/Button"
import { Rb } from './styles'

const Remimder = ({ state, setState, data, moreButton }) => {
    const handleEdit = () => {
        setState({
            ...state,
            dialogRemimder: true,
            dialogAllRemimders: false,
            editRemimder: true,
            newRemimder: {
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

    const handleAllRemimders = () => {
        setState({
            ...state, 
            dialogRemimder: false,
            dialogAllRemimders: true,
            currentDateSelected: data.date
        })
    }
    
    return (
        moreButton
        ?
            <Rb.ListItem id="Rb_ListItem">
                <Button className="btn-remimder-item btn-remimder-more" onClick={() => handleAllRemimders()}>
                    <Rb.Title id="Remimber_Title">+3 more</Rb.Title>    
                </Button>
            </Rb.ListItem>
        :
            <Rb.ListItem id="Rb_ListItem">
                <Button className="btn-remimder-item" onClick={() => handleEdit()} style={{ backgroundColor: data.color }}>
                    <Rb.Time
                        id="Remimber_Time"
                        data-testid={new Date(data.time).toLocaleTimeString().slice(0, -3)}
                    >
                        {new Date(data.time).toLocaleTimeString().slice(0, -3)}
                    </Rb.Time>
                    -
                    <Rb.Title
                        id="Remimber_Title"
                        data-testid={data.title}
                    >
                        {data.title}
                    </Rb.Title>    
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

export default connect(mapStateToProps, mapDispatchToProps)(Remimder)