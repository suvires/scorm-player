const Button = ({children, disabled, ...restProps}) => {
	return (    
			<button disabled={disabled} {...restProps}>				
				{children}
			</button>
	);	
};

export default Button;