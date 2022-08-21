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
        height: 100%;
        font-size: 1rem;
        border: 1px solid #fff;
        color: black;
    `,
    Option: styled.option`
    `,
    InputText: styled.input`
        font-size: 1.5rem;
        width: 70%;
        height: 100%;
        border: 1px solid #fff;
        color: black;
    `,
    Button: styled.button`
        width: 10%;
        height: 100%;
        border: 1px solid #fff;
        color: black;

    `
}