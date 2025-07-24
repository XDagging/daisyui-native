#!/usr/bin/env node

import { execa } from "execa";
import ora from "ora";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const spinner = ora("Cloning daisyui-native repo...").start();

  const projectName = process.argv[2] || "daisyui-native-app";

  try {
    await execa("git", [
      "clone",
      "https://github.com/XDagging/daisyui-native.git",
      projectName,
    ]);
    spinner.succeed("Cloned repo!");

    process.chdir(projectName);

    spinner.start("Installing dependencies...");
    await execa("npm", ["install"]);
    spinner.succeed("Dependencies installed!");


    console.log("\n" + chalk.green("✅ Success!"));
    console.log(chalk.bold(`\nWelcome to daisyui-native! 🎉`));
    console.log(`\nNext steps:\n`);
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan(`  npm start`));
    console.log(`\nHappy building!\n`);

    // spinner.start("Starting project...");
    // const subprocess = execa("npm", ["start"], { stdio: "inherit" });
    // await subprocess;
  } catch (err) {
    spinner.fail("Something went wrong.");
    console.error(chalk.red(err.message));
    process.exit(1);
  }
}

run();
