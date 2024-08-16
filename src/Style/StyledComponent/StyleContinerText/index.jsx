import styled from "styled-components";
export const StyleContinerText = styled.div`
    width: ${({width})=>width?width:''}px;
    height: ${({height})=>height?height:''}px;
    color: ${({color})=>color?color:'#333333'} ;
`;