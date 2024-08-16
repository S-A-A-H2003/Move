import styled from "styled-components";
export const StyleButton = styled.button`
    width: ${({width})=>width?width:'212'}px;
    height: ${({height})=>height?height:'66'}px;
    color: ${({color})=>color?color:"#FFFFFF"};
    background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:"#377DFF"};
    border-radius:${({ borderradius})=> borderradius? borderradius:'5'}px;
    border: none;
    &:hover{
    transform: scale(1.1);
    transition: 0.5s ease-out;
        
    }
    

`;

