#!/usr/bin/env -S npx -y ts-node --swc
import backstopjs from 'backstopjs'
import {CALLING_DIR} from './utils'
import { parseArgs } from 'zod-args'
import { z } from 'zod'
type BackstopParam = Parameters<typeof backstopjs>[0]

const args = parseArgs({
    command: z.string(),
    filter: z.string().optional(),
    docker: z.boolean().optional().default(false),
    config: z.string(),
})

type CliInputs = typeof args;
const init = async (inputs: CliInputs) => {
    const {command, docker, filter, config:configImport} = inputs
    const config = await import(`${CALLING_DIR}/${configImport}`)
    await backstopjs(command as BackstopParam, { docker, filter, config: config.default})
}

 ;(async () => init(args))()
