type Repository = {
  getCounts: () => Promise<number[]>
  increment: (data: number) => Promise<number>
}

export type { Repository }
