# What is FigoAutoComplete

AutoComplete Component that can be used when searching and displaying according to the key entered in a certain list is required.

# Installation

The package can be installed via npm:

`npm i figoautocomplete --save`

# Import

import Autocomplete from 'figoautocomplete'

# Props

onChange => Default onChange prop(necessary)

onSelect => It works when select item from dropdown(necessary)

items => Array(necessary)

inputProps => Default Props

value => Selected Value(necessary)



# Usage 

<Autocomplete
    inputProps= {{ className: form-control , placeholder: Some texts }}
    items={autoCompleteData}
    value={value}
    onSelect={(value, item) => {
         setValue(item.value);
         setValue(value);
    }}
    onChange={(event, value) => {
        onChangeMethod(value);
    }}
 />

