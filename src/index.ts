import { ThirdEntity } from "./entities/thirdentity";
import { SomeOtherEntity } from "./entities/someotherentity";
import { SomeEntity } from "./entities/someentity";
import { createConnection } from "typeorm";

async function doTheThings() {
  const te = new ThirdEntity();
  await te.save();
  console.log('ThirdEntity saved', te.id);

  const soe = new SomeOtherEntity();
  await soe.save();
  console.log('SomeOtherEntity saved', soe.id);

  const se = new SomeEntity();
  se.otherEntity = soe;
  se.thirdEntity = te;
  await se.save();
  console.log('SomeEntity saved', se.id);

  console.log('SomeEntity:');
  console.log(se);

  console.log('Run query for: ', { otherEntityId: soe.id + 1, thirdEntityId: te.id + 1 });
  const result = await SomeEntity.findOne({ otherEntityId: soe.id + 1, thirdEntityId: te.id + 1 });
  console.log('Result:');
  console.log(result);
}

console.log('Starting...');
createConnection()
.then(() => doTheThings())
.then(() => {
  console.log('Finished!')
});

console.log('Running...');