export const selectStyle = {
    control:(styles) => ({
        ...styles,
        minHeight:'5px !important',
        height:'19px',
        width:'173px',
        fontSize:'10px'
     
    }),
    options:(styles, { data, isDisabled, isFocused, isSelected }) =>({
        ...styles,
        minHeight:'5px',
        height:'5px !important',
        color: 'white'
    }),
    multiValue: (styles) => {
        return {
          ...styles,
          minHeight:'5px',
          height:'10px',
          backgroundColor: 'white',
          margin:'0px',
          alignItems:'center'
          
        };
      },

    input:(styles) =>({
        ...styles,
        minHeight:'5px',
        height:'19px',
        coloR:'black',
        margin: '0px'
    }),
    placeholder:(styles) =>({
        ...styles,
        color: 'black',
        textAlign:'left !important'
    }),
    valueContainer:(styles) => ({
        ...styles,
        minHeight: '5px',
        height:'19px',
        padding:'0px 8px'
        
    }),
   
    indicatorsContainer:(styles) =>({
        ...styles,
        minHeight:'5px',
        height:'19px'
    })

    // multiValue:(styles)
  }  