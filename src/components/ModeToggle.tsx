import styled, { css, keyframes } from "styled-components";

const moveLeft = keyframes`
    0% {
        margin-right: -25%;
    }
    100% {
        margin-right: 100%;
    }
`;

const moveDown = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100%);
    }
`;

const moveUp = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const rotateZ = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const M = {
    Wrapper: styled.div<{height: number, isLight: boolean}>`
        width: ${({height}) => height * 2}px;
        height: ${({height}) => height}px;
        border-radius: ${({height}) => height / 2}px;
        background: ${({isLight}) => isLight ? '#1cb7ff' : '#22005c'};
        position: relative;
        transition: 0.5s;
        overflow: hidden;
    `,
    Sun: styled.div<{isLight:boolean}>`
        padding: 7.5%;
        width: 50%;
        position: absolute;
        height: 100%;
        border-radius: 50%;
        background: #eaff00;
        background-clip: content-box;
        animation: ${({isLight}) =>!isLight ? css`${moveDown} 0.5s ease-out forwards` : css`${moveUp} 0.5s ease-out forwards`};
    `,
    clude: styled.div<{isLight:boolean, height: number, top?: number, speed?: number}>`    
        width: ${({height}) => height / 2}px;
        height: ${({height}) => height / 5}px;
        border-radius: ${({height}) => height / 2}px;
        transition: 0.5;
        background: white;
        position: absolute;
        top: ${({top}) =>top ? top : 0}px;
        right: 0;
        opacity: ${({isLight}) =>isLight ? 0.5 : 0};
        animation: ${moveLeft} ${({speed}) =>speed ? speed : 5}s infinite linear;
    `,
    Moon: styled.div<{isLight:boolean}>`
        right: 0;
        padding: 7.5%;
        width: 50%;
        height: 100%;
        border-radius: 50%;
        background: #edebd3;
        background-clip: content-box;
        position: absolute;
        animation: ${({isLight}) =>isLight ? css`${moveDown} 0.5s ease-out forwards` : css`${moveUp} 0.5s ease-out forwards`};
        &::after {
            content: '';
            position: absolute;
            width: 55%;
            height: 55%;
            border-radius: 50%;
            transition: background 0.5s;
            background: ${({isLight}) => isLight ? '#1cb7ff' : '#22005c'};
        }
    `,
    StarContainer: styled.div<{isLight:boolean}>`
        position: absolute;
        width: 100%;
        height: 1px;
        top: 50%;
        left: -50%;
        z-index: 1;
        animation: ${rotateZ} 10s infinite linear;
        transform-origin: top right;

    `,
    Star: styled.div<{top?: number, left?: number}>`
        position: absolute;
        top: ${({ top }) =>top ? top : 0}px;
        left: ${({ left }) =>left ? left : 0}px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #edebd3;
    `
}

interface IModeToggle {
    isLight: boolean;
    onToggle: () => void;
    height: number;
}

const ModeToggle : React.FC<IModeToggle> = ({isLight, onToggle, height}) => {
    return (
    <M.Wrapper height={height} onClick={onToggle} isLight={isLight}>
        <>
            <M.clude isLight={isLight} height={height}/>
            <M.clude isLight={isLight} height={height} top={height / 5} speed={4}/>
            <M.clude isLight={isLight} height={height} top={height / 2} speed={7}/>
            <M.clude isLight={isLight} height={height} top={height / 1.25} speed={6}/>
            <M.Sun isLight={isLight}/>
        </>
        <>
            <M.Moon isLight={isLight}>
                <M.StarContainer isLight={isLight}>
                    <M.Star top={-15} left={-5}/>
                    <M.Star />
                    <M.Star top={5} left={8}/>
                    <M.Star top={20} left={-10}/>
                    <M.Star top={35} left={55}/>
                    <M.Star top={-10} left={70}/>
                    <M.Star top={-3} left={65}/>
                </M.StarContainer>
            </M.Moon>
        </>
    </M.Wrapper>)
}

export default ModeToggle;