import styled from "styled-components";
export const StyleCard = styled.div`
    width: ${({width})=>width?width:'286'}px;
    height: ${({height})=>height?height:'330'}px;
    border-radius:${({borderradius})=>borderradius?borderradius:'5'}px ;
    background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:'#FFFFFF'};
  

`;