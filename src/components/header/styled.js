import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
  Wrapper: styled.header`
    align-items: center; background: rgba(8, 18, 32, 0.96); border-bottom: 1px solid #23344a;
    color: #f7fbff; display: flex; height: 78px; left: 0; padding: 0 5vw; position: fixed; right: 0; top: 0; z-index: 20;
  `,
  Main: styled.div`
    align-items: center; display: flex; gap: 24px; justify-content: space-between; margin: 0 auto; max-width: 1240px; width: 100%;
    .menu-button { background: transparent; border: 1px solid transparent; color: #f7fbff; cursor: pointer; display: none; font-size: 1.35rem; padding: 8px; }
    @media (max-width: 820px) { .menu-button { display: inline-flex; } }
  `,
  Brand: styled(NavLink)`
    align-items: center; color: #f7fbff; display: inline-flex; gap: 12px; text-decoration: none;
    img { background: #fff; border-radius: 10px; height: 42px; object-fit: contain; padding: 3px; width: 42px; }
    span { display: grid; gap: 2px; } small { color: #7e9ab7; font-size: .62rem; font-weight: 800; letter-spacing: .14em; } strong { font-size: .98rem; }
  `,
  Nav: styled.nav`
    align-items: center; display: flex; gap: 22px; margin-left: auto;
    a { align-items: center; color: #b9c9da; display: inline-flex; font-size: .9rem; font-weight: 700; gap: 7px; text-decoration: none; transition: color 180ms ease, text-shadow 180ms ease; }
    a:hover, a:focus-visible { color: #fff; text-shadow: 0 2px 12px rgba(94,196,255,.35); }
    @media (max-width: 820px) {
      background: #0d1b2e; border: 1px solid #2a405b; border-radius: 12px; box-shadow: 0 16px 34px rgba(0,0,0,.25);
      display: none; flex-direction: column; gap: 0; padding: 8px; position: absolute; right: 20px; top: 68px; width: min(260px, calc(100vw - 40px));
      &.open { display: flex; } a { border-radius: 8px; padding: 12px; width: 100%; } a:hover, a:focus-visible { background: #142942; }
    }
  `,
  DateTime: styled.div`
    border-left: 1px solid #2a405b; color: #8fa5bd; display: grid; font-family: Consolas, monospace; font-size: .7rem; gap: 3px; padding-left: 22px; text-align: right;
    strong { color: #e8f1f9; font-size: .78rem; }
    @media (max-width: 820px) { display: none; }
  `,
};
