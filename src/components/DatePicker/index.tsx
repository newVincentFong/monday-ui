import React from 'react'
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

export const DatePicker = () => {
    return (
        <div className={`${PREFIX}-component`}>
            <DayPickerInput
                formatDate={formatDate}
                placeholder={formatDate(new Date())} />
        </div>
    )
}