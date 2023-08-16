#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .action(() => {
    console.log("Hallo!");
})
    .description("Say hallo");
program.parse(process.argv);
