import React, { CSSProperties } from 'react'
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

const TODAY_STYLE: CSSProperties = {
    border: '2px solid #0085ff',
    color: '#0085ff',
    borderRadius: '50% !important'
}
const SELECTED_STYLE: CSSProperties = {
    color: '#fffff',
    background: '#0085ff'
}

export const DatePicker = () => {
    return (
        <div className={`${PREFIX}-component`}>
            <DayPickerInput
                dayPickerProps={{
                    modifiersStyles: {
                        today: TODAY_STYLE,
                        selected: SELECTED_STYLE
                    }
                }}
                formatDate={formatDate}
                placeholder={formatDate(new Date())} />
        </div>
    )
}