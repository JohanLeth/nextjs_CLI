#!/usr/bin/env node

import fs from "fs";
import { Command } from "commander";

const program = new Command();

program
    .action(() => {
        console.log("Hallo!");
    })
    .description("Say hallo");

program.parse(process.argv);
