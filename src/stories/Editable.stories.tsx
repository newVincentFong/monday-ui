import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Editable } from '../components/Editable'

export default {
    title: 'MondayUI/Editable',
    component: Editable
} as Meta

const Template: Story = () => <Editable />

export const Default = Template.bind({})