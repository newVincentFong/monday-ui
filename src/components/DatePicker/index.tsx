import React, { CSSProperties, useState } from 'react'
import './index.less'
import { CSS_PREFIX } from '../@util/constants'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import dayjs from 'dayjs'

const COMPONENT_NAME = '-date-picker'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

function formatDate(date: Date) {
    return dayjs(date).format('MMM D, YYYY')
}

const SELECTED_STYLE: CSSProperties = {
    color: '#fffff',
    background: '#0085ff'
}

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div className={`${PREFIX}-component`}>
            <DayPickerInput
                dayPickerProps={{
                    selectedDays: selectedDate,
                    modifiersStyles: {
                        selected: SELECTED_STYLE
                    }
                }}
                onDayChange={(date) => {
                    setSelectedDate(date)
                }}
                formatDate={formatDate}
                placeholder={formatDate(new Date())} />
        </div>
    )
}