export const testingDelayRequest = (callback: any, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, ms);
  })
}