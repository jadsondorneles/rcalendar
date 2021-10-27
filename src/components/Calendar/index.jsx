import { connect } from "react-redux"
import { setState } from "../../actions"

import { RCalendar } from './styles'
import { ReactComponent as LeftIcon } from '../../assets/img/left.svg'
import { ReactComponent as RightIcon } from '../../assets/img/right.svg'
import { ReactComponent as DotIcon } from '../../assets/img/dot.svg'
import { v4 as uuid } from 'uuid'
import { Button } from "@mui/material"
import Day from "../Day"
import NewRemimder from "../NewRemimder"
import AllRemimders from '../../components/AllRemimders'

const Calendar = ({ state, setState }) => {
    const handleOpenDialogNewRemimber = () => {
        setState({ 
            ...state,
            dialogRemimber: true,
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
            }
        })
    }

    const nextMonth = () => {
        if (state.currentMonth === 11) {
            setState({ 
                ...state,
                currentMonth: 0,
                currentYear: state.currentYear + 1 
            })
        } 
        else {
            setState({ 
                ...state,
                currentMonth: state.currentMonth + 1 
            })
        }
    }

    const prevMonth = () => {
        if (state.currentMonth === 0) {
            setState({ 
                ...state,
                currentMonth: 11,
                currentYear: state.currentYear - 1 
            })
        }
        else {
            setState({ 
                ...state,
                currentMonth: state.currentMonth - 1 
            })
        }
    }
    
    const daysOfTheMonth = (year, month) => {
        const firstDay = new Date(year, month).getDay()
        const days = 32 - new Date(year, month, 32).getDate()
    
        let date = 1
        let daysInMonth = []
        let weekNum = days => {
            return Math.ceil((days + firstDay) / 7)
        }
    
        for (let i = 0; i < weekNum(days); i++) {
            let week = []
            let day = {
                date: ""
            }
            
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week.push(day)
                } else if (date > days) {
                    week.push(day)
                } else {
                    week.push({ ...day, date })
                    date++
                }
            }

            daysInMonth.push(week)
        }
        return daysInMonth
    }

    const days = daysOfTheMonth(state.currentYear, state.currentMonth)
    const displayMonth = state.months[state.currentMonth]

    return (
        <>
            <NewRemimder />
            <AllRemimders />

            <RCalendar id="Calendar">
                <RCalendar.Content id="RCalendar_Content">

                    <RCalendar.Toolbar id="RCalendar_Toolbar">
                        <RCalendar.Info id="RCalendar_Info">
                            <RCalendar.InformationControl id="RCalendar_InformationControl">
                                <RCalendar.Title id="RCalendar_Title">{displayMonth} {state.currentYear}</RCalendar.Title>
                                <RCalendar.Control id="RCalendar_Control">
                                    <Button className="btn-control" onClick={prevMonth}><LeftIcon/></Button>
                                    <RCalendar.ControlSeparate id="RCalendar_ControlSeparate"><DotIcon/></RCalendar.ControlSeparate>
                                    <Button className="btn-control" onClick={nextMonth}><RightIcon/></Button>
                                    <Button className="btn-today" onClick={() => {
                                        setState({ 
                                            ...state, 
                                            currentMonth: new Date().getMonth(),
                                            currentYear: new Date().getFullYear()
                                        })
                                    }}>Today</Button>
                                </RCalendar.Control>
                            </RCalendar.InformationControl>
                            <Button
                                className="btn-new-remiber"
                                onClick={handleOpenDialogNewRemimber}>
                                    Add Remimder
                            </Button>
                        </RCalendar.Info>
                    </RCalendar.Toolbar>

                    <RCalendar.Box id="RCalendar_Box">
                        <RCalendar.Month id="RCalendar_Month">
                            <RCalendar.Row id="RCalendar_Row">
                                {state.weeks.map((title) => (
                                    <RCalendar.MonthHead id="RCalendar_MonthHead" key={uuid()}>{title}</RCalendar.MonthHead>
                                ))}
                            </RCalendar.Row>
                        </RCalendar.Month>
                        <RCalendar.DayBody id="RCalendar_DayBody">
                            {days.map(week => (
                                <RCalendar.Row id="RCalendar_Row" key={uuid()}>
                                    {week.map(day => (
                                        <Day key={uuid()} day={day}/>
                                    ))}
                                </RCalendar.Row>
                            ))}
                        </RCalendar.DayBody>
                    </RCalendar.Box>

                </RCalendar.Content>
            </RCalendar>
        </>
    )
}

const mapStateToProps = (data, props) => ({
    state: data.state,
    props
})

const mapDispatchToProps = {
    setState
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)