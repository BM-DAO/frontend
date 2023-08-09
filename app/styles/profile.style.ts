import { styled } from "styled-components";
import theme from "./theme";
const { colors, breakpoints } = theme;

export const Wrapper = styled.div`
    display: flex;
    column-gap: 20px;
    padding: 20px 0;
    ${breakpoints.lg} {
        flex-direction: column-reverse;
        row-gap: 20px;
    }
`;
export const Form = styled.form`
    width: calc(100% - 330px);
    max-width: 600px;
    background: ${colors.cardBg};
    padding: 30px 25px;
    border-radius: 10px;
    h3 {
        margin-bottom: 25px;
        font-weight: 600;
        font-size: 16px;
    }
    ${breakpoints.lg} {
        width: 100%;
        background: transparent;
    }
`;
export const UserSection = styled.div`
    position: relative;
    width: 310px;
    ${breakpoints.lg} {
        width: 100%;
    }
`;
export const UserWrap = styled.div`
    background: ${colors.cardBg};
    padding: 19px 15px;
    width: 100%;
    border-radius: 10px;
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    button {
        width: 100%;
        border-radius: 10px;
        padding: 12px 0;
        background: ${colors.primaryColor};
        outline: none;
        border: none;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    }
    ${breakpoints.lg} {
        background: transparent;
        padding: 0;
    }
`;
export const UserCard = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
    ${breakpoints.lg} {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        row-gap: 10px;
    }
`;
export const UserImage = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    overflow: hidden;
    border-radius: 50%;
`;
export const UserDetails = styled.div`
    h3 {
        font-size: 18px;
        font-weight: 600;
    }
    p {
        font-size: 15px;
    }
`;
export const RoleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 20px 0;
    ${breakpoints.lg} {
        justify-content: center;
    }
`;
export const RoleCapsule = styled.span`
    display: inline-block;
    padding: 7px 10px;
    border-radius: 99px;
    background: ${colors.primaryColor}16;
    color: ${colors.primaryColor};
    font-size: 14px;
`;
export const InputFlex = styled.div`
    display: flex;
    column-gap: 10px;
    ${breakpoints.lg} {
        flex-direction: column;
    }
`;
