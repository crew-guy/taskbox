import React from 'react'
import { PureInboxScreen } from './InboxScreen'
import { Provider } from 'react-redux'
import * as TasklistStories from './Tasklist.stories'
import {action} from '@storybook/addon-actions'

const store = {
    getState: () =>
    {
        return {
            tasks : TasklistStories.Default.args.tasks
        }
    },
    subscribe: () => 0,
    dispatch:action('dispatch')
}

export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>  ]
}


const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({})
Error.args = {
    error:'Something'
}

