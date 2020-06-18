import styled from 'styled-components';
import { SplitPane, SplitPaneProps } from '../src/components/SplitPane';
import { storiesOf } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

configureActions({
  depth: 5,
  limit: 5,
});
const Button = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1000px;
  background: grey;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: white;
  border: 1px silver solid;
`;

storiesOf('Initial States', module)
  .add('With collapsed Panes', () => {
    const verticalCollapseDirection = select(
      'Vertical Direction',
      { left: 'left', right: 'right' },
      'left'
    );
    const shouldCollapse = boolean('Collapsable?', true);
    const verticalCollapseOptions = shouldCollapse
      ? {
          beforeToggleButton: <Button>{verticalCollapseDirection === 'left' ? '⬅' : '➡'}</Button>,
          afterToggleButton: <Button>{verticalCollapseDirection === 'left' ? '➡' : '⬅'}</Button>,
          collapsedSize: 40,
          collapseDirection: verticalCollapseDirection,
        }
      : undefined;
    const VerticalSplitPane = (props: Omit<SplitPaneProps, 'split'>) => (
      <SplitPane split={'vertical'} collapseOptions={verticalCollapseOptions} {...props}>
        {props.children}
      </SplitPane>
    );

    return (
      <VerticalSplitPane collapsedSizes={[140, 500, null]}>
        <div>This is a div</div>
        <div>This is a second div</div>
        <div>This is a third div</div>
        <VerticalSplitPane collapsedSizes={[]}>
          <div>one</div>
          <div>two</div>
        </VerticalSplitPane>
      </VerticalSplitPane>
    );
  })
  .addDecorator(withKnobs);