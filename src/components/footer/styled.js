import styled from "styled-components";

export const Styled = {
  Wrapper: styled.footer`
    background: #081220; border-top: 1px solid #23344a; color: #f7fbff;
  `,
  Main: styled.div`
    margin: 0 auto; max-width: 1240px; padding: 42px 5vw 20px;
  `,
  Brand: styled.div`
    align-items: center; display: flex; gap: 12px;
    img { background: #fff; border-radius: 10px; height: 40px; object-fit: contain; padding: 3px; width: 40px; }
    span { display: grid; gap: 4px; } small { color: #8da3ba; }
  `,
  LinkGroups: styled.div`
    border-bottom: 1px solid #23344a; display: flex; gap: 44px; margin-top: 28px; padding-bottom: 26px;
    p { color: #7e9ab7; font-size: .7rem; font-weight: 800; letter-spacing: .13em; margin: 0 0 11px; text-transform: uppercase; }
    span { display: flex; gap: 9px; }
    a { align-items: center; border: 1px solid #334a64; border-radius: 9px; color: #d9e7f4; display: inline-flex; height: 36px; justify-content: center; text-decoration: none; transition: border-color 180ms ease, box-shadow 180ms ease, color 180ms ease; width: 36px; }
    a:hover, a:focus-visible { border-color: #60c4ff; box-shadow: 0 0 0 3px rgba(96,196,255,.13); color: #60c4ff; }
  `,
  Bottom: styled.div`
    align-items: center; color: #8da3ba; display: flex; font-size: .82rem; justify-content: space-between; padding-top: 18px;
    a { color: #fff; font-weight: 800; text-decoration: none; }
    @media (max-width: 560px) { align-items: flex-start; flex-direction: column; gap: 8px; }
  `,
};
