import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { GroupHeader } from '../components/GroupHeader'
import { Editable } from '../components/Editable'

export default {
    title: 'MondayUI/GroupHeader',
    component: GroupHeader
} as Meta

const columns = [
    {title: "Owner"},
    {title: "Priority" },
    {title: "Status"},
]

const Template: Story = () => (
    <div  style={{height: '40px'}}>
        <GroupHeader columns={columns} />
    </div>
)

export const Default = Template.bind({})