import styled from "styled-components";
export const Continer = styled.div`
    min-width: ${({width})=>width?width+'px':'100%'};
    ${({height})=>height?'height:'+height+'px':'min-height:100vh'};
    background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
    border: ${({border})=>border?border:''};
    border-radius: ${({borderradius})=>borderradius?borderradius:''}px;
`;