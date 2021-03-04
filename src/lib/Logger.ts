import 'colors'

export default class Logger {

  constructor(private tag: string) { }

  protected format(message: any) {
    const date = new Date()
    return `[${date.toLocaleString()}]: ${this.tag}: ${String(message).white}`
  }

  public success(message: any) {
    console.log(this.format(message).green)
  }

  public status(message: any) {
    console.log(this.format(message).blue)
  }

  public warn(message: any) {
    console.log(this.format(message).yellow)
  }

  public error(message: any) {
    console.log(this.format(message).red)
  }

}