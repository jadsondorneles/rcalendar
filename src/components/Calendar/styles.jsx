import styled from 'styled-components'

export const RCalendar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;
`

RCalendar.Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 40px);
`

RCalendar.Toolbar = styled.div``

RCalendar.Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px 0;

    .btn-new-remiber {
        background: var(--primary) !important;
        color: var(--white);
        padding: 10px 20px;
        text-transform: capitalize;
    }

    @media (max-width: 764px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 0;
    }
`

RCalendar.InformationControl = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 764px) {
        flex-direction: column;
        align-items: center;
    }
`

RCalendar.Title = styled.h1``

RCalendar.Control = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 20px;

    .btn-control {
        background: var(--white);
        min-width: 0;
        width: 32px;
        height: 32px;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border-radius: 100%;
        color: var(--black);
    }

    @media (max-width: 764px) {
        margin: 0;
    }
`

RCalendar.ControlSeparate = styled.div`
    background: var(--white);
    min-width: 0;
    width: 15px;
    height: 32px;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`

RCalendar.Box = styled.table`
    border-spacing: 20px;
    table-layout: fixed;
    width: 100%;
`

RCalendar.Month = styled.thead``

RCalendar.Row = styled.tr`
    height: 80px;
`

RCalendar.MonthHead = styled.th`
    text-align: left;
`

RCalendar.DayBody = styled.tbody``

RCalendar.Day = styled.td`
    border-top: 2px solid var(--primary);
    padding: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    vertical-align: top;
    display: table-cell;
    min-width: 160px;

    &.selected {
        border-color: var(--tertiary);
        background: var(--bg-lighting);
    }
`

RCalendar.DayContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`

RCalendar.DayValue = styled.span`
    font-size: 2rem;
    font-weight: 600;
`