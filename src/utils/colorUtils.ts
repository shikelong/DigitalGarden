import _ from "lodash"

const TailwindColorWeight = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const TailwindColorWithNoWeight = ["black", "white"]

const TailwindColors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
]

function generateColor(): string {
  return (
    TailwindColors[_.random(0, TailwindColors.length - 1)] +
    "-" +
    TailwindColorWeight[_.random(0, TailwindColorWeight.length - 1)]
  )
}

function generateColorGradientClass(): string {
  const fromColor = generateColor()
  let toColor = generateColor()

  while (fromColor === toColor) {
    toColor = generateColor()
  }

  return `from-${fromColor} to-${toColor}`
}

export { generateColor, generateColorGradientClass }
