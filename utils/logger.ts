import pino from "pino";

export const getLogger = (name: string) => {
  return pino({
    level: process.env.NODE_ENV === "production" ? "debug" : "debug",
    name,
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
    levelVal: 10,
  })
}
