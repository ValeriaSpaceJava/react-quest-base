
const Button = (props) => {
    const alerta = () => {
        alert(`A label desse botão é: ${props.label}`)
       
    }
    
    return (
        <button className='btn' onClick={alerta}>{props.label}</button>
        
        
        
            
        
    )       

}

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button