import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Editable } from '../components/Editable'

export default {
    title: 'MondayUI/Editable',
    component: Editable
} as Meta

const Template: Story = () => (
    <div style={{width: '100px'}}>
        <Editable text={'点击我可以编辑噢'} />
    </div>
)

export const Default = Template.bind({})