import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Dialog } from '../components/Dialog'

export default {
    title: 'MondayUI/Dialog',
    component: Dialog
} as Meta

const Template: Story = () => (
    <div>
        <Dialog>
            <button>Click me</button>
        </Dialog>
    </div>
)

export const Popover = Template.bind({})