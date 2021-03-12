import styled from 'styled-components'

export const CustomButtom = styled.button`
    cursor: pointer;      
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;  
    padding: 7px 15px;    
    outline: none;
    box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    .--loader-wrapper {
        margin-right: 5px;
    }
    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: none;
    }

    &.block {
       width: 100%;
       display:flex;
       align-items:center;
       justify-content:center;
    }

    &.primary {
        background: ${props => props.theme.primary};
        border: 1px solid ${props => props.theme.primary};
        color: ${props => props.theme.accent};
    }
    
    &.secondary {
        background: ${props => props.theme.background};
        border: 1px solid ${props => props.theme.primary};
        color: ${props => props.theme.primary};
    }

`;