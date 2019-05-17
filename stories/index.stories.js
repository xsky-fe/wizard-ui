import React from 'react';
import NAVIGATIONS from './navigations';
import Components from './index';
import { storiesOf } from '@storybook/react';

const getDefaultExport = mod => (mod && mod.__esModule ? mod.default : mod);

NAVIGATIONS.map(key => {
  const componentTitle = key.title;
  key.contents.map(com => {
    const stories = storiesOf(`${componentTitle}|${com.title}`, module);
    Object.keys(com.contents).map(item => {
      const storyConfig = Components[com.component][item];
      stories
        .add(
          com.contents[item],
          (props) => {
            const title = props && props.kind.split('|')[1];
            return (
              <div className="story-content">
                <h2>{title}</h2>
                {React.createElement(getDefaultExport(storyConfig.example), props)}
              </div>
            )
          }
        )
    }
    )
  })
});