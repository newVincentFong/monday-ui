import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { GroupHeader } from '../components/GroupHeader'

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
        <GroupHeader nameColumn={{style: {color: 'rgb(3, 127, 76)', flexBasis: 100}, name: 'Phase1'}} columns={columns} />
    </div>
)

export const Default = Template.bind({})