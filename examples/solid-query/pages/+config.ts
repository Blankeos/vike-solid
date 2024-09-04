import vikeSolid from "vike-solid/config";
import vikeSolidQuery from "vike-solid-query/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
export default {
  title: "My Vike + Solid App", // <title>

  passToClient: ["routeParams"],
  stream: true,
  injectScriptsAt: "STREAM",
  extends: [vikeSolid, vikeSolidQuery],
} satisfies Config;