import React, { useEffect, useState } from "react"
import { Console, Hook, Unhook } from "console-feed"

type LogsContainerProps = {}

const LogsContainer = (props: LogsContainerProps): JSX.Element => {
  const [logs, setLogs] = useState([])

  // run once!
  useEffect(() => {
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )
    return () => {
      //@ts-ignore
      Unhook(window.console)
    }
  }, [])

  return <Console logs={logs} variant="dark" />
}

export { LogsContainer }
