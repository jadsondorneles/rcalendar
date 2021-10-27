import { connect } from "react-redux"
import { setState } from "../../actions"
import { RCalendar } from "../Calendar/styles"
import Remimber from "../Remimber"
import { v4 as uuid } from 'uuid'

const Day = ({ state, day }) => {
    const isSelected =
        state.today.getDate() === day.date &&
        state.today.getMonth() === state.currentMonth &&
        state.today.getFullYear() === state.currentYear

    const dayIn = new Date(state.currentYear, state.currentMonth, day.date).toLocaleDateString()

    let remimbers = state.remimbers.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    })

    return (
        <RCalendar.Day
            id="RCalendar_Day"
            className={isSelected ? "selected" : ""}
        >
            <RCalendar.DayContent id="RCalendar_DayContent">
                <RCalendar.DayValue id="RCalendar_DayValue">{day.date}</RCalendar.DayValue>
                {state.remimbers.length > 0 && (
                    remimbers.map((dateIn, index) => {
                        const dateInFormat = new Date(dateIn.date)
                        if (dateInFormat.toLocaleDateString() === dayIn)
                        {   
                            if (index <= 3)
                            {
                                return <Remimber key={uuid()} data={dateIn} moreButton={false} />
                            }
                            else if (index === 4)
                            {
                                return <Remimber key={uuid()} data={dateIn} moreButton={true} />
                            }
                        }
                    })
                )}
            </RCalendar.DayContent>
        </RCalendar.Day>
    )
}

const mapStateToProps = (data, props) => ({
    state: data.state,
    props
})

const mapDispatchToProps = {
    setState
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)