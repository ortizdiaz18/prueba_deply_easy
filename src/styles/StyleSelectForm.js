export const selectStyle = {
    control:(styles) => ({
        ...styles,
        minHeight:'5px !important',
        height:'auto',
        width:'100%',
        fontSize:'10px',
        borderRadius: '10px'
     
    }),
    options:(styles, { data, isDisabled, isFocused, isSelected }) =>({
        ...styles,
        minHeight:'5px',
        height:'5px !important',
        color: 'white',
        width:'100%'
    }),
    multiValue: (styles) => {
        return {
          ...styles,
          minHeight:'5px',
          height:'10px',
          backgroundColor: 'white',
          margin:'0px',
          alignItems:'center',
          width:'auto'
        };
      },

    input:(styles) =>({
        ...styles,
        minHeight:'5px',
        height:'19px',
        coloR:'black',
        margin: '0px',
        width:'auto'
    }),
    placeholder:(styles) =>({
        ...styles,
        color: 'black',
        textAlign:'left !important'
    }),
    valueContainer:(styles) => ({
        ...styles,
        minHeight: '5px',
        height:'auto',
        padding:'0px 8px',
        width:'100%'
        
    }),
   
    indicatorsContainer:(styles) =>({
        ...styles,
        minHeight:'5px',
        height:'100%',
    }),
    container:(styles)=>({
        ...styles,
        width:'100%',
        height:'100%'
    })

    // multiValue:(styles)
  }  