// @flow
import * as React from 'react';
import Box from '../Box/Box';
import Label from '../Label/Label';
import Text from '../Text/Text';
import Checkbox from './Checkbox';
import {
  ns,
  card,
  md,
  PropTable,
  Example,
  Combination,
} from '../../.corkboard/cards';

ns(
  'Checkbox',
  'We recommending using a Checkbox over a Switch when you have a long list (>3) of toggles.'
);

card(
  <PropTable
    props={[
      {
        name: 'checked',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'id',
        type: 'string',
        required: true,
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        defaultValue: false,
        description: `Indeterminism is
purely presentational - the value of
a checkbox and it's indeterminism are independent.`,
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'onChange',
        type: `({ event: SyntheticInputEvent<>, checked: boolean }) => void`,
        required: true,
      },
      {
        name: 'size',
        type: `"sm" | "md"`,
        defaultValue: 'md',
        description: `"sm" is 16px & "md" is 24px`,
      },
    ]}
  />,
  { heading: false }
);

card(
  'Example: Accessibility',
  md`
    You should provide accessible labels in order to make your checkboxes usable. If you use \`padding\` instead of \`margin\` around your labels, the clickable area will be larger.
  `,
  <Example
    defaultCode={`
class CheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
    this.handleChecked = this._handleChecked.bind(this);
  }
  _handleChecked({ checked }) {
    this.setState({ checked });
  }
  render() {
    return (
      <Box
        alignItems="center"
        direction="row"
        display="flex"
      >
        <Checkbox
          checked={this.state.checked}
          id="usa"
          name="usa"
          onChange={this.handleChecked}
        />
        <Label htmlFor="usa">
          <Box paddingX={2}>
            <Text>United States of America</Text>
          </Box>
        </Label>
      </Box>
    );
  }
}
`}
    scope={{ Box, Checkbox, Label, Text }}
  />,
  { stacked: true }
);

card(
  'Example: Labeled stack',
  md`
    If you have lots of checkboxes you can stack them on top of one another.
  `,
  <Example
    defaultCode={`
class CheckboxExample extends React.Component {
  render() {
    const CheckboxWithLabel = ({ id, label }) => (
      <Box
        alignItems="center"
        direction="row"
        display="flex"
      >
        <Checkbox
          checked
          id={id}
          onChange={() => {}}
        />
        <Label htmlFor={id}>
          <Box paddingX={2}>
            <Text>{label}</Text>
          </Box>
        </Label>
      </Box>
    );

  	return (
  		<Box display="flex" direction="column" justifyContent="around" marginTop={-1} marginBottom={-1}>
  			<Box paddingY={1}>
          <CheckboxWithLabel label="Email" id="email" />
  			</Box>
  			<Box paddingY={1}>
  				<CheckboxWithLabel label="Mobile push" id="push" />
  			</Box>
  			<Box paddingY={1}>
          <CheckboxWithLabel label="Carrier pidgeon" id="pidgeon" />
        </Box>
  		</Box>
  	);
  }
}
`}
    scope={{ Box, Checkbox, Label, Text }}
  />,
  { stacked: true }
);

card(
  <Combination
    checked={[false, true]}
    disabled={[false, true]}
    indeterminate={[false, true]}
    size={['sm', 'md']}
  >
    {(props, i) => (
      <Checkbox id={`example-${i}`} onChange={() => {}} {...props} />
    )}
  </Combination>,
  { heading: false }
);
