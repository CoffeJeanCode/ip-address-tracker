import React, { Suspense, useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { getIpInfo } from "../../services/ip.service";
import { isDomain, isIpAddress } from "../../utils/regex.utils";
import styles from "./header.module.css";

export const IPInfoAtom = atom({
  key: "Ip Info",
  default: null,
});

const Header = () => {
  const [ipSearch, setIpSearch] = useState("");
  const [ipInfo, setIpInfo] = useRecoilState(IPInfoAtom);

  useEffect(() => {
    (async () => {
      setIpInfo(await getIpInfo({ ip: "" }));
    })();
  }, []);

  const handleSearchIP = async (evt) => {
    evt.preventDefault();

    if (!ipSearch) return;

    let ipInfoResponse = null;

    ipInfoResponse = isIpAddress(ipSearch)
      ? await getIpInfo({
          ip: ipSearch,
        })
      : isDomain(ipSearch)
      ? (ipInfoResponse = await getIpInfo({
          domain: ipSearch,
        }))
      : null;

    if (ipInfoResponse["code"]) return;

    setIpInfo(ipInfoResponse);
  };

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>IP Address Tracker</h1>
        <form className={styles.inputContainer} onSubmit={handleSearchIP}>
          <input
            className={styles.input}
            placeholder="Search for any IP address or domain"
            type="text"
            onChange={(evt) => setIpSearch(evt.target.value)}
            value={ipSearch}
          />
          <button className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="m2 1 6 6-6 6"
              />
            </svg>
          </button>
        </form>
        {ipInfo && (
          <div className={styles.ipInfoContainer}>
            <div>
              <span className={styles.ipInfoTitle}>ip addres</span>
              <span className={styles.ipInfoContent}>{ipInfo.ip}</span>
            </div>
            <div>
              <span className={styles.ipInfoTitle}>location</span>
              <span className={styles.ipInfoContent}>
                {ipInfo.location.city}, {ipInfo.location.country}{" "}
                {ipInfo.location.postalCode}
              </span>
            </div>
            <div>
              <span className={styles.ipInfoTitle}>timezone</span>
              <span className={styles.ipInfoContent}>
                UTC {ipInfo.location.timezone}
              </span>
            </div>
            <div>
              <span className={styles.ipInfoTitle}>isp</span>
              <span className={styles.ipInfoContent}>
                {ipInfo.sip ? ipInfo.sip : "Not Found"}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
