const baseUrl = `https://geo.ipify.org/api/v1?apiKey=${
  import.meta.env.VITE_API_KEY
}`;

export const getIpInfo = async ({ ip, domain }) =>
  await (
    await fetch(
      `${baseUrl}&${ip ? `ipAddress=${ip}` : domain ? `domain=${domain}` : ""}`
    )
  ).json();
