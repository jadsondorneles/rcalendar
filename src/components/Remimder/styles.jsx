import styled from 'styled-components'

export const Rb = styled.div`
    margin: 0 !important;
    list-style-type: none;
    width: 100%;
`

Rb.ListItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .btn-remimder-item {
        width: 100%;
        text-transform: capitalize;
        align-items: flex-start;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding: 5px 10px;
        transition: all ease .35s;
        min-width: 0;
        font-size: 11px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .btn-remimder-item.btn-remimder-more {
        background: var(--blue);
    }
`

Rb.Time = styled.span`
    color: var(--primary);
    font-weight: 400;
    padding-right: 3px;
`

Rb.Title = styled.span`
    width: 100%;
    text-align: left;
    font-weight: 700;
    color: var(--primary);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 3px;
`