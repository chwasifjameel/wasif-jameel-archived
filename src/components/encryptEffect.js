import * as React from "react"

import { useDencrypt } from "use-dencrypt-effect"

const Encrypt = ({ values }) => {
  const { result, dencrypt } = useDencrypt()

  React.useEffect(() => {
    console.log("values", values)
    let i = 0

    const action = setInterval(() => {
      dencrypt(values[i])

      i = i === values.length - 1 ? 0 : i + 1
    }, 2000)

    return () => clearInterval(action)
  }, [])

  return result
}

export default Encrypt
