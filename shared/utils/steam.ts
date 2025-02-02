import { Constants } from "../constants";

export const steamLogin = async () => {
  window.location.href = `https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.return_to=${Constants.currentHost}&openid.realm=${Constants.currentHost}&openid.mode=checkid_setup`;
};

export const saveSteamUser = (query: any) => {
  localStorage.setItem("@steamUser", JSON.stringify(query));
};
