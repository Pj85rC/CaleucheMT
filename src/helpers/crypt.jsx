import CryptoJS from "crypto-js";

const HASH = import.meta.env.VITE_HASH;

export const Encrypt = (string) => {
  return encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(string), HASH).toString()
  );
};

export const Decrypt = (cryptString) => {
  const bytes = CryptoJS.AES.decrypt(decodeURIComponent(cryptString), HASH);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};