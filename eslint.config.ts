import { createConfigForNuxt } from "@nuxt/eslint-config/flat"
import * as fs from "fs"

const eslintRC = JSON.parse(fs.readFileSync(".eslintrc").toString())

export default createConfigForNuxt({
  features: {
    tooling: false,
    typescript: true
  }
})
  .prepend()
  .overrideRules(eslintRC.rules)
