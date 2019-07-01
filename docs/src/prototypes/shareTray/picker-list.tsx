import * as React from 'react'

import * as data from './dataMocks'
import ListPicker from './GridFilePicker/ListPicker'

export const PickerList = ({
  containerRole,
  itemRole,
  containerRoleDescription,
  itemRoleDescription,
  horizontal,
  wrapperRole,
  positions,
}) => (
  <ListPicker
    items={data.getItemsData(
      data.picker.slice(0, 5),
      '',
      'star',
      itemRole,
      itemRoleDescription,
      wrapperRole,
      positions,
    )}
    title="List Picker"
    role={containerRole}
    roleDescription={containerRoleDescription}
    orientation={horizontal ? 'horizontal' : undefined}
    image={true}
  />
)
