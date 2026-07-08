// myplanningportal customer portal -- shared config for all portal pages.
//
// Fill this in with your deployed backend Worker URL once you have it from
// Cloudflare (Workers & Pages -> myplanningportal-api -> the URL shown at
// the top of that page). It looks like:
//   https://myplanningportal-api.<your-subdomain>.workers.dev
//
// Swap this to your custom API domain later without touching any other file.
const API_BASE_URL = "https://myplanningportal-api.ryan-95c.workers.dev";

// Square's Application ID and Location ID -- these two are meant to be
// public/client-side (they identify your business to Square, they don't
// authorize charges on their own). Find both in the Square Developer
// Dashboard -- Sandbox tab for testing, Production tab once you go live.
// Never put your Square ACCESS TOKEN here -- that one's a secret and only
// ever lives on the myplanningportal-api Worker, never in this file.
const SQUARE_APPLICATION_ID = "sandbox-sq0idb-YOUR-SANDBOX-APPLICATION-ID";
const SQUARE_LOCATION_ID = "YOUR-SANDBOX-LOCATION-ID";
