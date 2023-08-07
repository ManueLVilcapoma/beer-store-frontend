const Button=(props)=>{
    const{label="Valor por defecto",disabled=false}=props
    return (
        <button  disabled={disabled} className='bg-primary px-5 py-2 text-white ${disabled?opacity-25:}'>
           
            {label}
        </button>
    )
}

export default Button