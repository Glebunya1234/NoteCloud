export const styleDatePicker = {
    datePicker: {
        '& .MuiPickersModal-dialogRoot': {
            zIndex: 20000,
        },
        "& .MuiOutlinedInput-input": {
            color: "#8a8f9a",
        },
        "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: "0",
            },
            "&:hover fieldset": {
                borderWidth: 0,
            },
            "&.Mui-focused fieldset": {
                transition: "all 90ms cubic-bezier(0.4, 0, 0.2, 1)",
                borderWidth: "2px",
                borderRadius: "12px",
                margin: "-0.01px",
                marginX: "-4.2px",
                borderColor: "rgb(62 64 67)",
            },
            "& .MuiOutlinedInput-root.Mui-error": {
                transition: "all 90ms cubic-bezier(0.4, 0, 0.2, 1)",
                borderWidth: "2px",
                borderRadius: "12px",
                margin: "-0.01px",
                marginX: "-4.2px",
                borderColor: "#ec6e6e",
            },

            "&:active fieldset": {
                borderWidth: 0,
            },
        },

    },
};