import React from 'react';
import { CustomButtom } from './styles'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

interface CustomButtonProps {
    variant?: "primary" | "secondary";
    loading?: boolean;
    type?: "button" | "submit" | "reset";
    block?: boolean;
    onClick?(): React.MouseEventHandler<HTMLButtonElement> | void;
}

const Button: React.FC<CustomButtonProps> = ({ children, variant, loading, type, block, onClick }) => {
    return (
        <CustomButtom type={type} className={`${variant} ${block ? 'block' : undefined}`} onClick={onClick} >
            {loading && (
            <div className='--loader-wrapper'>
                <Loader                
                type="ThreeDots"
                color={variant === "primary" ? '#242A33' : '#FCBA11'}
                height={10}
                width={30}                
            />    
            </div>
            )}
            {children}
        </CustomButtom>
    )
}

export default Button