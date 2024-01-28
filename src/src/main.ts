import { AppBuilder } from "./app/builder";

async function run() {
  const builder = new AppBuilder();
  const app = await builder.build();
  await app.run();
}

run();
