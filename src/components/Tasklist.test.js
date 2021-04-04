import React from 'react'
import ReactDOM from 'react-dom'

import '@testing-library/jest-dom/extend-expect'
import { WithPinnedTasks } from './Tasklist.stories';

it('render pinned tasks at the start of the list', () =>
{
    const div = document.createElement('div');
    // Story's args used with our test
    ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args}/>, div )
    
    // We expect the task titled "Task 6 (pinned) to be at the start of the task list"
    const lastTaskInput = document.querySelector('.list-item:nth-child(1)  input[value="Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null)
    
    ReactDOM.unmountComponentAtNode(div)
})