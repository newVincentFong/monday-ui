import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { GroupHeader } from '../components/GroupHeader'
import { Pulse } from '../components/Pulse'

export default {
    title: 'MondayUI/Table',
    component: GroupHeader
} as Meta

const columns = [
    {title: "Owner"},
    {title: "Priority" },
    {title: "Status"},
]

const NAME_COLUMN_WIDTH = 100

const Template: Story = () => (
    <div style={{height: '40px', maxWidth: '500px'}}>
        <div className="group-header-wrapper">
            <GroupHeader nameColumn={{style: {color: 'rgb(3, 127, 76)', flexBasis: NAME_COLUMN_WIDTH}, name: 'Phase1'}} columns={columns} />
        </div>
        <div className="pulse-component-wrapper">
            <Pulse
                nameCell={{style: {flexBasis: NAME_COLUMN_WIDTH}, name: 'Task1'}}></Pulse>
        </div>
    </div>
)

export const Default = Template.bind({})