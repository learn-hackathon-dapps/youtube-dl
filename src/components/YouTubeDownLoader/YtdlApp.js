import { useState } from 'react'
import YtdlMainMenu from './YtdlMainMenu'

const YtdlApp = () => {
  const [disableButton, setDisableButton] = useState(true);
  return (
    <YtdlMainMenu
      disableButton={disableButton}
      setDisableButton={setDisableButton}
    />
  )
}

export default YtdlApp