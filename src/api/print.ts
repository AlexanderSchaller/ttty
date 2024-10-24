import { create } from '../helpers/dom'
import { TerminalSettings } from '../types'

// Prints a new line in the terminal
const print = (
  content: string,
  isCommand: boolean,
  // @ts-ignore
  scrollIntoView: boolean,
  commandContainer: HTMLElement,
  // @ts-ignore
  input: HTMLElement,
  settings: TerminalSettings
) => {
  const line = create('p', undefined, isCommand ? settings.prompt : content)
  if (isCommand) {
    const cmd = create('span', 'terminal-command', content)
    line.append(cmd)
  }
  commandContainer.append(line)
}

export default print
