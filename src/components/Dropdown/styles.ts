import styled from 'styled-components'

export const DropdownContainer = styled.div`
    position: relative;       
`;

export const DropdownButtonWrapper = styled.div`
    outline:none; 
`;

export const DropdownList = styled.div`
    background: #242A33;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;    
    position: absolute;
    top: 100%;    
    margin-top: 5px;
    min-width: 200px; 

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }
   
    li {
        list-style: none;
        padding:10px;
        color: ${props => props.theme.gray};
        &:first-child{
            margin-top: 5px;
        }
        &:last-child{
            margin-bottom: 5px;
        }
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.primary};
        }
    }
`;
