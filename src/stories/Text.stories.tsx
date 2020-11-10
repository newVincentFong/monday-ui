import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Text } from '../components/Text'

export default {
    title: 'MondayUI/Text',
    component: Text
} as Meta

const Template: Story = () => (
    <div>
        <Text>This is a Text component.</Text>
    </div>
)

export const Default = Template.bind({})