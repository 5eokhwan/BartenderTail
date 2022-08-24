import styled from "styled-components";

export const S = {
    Wrapper: styled.div`
        margin-bottom: 10px;
        width: 100%;
        height: 2.5em;
        display: flex;
        overflow: hidden;
    `,
    Select: styled.select`
        width: 20%;
        min-width: 6em;
        height: 100%;
        font-size: 0.75rem;
        border: 1px solid #fff;
        color: black;
    `,
    Option: styled.option`
        color: black;
    `,
    InputText: styled.input`
        font-size: 1.25rem;
        width: 70%;
        height: 100%;
        border: 1px solid #fff;
        color: black;
    `,
    Button: styled.button`
        width: 10%;
        font-size: 0.75rem;
        min-width: 4em;
        height: 100%;
        border: 1px solid #fff;
        color: black;
    `
}