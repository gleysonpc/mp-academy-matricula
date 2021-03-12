import styled from 'styled-components';

export const customStyles = {
    overlay: {
        backgroundColor: 'rgba(33, 36, 41, 0.74)',
        backdropFilter: 'blur(2px)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        background: '#242A33',
        boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.25)',
        borderRadius: '6px',
        border: 'none'
    },
};

export const ModalContent = styled.div` 
    padding: 7px 15px 15px 15px;    
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
        font-size: 22px;
        color: ${props => props.theme.gray}
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
        filter: grayscale(1) opacity(0.5);
        transition: filter 0.3s ease-in-out;
        &:hover {
            filter: none; 
        }
        &.active {
            filter: none;
        }
        img {
            height: 35px;
            width: 35px;
        }
    }
`;