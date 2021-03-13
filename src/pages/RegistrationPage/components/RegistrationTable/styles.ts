import styled from 'styled-components'

export const TableContainer = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: ${props => props.theme.radius}px;
  margin-top: 15px;
  padding: 15px; 
 

  .table-header {
    font-size: 16px;
    color: ${props => props.theme.gray};
    text-align: left;
    background-color: ${props => props.theme.background};    
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .name {
    width: 45%;
  }
  .action {
    width: 10%;
  }

  tbody {    
    display: block;   
    overflow-y: scroll;
    max-height: 400px;  
        
    tr {
      display:table;
      width: 100%;
      table-layout:fixed;
      background-color: ${props => props.theme.accent};
      height: 35px;            
      td {                  
        color: ${props => props.theme.gray};
        padding: 5px 8px;                    
      }      
      &:nth-child(even) {
        background-color: ${props => props.theme.background};
      }
    }
  }
`

export const Options = styled.div`
filter: grayscale(1) opacity(0.5);
  cursor: pointer;  
  &:hover {    
    filter: none; 
  }

  &.active {   
    filter: none;
  }
`

export const TableFooterSection = styled.div`
  color: ${props => props.theme.gray};
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 5px 8px 5px 8px;
  margin-top: 5px;
  border-top: 1px solid rgba(144,144,144, 0.2);

  .infos {
  
  }

  .table-buttons {
    margin-top: 10px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));

  }

`