export function createLogger(env) {
  const write = (level, msg, extra) => {
    const line = {
      level,
      msg,
      time: new Date().toISOString(),
      ...extra,
    };
    if (env === "production") {
      console.log(JSON.stringify(line));
    } else {
      console.log(`${level.toUpperCase()} ${msg}`, extra ?? "");
    }
  };

  return {
    info: (msg, extra) => write("info", msg, extra),
    error: (msg, extra) => write("error", msg, extra),
  };
}
