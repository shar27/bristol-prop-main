import styled from "styled-components";

export const BaseProvider = styled.span`
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: calc(1 / 0.75);
    border-radius: 0.25rem;
    background-color: #999;
    display: none;
`

export const ProviderTrustPilot = styled(BaseProvider)`
    display: unset;
    color: #00B67A;
    background-color: color-mix(in oklab, #00B67A 10%, transparent);
`

export const ProviderGoogle = styled(BaseProvider)`
    display: unset;
    color: #4285F4;
    background-color: color-mix(in oklab, #4285F4 10%, transparent);
`