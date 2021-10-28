import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Provider } from 'react-redux'
import { store } from '../../../store'
import { weeks, colors } from '../../../utils'

import Calendar from '../../../components/Calendar'

const mockForm = {
    title: "remimder 01",
    description: "remimder description",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().slice(0, -3),
    color: colors[0]
}

const ReduxProvider = ({ children }) => <Provider store={store}>{children}</Provider>

describe('Calendar', () => {
    const renderComponent = () => render(
        <ReduxProvider>
            <Calendar/>
        </ReduxProvider>
    )

    it ('should rendering of the weeks', () => {
        renderComponent()

        weeks.map(week => {
            expect(screen.queryByText(week)).toBeInTheDocument()
        })
    })

    it ('should open dialog add new remimder', () => {
        renderComponent()

        const buttonDialog = screen.getByTestId("btn-new-remiber")
        userEvent.click(buttonDialog)
    })

    it ('should render the form input elements', () => {
        renderComponent()

        expect(screen.getByTestId("textfield-title")).toBeInTheDocument()
        expect(screen.getByTestId("textfield-description")).toBeInTheDocument()
        expect(screen.getByTestId("datepicker-date")).toBeInTheDocument()
        expect(screen.getByTestId("datepicker-time")).toBeInTheDocument()
        colors.map(color => {
            expect(screen.getByTestId(color)).toBeInTheDocument()
        })
    })

    it ('should must send the form to create the reminder', () => {
        renderComponent()

        fireEvent.change(screen.getByTestId("textfield-title"), { target: { value: mockForm.title } })
        fireEvent.change(screen.getByTestId("textfield-description"), { target: { value: mockForm.description } })
        fireEvent.change(screen.getByTestId("datepicker-date"), { target: { value: mockForm.date } })
        fireEvent.change(screen.getByTestId("datepicker-time"), { target: { value: mockForm.time } })
        fireEvent.click(screen.getByTestId(mockForm.color))

        const buttonSubmit = screen.getByTestId("btn-submit")
        userEvent.click(buttonSubmit)
    })

    it ('should check if the reminder was created in the calendar', () => {
        renderComponent()

        expect(screen.getByText(mockForm.title))
    })
})