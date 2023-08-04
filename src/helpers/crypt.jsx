import CryptoJS from "crypto-js";

const HASH = import.meta.env.VITE_HASH;

export const Encrypt = (string) => {
  return encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(string), HASH).toString()
  );
};

export const Decrypt = (cryptString) => {
  try {
    const bytes = CryptoJS.AES.decrypt(decodeURIComponent(cryptString), HASH);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedString);
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};