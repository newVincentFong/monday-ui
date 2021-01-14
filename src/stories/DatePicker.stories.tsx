import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { DatePicker } from '../components/DatePicker'

export default {
    title: 'MondayUI/DatePicker',
    component: DatePicker
} as Meta

const Template: Story = () => (
    <div>
        <DatePicker />
    </div>
)

export const Default = Template.bind({})