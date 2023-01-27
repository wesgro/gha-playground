#!/usr/bin/env npx tsx
import backstopjs from 'backstopjs'
import {config as localConfig} from "./configs/local"

type BackstopParam = Parameters<typeof backstopjs>[0]
type CliInputs = [BackstopParam, string];


const init = async (inputs: CliInputs) => {
    console.log('argv:', inputs)
    const [command, ...flags] = inputs
    await backstopjs(command, {docker: true, config: {...localConfig}})
}

(async ()=>init(process.argv.slice(2) as CliInputs))()